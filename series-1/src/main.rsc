module main

import IO;
import Set;
import List;
import Map;

import lang::java::m3::Core;
import lang::java::m3::AST;
import lang::java::jdt::m3::Core;
import lang::java::jdt::m3::AST;

import SourceCodeProperties::Volume;



void startAnalysis() {
	loc testProj = |project://MyTest|;
	
	println(getProjectLines(testProj));
}