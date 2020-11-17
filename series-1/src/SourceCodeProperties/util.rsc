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
	
	
	return sloc;
}


test bool cleanCodeLinesEmptyLinesTest() {
	return size(cleanCodeLines([])) == 0;
}
test bool cleanCodeLinesEmptyLinesTest2() {
	return size(cleanCodeLines(["  "])) == 0;
}
test bool cleanCodeLinesNormalTest() {
	return size(cleanCodeLines(["  int a = 1;"])) == 1;
}
test bool cleanCodeLinesNormalWithSpacesTest() {
	return size(cleanCodeLines(["  int a = 1;", "  "])) == 1;
}
test bool cleanCodeLinesNormalWithEmptyLineTest() {
	return size(cleanCodeLines(["  int a = 1;", ""])) == 1;
}
test bool cleanCodeLinesNormalTest2() {
	return size(cleanCodeLines(["  int a = 1;", "int b= 2;"])) == 2;
}
test bool cleanCodeLinesCommentsTest2() {
	return size(cleanCodeLines(["  int a = 1;", "//int b= 2;"])) == 1;
}
test bool cleanCodeLinesCommentsTest3() {
	return size(cleanCodeLines(["  int a = 1;", "/*int b= 2;*/"])) == 1;
}
test bool cleanCodeLinesCommentsTest4() {
	return size(cleanCodeLines(["  int a = 1;", "/*heh */int b= 2;"])) == 1;
}
test bool cleanCodeLinesCommentsTest5() {
	return size(cleanCodeLines(["  int a = 1;", "/*heh * /int b= 2;"])) == 1;
}
test bool cleanCodeLinesCommentsTest6() {
	return size(cleanCodeLines(["  /*int a = 1;", "heh * /int b= 2;"])) == 0;
}
test bool cleanCodeLinesCommentsTest7() {
	return size(cleanCodeLines(["  /*int a = 1;", "heh */int b= 2;"])) == 0;
}
test bool cleanCodeLinesCommentsTest8() {
	return size(cleanCodeLines(["  /*int a = 1;", "heh// */int b= 2;"])) == 0;
}
test bool cleanCodeLinesCommentsTest9() {
	return size(cleanCodeLines(["  int a = 1;", "int b= 2;//aa"])) == 2;
}


list[str] removeLeadingWhitespace(list[str] codeLines) {
	list[str] res = [];
	for (line <- codeLines) {
		res += [line[findFirst(line, trim(line))..]];
	}

	return res;
}
test bool removeLeadingWhitespaceTest1() {
	return size(removeLeadingWhitespace(["  int a = 1;", "int b= 2;//aa"])) == 2;
}
test bool removeLeadingWhitespaceTest2() {
	return removeLeadingWhitespace(["  int a = 1;", "int b= 2;//aa"])[0] == "int a = 1;";
}
test bool removeLeadingWhitespaceTest3() {
	return removeLeadingWhitespace(["  int a = 1;", "int b= 2;//aa"])[1] == "int b= 2;//aa";
}
test bool removeLeadingWhitespaceTest4() {
	return size(removeLeadingWhitespace(["", "    "])) == 2;
}
test bool removeLeadingWhitespaceTest5() {
	return removeLeadingWhitespace(["  int a = 1;", "int b= 2;   "])[1] == "int b= 2;   ";
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
		} else if (m[0].scheme == "java+method" || m[0].scheme == "java+constructor" || m[0].scheme == "java+initializer") {
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

/*
 *	Based on:
 *	SIG Evaluation Criteria Trusted Product Maintainability Version 11.0
 *	https://www.softwareimprovementgroup.com/wp-content/uploads/2019/11/20190919-SIG-TUViT-Evaluation-Criteria-Trusted-Product-Maintainability.pdf
 *	
 *	and
 *
 * 	Heitlager et. al (2007)
 *	http://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.120.4996&rep=rep1&type=pdf
 *
 *					| Vol. | CC | Dupl. | UnitSize | Interfacing |
 *	===================================================================
 *	analysability	|  x   |    |   x   |     x    |             |
 *	changeability	|      | x  |   x   |          |             |
 *	testability		|      | x  |       |     x    |             | 
 *	reusability		|      |    |       |     x    |      x      |
 *
 *
 *	maintainability = AVERAGE(analysability, changeability, testability, reusability)
 *
 *
 *  @return tuple[str maintainability, str analysability, str changeability, str testability, str reusability]
 */
tuple[str, str, str, str, str] calcMaintainability(tuple[str volume, str cc, str duplication, str unitSize, str interfacing] props) {
	tuple[str maintainability, str analysability, str changeability, str testability, str reusability] ranking = <"", "", "", "", "">;
	
	ranking.analysability = averageRating([props.volume, props.duplication, props.unitSize]);
	ranking.changeability = averageRating([props.cc, props.duplication]);
	ranking.testability   = averageRating([props.cc, props.unitSize]);
	ranking.reusability	  = averageRating([props.unitSize, props.interfacing]);
	
	ranking.maintainability = averageRating([ranking.analysability, ranking.changeability, ranking.testability, ranking.reusability]);
	
	return ranking;
}