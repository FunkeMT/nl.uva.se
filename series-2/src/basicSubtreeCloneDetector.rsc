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


/*
{
  "a=1": [tree, tree],
  "{a=1}": [tree, tree],
}
*/

void basicSubtreeCloneDetector(set[Declaration] ast) {
	// 2: For each subtree i:
	bottom-up visit(ast) {
		case Statement n: {
			addHashToBucket(n);
		}
		case Declaration n: {
			addHashToBucket(n);
		}
	}
	map[str, list[tuple[node, loc]]] clones = ();
	
	
	// 3. For each subtree i and j in the same bucket
	for (hash <- hashBucket) {
		for (subtreeI <- hashBucket[hash]) {
			for (subtreeJ <- hashBucket[hash]) {
				if (subtreeI == subtreeJ) {
					continue;
				}
				
				num sim = getSimilarityScore(subtreeI[0], subtreeJ[0]);
				//println(sim);
				//println(subtreeI[1]);
				//println(subtreeJ[1]);
				
				// if CompareTree(i,j) > SimilarityThreashold
				if (sim >= 1) {
					// Then { 

					// For each subtree s of i
					
					// 		if IsMember(Clones,s)
					
					// 			Then RemoveClonePair(Clones,s)
					bottom-up visit(subtreeI[0]) {
						case node s: {
							str key = toString(s);
							if (key in clones) {
								list[tuple[node, loc]] items = [];
								for (clone <- clones[key]) {
									if (subtreeI[1].uri == clone[1].uri) {
										// If the clone is within the subtree, remove the clone.
										num cloneEnd = clone[1].offset + clone[1].length;
										num subtreeEnd = subtreeI[1].offset + subtreeI[1].length;

										if (clone[1].begin.line <= subtreeI[1].end.line && clone[1].end.line >= subtreeI[1].begin.line) {
											bool inner = true;
											if (clone[1].begin.line == subtreeI[1].begin.line &&
												clone[1].end.line == subtreeI[1].end.line) {
												inner = clone[1].end.column <= subtreeI[1].end.column && clone[1].begin.column >= subtreeI[1].begin.column;
											}
											if (!inner) {
											  	items += [clone];
											}
											println(inner);
										} else {
										  	items += [clone];
										}
									} else {
									  	items += [clone];
								  	}
								}
								clones[key] = items;
							}
						}
					}
					
					
					
					
					
					
					// For each subtree s of j
					
				    // 		If IsMember(Clones,s)
				    
					// 			Then RemoveClonePair(Clones,s)
					bottom-up visit(subtreeJ[0]) {
						case node s: {
							str key = toString(s);
							if (key in clones) {
								list[tuple[node, loc]] items = [];
								for (clone <- clones[key]) {
									if (subtreeJ[1].uri == clone[1].uri) {
										// If the clone is within the subtree, remove the clone.
										num cloneEnd = clone[1].offset + clone[1].length;
										num subtreeEnd = subtreeJ[1].offset + subtreeJ[1].length;

										if (clone[1].begin.line <= subtreeJ[1].end.line && clone[1].end.line >= subtreeJ[1].begin.line) {
											bool inner = true;
											if (clone[1].begin.line == subtreeJ[1].begin.line &&
												clone[1].end.line == subtreeJ[1].end.line) {
												inner = clone[1].end.column <= subtreeJ[1].end.column && clone[1].begin.column >= subtreeJ[1].begin.column;
											}
											if (!inner) {
											  	items += [clone];
											}
											println(inner);
										} else {
										  	items += [clone];
										}
									} else {
									  	items += [clone];
								  	}
								}
								clones[key] = items;
							}
						}
					}
					
					// AddClonePair(Clones,i,j)
					str key = toString(subtreeJ[0]);
					if (!(clones[key]?)) {
						clones[key] = [];
					}
					clones[key] += [subtreeI, subtreeJ];
					 
		//if (hashBucket[hash]?) {
		//	hashBucket[hash] += [<cleanNode, nodeLoc>];
		//	//println("foo");
		//} else {
		//	hashBucket[hash] = [<cleanNode, nodeLoc>];
		//	//println("foo");
		//}
					// }
					continue;
				}
			}
		}
	}
	println("-====-");
	for (key <- clones) {
		for (dup <- clones[key]) {
			println(dup);
		}
	}
	int a = 1;
	
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