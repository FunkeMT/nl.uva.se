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

tuple[list[loc], list[loc], list[Declaration]] collectModulesAndAST(loc project, str srcPath) {
	M3 model = createM3FromEclipseProject(project);
	
	list[Declaration] asts = [];
	list[loc] moduleLocs = [];
	list[loc] methodLocs = [];
	
	for (m <- model.declarations) {
		if (!startsWith(m[1].path, srcPath) || contains(m[1].path, "/generated/")
			|| contains(m[1].path, "/junit/")|| contains(m[1].path, "/junits/")
			|| contains(m[1].path, "/test/") || contains(m[1].path, "/tests/")
			|| contains(m[1].path, "/sample/")|| contains(m[1].path, "/samples/")) {
			continue;
		}
		
		//println(m);		// DEBUG
		
		if (m[0].scheme == "java+compilationUnit") {
			moduleLocs += m[0];
			asts += createAstFromFile(m[0], true);
		} else if (m[0].scheme == "java+method") {
			methodLocs += m[0];
		}
	}
	
	return <moduleLocs, methodLocs, asts>;
}