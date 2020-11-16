module SourceCodeProperties::util

import IO;
import List;
import String;

import lang::java::m3::Core;
import lang::java::m3::AST;
import lang::java::jdt::m3::Core;
import lang::java::jdt::m3::AST;

list[str] cleanCodeLines(list[str] codeLines) {
	/*
	 * 1) Filter blank lines
	 *    /^\s*$/ => metacharacter to find all whitespace characters
	 *    see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Character_Classes
	 */
	list[str] linesWithoutBlankLines = [line | line <- codeLines, /^\s*$/ !:= line];
	
	
	/*
	 * 2) Filter comments
	 *    Trim line and check if the line starts either with:
	 *    - "//"
	 *    - "/*"
	 *	  - "*"
	 *    - "* /" (without space)
	 */
	list[str] sloc = [line | line <- linesWithoutBlankLines, /^(\/\/)|(\/\*)|(\*)|(\*\/)/ !:= trim(line)];
	
	
	//for (line <- sloc) {println(line);}		// DEBUG


	return sloc;
}
list[str] removeLeadingWhitespace(list[str] codeLines) {
	//return [line | line <- codeLines, /^(\/\/)|(\/\*)|(\*)|(\*\/)/ !:= trim(line)];;
	//return [line | line <- cleanCodeLines(codeLines), /^\s*$/ !:= line];
	list[str] res = [];
	for (line <- codeLines) {
	res+=[line[findFirst(line, trim(line))..]];
	//println(line[findFirst(line, trim(line))..]);
		//res += [line[findFirst(trim(line))..]];
	//
	}
	
	//list[str] p = [line | line <- codeLines, line[findFirst(trim(line))..]];
	return res;
	//return [line | line <- codeLines, /^(\/\/)|(\/\*)|(\*)|(\*\/)/ !:= trim(line)];
}


tuple[list[loc], list[loc], list[Declaration]] collectModulesAndAST(loc project) {
	M3 model = createM3FromEclipseProject(project);
	
	list[Declaration] asts = [];
	list[loc] moduleLocs = [];
	list[loc] methodLocs = [];
	
	for (m <- model.declarations) {
		
		//println(m);		// DEBUG
		
		if (m[0].scheme == "java+compilationUnit") {
			moduleLocs += m[0];
			asts += createAstFromFile(m[0], true);
		} else if (m[0].scheme == "java+method" || m[0].scheme == "java+constructor" || entity.scheme == "java+initializer") {
			methodLocs += m[0];
		}
	}
	
	return <moduleLocs, methodLocs, asts>;
}

str averageRating(list[str] ranks) {
	int sumRanks = 0;
	int avgRank = 0;
	str avgStar = "";
	
	// convert 'stars' to int
	for (rank <- ranks) {
		switch(rank) {
			case "++":	sumRanks += 5;  
			case "+":	sumRanks += 4;   
			case "o":	sumRanks += 3;   
			case "-":	sumRanks += 2;  
			case "--":	sumRanks += 1; 
		}
	}
	
	// calc avg
	avgRank = sumRanks / size(ranks);
	
	// convert int to 'stars'
	switch(avgRank) {
		case 5:	avgStar = "++";  
		case 4:	avgStar = "+";   
		case 3:	avgStar = "o";   
		case 2:	avgStar = "-";  
		case 1:	avgStar = "--"; 
	}
	
	return avgStar;
}

// tuple[str maintainability, str analysability, str changeability, str testability]
tuple[str, str, str, str] calcMaintainability(tuple[str volume, str cc, str duplication, str unitSize] props) {
	tuple[str maintainability, str analysability, str changeability, str testability] ranking = <"", "", "", "">;
	
	ranking.analysability = averageRating([props.volume, props.duplication, props.unitSize]);
	ranking.changeability = averageRating([props.cc, props.duplication]);
	ranking.testability   = averageRating([props.cc, props.unitSize]);
	
	ranking.maintainability = averageRating([ranking.analysability, ranking.changeability, ranking.testability]);
	
	return ranking;
}