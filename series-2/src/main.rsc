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
int MASS_THRESHOLD = 12;

loc testProj = |project://MyTest|;
loc currentProject = |project://MySimpleTest|;
loc smallsqlProj = |project://smallsql0.21_src|;
loc hsqldbProj = |project://hsqldb-2.3.1|;

//-===================-
//-====== Stats ======-
//-===================-
//Project: smallsql0.21_src
//Selected Mass Threshold: 3
//Project Volume: 23717
//Duplicated Lines: 2480
//% of Duplicated Lines: 10.4566344800%
//Number of Clone Classes: 1661
//Biggest Clone (in lines): 12
//Biggest Clone Class: 134


// (no reduction)
//Project: smallsql0.21_src
//Selected Mass Threshold: 12
//Project Volume: 23717
//Duplicated Lines: 506
//% of Duplicated Lines: 2.13349074500%
//Number of Clone Classes: 142
//Biggest Clone (in lines): 12
//Biggest Clone Class: 20

// (single itter reduction)
//Project: smallsql0.21_src
//Selected Mass Threshold: 12
//Project Volume: 23717
//Duplicated Lines: 380
//% of Duplicated Lines: 1.60222625100%
//Number of Clone Classes: 123
//Biggest Clone (in lines): 10
//Biggest Clone Class: 20

/*
        §§ Dupl. Blocks:        4304
        §§ Duplication:         11.2016240300%
*/

void main() {
	//loc project = testProj;
	//loc project = currentProject;
	//loc project = simpleTestProj;
	loc project = smallsqlProj;
	//loc project = hsqldbProj;
	
	

	// ############################## Type-1
	map[str, list[tuple[node, loc]]] clones = basicSubtreeCloneDetector(collectAST(project), project, MASS_THRESHOLD);
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
		//visit(clones[key][0][0]) {
		//	case Statement n: {
		//		cloneLines += readFileLines(n.src);
		//	}
		//}
		//for (n <- clones[key][0][0]) {
		//	cloneLines += readFileLines(n.src);
		//}
		//readFileLines(clones[key][0][1]);
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