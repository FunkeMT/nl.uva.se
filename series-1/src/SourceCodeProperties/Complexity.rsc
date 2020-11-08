module SourceCodeProperties::Complexity


import IO;
import Set;
import List;
import lang::java::m3::Core;
import lang::java::m3::AST;
import lang::java::jdt::m3::Core;

list[Declaration] getASTs(loc projectLocation){
	M3 model = createM3FromEclipseProject(projectLocation);
	list[Declaration] asts = [];
	for (m <- model.containment, m[0].scheme == "java+compilationUnit"){
		asts += createAstFromFile(m[0], true);
	}
	return asts;
}



int getCyclomaticComplexity(list[Declaration] asts){
	visit(asts){
		case /method(methodLoc, a, _, _, contents): println(<a, statementCyclomaticComplexity(contents[0])>);
	}
	return 0;
}
int statementCyclomaticComplexity(list[Statement] asts){
	// https://www.guru99.com/cyclomatic-complexity.html
	int count = 1; // Not sure if this needs to be 1 or 0.
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


