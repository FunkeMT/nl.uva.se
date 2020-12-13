module utils::Volume

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

import utils::utils;


public int getCompilationUnitSLOC(loc compilationUnit) {
	/*
	 * get file lines as list
	 */
	list[str] fileLines = readFileLines(compilationUnit);
	
	
	/*
	 * clean lines from blank lines and comments
	 */
	list[str] cleanedLines = cleanCodeLines(fileLines);	

	return size(cleanedLines);
}



public int getVolume(list[loc] moduleLocs) {
	int totalLines = 0;
	
	for (m <- moduleLocs) {
		totalLines += getCompilationUnitSLOC(m);
	}

	return totalLines;
}
