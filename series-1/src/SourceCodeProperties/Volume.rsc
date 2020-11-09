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

import SourceCodeProperties::util;


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
	list[str] cleanedLines = cleanCodeLines(fileLines);
	//println(size(cleanedLines));						// DEBUG
	//for (line <- cleanedLines) {println(line);}		// DEBUG
	
	
	return size(cleanedLines);
}



public int getProjectSLOC(loc project, bool srcOnly = true) {
	int totalLines = 0;
	M3 model = createM3FromEclipseProject(project);
	
	for (m <- model.containment, m[0].scheme == "java+compilationUnit") {
		if (srcOnly) {
			if (!startsWith(m[0].path, "/src/") || contains(m[0].path, "/junit/")) {
				continue;
			}
		}
		//println(m[0]);		// DEBUG
		totalLines += getCompilationUnitSLOC(m[0]);
	}
	
	//print(totalLines);		// DEBUG
	return totalLines;
}






