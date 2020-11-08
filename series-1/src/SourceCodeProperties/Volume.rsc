module SourceCodeProperties::Volume

// *********************************************
// According to Heitlager et al. 2007
// 
// The overall volume of the source code 
// influences the analysability of the system.
//
// - 1) Lines of Code (LOC): 
//		Counts all lines of source code that are NOT comment or blank line
// - 2) Man years via backfiring function points
//		how many LOC are a function point (FP)
//		how many FP per month a programmer can produce (MY)
// - 3) Other volume measures
// *********************************************

import IO;
import Set;
import List;
import Map;
import String;

import lang::java::m3::Core;
import lang::java::m3::AST;
import lang::java::jdt::m3::Core;
import lang::java::jdt::m3::AST;



private list[str] cleanCompilationUnit(list[str] compilationUnitLines) {
	/*
	 * 1) Filter blank lines
	 *    /^\s*$/ => metacharacter to find all whitespace characters
	 *    see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Character_Classes
	 */
	list[str] fileWithoutBlankLines = [line | line <- compilationUnitLines, /^\s*$/ !:= line];
	
	
	/*
	 * 2) Filter comments
	 *    Trim line and check if the line starts either with:
	 *    - "//"
	 *    - "/*"
	 *	  - "*"
	 *    - "* /" (without space)
	 */
	list[str] fileSLOC = [line | line <- fileWithoutBlankLines, /^(\/\/)|(\/\*)|(\*)|(\*\/)/ !:= trim(line)];
	
	
	//for (line <- fileSLOC) {println(line);}		// DEBUG


	return fileSLOC;
}



public int getCompilationUnitSLOC(loc compilationUnit) {
	/*
	 * get file lines as list
	 */
	list[str] fileLines = readFileLines(compilationUnit);
	//println(size(fileLines));						// DEBUG
	//for (line <- fileLines) {println(line);}		// DEBUG
	
	
	/*
	 * clean lines from blank lines and comments
	 */
	list[str] cleanedLines = cleanCompilationUnit(fileLines);
	//println(size(cleanedLines));						// DEBUG
	//for (line <- cleanedLines) {println(line);}		// DEBUG
	
	
	return size(cleanedLines);
}



public int getProjectSLOC(loc project) {
	int totalLines = 0;
	M3 model = createM3FromEclipseProject(project);
	
	for (m <- model.containment, m[0].scheme == "java+compilationUnit") {
		//println(m[0]);		// DEBUG
		totalLines += getCompilationUnitSLOC(m[0]);
	}
	
	//print(totalLines);		// DEBUG
	return totalLines;
}






