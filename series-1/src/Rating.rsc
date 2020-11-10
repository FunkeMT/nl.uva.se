module Rating

import IO;
import List;
import util::Math;


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

