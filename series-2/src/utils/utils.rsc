module utils::utils

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
	//M3 model = createM3FromEclipseProject(project);
	
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


/*
 *	based on: Landman et al. (2014)
 *	see: http://homepages.cwi.nl/~landman/docs/Landman2014-ccsloc-icsme2014-preprint.pdf
 */
int getCyclomaticComplexity(node asts){
	int count = 1;
	visit(asts){
		case \do(_, _): count += 1;
		case \foreach(_, _, _): count += 1;
		case \for(_, _, _, _): count += 1;
		case \for(_, _, _): count += 1;
		case \case(_): count += 1;
		case \defaultCase(): count += 1;
		case \catch(_, _): count += 1;
		case \while(_, _): count += 1;
		case \if(_, _): count += 1;
		case \if(_, _, _): count += 1;
		case \conditional(_, _, _): count += 1;
		case \infix(_, "&&", _): count += 1;		
		case \infix(_, "||", _): count += 1;
	}
	return count;
}

@doc{
	Calculates the mass (number of nodes) for a given AST.
}
int mass(node ast) {
	int mass = 0;
	visit(ast) {
		case node n: {
			mass += 1;
		}
	}
	
	return mass;
}

@doc{
	Escape source-code snippet for JSON.
	Based on:
	https://www.json.org/json-en.html
}
str escapeCode(str code) {
    return escape(code, (
        "\"": "\\\"",
        "\\": "\\\\",
        "/": "\\/",
        "\b": "\\b",
        "\f": "\\f",
        "\n": "\\n",
        "\r": "\\r",
        "\t": "\\t",
        "\\s": "\\\\s"
    ));
}