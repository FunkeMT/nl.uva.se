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


/**
 *	###########
 *	GLOBALS
 *	###########
 */


// 1: Clones
// TODO Clone List/Map/Set ???

// Bucket List
// [hash, <node, loc>]
map[str, list[tuple[node, loc]]] hashBucket = ();

// Hash value
//int hash = 0;




void basicSubtreeCloneDetector(set[Declaration] ast) {
	// 2: For each subtree i:
	bottom-up visit(ast) {
		case Statement n: {
			addHashToBucket(n);
		}
		case Declaration n: {
			addHashToBucket(n);
			//println("foo");
		}
	}
	
	
	// 3. For each subtree i and j in the same bucket
	for (hash <- hashBucket) {
		for (subtreeI <- hashBucket[hash]) {
			for (subtreeJ <- hashBucket[hash]) {
				if (subtreeI == subtreeJ) {
					continue;
				}
				
				num sim = getSimilarityScore(subtreeI[0], subtreeJ[0]);
				println(sim);
				println(subtreeI[1]);
				println(subtreeJ[1]);
			}
			//println(subtree[1]);
			
			//num sim = getSimilarityScore(subtree[1], hashBucket[subtreeJ][0]);
		}
		/*
		for (subtreeJ <- hashBucket) {
			if (subtreeI != subtreeJ) {
				println("<subtreeI> <subtreeJ>");
				//println(itoString(hashBucket[subtreeI]));
				//println(readFileLines(hashBucket[subtreeI]));
				
				num sim = getSimilarityScore(hashBucket[subtreeI][0], hashBucket[subtreeJ][0]);
				
				if (sim == 1.0) {
						println("<subtreeI> <subtreeJ>");
						println(sim);
						println(hashBucket[subtreeI][1]);
						println(hashBucket[subtreeJ][1]);
				}
				
			}
		}
		*/
	}
	
	//println(hashBucket);
}




private void addHashToBucket(node n) {
	loc nodeLoc = getLocationOfNode(n);
			
	/*
	 * Remove all keyword parameters from the AST
	 * since they are not relevant for the comparison
	 */
	node cleanNode = unsetRec(n);

	// If mass(i) >= MassThreshold
	if (mass(cleanNode) >= MASS_THRESHOLD) {
		//hash += 1;
		
		str hash = toString(cleanNode);
		
		// Then hash i to bucket
		if (hashBucket[hash]?) {
			hashBucket[hash] += [<cleanNode, nodeLoc>];
			//println("foo");
		} else {
			hashBucket[hash] = [<cleanNode, nodeLoc>];
			//println("foo");
		}
	}
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
 * Formula:
 * Similarity = 2 x S / (2 x S + L + R)
 *
 */
public num getSimilarityScore(node t1, node t2) {
	list[value] tree1 = getChildren(t1);
	list[value] tree2 = getChildren(t2);
	
	num s = size(tree1 & tree2);
	num l = size(tree1 - tree2);
	num r = size(tree2 - tree1); 
		
	return (2 * s) / (2 * s + l + r);
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