module main

import IO;
import List;
import String;
import util::Math;

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
	loc project = smallsqlProj;
	//loc project = hsqldbProj;
	
	tuple[list[loc] modules, list[loc] methods, list[Declaration] asts] modulesAndAsts = collectModulesAndAST(project, "/src/");
	
	int volume = getVolume(modulesAndAsts.modules);
	tuple[int, int, int, int] unitSize = getUnitSize(modulesAndAsts.methods);
	tuple[int, int, int, int] complexity = getComplexity(modulesAndAsts.asts);
	tuple[int dupCodeBlockCount, int analyizedLines, real result] duplication = getDuplicateCodeCount(modulesAndAsts.asts);
	
	//println("################################ Analysis");
	tuple[str rank, int sloc] rankVolume = rankVolume(volume);
	//println("Ranking Volume: <rankVolume>");
	
	tuple[str rank, real low, real moderate, real high, real veryHigh] rankUnitSize = rankUnitSize(unitSize, volume);
	//println("Ranking UnitSize: <rankUnitSize>");
	
	tuple[str rank, real low, real moderate, real high, real veryHigh] rankComplexity = rankComplexity(complexity, volume);
	//println("Ranking CC: <rankComplexity>");

	tuple[str rank, real percentage] rankDuplication = rankDuplication(duplication.result);
	//println("Ranking Duplication: <rankDuplication>");
	
	println("#####################################");
	println("Project: <project>");
	println("#####################################");
	
	println();
	println("#####################################");
	println("SIG Metrics");
	println("#####################################");
	println();
	println("§ Volume (<rankVolume.rank>)");
	println("\t§§ SLOC:\t\t<rankVolume.sloc>");
	println();
	println("§ Duplication (<rankDuplication.rank>)");
	println("\t§§ Analyzed Lines:\t<duplication.analyizedLines>");
	println("\t§§ Dupl. Blocks:\t<duplication.dupCodeBlockCount>");
	println("\t§§ Duplication:\t\t<rankDuplication.percentage>%");
	println();
	println("§ Unit Size (<rankUnitSize.rank>)");
	println("\t§§ Low Risk:\t\t<rankUnitSize.low>%");
	println("\t§§ Moderate Risk:\t<rankUnitSize.moderate>%");
	println("\t§§ High Risk:\t\t<rankUnitSize.high>%");
	println("\t§§ Very High Risk:\t<rankUnitSize.veryHigh>%");
	println();
	println("§ Complexity (<rankComplexity.rank>)");
	println("\t§§ Low Risk:\t\t<rankComplexity.low>%");
	println("\t§§ Moderate Risk:\t<rankComplexity.moderate>%");
	println("\t§§ High Risk:\t\t<rankComplexity.high>%");
	println("\t§§ Very High Risk:\t<rankComplexity.veryHigh>%");
	println();
	println("#####################################");
	
	
	tuple[str volume, str cc, str duplication, str unitSize] ranks = <rankVolume.rank, rankComplexity.rank, rankDuplication.rank, rankUnitSize.rank>;
	tuple[str maintainability, str analysability, str changeability, str testability] overallRanking = calcMaintainability(ranks);
	
	println();
	println();
	println("#####################################");
	println("SIG Maintainability Model");
	println("#####################################");
	println();
	println("Analysability:\t\t<overallRanking.analysability>");
	println("Changeability:\t\t<overallRanking.changeability>");
	println("Testability:\t\t<overallRanking.testability>");
	println();
	println("Maintainability:\t<overallRanking.maintainability>");
	println();
	println("#####################################");
}