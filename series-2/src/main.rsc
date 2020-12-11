module main

import IO;
import List;
import Set;
import Tuple;
import Node;
import Map;


import basicSubtreeCloneDetector;
import cloneVisualization;
import utils::utils;
import CloneSequenceDetector;

import lang::java::m3::AST;
import lang::java::jdt::m3::AST;

void main() {
	loc testProj = |project://MyTest|;
	loc currentProject = |project://MySimpleTest|;
	loc smallsqlProj = |project://smallsql0.21_src|;
	loc hsqldbProj = |project://hsqldb-2.3.1|;
	
	//loc project = testProj;
	loc project = currentProject;
	//loc project = simpleTestProj;
	//loc project = smallsqlProj;
	//loc project = hsqldbProj;
	
	

	// ############################## Type-1
	set[Declaration] ast = collectAST(project);
	map[str, list[tuple[node, loc]]] clones = basicSubtreeCloneDetector(ast, project);
	cloneSequenceDetector(ast, clones);
	
	
	
	// ############################## Output
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
		
		println("##");
		for (dup <- clones[key]) {
			println("Clone LOC:");
			println(dup[1]);
		}
		println("######");
		
		i += 1;
	}
	
	println("-===================-");
	println("-====== Stats ======-");
	println("-===================-");
	println("Code Classes: <size(clones)>");
	
	
	// ############################## Visualization
	//clonesToJson(clones, "<project.authority>");
	//clonesToJsonD3(clones);
}