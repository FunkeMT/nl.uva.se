module CloneSequenceDetector

import IO;
import List;
import Set;
import Tuple;
import Node;
import Map;

import lang::java::m3::Core;
import lang::java::m3::AST;
import lang::java::jdt::m3::Core;
import lang::java::jdt::m3::AST;

import List;
import lang::java::m3::AST;


int  MinimumSequenceLengthThreshold = 1;

int statementCounter(node n) {
	int counter = 0;
	visit (n) {
		case Statement n: {
			counter = counter + 1;
		}
	}
	
	return counter;
}

tuple[list[list[node]], int] setupSeqList(set[Declaration] ast) {
	list[list[node]] seq = [];
	int maxSeqSize = 0;
	bottom-up visit (ast) {
		case list[Statement] s: {
			int seqSize = size(s);
			if (seqSize >= MinimumSequenceLengthThreshold) {
				seq += [s];
			}
			maxSeqSize = max([size(s), maxSeqSize]);
		}
	}
	
	return <seq, maxSeqSize>;
}

//
// Based on: Clone Detection Using Abstract Syntax Trees (1998, Baxter et al.)
//
void cloneSequenceDetector(set[Declaration] ast, map[str, list[tuple[node, loc]]] clonesIn) {

	//1. Build the list structures describing sequences
	// -->  To find sequence clones, we build a list structure where
	//		each list is associated with a sequence in the program, and
	//		stores the hash codes of each sub-tree element of the
	//		associated sequence.
	//2. For k = MinimumSequenceLengthThreshold
	//		to MaximumSequenceLength
	tuple[list[list[node]]lists, int maxSentenceLength] sequences = setupSeqList(ast);
	println(sequences.lists);
	println(sequences.maxSentenceLength);

	//println(setupSeqList(ast));

	//3. Place all subsequences of length k
	//	 into buckets according to subsequence hash
	for(int k <- [MinimumSequenceLengthThreshold .. sequences.maxSentenceLength + 1]) {
		//list	
		println("???????????????????????");
		println("???????????????????????");
		println("???????????????????????");
		println("???????????????????????");
		list[value] a = [
	        subSequence | 
	        \start <- [0..size(sequences.lists)], 
	        subSequence := sequences.lists[\start .. (\start + k)], 
	        size(subSequence) == k
	    ];
	    pretty(a);
	    int b = 1; 
		//println([
	 //       subSequence | 
	 //       \start <- [0..size(sequences.lists)], 
	 //       subSequence := sequences.lists[\start .. (\start + k)], 
	 //       size(subSequence) == k
	 //   ]);
		println("???????????????????????");
		println("???????????????????????");
		println("???????????????????????");
		println("???????????????????????");
	    break;
	//	for (key <- clonesIn) {
	//		for (clone <- clonesIn[key]) {
	//			int i = 1;
	//		}
	//	}
		println("");
	}

	//4. For each subsequence i and j in same bucket
	//	 If CompareSequences (i,j,k) >
	//		SimilarityThreshold
	//	 Then { RemoveSequenceSubclonesOf(clones,i,j,k)
	//		AddSequenceClonePair(Clones,i,j,k)
	//	 }
	
	println("Test");
}