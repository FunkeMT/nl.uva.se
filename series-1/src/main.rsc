module main

import IO;
import List;
import String;

import lang::java::m3::Core;
import lang::java::m3::AST;
import lang::java::jdt::m3::Core;
import lang::java::jdt::m3::AST;

import SourceCodeProperties::Volume;
import SourceCodeProperties::UnitSize;
import SourceCodeProperties::Complexity;
import SourceCodeProperties::Duplication;
import SourceCodeProperties::util;
import Rating;



void startAnalysis() {
	loc testProj = |project://MyTest|;
	loc smallsqlProj = |project://smallsql0.21_src|;
	loc hsqldbProj = |project://hsqldb-2.3.1|;
	
	//loc project = testProj;
	//loc project = smallsqlProj;
	loc project = hsqldbProj;
	
	tuple[list[loc] modules, list[loc] methods, list[Declaration] asts] modulesAndAsts = collectModulesAndAST(project, "/hsqldb/src/");
	
	int volume = getVolume(modulesAndAsts.modules);
	tuple[int, int, int, int] unitSize = getUnitSize(modulesAndAsts.methods);
	tuple[int, int, int, int] complexity = getComplexity(modulesAndAsts.asts);
	real duplication = getDuplicateCodeCount(modulesAndAsts.asts);
	
	tuple[str rank, int sloc] rankVolume = rankVolume(volume);
	println("Ranking Volume: <rankVolume>");
	
	tuple[str rank, real low, real moderate, real high, real veryHigh] rankUnitSize = rankUnitSize(unitSize, volume);
	println("Ranking UnitSize: <rankUnitSize>");
	
	tuple[str rank, real low, real moderate, real high, real veryHigh] rankComplexity = rankComplexity(complexity, volume);
	println("Ranking CC: <rankComplexity>");

	tuple[str rank, real percentage] rankDuplication = rankDuplication(duplication);
	println("Ranking Duplication: <rankDuplication>");
}