module main

import IO;
import Set;
import List;

import lang::java::m3::Core;
import lang::java::m3::AST;
import lang::java::jdt::m3::Core;
import lang::java::jdt::m3::AST;

// Returns the AST for a specific eclipse project
// 
// @param eclipse project location
// @return list
list[Declaration] getASTs(loc projectLocation){
	M3 model = createM3FromEclipseProject(projectLocation);
	list[Declaration] asts = [];
	for (m <- model.containment, m[0].scheme == "java+compilationUnit") {
		asts += createAstFromFile(m[0], true);
	}
	return asts;
}

// Counts the number if Interfaces
//
// @param AST
// @return int
int getNumberOfInterfaces(list[Declaration] asts){
	int interfaces = 0;
	visit(asts) {
		case \interface(_, _, _, _):
			interfaces += 1;
	}
	return interfaces;
}

// Problem 1:
// calculates the number of for-loops in smallsql
//
// Answer: 263
//
// @param AST
// @return int
int getNumberOfForLoops(list[Declaration] asts){
	int forLoops = 0;
	visit(asts) {
		case \for(_, _, _, _):
			forLoops += 1;
		case \for(_, _, _):
			forLoops += 1;
	}
	return forLoops;
}