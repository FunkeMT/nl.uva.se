module main

import IO;
import List;
import Set;
import Tuple;
import Node;
import Map;

import basicSubtreeCloneDetector;
import cloneVisualization;
import utils;

void startAnalysis() {
	loc testProj = |project://MyTest|;
	loc simpleTestProj = |project://MySimpleTest|;
	loc smallsqlProj = |project://smallsql0.21_src|;
	loc hsqldbProj = |project://hsqldb-2.3.1|;
	
	//loc project = testProj;
	loc project = simpleTestProj;
	//loc project = smallsqlProj;
	//loc project = hsqldbProj;
	
	
	
	// ############################## Type-1
	map[str, list[tuple[node, loc]]] clones = basicSubtreeCloneDetector(collectAST(project));
	
	
	// ############################## Output
	println("-== Clone Classes ==-");
	for (key <- clones) {
		println("######");
		println("key: <key>");
		println("##");
		for (dup <- clones[key]) {
			println("-----");
			println(dup);
		}
		println("######");
	}
	
	println("-== Stats ==-");
	println("Code Classes: <size(clones)>");
	
	
	// ############################## Visualization
	clonesToJson(clones);
}