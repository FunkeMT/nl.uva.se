module basicSubtreeCloneDetector

import IO;
import List;
import Set;
import Tuple;
import Prelude;
import Node;

import lang::java::m3::Core;
import lang::java::m3::AST;
import lang::java::jdt::m3::Core;
import lang::java::jdt::m3::AST;






public int MASS_THRESHOLD = 1;




// 1: Clones


// BUCKET LIST [hash, <node, loc>
map[int, tuple[node, loc]] hashBucket = ();


void basicSubtreeCloneDetector(set[Declaration] ast) {

	int hash = 0;
	// 2: For each subtree i:
	bottom-up visit(ast) {
		case Statement n: {
			loc nodeLoc = getLocationOfNode(n);
			
			/*
			 * Remove all keyword parameters from the AST
			 * since they are not relevant for the comparison
			 */
			node cleanNode = unsetRec(n);
		
			// If mass(i) >= MassThreshold
			if (mass(cleanNode) >= MASS_THRESHOLD) {
				hash += 1;
				
				/*
				println("#####");
				println(n);
				node fresh = unsetRec(n);
				println("#");
				println(fresh);
				println("#####");
				*/
				
				// Then hash i to bucket
				if (hashBucket[hash]?) {
					hashBucket[hash] += <cleanNode, nodeLoc>;
				} else {
					hashBucket[hash] = <cleanNode, nodeLoc>;
				}
			}
		}
		case Declaration n: {
			loc nodeLoc = getLocationOfNode(n);
			node cleanNode = unsetRec(n);
			println(mass(cleanNode));
		
			// If mass(i) >= MassThreshold
			if (mass(cleanNode) >= MASS_THRESHOLD) {
				hash += 1;
				
				// Then hash i to bucket
				if (hashBucket[hash]?) {
					hashBucket[hash] += <cleanNode, nodeLoc>;
				} else {
					hashBucket[hash] = <cleanNode, nodeLoc>;
				}
			}
		}
	}
	
	
	// 3. For each subtree i and j in the same bucket
	for (subtreeI <- hashBucket) {
		for (subtreeJ <- hashBucket) {
			if (subtreeI != subtreeJ) {
				//println("<subtreeI> <subtreeJ>");
				//println(itoString(hashBucket[subtreeI]));
				//println(readFileLines(hashBucket[subtreeI]));
				
				num sim = calculateSimilarity(hashBucket[subtreeI][0], hashBucket[subtreeJ][0]);
				
				if (sim == 1.0) {
						println("<subtreeI> <subtreeJ>");
						println(sim);
						println(hashBucket[subtreeI][1]);
						println(hashBucket[subtreeJ][1]);
				}
			}
		}
	}
	
	
	//println(hashBucket);
}

private int mass(node ast) {
	int mass = 0;
	
	visit(ast) {
		case Statement n: {
			mass += 1;
		}
		case Declaration n: {
			mass += 1;
		}
	}
	
	return mass;
}


/*
 *
 * COPY PASTE !!!!!!
 *
 */
public num calculateSimilarity(node t1, node t2) {
	//Similarity = 2 x S / (2 x S + L + R)
	
	list[node] tree1 = [];
	list[node] tree2 = [];
	
	visit (t1) {
		case node x: {
			tree1 += x;
		}
	}
	
	visit (t2) {
		case node x: {
			tree2 += x;
		}
	}
	
	num s = size(tree1 & tree2);
	num l = size(tree1 - tree2);
	num r = size(tree2 - tree1); 
		
	num similarity = (2 * s) / (2 * s + l + r); 
	
	return similarity;
}


/*
 *
 * COPY PASTE !!!!!!
 *
 */
public loc getLocationOfNode(node subTree) {
	loc location = |project://MySimpleTest/src/testClass.java|;
	
	if (Declaration d := subTree) { 
		if (d.src?) {
			location = d.src;
		}
	} else if (Expression e := subTree) {
		if (e.src?) {
			location = e.src;
		}
	} else if (Statement s := subTree) {
		if (s.src?) {
			location = s.src;
		}
	}
	
	return location;
}