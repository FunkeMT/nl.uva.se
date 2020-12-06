module utils

import IO;
import List;
import Set;
import String;

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
	return [line | line <- linesWithoutBlankLines, /^(\/\/)|(\/\*)|(\*)|(\*\/)/ !:= trim(line)];
}