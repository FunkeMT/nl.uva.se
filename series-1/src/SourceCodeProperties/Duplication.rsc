module SourceCodeProperties::Duplication

import IO;
import Set;
import List;
import lang::java::m3::Core;
import lang::java::m3::AST;
import lang::java::jdt::m3::Core;
import util::Math;

/*
 * Used to get the duplicate code ratio in given asts.
 * Based on: http://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.120.4996&rep=rep1&type=pdf
 *
 * @param asts asts to investigate.
 * @return Ratio between 0.0 and 1.0, of duplicate code within methods.
 */
real getDuplicateCodeCount(list[Declaration] asts) {
	// Get code lines with methods only.
	list[Statement] lines = [];
	visit(asts){
		case /method(_, _, _, _, contents): lines += methodLines(contents[0]);
	}
	
	// Prepaer the count for each line.
	map[Statement, list[Statement]] dict = ();
	for (line <- lines) {
		dict[line] = [];
	}
	
	// Add unique line to each element for counting.
	for (line <- lines) {
		dict[line] += [line]; 
	}
	
	// Count the number of times a block of code is duplicated, on the condition
	// that the block of code is atleast 6 lines long.
	int dupCodeBlockCount = 0;
	int dupLineCounter = 0;
	for (line <- lines) {
		if (size(dict[line]) > 1) {
			dupLineCounter +=1;
			continue;
		}
		dupCodeBlockCount += (dupLineCounter > 6) ? 1 : 0;
		dupLineCounter = 0;
	}
	
	// Calculate the ratio, of duplicate code within the total code within the
	// methods.
	return toReal(dupCodeBlockCount) / toReal(size(lines));
}

/*
 * Used to cast list[Declaration] to list[Statement].
 */
list[Statement] methodLines(list[Statement] statements) {
	return statements;
}
