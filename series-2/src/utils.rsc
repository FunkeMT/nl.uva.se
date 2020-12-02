module utils

import IO;
import List;
import Set;

import lang::java::m3::Core;
import lang::java::m3::AST;
import lang::java::jdt::m3::Core;
import lang::java::jdt::m3::AST;



/**
 * ToDo
 */
set[Declaration] collectAST(loc project) {
	M3 model = createM3FromEclipseProject(project);
	
	set[Declaration] ast = createAstsFromEclipseProject(project, true);
	
	//list[Declaration] ast = [];
	//for (m <- model.declarations) {
	//	if (m[0].scheme == "java+compilationUnit") {
	//		ast += createAstFromFile(m[0], true);
	//	}
	//}
	
	return ast;
}