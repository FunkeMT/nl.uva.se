module SourceCodeProperties::Interfacing

import IO;
import Set;
import List;

import lang::java::m3::Core;
import lang::java::m3::AST;
import lang::java::jdt::m3::Core;

import SourceCodeProperties::util;


private tuple[int, int, int, int] calcInterfacing(
	tuple[int lowSLOC, int moderateSLOC, int highSLOC, int veryHighSLOC] tupleSLOC,
	list[Declaration] parameters,
	loc methodLoc) {
	
	int countParams = size(parameters);
	int methodSLOC = size(cleanCodeLines(readFileLines(methodLoc)));
	
	if (countParams >= 0 && countParams <= 2) {
		tupleSLOC.lowSLOC += methodSLOC;
	} else if (countParams >= 2 && countParams < 3) {
		tupleSLOC.moderateSLOC += methodSLOC;
	} else if (countParams >= 3 && countParams < 4 ) {
		tupleSLOC.highSLOC += methodSLOC;
	} else {
		tupleSLOC.veryHighSLOC += methodSLOC;
	}


	return tupleSLOC;	
}



/*
 *	Based on:
 *	Alves et. al (2011)
 *	https://www.researchgate.net/profile/Tiago_Alves7/publication/221236320_Benchmark-Based_Aggregation_of_Metrics_to_Ratings/links/00b4953bd4a6d1066b000000.pdf
 *
 *	=> Stars have been converted to ++, +, o, -, -- ranking
 *
 *		Low risk	Moderate risk	High risk	Very-high risk
 *		[0, 2]			[2, 3[	 	[3, 4[			[4, ∞[
 *	===================================================================
 *	++	 ----		 	12.1 %		  5.4 %			 2.2 %
 *	+	 ----			14.9 %		  7.2 %			 3.1 %
 *	o	 ----			17.7 %		 10.2 %			 4.8 %	 
 *	-	 ----			25.2 %		 15.3 %			 7.1 %
 *	--
 */
tuple[int, int, int, int] getInterfacing(list[Declaration] asts){
	tuple[int, int, int, int] tupleSLOC = <0,0,0,0>;
	
	visit(asts) {
		case m: \method(_, _, params, _, _): {
			tupleSLOC = calcInterfacing(tupleSLOC, params, m.src);
		}
		case c: \constructor(_, params, _, _): {
			tupleSLOC = calcInterfacing(tupleSLOC, params, c.src);
		}
	}
	
	return tupleSLOC;
}