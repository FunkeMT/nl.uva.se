module Rating

import IO;
import List;
import util::Math;

/*
 *	Based on:
 *	Heitlager et. al (2007)
 *	http://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.120.4996&rep=rep1&type=pdf
 *
 *			SLOC
 *	====================
 *	++	 [0, 66[		 
 *	+	 [66, 246[		
 *	o	 [246, 665[		
 *	-	 [665, 1310[
 *	--	 [1310, ∞[
 */
tuple[str, int] rankVolume(int volume) {
	int kloc = volume / 1000;

	str rank = "--";
	if(kloc >= 0 && kloc < 66) {
		rank = "++";
	} else if(kloc >= 66 && kloc < 246) {
		rank = "+";
	} else if(kloc >= 246 && kloc < 665) {
		rank = "o";
	} else if(kloc >= 665 && kloc < 1310) {
		rank = "-";
	}
	
	return <rank, volume>;
}



/*
 *	Based on:
 *	Heitlager et. al (2007)
 *	http://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.120.4996&rep=rep1&type=pdf
 *
 *	 'Duplicated blocks over 6 lines'
 *	==================================
 *	++	 0-3%		 
 *	+	 3-5%	
 *	o	 5-10%	
 *	-	 10-20%
 *	--	 20-100%
 */
tuple[str, real] rankDuplication(real duplication) {
	str rank = "--";
	if(duplication >= 0 && duplication < 0.03) {
		rank = "++";
	} else if(duplication >= 0.03 && duplication < 0.05) {
		rank = "+";
	} else if(duplication >= 0.05 && duplication < 0.10) {
		rank = "o";
	} else if(duplication >= 0.10 && duplication < 0.20) {
		rank = "-";
	}

	return <rank, duplication * 100>;
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
tuple[str, real, real, real, real] rankUnitSize(tuple[int lowSLOC, int moderateSLOC, int highSLOC, int veryHighSLOC] risks, int volume) {
	//tuple[real low, real moderate, real high, real veryHigh] realRisks = [toReal(s)/volume * 100 | int s <- risks];
	tuple[real low, real moderate, real high, real veryHigh] realRisks = <0.,0.,0.,0.>;
	realRisks.low = toReal(risks.lowSLOC)/volume * 100;
	realRisks.moderate = toReal(risks.moderateSLOC)/volume * 100;
	realRisks.high = toReal(risks.highSLOC)/volume * 100;
	realRisks.veryHigh = toReal(risks.veryHighSLOC)/volume * 100;
	
	str rank = "--";
	if(realRisks.moderate <= 19.5 && realRisks.high <= 10.9 && realRisks.veryHigh <= 3.9) {
		rank = "++";
	} else if(realRisks.moderate <= 26.0 && realRisks.high <= 15.5 && realRisks.veryHigh <= 6.5) {
		rank = "+";
	} else if(realRisks.moderate <= 34.1 && realRisks.high <= 22.2 && realRisks.veryHigh <= 11.0) {
		rank = "o";
	} else if(realRisks.moderate <= 45.9 && realRisks.high <= 31.4 && realRisks.veryHigh <= 18.1) {
		rank = "-";
	}
	
	return <rank, realRisks.low, realRisks.moderate, realRisks.high, realRisks.veryHigh>;
}



/*
 *	Based on:
 *	Heitlager et. al (2007)
 *	http://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.120.4996&rep=rep1&type=pdf
 *
 *		Low risk	Moderate risk	High risk	Very-high risk
 *		[1, 11[			[11, 21[	 [21, 50]		]50, ∞[
 *	===================================================================
 *	++	 ----		 	25 %		 0 %			0 %
 *	+	 ----			30 %		 5 %			0 %
 *	o	 ----			40 %		 10 %			0 %	 
 *	-	 ----			50 %		 15 %			5 %
 *	--	 ----			----		----			----
 */
tuple[str, real, real, real, real] rankComplexity(tuple[int lowSLOC, int moderateSLOC, int highSLOC, int veryHighSLOC] risks, int volume) {
	tuple[real low, real moderate, real high, real veryHigh] realRisks = <0.,0.,0.,0.>;
	realRisks.low = toReal(risks.lowSLOC)/volume * 100;
	realRisks.moderate = toReal(risks.moderateSLOC)/volume * 100;
	realRisks.high = toReal(risks.highSLOC)/volume * 100;
	realRisks.veryHigh = toReal(risks.veryHighSLOC)/volume * 100;
	
	str rank = "--";
	if(realRisks.moderate <= 25.0 && realRisks.high == 0 && realRisks.veryHigh == 0) {
		rank = "++";
	} else if(realRisks.moderate <= 30.0 && realRisks.high <= 5.0 && realRisks.veryHigh == 0) {
		rank = "+";
	} else if(realRisks.moderate <= 40.0 && realRisks.high <= 10.0 && realRisks.veryHigh == 0) {
		rank = "o";
	} else if(realRisks.moderate <= 50.0 && realRisks.high <= 15.0 && realRisks.veryHigh <= 5.0) {
		rank = "-";
	}
	
	return <rank, realRisks.low, realRisks.moderate, realRisks.high, realRisks.veryHigh>;
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
tuple[str, real, real, real, real] rankInterfacing(tuple[int lowSLOC, int moderateSLOC, int highSLOC, int veryHighSLOC] risks, int volume) {
	//tuple[real low, real moderate, real high, real veryHigh] realRisks = [toReal(s)/volume * 100 | int s <- risks];
	tuple[real low, real moderate, real high, real veryHigh] realRisks = <0.,0.,0.,0.>;
	realRisks.low = toReal(risks.lowSLOC)/volume * 100;
	realRisks.moderate = toReal(risks.moderateSLOC)/volume * 100;
	realRisks.high = toReal(risks.highSLOC)/volume * 100;
	realRisks.veryHigh = toReal(risks.veryHighSLOC)/volume * 100;
	
	str rank = "--";
	if(realRisks.moderate <= 12.1 && realRisks.high <= 5.4 && realRisks.veryHigh <= 2.2) {
		rank = "++";
	} else if(realRisks.moderate <= 14.9 && realRisks.high <= 7.2 && realRisks.veryHigh <= 3.1) {
		rank = "+";
	} else if(realRisks.moderate <= 17.7 && realRisks.high <= 10.2 && realRisks.veryHigh <= 4.8) {
		rank = "o";
	} else if(realRisks.moderate <= 25.2 && realRisks.high <= 15.3 && realRisks.veryHigh <= 7.1) {
		rank = "-";
	}
	
	return <rank, realRisks.low, realRisks.moderate, realRisks.high, realRisks.veryHigh>;
}

