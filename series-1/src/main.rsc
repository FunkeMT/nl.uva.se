module main

import IO;

import SourceCodeProperties::Volume;
import SourceCodeProperties::UnitSize;



void startAnalysis() {
	loc testProj = |project://MyTest|;
	loc smallsqlProj = |project://smallsql0.21_src|;
	
	println(getProjectSLOC(testProj));
	//println(getUnitSize(testProj));
}