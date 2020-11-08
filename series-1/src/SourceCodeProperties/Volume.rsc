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

import lang::java::m3::Core;
import lang::java::m3::AST;
import lang::java::jdt::m3::Core;
import lang::java::jdt::m3::AST;


public int getProjectLines(loc project) {
	int totalLines = 0;
	M3 model = createM3FromEclipseProject(project);
	
	for (m <- model.containment, m[0].scheme == "java+compilationUnit") {
		print(m[0]);
		totalLines += getCompilationUnitLines(m[0]);
	}
	
	return totalLines;
}

public int getCompilationUnitLines(loc compilationUnit) {
	list[str] fileLines = readFileLines(compilationUnit);
	int fileSize = size(fileLines);
	
	println(fileSize);
	
	getCompilationUnitSLOC(fileLines);
	
	return fileSize;
}

public int getCompilationUnitSLOC(list[str] compilationUnitLines) {
	/*
	 * 1) Filter blank lines
	 *    /^\s*$/ => metacharacter to find all whitespace characters
	 *    see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Character_Classes
	 */
	list[str] fileLines = [line | line <- compilationUnitLines, /^\s*$/ !:= line];
	
	
	for (str line <- fileLines) {
		println(line);
	}
	return 0;
}






