module SourceCodeProperties::UnitSize

import IO;
import Set;
import List;
import Map;
import String;

import lang::java::m3::Core;
import lang::java::m3::AST;
import lang::java::jdt::m3::Core;
import lang::java::jdt::m3::AST;

import SourceCodeProperties::util;

/*
 *	Based on:
 *	Alves et. al (2011)
 *	https://www.researchgate.net/profile/Tiago_Alves7/publication/221236320_Benchmark-Based_Aggregation_of_Metrics_to_Ratings/links/00b4953bd4a6d1066b000000.pdf
 *
 *	=> Stars have been converted to ++, +, o, -, -- ranking
 *
 *		Low risk	Moderate risk	High risk	Very-high risk
 *		]0, 30]			]30, 44]	 ]44, 74]		]74, ∞[
 *	===================================================================
 *	++	 ----		 	19.5 %		 10.9 %			3.9 %
 *	+	 ----			26.0 %		 15.5 %			6.5 %
 *	o	 ----			34.1 %		 22.2 %			11.0 %	 
 *	-	 ----			45.9 %		 31.4 %			18.1 %
 *	--
 */
 
 
 
 list[loc] getMethods(loc projectLocation){
	M3 model = createM3FromEclipseProject(projectLocation);
	list[loc] methodLOCs = [];
	
	for (m <- model.declarations, m[0].scheme == "java+method") {
		methodLOCs += m[0];
	}
	
	//for (m <- methodLOCs) {println(m);}		// DEBUG
	
	return methodLOCs;
}
 
 
 public tuple[int, int, int, int] getUnitSize(loc project, bool srcOnly = true) {
	list[loc] methods = getMethods(project);
	
	int lowSLOC = 0;
	int moderateSLOC = 0;
	int highSLOC = 0;
	int veryHighSLOC = 0;
	
	for (m <- methods) {
		list[str] cleanMethod = cleanCodeLines(readFileLines(m));
		int methodSize = size(cleanMethod);
		
		if (methodSize > 30 && methodSize <= 44) {
			moderateSLOC += methodSize;
		} else if (methodSize > 44 && methodSize <= 74) {
			highSLOC += methodSize;
		} else if (methodSize > 74) {
			veryHighSLOC += methodSize;
		} else {
			lowSLOC += methodSize;
		}
	}
	
	return <lowSLOC, moderateSLOC, highSLOC, veryHighSLOC>;
}
 
 