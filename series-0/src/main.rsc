module main

import IO;
import Set;
import List;
import Map;

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



// Problem 2:
// calculates the most occurring variable(s) and how often they occur
//
// Answer: <207,["i"]>
//
// @param AST
// @return tuple
tuple [int, list[str]] mostOccurringVariable(list[Declaration] asts){
	int maxCount = 0;
	list[str] varList = [];
	
	map[str varName, int varCount] varMap = ();
	visit(asts) {
		case \variable(name, _):
			varMap[name] ? 0 += 1;
		case \variable(name, _, _):
			varMap[name] ? 0 += 1;
	}
	
	maxCount = max(varMap.varCount);
	varList = toList(invert(varMap)[maxCount]);
	
	return <maxCount, varList>;
}



// Problem 3:
// most occurring number literal(s) and how often they occur
//
// Answer:  <1401,["0"]>
//
// @param AST
// @return tuple
// @ToDo use higher order functions
tuple [int, list[str]] mostOccurringNumber(list[Declaration] asts){
	int maxCount = 0;
	list[str] varList = [];
	
	map[str varName, int varCount] varMap = ();
	visit(asts) {
		case \number(name):
			varMap[name] ? 0 += 1;
	}
	
	maxCount = max(varMap.varCount);
	varList = toList(invert(varMap)[maxCount]);
	
	return <maxCount, varList>;
}



// Problem 4:
// outputs the locations where null is returned
//
// @param AST
// @return list
list[loc] findNullReturned(list[Declaration] asts){
	list[loc] locList = [];
	
	visit(asts) {
		case \return(exp): {
			if (exp.typ == null()) {
				locList += exp.src;
			}
		}
	}
	
	return locList;
}