module Rating

import IO;
import List;
import util::Math;


str rankVolume(int volume) {
	int kloc = volume / 1000;

	if(kloc >= 0 && kloc < 66) {
		return "++";
	} else if(kloc >= 66 && kloc < 246) {
		return "+";
	} else if(kloc >= 246 && kloc < 665) {
		return "o";
	} else if(kloc >= 665 && kloc < 1310) {
		return "-";
	}
	
	return "--";
}

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
str rankUnitSize(tuple[int lowSLOC, int moderateSLOC, int highSLOC, int veryHighSLOC] risks, int volume) {
	//tuple[real low, real moderate, real high, real veryHigh] realRisks = [toReal(s)/volume * 100 | int s <- risks];
	tuple[real low, real moderate, real high, real veryHigh] realRisks = <0.,0.,0.,0.>;
	realRisks.low = toReal(risks.lowSLOC)/volume * 100;
	realRisks.moderate = toReal(risks.moderateSLOC)/volume * 100;
	realRisks.high = toReal(risks.highSLOC)/volume * 100;
	realRisks.veryHigh = toReal(risks.veryHighSLOC)/volume * 100;
	
	if(realRisks.moderate <= 19.5 && realRisks.high <= 10.9 && realRisks.veryHigh <= 3.9) {
		return "++";
	} else if(realRisks.moderate <= 26.0 && realRisks.high <= 15.5 && realRisks.veryHigh <= 6.5) {
		return "+";
	} else if(realRisks.moderate <= 34.1 && realRisks.high <= 22.2 && realRisks.veryHigh <= 11.0) {
		return "o";
	} else if(realRisks.moderate <= 45.9 && realRisks.high <= 31.4 && realRisks.veryHigh <= 18.1) {
		return "-";
	}
	
	return "--";
}