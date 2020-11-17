module tests::util::cleanCodeLines

import IO;
import List;

import SourceCodeProperties::util;

test bool cleanCodeLinesEmptyLinesTest() {
	return size(cleanCodeLines([])) == 0;
}
test bool cleanCodeLinesEmptyLinesTest2() {
	return size(cleanCodeLines(["  "])) == 0;
}
test bool cleanCodeLinesNormalTest() {
	return size(cleanCodeLines(["  int a = 1;"])) == 1;
}
test bool cleanCodeLinesNormalWithSpacesTest() {
	return size(cleanCodeLines(["  int a = 1;", "  "])) == 1;
}
test bool cleanCodeLinesNormalWithEmptyLineTest() {
	return size(cleanCodeLines(["  int a = 1;", ""])) == 1;
}
test bool cleanCodeLinesNormalTest2() {
	return size(cleanCodeLines(["  int a = 1;", "int b= 2;"])) == 2;
}
test bool cleanCodeLinesCommentsTest2() {
	return size(cleanCodeLines(["  int a = 1;", "//int b= 2;"])) == 1;
}
test bool cleanCodeLinesCommentsTest3() {
	return size(cleanCodeLines(["  int a = 1;", "/*int b= 2;*/"])) == 1;
}
test bool cleanCodeLinesCommentsTest4() {
	return size(cleanCodeLines(["  int a = 1;", "/*heh */int b= 2;"])) == 1;
}
test bool cleanCodeLinesCommentsTest5() {
	return size(cleanCodeLines(["  int a = 1;", "/*heh * /int b= 2;"])) == 1;
}
test bool cleanCodeLinesCommentsTest6() {
	return size(cleanCodeLines(["  /*int a = 1;", "heh * /int b= 2;"])) == 0;
}
test bool cleanCodeLinesCommentsTest7() {
	return size(cleanCodeLines(["  /*int a = 1;", "heh */int b= 2;"])) == 0;
}
test bool cleanCodeLinesCommentsTest8() {
	return size(cleanCodeLines(["  /*int a = 1;", "heh// */int b= 2;"])) == 0;
}
test bool cleanCodeLinesCommentsTest9() {
	return size(cleanCodeLines(["  int a = 1;", "int b= 2;//aa"])) == 2;
}