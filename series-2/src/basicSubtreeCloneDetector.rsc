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

import utils::utils;


int MASS_THRESHOLD = 0;


/**
 *	###########
 *	PUBLIC
 *	###########
 */
 
@doc{
	Main function.
	Algorithm based on:
	Baxter et al. (1998)
	
	Takes an AST, detect clones and returns the clones grouped by clone-classes.
}
map[str, list[tuple[node, loc]]] basicSubtreeCloneDetector(
	set[Declaration] ast, loc baseLocation, int mass_threshold) {
	MASS_THRESHOLD = mass_threshold;
	
	// Bucket List
	map[str, list[tuple[node, loc]]] hashBucket = setupBucket((), ast,
		baseLocation);

	// 3. For each subtree i and j in the same bucket
	map[str, list[tuple[node, loc]]] clones = ();
	for (hash <- hashBucket) {
		for (subtreeI <- hashBucket[hash]) {
			for (subtreeJ <- hashBucket[hash]) {
				if (subtreeI == subtreeJ) {
					continue;
				}
				clones = handleStageThreeItteration(clones, subtreeI, subtreeJ);
			}
		}
	}
	int prevCount = 0;
	int prevCloneCount = 0;
	int count = size(clones);
	int cloneCountCalc = cloneCount(clones);
	
	while (prevCount != count || prevCloneCount != cloneCountCalc) {
		clones = removeEmptyClones(removeDuplicateSubClones(clones));
		prevCount = count;
		prevCloneCount = cloneCountCalc;
		count = size(clones);
		cloneCountCalc = cloneCount(clones);
	}
	
	list[Statement] flatTree = [];
	top-down visit (ast) {
		case Statement n: {
			flatTree += [n];
		}
	}

	//list[tuple[node, loc, int start, int end]];
	map[str, list[tuple[int cloneIndex, list[int] flatTreeIndex]]] locs = ();
	for (hash <- clones) {
		int cloneIndex = 0;
		for (clone <- clones[hash]) {
			int i = 0;
			for (n <- flatTree) {
				if (n.src == clone[1]) {
					if (!locs[hash]?) locs[hash] = [];
					locs[hash] += [<cloneIndex, [i]>];
					i = i + 1;
					break;
				}
				i = i + 1;
			}
			cloneIndex = cloneIndex + 1;
		}
	}
	for (hash <- locs) {
		bool moveUp = true;
		while (moveUp) {
			moveUp = false;
			set[Statement] prevStatements = {};
			bool neededEscape = false;
			for (location <- locs[hash]) {
				if (location.flatTreeIndex[0] - 1 < 0 || size(prevStatements) >1 || flatTree[location.flatTreeIndex[0]].src.uri != flatTree[location.flatTreeIndex[0]-1].src.uri) {
					neededEscape = true;
					break;
				}
				prevStatements += unsetRec(flatTree[location.flatTreeIndex[0] - 1]);
			}
			if (!neededEscape && size(prevStatements) == 1) {
				// We can move up!
				moveUp = true;
				list[tuple[int cloneIndex, list[int] flatTreeIndex]] newLocs = [];
				for (location <- locs[hash]) {
					newLocs += [<location.cloneIndex, [location.flatTreeIndex[0] - 1] + location.flatTreeIndex>];
				}
				locs[hash] = newLocs;
				//println("We can move up!");
			}
			//println("-");
			
		}
	}
	for (hash <- locs) {
		bool moveDown = true;
		int flatTreeSize = size(flatTree);
		while (moveDown) {
			moveDown = false;
			set[Statement] prevStatements = {};
			bool neededEscape = false;
			for (location <- locs[hash]) {
				if (location.flatTreeIndex[size(location.flatTreeIndex) - 1] + 1 > flatTreeSize -1 || size(prevStatements) > 1 || flatTree[location.flatTreeIndex[size(location.flatTreeIndex) - 1]].src.uri != flatTree[location.flatTreeIndex[size(location.flatTreeIndex) - 1]+1].src.uri) {
					neededEscape = true;
					break;
				}
				prevStatements += unsetRec(flatTree[location.flatTreeIndex[size(location.flatTreeIndex) - 1] + 1]);
			}
			if (!neededEscape && size(prevStatements) == 1) {
				// We can move down!
				moveDown = true;
				list[tuple[int cloneIndex, list[int] flatTreeIndex]] newLocs = [];
				for (location <- locs[hash]) {
					newLocs += [<location.cloneIndex, location.flatTreeIndex + [location.flatTreeIndex[size(location.flatTreeIndex) - 1] + 1]>];
				}
				locs[hash] = newLocs;
				//println("We can move down!");
			}
			//println("+");
		}
	}
	map[str, list[tuple[node, loc]]] results = ();
	for (hash <- locs) {
		if (size(locs[hash]) == 1) continue;
		if (!results[hash]?) {
			results[hash] = [];
		}

		for (location <- locs[hash]) {
			list[Statement] statements = [];
			int offset = 0;
			for (i <- location.flatTreeIndex) {
				statements += [flatTree[i]];
			}
			Statement b = block(statements);
			b.src = statements[0].src;
			int endPos = statements[size(statements) - 1].src.offset + statements[size(statements) - 1].src.length;
			b.src.length = endPos - statements[0].src.offset;
			//b.src.length = (statements[size(statements) - 1].src.offset - statements[0].src.offset) + statements[size(statements) - 1].src.length;
			////b.src.length = statements[size(statements) - 1].src.length + statements[size(statements) - 1].src.offset;
			b.src.end.line = statements[size(statements)-1].src.end.line;
			results[hash] += [<b, b.src>]; 
			//b.src = statements[0];
		}
	}
	//println(nodeFlatTreeLoc);
	
	return results;
}
int cloneCount(map[str, list[tuple[node, loc]]] clones) {
	int tot = 0;
	for (hash <- clones) {
		tot += size(clones[hash]);
	}
	return tot;
}


map[str, list[tuple[node, loc]]] removeDuplicateSubClones(map[str, list[tuple[node, loc]]] clones) {

	for (hash <- clones) {
		list[tuple[node, loc]] items = [];
		for (base <- clones[hash]) {
			loc baseLoc = base[1]; 
			bool isInside = false;
			for (hash2 <- clones) {
				if (hash == hash2) continue;
				for (clone <- clones[hash2]) {
					loc cloneLoc = clone[1];

					// If the clone is within the subtree, remove the clone.
					bool withinSameLineArea = cloneLoc.begin.line < baseLoc.end.line &&
							cloneLoc.end.line > baseLoc.begin.line;
					bool exactSameLineArea = cloneLoc.begin.line == baseLoc.begin.line &&
							cloneLoc.end.line == baseLoc.end.line;
				
					isInside = isInside || !((baseLoc.uri != cloneLoc.uri) ||
						(!withinSameLineArea) || (exactSameLineArea && 
						!(cloneLoc.end.column <= baseLoc.end.column &&
						cloneLoc.begin.column >= baseLoc.begin.column)));
					if (isInside) break;
				}
				if (isInside) break;
			}
			if (!isInside) items += [base];
		}
		clones[hash] = items;
	}
	return clones;
}


/**
 *	###########
 *	PRIVATE
 *	###########
 */

@doc{
	Step #1: "If mass(i) >= MassThreshold"
}
map[str, list[tuple[node, loc]]] addHashToBucket(node n,
	map[str, list[tuple[node, loc]]] bucket, loc baseLocation) {
	/*
	 * Remove all keyword parameters from the AST
	 * since they are not relevant for the comparison
	 */
	node cleanNode = unsetRec(n);

	if (mass(cleanNode) >= MASS_THRESHOLD) {
		str hash = toString(cleanNode);
		
		// Then hash i to bucket
		if (!bucket[hash]?) {
			bucket[hash] = [];
		}
		loc nodeLoc = getLocationOfNode(n, baseLocation);
		bucket[hash] += [<cleanNode, nodeLoc>];
	}
	return bucket;
}

@doc{
	Step #2: "For each subtree i"
	Visit the given AST and add it to the given bucket.
}
map[str, list[tuple[node, loc]]] setupBucket(
	map[str, list[tuple[node, loc]]] hashBucket, set[Declaration] ast,
	loc baseLocation) {
	bottom-up visit(ast) {
		case Statement n: {
			hashBucket = addHashToBucket(n, hashBucket, baseLocation);
		}
		case Declaration n: {
			hashBucket = addHashToBucket(n, hashBucket, baseLocation);
		}
	}
	return hashBucket;
}

@doc{
	Step #3: "SimilarityThreshold" and "IsMember(Clones, s)" and "RemoveClonePair(Clones, s)"
}
map[str, list[tuple[node, loc]]] handleStageThreeItteration(
	map[str, list[tuple[node, loc]]] clones, tuple[node, loc] subtreeI,
	tuple[node, loc] subtreeJ) {
	// if CompareTree(i,j) > SimilarityThreashold
	if (getSimilarityScore(subtreeI[0], subtreeJ[0]) >= 1) {
		// For each subtree s of i
		// 		if IsMember(Clones,s)
		// 			Then RemoveClonePair(Clones,s)
		// For each subtree s of j
	    // 		If IsMember(Clones,s)
		// 			Then RemoveClonePair(Clones,s)
		
		// AddClonePair(Clones,i,j)
		clones = addClonePair(
					removeDuplicatesFromClones(
						removeDuplicatesFromClones(clones, subtreeI),
							subtreeJ), subtreeI, subtreeJ);
	}
	return clones;
}

@doc{
	To group smaller clones which are part of a bigger clone-instance,
	the smaller clone is removed and grouped to one big-clone.
}
list[tuple[node, loc]] updateItems(list[tuple[node, loc]] items, loc subtreeLoc,
	tuple[node, loc] clone) {
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

@doc{
	Remove duplicates.
}
map[str, list[tuple[node, loc]]] removeDuplicatesFromClones(
	map[str,list[tuple[node, loc]]] clones, tuple[node, loc] subtree) {
	
	bottom-up visit(subtree[0]) {
		case node s: {
			str key = toString(s);
			if (key in clones) {
				list[tuple[node, loc]] items = [];
				for (clone <- clones[key]) {
					items = updateItems(items, subtree[1], clone);
				}
				clones[key] = items;
			}
		}
	}
	
	return clones;
}

@doc{
	Add detected clone pair to the clones list.
}
map[str, list[tuple[node, loc]]] addClonePair (
	map[str, list[tuple[node, loc]]] clones, tuple[node, loc] subtreeI,
	tuple[node, loc] subtreeJ) {

	str key = toString(subtreeJ[0]);
	if (!(clones[key]?)) {
		clones[key] = [];
	}
	
	// ?????????? BugFix ????????????
	if (!(subtreeI in clones[key])) clones[key] += [subtreeI];
	if (!(subtreeJ in clones[key])) clones[key] += [subtreeJ];
	
	return clones;
}

@doc{
	Cleans the clone list and removes empty clones.
	Empty clones could be caused by grouping smaller clones into bigger groups.
}
map[str, list[tuple[node, loc]]] removeEmptyClones(
	map[str, list[tuple[node, loc]]] clones) {
	for (key <- clones) {
		if (size(clones[key]) == 0) {
			clones = delete(clones, key);
		}
	}
	return clones;
}


@doc{
	Calculate the similarity score.
	Fromula:
	Similarity = 2 x S / (2 x S + L + R)
}
num getSimilarityScore(node t1, node t2) {
	list[value] tree1 = getChildren(t1);
	list[value] tree2 = getChildren(t2);
	
	num s = size(tree1 & tree2);
	num l = size(tree1 - tree2);
	num r = size(tree2 - tree1); 
		
	return (2 * s) / (2 * s + l + r);
}

@doc{
	TODO
	Needs review!
	
	Tries to get the location from a given sub-tree.
}
loc getLocationOfNode(node subTree, loc location) {
	if (!subTree.src?) return location;

	if (Declaration d := subTree) {
		location = d.src;
	} else if (Expression e := subTree) {
		location = e.src;
	} else if (Statement s := subTree) {
		location = s.src;
	}
	
	return location;
}
