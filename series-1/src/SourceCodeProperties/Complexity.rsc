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

/*
 *	based on: Landman et al. (2014)
 *	see: http://homepages.cwi.nl/~landman/docs/Landman2014-ccsloc-icsme2014-preprint.pdf
 */
int statementCyclomaticComplexity(list[Statement] asts){
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

tuple[int lowSLOC, int moderateSLOC, int highSLOC, int veryHighSLOC] getComplexity(loc project){
	list[Declaration] asts = getASTs(project);
	
	int low = 0;
	int moderate = 0;
	int high = 0;
	int veryHigh = 0;
	
	visit(asts) {
		case \method(_, a, _, _, contents): {
			//println(<a, statementCyclomaticComplexity(contents[0])>);		DEBUG
			
			int cc = statementCyclomaticComplexity(contents[0]);
			
			if (cc >= 1 && cc < 11) {
				low += cc;
			} else if (cc >= 11 && cc < 21) {
				moderate += cc;
			} else if (cc >= 21 && cc < 51 ) {
				high += cc;
			} else {
				veryHigh += cc;
			}
		}
	}
	
	return <low, moderate, high, veryHigh>;
}


