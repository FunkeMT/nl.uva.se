var results = {
		
	"Project-Name": "MySimpleTest",
	"metadata": {
        "Volume": 20,
        "%-Duplicated-Lines": 20,
        "Number-Duplicated-Lines": 4,
        "Number-Clones": 8,
        "Number-Clone-Classes": 4,
        "Biggest-Clone-Lines": 1,
        "Biggest-Clone-Class": 2
    }
,
		
	"options": {
    "metadata": [
      "cc",
      "volume",
      "mass"
    ],
    "types": [
      "1",
      "2"
    ]
  }
,
		"files": [
			
{
    "filename": "project://MySimpleTest/src/testClass.java",
    "metadata": {
        "volume": 0,
        "cloneClassesType1": 4
    },
    "results": {
        "type-1": [
            
{
    "metadata": {
        "cc": 1,
        "volume": 1,
        "mass": 5,
        "clones": 2,
        "snippet": "int test = 83;\n"
    },
    "edges": [
{
	"loc": "project://MySimpleTest/src/testClass2.java",
    "fromLine": 5,
    "toLine": 5
}
,
{
	"loc": "project://MySimpleTest/src/testClass.java",
    "fromLine": 5,
    "toLine": 5
}
,]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 1,
        "mass": 4,
        "clones": 2,
        "snippet": "test = 83;\n"
    },
    "edges": [
{
	"loc": "project://MySimpleTest/src/testClass2.java",
    "fromLine": 6,
    "toLine": 6
}
,
{
	"loc": "project://MySimpleTest/src/testClass.java",
    "fromLine": 6,
    "toLine": 6
}
,]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 1,
        "mass": 4,
        "clones": 2,
        "snippet": "test = 1;\n"
    },
    "edges": [
{
	"loc": "project://MySimpleTest/src/testClass2.java",
    "fromLine": 7,
    "toLine": 7
}
,
{
	"loc": "project://MySimpleTest/src/testClass.java",
    "fromLine": 7,
    "toLine": 7
}
,]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 1,
        "mass": 4,
        "clones": 2,
        "snippet": "test = 2;\n"
    },
    "edges": [
{
	"loc": "project://MySimpleTest/src/testClass2.java",
    "fromLine": 8,
    "toLine": 8
}
,
{
	"loc": "project://MySimpleTest/src/testClass.java",
    "fromLine": 8,
    "toLine": 8
}
,]
}
,
        ],
        "type-2": [
            
        ]
    }
}
,
{
    "filename": "project://MySimpleTest/src/testClass2.java",
    "metadata": {
        "volume": 0,
        "cloneClassesType1": 4
    },
    "results": {
        "type-1": [
            
{
    "metadata": {
        "cc": 1,
        "volume": 1,
        "mass": 5,
        "clones": 2,
        "snippet": "int test = 83;\n"
    },
    "edges": [
{
	"loc": "project://MySimpleTest/src/testClass2.java",
    "fromLine": 5,
    "toLine": 5
}
,
{
	"loc": "project://MySimpleTest/src/testClass.java",
    "fromLine": 5,
    "toLine": 5
}
,]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 1,
        "mass": 4,
        "clones": 2,
        "snippet": "test = 83;\n"
    },
    "edges": [
{
	"loc": "project://MySimpleTest/src/testClass2.java",
    "fromLine": 6,
    "toLine": 6
}
,
{
	"loc": "project://MySimpleTest/src/testClass.java",
    "fromLine": 6,
    "toLine": 6
}
,]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 1,
        "mass": 4,
        "clones": 2,
        "snippet": "test = 1;\n"
    },
    "edges": [
{
	"loc": "project://MySimpleTest/src/testClass2.java",
    "fromLine": 7,
    "toLine": 7
}
,
{
	"loc": "project://MySimpleTest/src/testClass.java",
    "fromLine": 7,
    "toLine": 7
}
,]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 1,
        "mass": 4,
        "clones": 2,
        "snippet": "test = 2;\n"
    },
    "edges": [
{
	"loc": "project://MySimpleTest/src/testClass2.java",
    "fromLine": 8,
    "toLine": 8
}
,
{
	"loc": "project://MySimpleTest/src/testClass.java",
    "fromLine": 8,
    "toLine": 8
}
,]
}
,
        ],
        "type-2": [
            
        ]
    }
}
,
		]
	}