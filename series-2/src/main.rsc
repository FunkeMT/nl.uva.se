module main

import IO;
import List;
import Set;
import Tuple;
import Node;
import Map;
import util::Math;


import basicSubtreeCloneDetector;
import cloneVisualization;
import utils::utils;
import utils::Volume;
import CloneSequenceDetector;

import lang::java::m3::AST;
import lang::java::jdt::m3::AST;

/**
 *	###########
 *	CONFIG
 *	###########
 */
int MASS_THRESHOLD = 2;

loc testProj = |project://MyTest|;
loc currentProject = |project://MySimpleTest|;
loc smallsqlProj = |project://smallsql0.21_src|;
loc hsqldbProj = |project://hsqldb-2.3.1|;



void main() {
	//loc project = testProj;
	loc project = currentProject;
	//loc project = simpleTestProj;
	//loc project = smallsqlProj;
	//loc project = hsqldbProj;
	
	

	// ############################## Type-1
	set[Declaration] ast = collectAST(project);
	map[str, list[tuple[node, loc]]] clones = basicSubtreeCloneDetector(ast, project, MASS_THRESHOLD);
	//cloneSequenceDetector(ast, clones);
	
	
	
	// ############################## Output
	map[str, int] stats = (
		"volume": getVolume(collectModules(project)),
		"percentageDuplicatedLines": 0,
		"numberOfDuplicatedLines": 0,
		"numberOfClones": 0,
		"numberOfCloneClasses": size(clones),
		"biggestClonesLines": 0,
		"biggestCloneClass": 0
	);
	
	println("-===================-");
	println("-== Clone Classes ==-");
	println("-===================-");
	int i = 1;
	for (key <- clones) {
		println("######");
		println("Clone-Class: <i>");
		println("Clones: <size(clones[key])>");
		println("Snippet:");
		list[str] cloneLines = readFileLines(clones[key][0][1]);
		str snippet = "";
		for (line <- cloneLines) snippet += "<line>\n";
		println(snippet);
		
		stats["numberOfDuplicatedLines"] += size(cloneLines);
		if (size(cloneLines) > stats["biggestClonesLines"]) {
			stats["biggestClonesLines"] = size(cloneLines);
		}
		
		println("##");
		for (dup <- clones[key]) {
			println("Clone LOC:");
			println(dup[1]);
			stats["numberOfClones"] += 1;
		}
		println("######");
		
		if (size(clones[key]) > stats["biggestCloneClass"]) {
			stats["biggestCloneClass"] = size(clones[key]);
		}
		
		i += 1;
	}
	
	println("-===================-");
	println("-====== Stats ======-");
	println("-===================-");
	println("Project: <project.authority>");
	println("Selected Mass Threshold: <MASS_THRESHOLD>");
	println("Project Volume: <stats["volume"]>");
	println("Duplicated Lines: <stats["numberOfDuplicatedLines"]>");
	stats["percentageDuplicatedLines"] = toInt((toReal(stats["numberOfDuplicatedLines"]) / toReal(stats["volume"])) * 100);
	println("% of Duplicated Lines: <(toReal(stats["numberOfDuplicatedLines"]) / toReal(stats["volume"])) * 100>%");
	println("Number of Clone Classes: <stats["numberOfCloneClasses"]>");
	println("Biggest Clone (in lines): <stats["biggestClonesLines"]>");
	println("Biggest Clone Class: <stats["biggestCloneClass"]>");
	
	
	// ############################## Visualization
	clonesToJson(clones, project.authority, stats);
	clonesToJsonD3(clones);
}