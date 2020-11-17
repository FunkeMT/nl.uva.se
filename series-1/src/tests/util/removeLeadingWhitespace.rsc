module tests::util::removeLeadingWhitespace

import IO;
import List;

import SourceCodeProperties::util;


test bool removeLeadingWhitespaceTest1() {
	return size(removeLeadingWhitespace(["  int a = 1;", "int b= 2;//aa"])) == 2;
}
test bool removeLeadingWhitespaceTest2() {
	return removeLeadingWhitespace(["  int a = 1;", "int b= 2;//aa"])[0] == "int a = 1;";
}
test bool removeLeadingWhitespaceTest3() {
	return removeLeadingWhitespace(["  int a = 1;", "int b= 2;//aa"])[1] == "int b= 2;//aa";
}
test bool removeLeadingWhitespaceTest4() {
	return size(removeLeadingWhitespace(["", "    "])) == 2;
}
test bool removeLeadingWhitespaceTest5() {
	return removeLeadingWhitespace(["  int a = 1;", "int b= 2;   "])[1] == "int b= 2;   ";
}