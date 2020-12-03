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



/**
 *	###########
 *	CONFIG
 *	###########
 */
public int MASS_THRESHOLD = 3;


/**
 *	###########
 *	GLOBALS
 *	###########
 */
// 1: Clones
map[str, list[tuple[node, loc]]] clones = ();

// Bucket List
// [hash, <node, loc>]
map[str, list[tuple[node, loc]]] hashBucket = ();


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
	
	
	// 3. For each subtree i and j in the same bucket
	for (hash <- hashBucket) {
		for (subtreeI <- hashBucket[hash]) {
			//writeFile(|home:///subtreeI.txt|, "SubtreeI: <subtreeI[1]> \n <toString(subtreeI[0])>  \n <readFileLines(subtreeI[1])>");
			for (subtreeJ <- hashBucket[hash]) {
				//writeFile(|home:///subtreeJ.txt|, "SubtreeJ: <subtreeJ[1]> \n <toString(subtreeJ[0])>  \n <readFileLines(subtreeJ[1])>");
				
				
				if (subtreeI == subtreeJ) {
					continue;
				}
				
				
				// if CompareTree(i,j) > SimilarityThreashold
				num sim = getSimilarityScore(subtreeI[0], subtreeJ[0]);
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
				}
			}
		}
	}
	
	// remove empty clones
	for (key <- clones) {
		if (size(clones[key]) == 0) {
			clones = delete(clones, key);
		}
	}
	
	
	
	/*
	 *	OUTPUT
	 */
	println("-== Clone Classes ==-");
	for (key <- clones) {
		println("######");
		println("key: <key>");
		println("##");
		for (dup <- clones[key]) {
			println("-----");
			println(dup);
		}
		println("######");
	}
	
	println("-== Stats ==-");
	println("Code Classes: <size(clones)>");
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
		} else {
			hashBucket[hash] = [<cleanNode, nodeLoc>];
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