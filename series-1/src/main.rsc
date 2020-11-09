module main

import IO;

import SourceCodeProperties::Volume;
import SourceCodeProperties::UnitSize;
import SourceCodeProperties::Complexity;
import Rating;



void startAnalysis() {
	loc testProj = |project://MyTest|;
	loc smallsqlProj = |project://smallsql0.21_src|;
	
	//loc project = testProj;
	loc project = smallsqlProj;
	
	//println(getProjectSLOC(project));
	int volume = getVolume(project);
	tuple[int, int, int, int] unitSize = getUnitSize(project);
	tuple[int, int, int, int] complexity = getComplexity(project);
	
	tuple[str rank, int sloc] rankVolume = rankVolume(volume);
	println("Ranking Volume: <rankVolume>");
	
	tuple[str rank, real low, real moderate, real high, real veryHigh] rankUnitSize = rankUnitSize(unitSize, volume);
	println("Ranking UnitSize: <rankUnitSize>");
	
	tuple[str rank, real low, real moderate, real high, real veryHigh] rankComplexity = rankComplexity(complexity, volume);
	println("Ranking CC: <rankComplexity>");
}