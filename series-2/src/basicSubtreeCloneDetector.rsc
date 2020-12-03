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

private map[str, list[tuple[node, loc]]] setupBucket(map[str, list[tuple[node, loc]]] hashBucket, set[Declaration] ast) {
	// 2: For each subtree i:
	bottom-up visit(ast) {
		case Statement n: {
			hashBucket = addHashToBucket(n, hashBucket);
		}
		case Declaration n: {
			hashBucket = addHashToBucket(n, hashBucket);
		}
	}
	return hashBucket;
}

list[tuple[node, loc]] updateItems(list[tuple[node, loc]] items, loc subtreeLoc, tuple[node, loc] clone) {
	loc cloneLoc = clone[1];

	// If the clone is within the subtree, remove the clone.
	bool withinSameLineArea = cloneLoc.begin.line < subtreeLoc.end.line &&
			cloneLoc.end.line > subtreeLoc.begin.line;
	bool exactSameLineArea = cloneLoc.begin.line == subtreeLoc.begin.line &&
			cloneLoc.end.line == subtreeLoc.end.line;

  	if ((subtreeLoc.uri != cloneLoc.uri) ||
		(!withinSameLineArea) || (exactSameLineArea && 
		!(cloneLoc.end.column <= subtreeLoc.end.column &&
		cloneLoc.begin.column >= subtreeLoc.begin.column))) {
	  	items += [clone];
  	}
	return items;
}
void basicSubtreeCloneDetector(set[Declaration] ast) {
	// 2: For each subtree i:
	map[str, list[tuple[node, loc]]] hashBucket = setupBucket((), ast);
	
	// 3. For each subtree i and j in the same bucket
	for (hash <- hashBucket) {
		for (subtreeI <- hashBucket[hash]) {
			for (subtreeJ <- hashBucket[hash]) {
				if (subtreeI == subtreeJ) {
					continue;
				}
				
				// if CompareTree(i,j) > SimilarityThreashold
				// Then { 
				if (getSimilarityScore(subtreeI[0], subtreeJ[0]) >= 1) {
					// For each subtree s of i
					// 		if IsMember(Clones,s)
					// 			Then RemoveClonePair(Clones,s)
					bottom-up visit(subtreeI[0]) {
						case node s: {
							str key = toString(s);
							if (key in clones) {
								list[tuple[node, loc]] items = [];
								for (clone <- clones[key]) {
									items = updateItems(items, subtreeI[1], clone);
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
							key = toString(s);
							if (key in clones) {
								list[tuple[node, loc]] items = [];
								for (clone <- clones[key]) {
									items = updateItems(items, subtreeJ[1], clone);
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




private map[str, list[tuple[node, loc]]] addHashToBucket(node n, map[str, list[tuple[node, loc]]] bucket) {
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
		if (!bucket[hash]?) {
			bucket[hash] = [];
		}
		loc nodeLoc = getLocationOfNode(n);
		bucket[hash] += [<cleanNode, nodeLoc>];
	}
	return bucket;
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