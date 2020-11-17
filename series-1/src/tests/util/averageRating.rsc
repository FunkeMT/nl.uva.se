module tests::util::averageRating

import SourceCodeProperties::util;


test bool averageRatingTest() {
	return averageRating(["--"]) == "--";
}

test bool averageRatingTest2() {
	return averageRating(["-"]) == "-";
}
test bool averageRatingTest3() {
	return averageRating(["o"]) == "o";
}
test bool averageRatingTest4() {
	return averageRating(["+"]) == "+";
}
test bool averageRatingTest5() {
	return averageRating(["++"]) == "++";
}
test bool averageRatingTest6() {
	return averageRating(["--", "++"]) == "o";
}
