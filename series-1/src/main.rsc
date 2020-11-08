module main

import IO;

import SourceCodeProperties::Volume;



void startAnalysis() {
	loc testProj = |project://MyTest|;
	loc smallsqlProj = |project://smallsql0.21_src|;
	
	println(getProjectSLOC(smallsqlProj));
}