module main

import IO;
import List;
import Set;

import basicSubtreeCloneDetector;
import utils;

void startAnalysis() {
	loc testProj = |project://MyTest|;
	loc simpleTestProj = |project://MySimpleTest|;
	loc smallsqlProj = |project://smallsql0.21_src|;
	loc hsqldbProj = |project://hsqldb-2.3.1|;
	
	//loc project = testProj;
	//loc project = simpleTestProj;
	loc project = smallsqlProj;
	//loc project = hsqldbProj;
	
	
	
	// ############################## Type-1
	basicSubtreeCloneDetector(collectAST(project));
}