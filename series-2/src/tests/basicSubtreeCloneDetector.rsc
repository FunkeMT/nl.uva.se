module tests::basicSubtreeCloneDetector

import basicSubtreeCloneDetector;
import String;
import utils::utils;
import List;
import Set;
import IO;

import lang::java::m3::AST;
import tests::constants;

private Statement getStatement1() {
	Statement statement = expressionStatement(methodCall(false, qualifiedName(
		simpleName("system"),simpleName("out")),"println", [
			stringLiteral("\"Hello\"")]));
	statement.src = |project://smallsql0.21_src/src/smallsql/junit/TestOperatoren.java|(5383,11,<101,15>,<101,26>);
	return statement;
}

private Statement getStatement2() {
	Statement statement = expressionStatement(methodCall(false, qualifiedName(
		simpleName("system"),simpleName("out")),"println", [
			stringLiteral("\"world!\"")]));
	statement.src = |project://smallsql0.21_src/src/smallsql/junit/TestOperatoren.java|(5385,16,<105,25>,<106,31>);
	return statement;
}
private int countCloneKeys(map[str, list[tuple[node, loc]]] clones) {
	int counter = 0;
	for (key <- clones) {
		counter += 1;
	}
	return counter;
}
private str getFirstKey(map[str, list[tuple[node, loc]]] clones) {
	str res;
	for (key <- clones) {
		res = key;
		break;
	}
	return res;
}

private Statement getBlock1() {
	return block([getStatement1()]);
}
private Statement getBlock2() {
	return block([getStatement2()]);
}
private Statement getBlock3() {
	return block([getStatement1(), getStatement2()]);
}
private Statement getBlock4() {
	return block([getStatement2(), getStatement1()]);
}

test bool getLocationOfNodeTest1() {
	return getLocationOfNode("my_node"(1, true, "abc"), PROJECT_LOCATION) == 
			PROJECT_LOCATION;
}

test bool getLocationOfNodeTest2() {
	return getLocationOfNode(getStatement1(), 
		PROJECT_LOCATION) != PROJECT_LOCATION;
}

test bool getLocationOfNodeTest3() {
	return getLocationOfNode(getStatement1(), 
		PROJECT_LOCATION) == |project://smallsql0.21_src/src/smallsql/junit/TestOperatoren.java|(5383,11,<101,15>,<101,26>);
}

test bool getSimilarityScore1() {
	return getSimilarityScore(getStatement1(), getStatement2()) == 0;
}
test bool getSimilarityScore2() {
	return getSimilarityScore(getStatement1(), getStatement1()) == 1;
}
test bool getSimilarityScore3() {
	return getSimilarityScore(getStatement1(), getBlock1()) == 0;
}
test bool getSimilarityScore4() {
	return getSimilarityScore(getBlock2(), getStatement2()) == 0;
}
test bool getSimilarityScore5() {
	return getSimilarityScore(getBlock3(), getStatement1()) == 0;
}
test bool getSimilarityScore6() {
	return getSimilarityScore(getBlock4(), getStatement2()) == 0;
}
test bool getSimilarityScore7() {
	return getSimilarityScore(getBlock4(), getBlock4()) == 1;
}
test bool getSimilarityScore7() {
	return getSimilarityScore(getBlock4(), getBlock3()) == 0;
}
test bool testMass1() {
	return mass(getStatement1()) == 6;
}
test bool testMass2() {
	return mass(getBlock1()) == 7;
}
test bool removeEmptyClones1() {
	map[str, list[tuple[node, loc]]] clones = ();
	return countCloneKeys(removeEmptyClones(clones)) == 0;
}
test bool removeEmptyClones2() {
	map[str, list[tuple[node, loc]]] clones = ();
	clones["test"] = [];
	return countCloneKeys(removeEmptyClones(clones)) == 0;
}

test bool removeEmptyClones3() {
	map[str, list[tuple[node, loc]]] clones = ();
	clones["test1"] = [];
	clones["test2"] = [];
	return countCloneKeys(removeEmptyClones(clones)) == 0;
}

test bool removeEmptyClones4() {
	map[str, list[tuple[node, loc]]] clones = ();
	clones["test1"] = [];
	clones["test2"] = [];
	clones["test3"] = [];
	return countCloneKeys(removeEmptyClones(clones)) == 0;
}

test bool removeEmptyClones5() {
	map[str, list[tuple[node, loc]]] clones = ();
	clones["test"] = [<getStatement1(), PROJECT_LOCATION>];
	return countCloneKeys(removeEmptyClones(clones)) == 1;
}

test bool removeEmptyClones6() {
	map[str, list[tuple[node, loc]]] clones = ();
	clones["test1"] = [<getStatement1(), PROJECT_LOCATION>];
	clones["test2"] = [];
	return countCloneKeys(removeEmptyClones(clones)) == 1;
}

test bool addClonePair1() {
	map[str, list[tuple[node, loc]]] clones = ();
	node st1 = getStatement1();
	node st2 = getStatement2();
	loc nodeLoc1 = getLocationOfNode(st1, PROJECT_LOCATION);
	loc nodeLoc2 = getLocationOfNode(st1, PROJECT_LOCATION);
	tuple[node, loc] subtreeI = <st1, nodeLoc1>;
	tuple[node, loc] subtreeJ = <st2, nodeLoc2>;
	clones = addClonePair(clones, subtreeI, subtreeJ);
	str key = getFirstKey(clones);
	return size(clones[key]) == 2 && clones[key][0] == subtreeI &&
		clones[key][1] == subtreeJ;
}

test bool removeDuplicatesFromClones1() {
	map[str, list[tuple[node, loc]]] clones = ();
	node st1 = getStatement1();
	node st2 = getStatement1();
	loc nodeLoc1 = getLocationOfNode(st1, PROJECT_LOCATION);
	loc nodeLoc2 = getLocationOfNode(st2, PROJECT_LOCATION);
	tuple[node, loc] subtreeI = <st1, nodeLoc1>;
	tuple[node, loc] subtreeJ = <st2, nodeLoc2>;
	clones = addClonePair(clones, subtreeI, subtreeJ);
	clones = removeDuplicatesFromClones(clones, subtreeI);
	return countCloneKeys(clones) == 1;
}

test bool updateItems1() {
	node st1 = getStatement1();
	node st2 = getStatement2();
	loc nodeLoc1 = getLocationOfNode(st1, PROJECT_LOCATION);
	loc nodeLoc2 = getLocationOfNode(st2, PROJECT_LOCATION);
	list[tuple[node, loc]] items = [<st1, nodeLoc1>, <st2, nodeLoc2>];
	tuple[node, loc] clone = items[0];
	items = updateItems(items, nodeLoc2, clone);
	return items[0][0] == st1 && items[1][0] == st2;
}

test bool handleStageThreeItteration1() {
	map[str, list[tuple[node, loc]]] clones = ();
	node st1 = getStatement1();
	node st2 = getStatement2();
	loc nodeLoc1 = getLocationOfNode(st1, PROJECT_LOCATION);
	loc nodeLoc2 = getLocationOfNode(st2, PROJECT_LOCATION);
	tuple[node, loc] subtreeI = <st1, nodeLoc1>;
	tuple[node, loc] subtreeJ = <st2, nodeLoc2>;
	clones = handleStageThreeItteration(clones, subtreeI, subtreeJ);
	return countCloneKeys(clones) == 0;
}

test bool handleStageThreeItteration2() {
	map[str, list[tuple[node, loc]]] clones = ();
	node st1 = getStatement1();
	node st2 = getStatement2();
	loc nodeLoc1 = getLocationOfNode(st1, PROJECT_LOCATION);
	loc nodeLoc2 = getLocationOfNode(st2, PROJECT_LOCATION);
	tuple[node, loc] subtreeI = <st1, nodeLoc1>;
	tuple[node, loc] subtreeJ = <st1, nodeLoc2>;
	clones = handleStageThreeItteration(clones, subtreeI, subtreeJ);
	return countCloneKeys(clones) == 1;
}

test bool setupBucket1() {
	map[str, list[tuple[node, loc]]] hashBucket = ();
	set[Declaration] ast = {method(byte(), "methodName", [], [], getBlock1())};
	loc baseLocation = getBlock1().src;
	hashBucket = setupBucket(hashBucket, ast, baseLocation);
	return countCloneKeys(hashBucket) == 3;
}
test bool setupBucket2() {
	map[str, list[tuple[node, loc]]] hashBucket = ();
	Declaration methodTest = method(byte(), "methodName", [], [], getBlock1());
	set[Declaration] ast = {methodTest};
	loc baseLocation = getBlock1().src;
	hashBucket = setupBucket(hashBucket, ast, baseLocation);
	str key = getFirstKey(hashBucket);
	return hashBucket[key][0][1] == baseLocation;
}
test bool addHashToBucket1() {
	node n = getBlock3();
	map[str, list[tuple[node, loc]]] bucket = ();
	loc baseLocation = PROJECT_LOCATION;
	int before = countCloneKeys(bucket); 
	bucket = addHashToBucket(n, bucket, baseLocation);
	return 1 == countCloneKeys(bucket);
}
test bool addHashToBucket1() {
	node n = getBlock1();
	map[str, list[tuple[node, loc]]] bucket = ();
	loc baseLocation = PROJECT_LOCATION;
	int before = countCloneKeys(bucket); 
	bucket = addHashToBucket(n, bucket, baseLocation);
	return before + 1 == countCloneKeys(bucket);
}

test bool basicSubtreeCloneDetector1() {
	loc baseLocation = PROJECT_LOCATION;
	set[Declaration] ast = {
		method(byte(), "methodName", [], [], getBlock3())
		};
	map[str, list[tuple[node, loc]]] clones = basicSubtreeCloneDetector(
		ast, baseLocation, 1);
	return countCloneKeys(clones) == 0;
}