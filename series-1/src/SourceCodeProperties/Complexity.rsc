module SourceCodeProperties::Complexity

import IO;
import Set;
import List;

import lang::java::m3::Core;
import lang::java::m3::AST;
import lang::java::jdt::m3::Core;

import SourceCodeProperties::util;

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

tuple[int, int, int, int] getComplexity(list[Declaration] asts){
	int lowSLOC = 0;
	int moderateSLOC = 0;
	int highSLOC = 0;
	int veryHighSLOC = 0;
	
	visit(asts) {
		case m: \method(_, a, _, _, contents): {
			//println(<a, statementCyclomaticComplexity(contents[0])>);		DEBUG
			
			int cc = statementCyclomaticComplexity(contents[0]);
			int methodSLOC = size(cleanCodeLines(readFileLines(m.src)));
			
			if (cc >= 1 && cc < 11) {
				lowSLOC += methodSLOC;
			} else if (cc >= 11 && cc < 21) {
				moderateSLOC += methodSLOC;
			} else if (cc >= 21 && cc < 51 ) {
				highSLOC += methodSLOC;
			} else {
				veryHighSLOC += methodSLOC;
			}
		}
	}
	
	return <lowSLOC, moderateSLOC, highSLOC, veryHighSLOC>;
}


