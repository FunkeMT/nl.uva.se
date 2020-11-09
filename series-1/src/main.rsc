module main

import IO;

import SourceCodeProperties::Volume;
import SourceCodeProperties::UnitSize;
import SourceCodeProperties::Complexity;
import Rating;



void startAnalysis() {
	loc testProj = |project://MyTest|;
	loc smallsqlProj = |project://smallsql0.21_src|;
	
	loc project = testProj;
	//loc project = smallsqlProj;
	
	//println(getProjectSLOC(project));
	int volume = getVolume(project);
	tuple[int, int, int, int] unitSize = getUnitSize(project);
	tuple[int, int, int, int] complexity = getComplexity(project);
	
	
	println("Ranking Volume: <rankVolume(volume)>");
	println("Ranking UnitSize: <rankUnitSize(unitSize, volume)>");
	println("Ranking CC: <rankComplexity(complexity, volume)>");
}