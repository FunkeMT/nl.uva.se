var results = {
		
	"Project-Name": "smallsql0.21_src",
	"metadata": {
        "Volume": 23717,
        "%-Duplicated-Lines": 0,
        "Number-Duplicated-Lines": 0,
        "Number-Clones": 0,
        "Number-Clone-Classes": 123,
        "Biggest-Clone-Lines": 0,
        "Biggest-Clone-Class": 0
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
    "filename": "project://smallsql0.21_src/src/smallsql/database/CommandSelect.java",
    "metadata": {
        "volume": 0,
        "cloneClassesType1": 3
    },
    "results": {
        "type-1": [
            
{
    "metadata": {
        "cc": 2,
        "volume": 4,
        "mass": 13,
        "clones": 4,
        "snippet": "catch(Throwable e){\n\t\t\tcon.rollback(savepoint);\n\t\t\tthrow SmallSQLException.createFromException(e);\n\t\t}\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/CommandSelect.java",
    "fromLine": 436,
    "toLine": 439
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/CommandSelect.java",
    "fromLine": 478,
    "toLine": 481
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/Command.java",
    "fromLine": 138,
    "toLine": 141
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/CommandSelect.java",
    "fromLine": 494,
    "toLine": 497
}
,]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 4,
        "mass": 13,
        "clones": 4,
        "snippet": "catch(Throwable e){\n\t\t\tcon.rollback(savepoint);\n\t\t\tthrow SmallSQLException.createFromException(e);\n\t\t}\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/CommandSelect.java",
    "fromLine": 436,
    "toLine": 439
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/CommandSelect.java",
    "fromLine": 478,
    "toLine": 481
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/Command.java",
    "fromLine": 138,
    "toLine": 141
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/CommandSelect.java",
    "fromLine": 494,
    "toLine": 497
}
,]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 4,
        "mass": 13,
        "clones": 4,
        "snippet": "catch(Throwable e){\n\t\t\tcon.rollback(savepoint);\n\t\t\tthrow SmallSQLException.createFromException(e);\n\t\t}\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/CommandSelect.java",
    "fromLine": 436,
    "toLine": 439
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/CommandSelect.java",
    "fromLine": 478,
    "toLine": 481
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/Command.java",
    "fromLine": 138,
    "toLine": 141
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/CommandSelect.java",
    "fromLine": 494,
    "toLine": 497
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
    "filename": "project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionReturnP1StringAndBinary.java",
    "metadata": {
        "volume": 0,
        "cloneClassesType1": 7
    },
    "results": {
        "type-1": [
            
{
    "metadata": {
        "cc": 2,
        "volume": 4,
        "mass": 13,
        "clones": 2,
        "snippet": "final float getFloat() throws Exception {\n\t\tif(isNull()) return 0;\n\t\treturn Float.parseFloat(getString().trim());\n\t}\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionReturnP1StringAndBinary.java",
    "fromLine": 62,
    "toLine": 65
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionReturnString.java",
    "fromLine": 66,
    "toLine": 69
}
,]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 4,
        "mass": 15,
        "clones": 2,
        "snippet": "final MutableNumeric getNumeric() throws Exception {\n\t\tif(isNull()) return null;\n\t\treturn new MutableNumeric(getString().trim());\n\t}\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionReturnP1StringAndBinary.java",
    "fromLine": 80,
    "toLine": 83
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionReturnString.java",
    "fromLine": 84,
    "toLine": 87
}
,]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 4,
        "mass": 13,
        "clones": 2,
        "snippet": "final long getMoney() throws Exception {\n\t\tif(isNull()) return 0;\n\t\treturn Money.parseMoney(getString().trim());\n\t}\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionReturnP1StringAndBinary.java",
    "fromLine": 74,
    "toLine": 77
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionReturnString.java",
    "fromLine": 78,
    "toLine": 81
}
,]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 4,
        "mass": 13,
        "clones": 2,
        "snippet": "final int getInt() throws Exception {\n\t\tif(isNull()) return 0;\n\t\treturn Integer.parseInt(getString().trim());\n\t}\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionReturnP1StringAndBinary.java",
    "fromLine": 50,
    "toLine": 53
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionReturnString.java",
    "fromLine": 54,
    "toLine": 57
}
,]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 4,
        "mass": 13,
        "clones": 2,
        "snippet": "final long getLong() throws Exception {\n\t\tif(isNull()) return 0;\n\t\treturn Long.parseLong(getString().trim());\n\t}\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionReturnP1StringAndBinary.java",
    "fromLine": 56,
    "toLine": 59
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionReturnString.java",
    "fromLine": 60,
    "toLine": 63
}
,]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 4,
        "mass": 13,
        "clones": 2,
        "snippet": "final boolean getBoolean() throws Exception {\n\t\tif(isNull()) return false;\n\t\treturn Utils.string2boolean(getString().trim());\n\t}\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionReturnP1StringAndBinary.java",
    "fromLine": 44,
    "toLine": 47
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionReturnString.java",
    "fromLine": 48,
    "toLine": 51
}
,]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 4,
        "mass": 13,
        "clones": 2,
        "snippet": "final double getDouble() throws Exception {\n\t\tif(isNull()) return 0;\n\t\treturn Double.parseDouble(getString().trim());\n\t}\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionReturnP1StringAndBinary.java",
    "fromLine": 68,
    "toLine": 71
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionReturnString.java",
    "fromLine": 72,
    "toLine": 75
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
    "filename": "project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionConvert.java",
    "metadata": {
        "volume": 0,
        "cloneClassesType1": 2
    },
    "results": {
        "type-1": [
            
{
    "metadata": {
        "cc": 1,
        "volume": 1,
        "mass": 13,
        "clones": 2,
        "snippet": "System.arraycopy(bytes, 0, buffer, 0, Math.min(bytes.length,length) );\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionConvert.java",
    "fromLine": 144,
    "toLine": 144
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionConvert.java",
    "fromLine": 155,
    "toLine": 155
}
,]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 1,
        "mass": 13,
        "clones": 2,
        "snippet": "System.arraycopy(bytes, 0, buffer, 0, Math.min(bytes.length,length) );\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionConvert.java",
    "fromLine": 144,
    "toLine": 144
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionConvert.java",
    "fromLine": 155,
    "toLine": 155
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
    "filename": "project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionRound.java",
    "metadata": {
        "volume": 0,
        "cloneClassesType1": 3
    },
    "results": {
        "type-1": [
            
{
    "metadata": {
        "cc": 2,
        "volume": 5,
        "mass": 14,
        "clones": 2,
        "snippet": "if(places > 0){\n\t\t\tvalue \/= factor;\n\t\t}else{\n\t\t}\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionRound.java",
    "fromLine": 62,
    "toLine": 66
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionTruncate.java",
    "fromLine": 62,
    "toLine": 66
}
,]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 3,
        "mass": 16,
        "clones": 2,
        "snippet": "for(int i=0; i>places; i--){\n\t\t\t}\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionRound.java",
    "fromLine": 56,
    "toLine": 58
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionTruncate.java",
    "fromLine": 56,
    "toLine": 58
}
,]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 3,
        "mass": 16,
        "clones": 2,
        "snippet": "for(int i=0; i<places; i++){\n\t\t\t}\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionRound.java",
    "fromLine": 51,
    "toLine": 53
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionTruncate.java",
    "fromLine": 51,
    "toLine": 53
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
    "filename": "project://smallsql0.21_src/src/smallsql/database/Expressions.java",
    "metadata": {
        "volume": 0,
        "cloneClassesType1": 3
    },
    "results": {
        "type-1": [
            
{
    "metadata": {
        "cc": 2,
        "volume": 2,
        "mass": 15,
        "clones": 5,
        "snippet": "if (idx >= size)\n\t\t\tthrow new IndexOutOfBoundsException(\"Index: \"+idx+\", Size: \"+size);\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/LongList.java",
    "fromLine": 61,
    "toLine": 62
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/Expressions.java",
    "fromLine": 65,
    "toLine": 66
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/LongLongList.java",
    "fromLine": 56,
    "toLine": 57
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/DataSources.java",
    "fromLine": 49,
    "toLine": 50
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/LongLongList.java",
    "fromLine": 62,
    "toLine": 63
}
,]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 3,
        "mass": 12,
        "clones": 7,
        "snippet": "if(size >= data.length ){\n\t\t\tresize(size << 1);\n\t\t}\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/IndexDescriptions.java",
    "fromLine": 71,
    "toLine": 73
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/Columns.java",
    "fromLine": 96,
    "toLine": 98
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/LongList.java",
    "fromLine": 68,
    "toLine": 70
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/Strings.java",
    "fromLine": 64,
    "toLine": 66
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/Expressions.java",
    "fromLine": 72,
    "toLine": 74
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/ForeignKeys.java",
    "fromLine": 64,
    "toLine": 66
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/Expressions.java",
    "fromLine": 79,
    "toLine": 81
}
,]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 3,
        "mass": 12,
        "clones": 7,
        "snippet": "if(size >= data.length ){\n\t\t\tresize(size << 1);\n\t\t}\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/IndexDescriptions.java",
    "fromLine": 71,
    "toLine": 73
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/Columns.java",
    "fromLine": 96,
    "toLine": 98
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/LongList.java",
    "fromLine": 68,
    "toLine": 70
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/Strings.java",
    "fromLine": 64,
    "toLine": 66
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/Expressions.java",
    "fromLine": 72,
    "toLine": 74
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/ForeignKeys.java",
    "fromLine": 64,
    "toLine": 66
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/Expressions.java",
    "fromLine": 79,
    "toLine": 81
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
    "filename": "project://smallsql0.21_src/src/smallsql/database/FileIndexNode.java",
    "metadata": {
        "volume": 0,
        "cloneClassesType1": 5
    },
    "results": {
        "type-1": [
            
{
    "metadata": {
        "cc": 1,
        "volume": 1,
        "mass": 13,
        "clones": 2,
        "snippet": "StorePage storePage = new StorePage( null, -1, file, offset);\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/FileIndexNode.java",
    "fromLine": 82,
    "toLine": 82
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/FileIndexNode.java",
    "fromLine": 92,
    "toLine": 92
}
,]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 1,
        "mass": 13,
        "clones": 2,
        "snippet": "StorePage storePage = new StorePage( null, -1, file, offset);\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/FileIndexNode.java",
    "fromLine": 82,
    "toLine": 82
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/FileIndexNode.java",
    "fromLine": 92,
    "toLine": 92
}
,]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 1,
        "mass": 13,
        "clones": 2,
        "snippet": "StoreImpl store = StoreImpl.createStore( null, storePage, SQLTokenizer.INSERT, fileOffset);\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/FileIndexNode.java",
    "fromLine": 67,
    "toLine": 67
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/FileIndexNode.java",
    "fromLine": 83,
    "toLine": 83
}
,]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 1,
        "mass": 13,
        "clones": 2,
        "snippet": "StoreImpl store = StoreImpl.createStore( null, storePage, SQLTokenizer.INSERT, fileOffset);\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/FileIndexNode.java",
    "fromLine": 67,
    "toLine": 67
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/FileIndexNode.java",
    "fromLine": 83,
    "toLine": 83
}
,]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 1,
        "mass": 13,
        "clones": 2,
        "snippet": "StoreImpl store = StoreImpl.createStore( null, storePage, SQLTokenizer.SELECT, offset);\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/FileIndexNode.java",
    "fromLine": 93,
    "toLine": 93
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/View.java",
    "fromLine": 56,
    "toLine": 56
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
    "filename": "project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java",
    "metadata": {
        "volume": 0,
        "cloneClassesType1": 2
    },
    "results": {
        "type-1": [
            
{
    "metadata": {
        "cc": 2,
        "volume": 9,
        "mass": 27,
        "clones": 2,
        "snippet": "{\n        try{\n            Expression expr = getValue(i);\n            wasNull = expr.isNull();\n            return expr.getLong();\n        }catch(Exception e){\n            throw SmallSQLException.createFromException( e );\n        }\n    }\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java",
    "fromLine": 135,
    "toLine": 143
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java",
    "fromLine": 117,
    "toLine": 125
}
,]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 9,
        "mass": 27,
        "clones": 2,
        "snippet": "{\n        try{\n            Expression expr = getValue(i);\n            wasNull = expr.isNull();\n            return expr.getLong();\n        }catch(Exception e){\n            throw SmallSQLException.createFromException( e );\n        }\n    }\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java",
    "fromLine": 135,
    "toLine": 143
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java",
    "fromLine": 117,
    "toLine": 125
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
    "filename": "project://smallsql0.21_src/src/smallsql/database/SQLParser.java",
    "metadata": {
        "volume": 0,
        "cloneClassesType1": 11
    },
    "results": {
        "type-1": [
            
{
    "metadata": {
        "cc": 3,
        "volume": 5,
        "mass": 20,
        "clones": 2,
        "snippet": "if(token2 != null && token2.value == SQLTokenizer.POINT){\n                                    expr.setNameAfterTableAlias( nextIdentifier() );\n                                }else{\n                                    previousToken();\n                                }\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/SQLParser.java",
    "fromLine": 1332,
    "toLine": 1336
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/SQLParser.java",
    "fromLine": 1239,
    "toLine": 1243
}
,]
}
,
{
    "metadata": {
        "cc": 3,
        "volume": 5,
        "mass": 20,
        "clones": 2,
        "snippet": "if(token2 != null && token2.value == SQLTokenizer.POINT){\n                                    expr.setNameAfterTableAlias( nextIdentifier() );\n                                }else{\n                                    previousToken();\n                                }\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/SQLParser.java",
    "fromLine": 1332,
    "toLine": 1336
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/SQLParser.java",
    "fromLine": 1239,
    "toLine": 1243
}
,]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 2,
        "mass": 13,
        "clones": 3,
        "snippet": "if(token.value == SQLTokenizer.OUTER)\n                \t\ttoken = nextToken(MISSING_JOIN);\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/SQLParser.java",
    "fromLine": 1863,
    "toLine": 1864
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/SQLParser.java",
    "fromLine": 1875,
    "toLine": 1876
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/SQLParser.java",
    "fromLine": 1869,
    "toLine": 1870
}
,]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 2,
        "mass": 13,
        "clones": 3,
        "snippet": "if(token.value == SQLTokenizer.OUTER)\n                \t\ttoken = nextToken(MISSING_JOIN);\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/SQLParser.java",
    "fromLine": 1863,
    "toLine": 1864
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/SQLParser.java",
    "fromLine": 1875,
    "toLine": 1876
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/SQLParser.java",
    "fromLine": 1869,
    "toLine": 1870
}
,]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 2,
        "mass": 13,
        "clones": 3,
        "snippet": "if(token.value == SQLTokenizer.OUTER)\n                \t\ttoken = nextToken(MISSING_JOIN);\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/SQLParser.java",
    "fromLine": 1863,
    "toLine": 1864
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/SQLParser.java",
    "fromLine": 1875,
    "toLine": 1876
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/SQLParser.java",
    "fromLine": 1869,
    "toLine": 1870
}
,]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 5,
        "mass": 19,
        "clones": 2,
        "snippet": "try{\n\t\t\t\t\t\t\tvalue = Integer.parseInt(token.getName(sql) );\n\t\t\t\t\t\t}catch(Exception e){\n\t\t\t\t\t\t\tthrow createSyntaxError(token, MISSING_NUMBERVALUE );\n\t\t\t\t\t\t}\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/SQLParser.java",
    "fromLine": 849,
    "toLine": 853
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/SQLParser.java",
    "fromLine": 839,
    "toLine": 843
}
,]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 5,
        "mass": 19,
        "clones": 2,
        "snippet": "try{\n\t\t\t\t\t\t\tvalue = Integer.parseInt(token.getName(sql) );\n\t\t\t\t\t\t}catch(Exception e){\n\t\t\t\t\t\t\tthrow createSyntaxError(token, MISSING_NUMBERVALUE );\n\t\t\t\t\t\t}\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/SQLParser.java",
    "fromLine": 849,
    "toLine": 853
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/SQLParser.java",
    "fromLine": 839,
    "toLine": 843
}
,]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 1,
        "mass": 13,
        "clones": 2,
        "snippet": "int length = last.offset + last.length - offset;\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/SQLParser.java",
    "fromLine": 675,
    "toLine": 675
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/SQLParser.java",
    "fromLine": 1105,
    "toLine": 1105
}
,]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 1,
        "mass": 13,
        "clones": 2,
        "snippet": "int length = last.offset + last.length - offset;\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/SQLParser.java",
    "fromLine": 675,
    "toLine": 675
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/SQLParser.java",
    "fromLine": 1105,
    "toLine": 1105
}
,]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 3,
        "mass": 14,
        "clones": 2,
        "snippet": "catch(NumberFormatException e){\n            throw createSyntaxError(token, Language.STXADD_NOT_NUMBER, token.getName(sql));\n        }\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/SQLParser.java",
    "fromLine": 1935,
    "toLine": 1937
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/SQLParser.java",
    "fromLine": 355,
    "toLine": 357
}
,]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 3,
        "mass": 14,
        "clones": 2,
        "snippet": "catch(NumberFormatException e){\n            throw createSyntaxError(token, Language.STXADD_NOT_NUMBER, token.getName(sql));\n        }\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/SQLParser.java",
    "fromLine": 1935,
    "toLine": 1937
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/SQLParser.java",
    "fromLine": 355,
    "toLine": 357
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
    "filename": "project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionHour.java",
    "metadata": {
        "volume": 0,
        "cloneClassesType1": 1
    },
    "results": {
        "type-1": [
            
{
    "metadata": {
        "cc": 1,
        "volume": 1,
        "mass": 14,
        "clones": 6,
        "snippet": "DateTime.Details details = new DateTime.Details(param1.getLong());\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionMonth.java",
    "fromLine": 50,
    "toLine": 50
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionHour.java",
    "fromLine": 50,
    "toLine": 50
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionDayOfYear.java",
    "fromLine": 50,
    "toLine": 50
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionMinute.java",
    "fromLine": 50,
    "toLine": 50
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionDayOfMonth.java",
    "fromLine": 50,
    "toLine": 50
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionYear.java",
    "fromLine": 50,
    "toLine": 50
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
    "filename": "project://smallsql0.21_src/src/smallsql/junit/TestFunctions.java",
    "metadata": {
        "volume": 0,
        "cloneClassesType1": 1
    },
    "results": {
        "type-1": [
            
{
    "metadata": {
        "cc": 2,
        "volume": 10,
        "mass": 33,
        "clones": 4,
        "snippet": "public void tearDown(){\n        try{\n            Connection con = AllTests.getConnection();\n            Statement st = con.createStatement();\n            st.execute(\"drop table \" + table);\n            st.close();\n        }catch(Throwable e){\n        }\n    }\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestOperatoren.java",
    "fromLine": 95,
    "toLine": 104
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestDataTypes.java",
    "fromLine": 68,
    "toLine": 77
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestMoneyRounding.java",
    "fromLine": 53,
    "toLine": 62
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestFunctions.java",
    "fromLine": 374,
    "toLine": 383
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
    "filename": "project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionLCase.java",
    "metadata": {
        "volume": 0,
        "cloneClassesType1": 1
    },
    "results": {
        "type-1": [
            
{
    "metadata": {
        "cc": 2,
        "volume": 4,
        "mass": 12,
        "clones": 2,
        "snippet": "final byte[] getBytes() throws Exception{\n        if(isNull()) return null;\n        return getString().getBytes();\n\t}\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionLCase.java",
    "fromLine": 52,
    "toLine": 55
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionUCase.java",
    "fromLine": 52,
    "toLine": 55
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
    "filename": "project://smallsql0.21_src/src/smallsql/database/TableResult.java",
    "metadata": {
        "volume": 0,
        "cloneClassesType1": 2
    },
    "results": {
        "type-1": [
            
{
    "metadata": {
        "cc": 1,
        "volume": 1,
        "mass": 19,
        "clones": 2,
        "snippet": "store = ((StorePageLink)insertStorePages.get( (int)(filePos & 0x3FFFFFFFFFFFFFFFL) )).getStore( table, con, lock);\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/TableResult.java",
    "fromLine": 180,
    "toLine": 180
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/TableResult.java",
    "fromLine": 186,
    "toLine": 186
}
,]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 1,
        "mass": 19,
        "clones": 2,
        "snippet": "store = ((StorePageLink)insertStorePages.get( (int)(filePos & 0x3FFFFFFFFFFFFFFFL) )).getStore( table, con, lock);\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/TableResult.java",
    "fromLine": 180,
    "toLine": 180
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/TableResult.java",
    "fromLine": 186,
    "toLine": 186
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
    "filename": "project://smallsql0.21_src/src/smallsql/database/Command.java",
    "metadata": {
        "volume": 0,
        "cloneClassesType1": 1
    },
    "results": {
        "type-1": [
            
{
    "metadata": {
        "cc": 2,
        "volume": 4,
        "mass": 13,
        "clones": 4,
        "snippet": "catch(Throwable e){\n\t\t\tcon.rollback(savepoint);\n\t\t\tthrow SmallSQLException.createFromException(e);\n\t\t}\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/CommandSelect.java",
    "fromLine": 436,
    "toLine": 439
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/CommandSelect.java",
    "fromLine": 478,
    "toLine": 481
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/Command.java",
    "fromLine": 138,
    "toLine": 141
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/CommandSelect.java",
    "fromLine": 494,
    "toLine": 497
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
    "filename": "project://smallsql0.21_src/src/smallsql/junit/TestAlterTable2.java",
    "metadata": {
        "volume": 0,
        "cloneClassesType1": 3
    },
    "results": {
        "type-1": [
            
{
    "metadata": {
        "cc": 1,
        "volume": 1,
        "mass": 18,
        "clones": 2,
        "snippet": "assertRSMetaData( rs, new String[]{\"a\", \"b\"},  new int[]{Types.VARCHAR, Types.VARCHAR} );\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestAlterTable2.java",
    "fromLine": 47,
    "toLine": 47
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestAlterTable2.java",
    "fromLine": 77,
    "toLine": 77
}
,]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 1,
        "mass": 18,
        "clones": 2,
        "snippet": "assertRSMetaData( rs, new String[]{\"a\", \"b\"},  new int[]{Types.VARCHAR, Types.VARCHAR} );\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestAlterTable2.java",
    "fromLine": 47,
    "toLine": 47
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestAlterTable2.java",
    "fromLine": 77,
    "toLine": 77
}
,]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 7,
        "mass": 18,
        "clones": 2,
        "snippet": "public void tearDown(){\n        try {\n            dropTable( AllTests.getConnection(), table );\n        } catch (SQLException ex) {\n            ex.printStackTrace();\n        }\n    }\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestAlterTable2.java",
    "fromLine": 20,
    "toLine": 26
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestAlterTable.java",
    "fromLine": 39,
    "toLine": 45
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
    "filename": "project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionTimestampDiff.java",
    "metadata": {
        "volume": 0,
        "cloneClassesType1": 9
    },
    "results": {
        "type-1": [
            
{
    "metadata": {
        "cc": 1,
        "volume": 1,
        "mass": 14,
        "clones": 3,
        "snippet": "DateTime.Details details1 = new DateTime.Details(param1.getLong());\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionTimestampDiff.java",
    "fromLine": 110,
    "toLine": 110
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionTimestampDiff.java",
    "fromLine": 115,
    "toLine": 115
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionTimestampDiff.java",
    "fromLine": 120,
    "toLine": 120
}
,]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 1,
        "mass": 14,
        "clones": 3,
        "snippet": "DateTime.Details details1 = new DateTime.Details(param1.getLong());\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionTimestampDiff.java",
    "fromLine": 110,
    "toLine": 110
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionTimestampDiff.java",
    "fromLine": 115,
    "toLine": 115
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionTimestampDiff.java",
    "fromLine": 120,
    "toLine": 120
}
,]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 1,
        "mass": 14,
        "clones": 3,
        "snippet": "DateTime.Details details1 = new DateTime.Details(param1.getLong());\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionTimestampDiff.java",
    "fromLine": 110,
    "toLine": 110
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionTimestampDiff.java",
    "fromLine": 115,
    "toLine": 115
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionTimestampDiff.java",
    "fromLine": 120,
    "toLine": 120
}
,]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 1,
        "mass": 14,
        "clones": 6,
        "snippet": "DateTime.Details details2 = new DateTime.Details(param2.getLong());\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionTimestampAdd.java",
    "fromLine": 87,
    "toLine": 87
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionTimestampAdd.java",
    "fromLine": 92,
    "toLine": 92
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionTimestampAdd.java",
    "fromLine": 97,
    "toLine": 97
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionTimestampDiff.java",
    "fromLine": 109,
    "toLine": 109
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionTimestampDiff.java",
    "fromLine": 114,
    "toLine": 114
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionTimestampDiff.java",
    "fromLine": 119,
    "toLine": 119
}
,]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 1,
        "mass": 14,
        "clones": 6,
        "snippet": "DateTime.Details details2 = new DateTime.Details(param2.getLong());\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionTimestampAdd.java",
    "fromLine": 87,
    "toLine": 87
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionTimestampAdd.java",
    "fromLine": 92,
    "toLine": 92
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionTimestampAdd.java",
    "fromLine": 97,
    "toLine": 97
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionTimestampDiff.java",
    "fromLine": 109,
    "toLine": 109
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionTimestampDiff.java",
    "fromLine": 114,
    "toLine": 114
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionTimestampDiff.java",
    "fromLine": 119,
    "toLine": 119
}
,]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 1,
        "mass": 14,
        "clones": 6,
        "snippet": "DateTime.Details details2 = new DateTime.Details(param2.getLong());\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionTimestampAdd.java",
    "fromLine": 87,
    "toLine": 87
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionTimestampAdd.java",
    "fromLine": 92,
    "toLine": 92
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionTimestampAdd.java",
    "fromLine": 97,
    "toLine": 97
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionTimestampDiff.java",
    "fromLine": 109,
    "toLine": 109
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionTimestampDiff.java",
    "fromLine": 114,
    "toLine": 114
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionTimestampDiff.java",
    "fromLine": 119,
    "toLine": 119
}
,]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 4,
        "mass": 13,
        "clones": 2,
        "snippet": "Object getObject() throws Exception {\n\t\tif(isNull()) return null;\n\t\treturn Utils.getInteger(getInt());\n\t}\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionReturnInt.java",
    "fromLine": 81,
    "toLine": 84
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionTimestampDiff.java",
    "fromLine": 154,
    "toLine": 157
}
,]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 4,
        "mass": 14,
        "clones": 2,
        "snippet": "final MutableNumeric getNumeric() throws Exception {\n\t\tif(isNull()) return null;\n\t\treturn new MutableNumeric(getInt());\n\t}\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionReturnInt.java",
    "fromLine": 75,
    "toLine": 78
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionTimestampDiff.java",
    "fromLine": 148,
    "toLine": 151
}
,]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 4,
        "mass": 13,
        "clones": 2,
        "snippet": "final String getString() throws Exception {\n\t\tif(isNull()) return null;\n\t\treturn String.valueOf(getInt());\n\t}\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionReturnInt.java",
    "fromLine": 87,
    "toLine": 90
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionTimestampDiff.java",
    "fromLine": 160,
    "toLine": 163
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
    "filename": "project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionReturnString.java",
    "metadata": {
        "volume": 0,
        "cloneClassesType1": 7
    },
    "results": {
        "type-1": [
            
{
    "metadata": {
        "cc": 2,
        "volume": 4,
        "mass": 13,
        "clones": 2,
        "snippet": "final float getFloat() throws Exception {\n\t\tif(isNull()) return 0;\n\t\treturn Float.parseFloat(getString().trim());\n\t}\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionReturnP1StringAndBinary.java",
    "fromLine": 62,
    "toLine": 65
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionReturnString.java",
    "fromLine": 66,
    "toLine": 69
}
,]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 4,
        "mass": 15,
        "clones": 2,
        "snippet": "final MutableNumeric getNumeric() throws Exception {\n\t\tif(isNull()) return null;\n\t\treturn new MutableNumeric(getString().trim());\n\t}\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionReturnP1StringAndBinary.java",
    "fromLine": 80,
    "toLine": 83
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionReturnString.java",
    "fromLine": 84,
    "toLine": 87
}
,]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 4,
        "mass": 13,
        "clones": 2,
        "snippet": "final long getMoney() throws Exception {\n\t\tif(isNull()) return 0;\n\t\treturn Money.parseMoney(getString().trim());\n\t}\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionReturnP1StringAndBinary.java",
    "fromLine": 74,
    "toLine": 77
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionReturnString.java",
    "fromLine": 78,
    "toLine": 81
}
,]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 4,
        "mass": 13,
        "clones": 2,
        "snippet": "final int getInt() throws Exception {\n\t\tif(isNull()) return 0;\n\t\treturn Integer.parseInt(getString().trim());\n\t}\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionReturnP1StringAndBinary.java",
    "fromLine": 50,
    "toLine": 53
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionReturnString.java",
    "fromLine": 54,
    "toLine": 57
}
,]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 4,
        "mass": 13,
        "clones": 2,
        "snippet": "final long getLong() throws Exception {\n\t\tif(isNull()) return 0;\n\t\treturn Long.parseLong(getString().trim());\n\t}\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionReturnP1StringAndBinary.java",
    "fromLine": 56,
    "toLine": 59
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionReturnString.java",
    "fromLine": 60,
    "toLine": 63
}
,]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 4,
        "mass": 13,
        "clones": 2,
        "snippet": "final boolean getBoolean() throws Exception {\n\t\tif(isNull()) return false;\n\t\treturn Utils.string2boolean(getString().trim());\n\t}\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionReturnP1StringAndBinary.java",
    "fromLine": 44,
    "toLine": 47
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionReturnString.java",
    "fromLine": 48,
    "toLine": 51
}
,]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 4,
        "mass": 13,
        "clones": 2,
        "snippet": "final double getDouble() throws Exception {\n\t\tif(isNull()) return 0;\n\t\treturn Double.parseDouble(getString().trim());\n\t}\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionReturnP1StringAndBinary.java",
    "fromLine": 68,
    "toLine": 71
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionReturnString.java",
    "fromLine": 72,
    "toLine": 75
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
    "filename": "project://smallsql0.21_src/src/smallsql/database/IndexDescriptions.java",
    "metadata": {
        "volume": 0,
        "cloneClassesType1": 2
    },
    "results": {
        "type-1": [
            
{
    "metadata": {
        "cc": 2,
        "volume": 6,
        "mass": 20,
        "clones": 4,
        "snippet": "{\n\t\tif (idx >= size)\n\t\t\tthrow new IndexOutOfBoundsException(\"Column index: \"+idx+\", Size: \"+size);\n\t\treturn data[idx];\n\t}\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/IndexDescriptions.java",
    "fromLine": 62,
    "toLine": 67
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/Columns.java",
    "fromLine": 58,
    "toLine": 62
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/ForeignKeys.java",
    "fromLine": 56,
    "toLine": 60
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/Strings.java",
    "fromLine": 56,
    "toLine": 60
}
,]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 3,
        "mass": 12,
        "clones": 7,
        "snippet": "if(size >= data.length ){\n\t\t\tresize(size << 1);\n\t\t}\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/IndexDescriptions.java",
    "fromLine": 71,
    "toLine": 73
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/Columns.java",
    "fromLine": 96,
    "toLine": 98
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/LongList.java",
    "fromLine": 68,
    "toLine": 70
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/Strings.java",
    "fromLine": 64,
    "toLine": 66
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/Expressions.java",
    "fromLine": 72,
    "toLine": 74
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/ForeignKeys.java",
    "fromLine": 64,
    "toLine": 66
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/Expressions.java",
    "fromLine": 79,
    "toLine": 81
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
    "filename": "project://smallsql0.21_src/src/smallsql/junit/TestTokenizer.java",
    "metadata": {
        "volume": 0,
        "cloneClassesType1": 2
    },
    "results": {
        "type-1": [
            
{
    "metadata": {
        "cc": 2,
        "volume": 4,
        "mass": 14,
        "clones": 2,
        "snippet": "catch (SQLException e) {\n\t\t\tout.println(\"REGULAR: \" + e.getMessage() + '\\n');\n\t\t}\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestTokenizer.java",
    "fromLine": 147,
    "toLine": 150
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestTokenizer.java",
    "fromLine": 87,
    "toLine": 90
}
,]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 4,
        "mass": 14,
        "clones": 2,
        "snippet": "catch (SQLException e) {\n\t\t\tout.println(\"REGULAR: \" + e.getMessage() + '\\n');\n\t\t}\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestTokenizer.java",
    "fromLine": 147,
    "toLine": 150
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestTokenizer.java",
    "fromLine": 87,
    "toLine": 90
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
    "filename": "project://smallsql0.21_src/src/smallsql/database/SmallSQLException.java",
    "metadata": {
        "volume": 0,
        "cloneClassesType1": 2
    },
    "results": {
        "type-1": [
            
{
    "metadata": {
        "cc": 1,
        "volume": 1,
        "mass": 12,
        "clones": 2,
        "snippet": "String message = translateMsg(messageCode, new Object[] { param0 });\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/SmallSQLException.java",
    "fromLine": 145,
    "toLine": 145
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/SmallSQLException.java",
    "fromLine": 182,
    "toLine": 182
}
,]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 1,
        "mass": 12,
        "clones": 2,
        "snippet": "String message = translateMsg(messageCode, new Object[] { param0 });\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/SmallSQLException.java",
    "fromLine": 145,
    "toLine": 145
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/SmallSQLException.java",
    "fromLine": 182,
    "toLine": 182
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
    "filename": "project://smallsql0.21_src/src/smallsql/database/ForeignKeys.java",
    "metadata": {
        "volume": 0,
        "cloneClassesType1": 2
    },
    "results": {
        "type-1": [
            
{
    "metadata": {
        "cc": 2,
        "volume": 6,
        "mass": 20,
        "clones": 4,
        "snippet": "{\n\t\tif (idx >= size)\n\t\t\tthrow new IndexOutOfBoundsException(\"Column index: \"+idx+\", Size: \"+size);\n\t\treturn data[idx];\n\t}\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/IndexDescriptions.java",
    "fromLine": 62,
    "toLine": 67
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/Columns.java",
    "fromLine": 58,
    "toLine": 62
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/ForeignKeys.java",
    "fromLine": 56,
    "toLine": 60
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/Strings.java",
    "fromLine": 56,
    "toLine": 60
}
,]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 3,
        "mass": 12,
        "clones": 7,
        "snippet": "if(size >= data.length ){\n\t\t\tresize(size << 1);\n\t\t}\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/IndexDescriptions.java",
    "fromLine": 71,
    "toLine": 73
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/Columns.java",
    "fromLine": 96,
    "toLine": 98
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/LongList.java",
    "fromLine": 68,
    "toLine": 70
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/Strings.java",
    "fromLine": 64,
    "toLine": 66
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/Expressions.java",
    "fromLine": 72,
    "toLine": 74
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/ForeignKeys.java",
    "fromLine": 64,
    "toLine": 66
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/Expressions.java",
    "fromLine": 79,
    "toLine": 81
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
    "filename": "project://smallsql0.21_src/src/smallsql/database/ExpressionFunction.java",
    "metadata": {
        "volume": 0,
        "cloneClassesType1": 2
    },
    "results": {
        "type-1": [
            
{
    "metadata": {
        "cc": 1,
        "volume": 4,
        "mass": 13,
        "clones": 2,
        "snippet": "Object[] params = {\n    \t\t\tSQLTokenizer.getKeyWord(dataType),\n    \t\t\tSQLTokenizer.getKeyWord(getFunction())\n    \t};\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/ExpressionFunction.java",
    "fromLine": 118,
    "toLine": 121
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/ExpressionFunction.java",
    "fromLine": 106,
    "toLine": 109
}
,]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 4,
        "mass": 13,
        "clones": 2,
        "snippet": "Object[] params = {\n    \t\t\tSQLTokenizer.getKeyWord(dataType),\n    \t\t\tSQLTokenizer.getKeyWord(getFunction())\n    \t};\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/ExpressionFunction.java",
    "fromLine": 118,
    "toLine": 121
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/ExpressionFunction.java",
    "fromLine": 106,
    "toLine": 109
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
    "filename": "project://smallsql0.21_src/src/smallsql/database/SSResultSet.java",
    "metadata": {
        "volume": 0,
        "cloneClassesType1": 2
    },
    "results": {
        "type-1": [
            
{
    "metadata": {
        "cc": 2,
        "volume": 1,
        "mass": 14,
        "clones": 2,
        "snippet": "if(st.rsType == ResultSet.TYPE_FORWARD_ONLY) throw SmallSQLException.create(Language.RSET_FWDONLY);\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/SSResultSet.java",
    "fromLine": 372,
    "toLine": 372
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/SSResultSet.java",
    "fromLine": 413,
    "toLine": 413
}
,]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 1,
        "mass": 14,
        "clones": 2,
        "snippet": "if(st.rsType == ResultSet.TYPE_FORWARD_ONLY) throw SmallSQLException.create(Language.RSET_FWDONLY);\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/SSResultSet.java",
    "fromLine": 372,
    "toLine": 372
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/SSResultSet.java",
    "fromLine": 413,
    "toLine": 413
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
    "filename": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "metadata": {
        "volume": 0,
        "cloneClassesType1": 51
    },
    "results": {
        "type-1": [
            
{
    "metadata": {
        "cc": 1,
        "volume": 1,
        "mass": 19,
        "clones": 2,
        "snippet": "java.io.File file = new java.io.File(tableName+\".bin\");\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 633,
    "toLine": 633
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 674,
    "toLine": 674
}
,]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 1,
        "mass": 19,
        "clones": 2,
        "snippet": "java.io.File file = new java.io.File(tableName+\".bin\");\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 633,
    "toLine": 633
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 674,
    "toLine": 674
}
,]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 3,
        "mass": 13,
        "clones": 12,
        "snippet": "catch(Exception e){\n            System.out.println(\"  Failed:\"+e);\n        }\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 125,
    "toLine": 127
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 150,
    "toLine": 152
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 184,
    "toLine": 186
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 237,
    "toLine": 239
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 358,
    "toLine": 360
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 394,
    "toLine": 396
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 443,
    "toLine": 445
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 498,
    "toLine": 500
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 553,
    "toLine": 555
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 600,
    "toLine": 602
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 676,
    "toLine": 678
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 635,
    "toLine": 637
}
,]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 3,
        "mass": 13,
        "clones": 12,
        "snippet": "catch(Exception e){\n            System.out.println(\"  Failed:\"+e);\n        }\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 125,
    "toLine": 127
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 150,
    "toLine": 152
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 184,
    "toLine": 186
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 237,
    "toLine": 239
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 358,
    "toLine": 360
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 394,
    "toLine": 396
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 443,
    "toLine": 445
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 498,
    "toLine": 500
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 553,
    "toLine": 555
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 600,
    "toLine": 602
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 676,
    "toLine": 678
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 635,
    "toLine": 637
}
,]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 3,
        "mass": 13,
        "clones": 12,
        "snippet": "catch(Exception e){\n            System.out.println(\"  Failed:\"+e);\n        }\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 125,
    "toLine": 127
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 150,
    "toLine": 152
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 184,
    "toLine": 186
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 237,
    "toLine": 239
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 358,
    "toLine": 360
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 394,
    "toLine": 396
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 443,
    "toLine": 445
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 498,
    "toLine": 500
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 553,
    "toLine": 555
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 600,
    "toLine": 602
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 676,
    "toLine": 678
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 635,
    "toLine": 637
}
,]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 3,
        "mass": 13,
        "clones": 12,
        "snippet": "catch(Exception e){\n            System.out.println(\"  Failed:\"+e);\n        }\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 125,
    "toLine": 127
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 150,
    "toLine": 152
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 184,
    "toLine": 186
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 237,
    "toLine": 239
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 358,
    "toLine": 360
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 394,
    "toLine": 396
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 443,
    "toLine": 445
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 498,
    "toLine": 500
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 553,
    "toLine": 555
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 600,
    "toLine": 602
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 676,
    "toLine": 678
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 635,
    "toLine": 637
}
,]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 3,
        "mass": 13,
        "clones": 12,
        "snippet": "catch(Exception e){\n            System.out.println(\"  Failed:\"+e);\n        }\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 125,
    "toLine": 127
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 150,
    "toLine": 152
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 184,
    "toLine": 186
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 237,
    "toLine": 239
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 358,
    "toLine": 360
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 394,
    "toLine": 396
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 443,
    "toLine": 445
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 498,
    "toLine": 500
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 553,
    "toLine": 555
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 600,
    "toLine": 602
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 676,
    "toLine": 678
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 635,
    "toLine": 637
}
,]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 3,
        "mass": 13,
        "clones": 12,
        "snippet": "catch(Exception e){\n            System.out.println(\"  Failed:\"+e);\n        }\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 125,
    "toLine": 127
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 150,
    "toLine": 152
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 184,
    "toLine": 186
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 237,
    "toLine": 239
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 358,
    "toLine": 360
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 394,
    "toLine": 396
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 443,
    "toLine": 445
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 498,
    "toLine": 500
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 553,
    "toLine": 555
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 600,
    "toLine": 602
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 676,
    "toLine": 678
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 635,
    "toLine": 637
}
,]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 3,
        "mass": 13,
        "clones": 12,
        "snippet": "catch(Exception e){\n            System.out.println(\"  Failed:\"+e);\n        }\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 125,
    "toLine": 127
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 150,
    "toLine": 152
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 184,
    "toLine": 186
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 237,
    "toLine": 239
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 358,
    "toLine": 360
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 394,
    "toLine": 396
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 443,
    "toLine": 445
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 498,
    "toLine": 500
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 553,
    "toLine": 555
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 600,
    "toLine": 602
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 676,
    "toLine": 678
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 635,
    "toLine": 637
}
,]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 3,
        "mass": 13,
        "clones": 12,
        "snippet": "catch(Exception e){\n            System.out.println(\"  Failed:\"+e);\n        }\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 125,
    "toLine": 127
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 150,
    "toLine": 152
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 184,
    "toLine": 186
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 237,
    "toLine": 239
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 358,
    "toLine": 360
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 394,
    "toLine": 396
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 443,
    "toLine": 445
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 498,
    "toLine": 500
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 553,
    "toLine": 555
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 600,
    "toLine": 602
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 676,
    "toLine": 678
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 635,
    "toLine": 637
}
,]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 3,
        "mass": 13,
        "clones": 12,
        "snippet": "catch(Exception e){\n            System.out.println(\"  Failed:\"+e);\n        }\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 125,
    "toLine": 127
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 150,
    "toLine": 152
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 184,
    "toLine": 186
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 237,
    "toLine": 239
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 358,
    "toLine": 360
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 394,
    "toLine": 396
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 443,
    "toLine": 445
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 498,
    "toLine": 500
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 553,
    "toLine": 555
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 600,
    "toLine": 602
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 676,
    "toLine": 678
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 635,
    "toLine": 637
}
,]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 3,
        "mass": 13,
        "clones": 12,
        "snippet": "catch(Exception e){\n            System.out.println(\"  Failed:\"+e);\n        }\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 125,
    "toLine": 127
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 150,
    "toLine": 152
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 184,
    "toLine": 186
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 237,
    "toLine": 239
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 358,
    "toLine": 360
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 394,
    "toLine": 396
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 443,
    "toLine": 445
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 498,
    "toLine": 500
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 553,
    "toLine": 555
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 600,
    "toLine": 602
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 676,
    "toLine": 678
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 635,
    "toLine": 637
}
,]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 3,
        "mass": 13,
        "clones": 12,
        "snippet": "catch(Exception e){\n            System.out.println(\"  Failed:\"+e);\n        }\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 125,
    "toLine": 127
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 150,
    "toLine": 152
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 184,
    "toLine": 186
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 237,
    "toLine": 239
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 358,
    "toLine": 360
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 394,
    "toLine": 396
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 443,
    "toLine": 445
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 498,
    "toLine": 500
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 553,
    "toLine": 555
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 600,
    "toLine": 602
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 676,
    "toLine": 678
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 635,
    "toLine": 637
}
,]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 3,
        "mass": 13,
        "clones": 12,
        "snippet": "catch(Exception e){\n            System.out.println(\"  Failed:\"+e);\n        }\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 125,
    "toLine": 127
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 150,
    "toLine": 152
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 184,
    "toLine": 186
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 237,
    "toLine": 239
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 358,
    "toLine": 360
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 394,
    "toLine": 396
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 443,
    "toLine": 445
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 498,
    "toLine": 500
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 553,
    "toLine": 555
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 600,
    "toLine": 602
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 676,
    "toLine": 678
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 635,
    "toLine": 637
}
,]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 3,
        "mass": 24,
        "clones": 2,
        "snippet": "if (count != rowCount)\n                 System.out.println( \"  Failed: Only \" + count + \" rows were inserted.\");\n            else System.out.println( \"  Test time: \" + time + \" ms\");\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 180,
    "toLine": 182
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 121,
    "toLine": 123
}
,]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 3,
        "mass": 24,
        "clones": 2,
        "snippet": "if (count != rowCount)\n                 System.out.println( \"  Failed: Only \" + count + \" rows were inserted.\");\n            else System.out.println( \"  Test time: \" + time + \" ms\");\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 180,
    "toLine": 182
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 121,
    "toLine": 123
}
,]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 3,
        "mass": 16,
        "clones": 2,
        "snippet": "for(int i=0; i<rowCount; i++){\n                fos.write(bytes);\n            }\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 657,
    "toLine": 659
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 620,
    "toLine": 622
}
,]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 3,
        "mass": 16,
        "clones": 2,
        "snippet": "for(int i=0; i<rowCount; i++){\n                fos.write(bytes);\n            }\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 657,
    "toLine": 659
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 620,
    "toLine": 622
}
,]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 4,
        "mass": 12,
        "clones": 13,
        "snippet": "{\n            System.out.println();\n            System.out.println(\"===================================================================\");\n        }\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 127,
    "toLine": 130
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 152,
    "toLine": 155
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 186,
    "toLine": 189
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 239,
    "toLine": 242
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 299,
    "toLine": 302
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 360,
    "toLine": 363
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 396,
    "toLine": 399
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 445,
    "toLine": 448
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 500,
    "toLine": 503
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 555,
    "toLine": 558
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 602,
    "toLine": 605
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 678,
    "toLine": 681
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 637,
    "toLine": 640
}
,]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 4,
        "mass": 12,
        "clones": 13,
        "snippet": "{\n            System.out.println();\n            System.out.println(\"===================================================================\");\n        }\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 127,
    "toLine": 130
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 152,
    "toLine": 155
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 186,
    "toLine": 189
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 239,
    "toLine": 242
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 299,
    "toLine": 302
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 360,
    "toLine": 363
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 396,
    "toLine": 399
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 445,
    "toLine": 448
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 500,
    "toLine": 503
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 555,
    "toLine": 558
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 602,
    "toLine": 605
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 678,
    "toLine": 681
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 637,
    "toLine": 640
}
,]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 4,
        "mass": 12,
        "clones": 13,
        "snippet": "{\n            System.out.println();\n            System.out.println(\"===================================================================\");\n        }\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 127,
    "toLine": 130
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 152,
    "toLine": 155
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 186,
    "toLine": 189
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 239,
    "toLine": 242
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 299,
    "toLine": 302
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 360,
    "toLine": 363
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 396,
    "toLine": 399
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 445,
    "toLine": 448
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 500,
    "toLine": 503
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 555,
    "toLine": 558
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 602,
    "toLine": 605
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 678,
    "toLine": 681
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 637,
    "toLine": 640
}
,]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 4,
        "mass": 12,
        "clones": 13,
        "snippet": "{\n            System.out.println();\n            System.out.println(\"===================================================================\");\n        }\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 127,
    "toLine": 130
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 152,
    "toLine": 155
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 186,
    "toLine": 189
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 239,
    "toLine": 242
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 299,
    "toLine": 302
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 360,
    "toLine": 363
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 396,
    "toLine": 399
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 445,
    "toLine": 448
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 500,
    "toLine": 503
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 555,
    "toLine": 558
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 602,
    "toLine": 605
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 678,
    "toLine": 681
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 637,
    "toLine": 640
}
,]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 4,
        "mass": 12,
        "clones": 13,
        "snippet": "{\n            System.out.println();\n            System.out.println(\"===================================================================\");\n        }\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 127,
    "toLine": 130
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 152,
    "toLine": 155
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 186,
    "toLine": 189
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 239,
    "toLine": 242
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 299,
    "toLine": 302
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 360,
    "toLine": 363
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 396,
    "toLine": 399
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 445,
    "toLine": 448
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 500,
    "toLine": 503
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 555,
    "toLine": 558
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 602,
    "toLine": 605
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 678,
    "toLine": 681
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 637,
    "toLine": 640
}
,]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 4,
        "mass": 12,
        "clones": 13,
        "snippet": "{\n            System.out.println();\n            System.out.println(\"===================================================================\");\n        }\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 127,
    "toLine": 130
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 152,
    "toLine": 155
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 186,
    "toLine": 189
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 239,
    "toLine": 242
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 299,
    "toLine": 302
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 360,
    "toLine": 363
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 396,
    "toLine": 399
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 445,
    "toLine": 448
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 500,
    "toLine": 503
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 555,
    "toLine": 558
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 602,
    "toLine": 605
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 678,
    "toLine": 681
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 637,
    "toLine": 640
}
,]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 4,
        "mass": 12,
        "clones": 13,
        "snippet": "{\n            System.out.println();\n            System.out.println(\"===================================================================\");\n        }\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 127,
    "toLine": 130
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 152,
    "toLine": 155
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 186,
    "toLine": 189
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 239,
    "toLine": 242
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 299,
    "toLine": 302
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 360,
    "toLine": 363
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 396,
    "toLine": 399
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 445,
    "toLine": 448
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 500,
    "toLine": 503
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 555,
    "toLine": 558
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 602,
    "toLine": 605
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 678,
    "toLine": 681
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 637,
    "toLine": 640
}
,]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 4,
        "mass": 12,
        "clones": 13,
        "snippet": "{\n            System.out.println();\n            System.out.println(\"===================================================================\");\n        }\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 127,
    "toLine": 130
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 152,
    "toLine": 155
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 186,
    "toLine": 189
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 239,
    "toLine": 242
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 299,
    "toLine": 302
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 360,
    "toLine": 363
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 396,
    "toLine": 399
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 445,
    "toLine": 448
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 500,
    "toLine": 503
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 555,
    "toLine": 558
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 602,
    "toLine": 605
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 678,
    "toLine": 681
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 637,
    "toLine": 640
}
,]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 4,
        "mass": 12,
        "clones": 13,
        "snippet": "{\n            System.out.println();\n            System.out.println(\"===================================================================\");\n        }\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 127,
    "toLine": 130
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 152,
    "toLine": 155
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 186,
    "toLine": 189
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 239,
    "toLine": 242
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 299,
    "toLine": 302
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 360,
    "toLine": 363
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 396,
    "toLine": 399
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 445,
    "toLine": 448
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 500,
    "toLine": 503
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 555,
    "toLine": 558
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 602,
    "toLine": 605
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 678,
    "toLine": 681
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 637,
    "toLine": 640
}
,]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 4,
        "mass": 12,
        "clones": 13,
        "snippet": "{\n            System.out.println();\n            System.out.println(\"===================================================================\");\n        }\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 127,
    "toLine": 130
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 152,
    "toLine": 155
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 186,
    "toLine": 189
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 239,
    "toLine": 242
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 299,
    "toLine": 302
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 360,
    "toLine": 363
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 396,
    "toLine": 399
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 445,
    "toLine": 448
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 500,
    "toLine": 503
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 555,
    "toLine": 558
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 602,
    "toLine": 605
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 678,
    "toLine": 681
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 637,
    "toLine": 640
}
,]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 4,
        "mass": 12,
        "clones": 13,
        "snippet": "{\n            System.out.println();\n            System.out.println(\"===================================================================\");\n        }\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 127,
    "toLine": 130
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 152,
    "toLine": 155
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 186,
    "toLine": 189
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 239,
    "toLine": 242
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 299,
    "toLine": 302
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 360,
    "toLine": 363
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 396,
    "toLine": 399
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 445,
    "toLine": 448
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 500,
    "toLine": 503
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 555,
    "toLine": 558
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 602,
    "toLine": 605
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 678,
    "toLine": 681
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 637,
    "toLine": 640
}
,]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 4,
        "mass": 12,
        "clones": 13,
        "snippet": "{\n            System.out.println();\n            System.out.println(\"===================================================================\");\n        }\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 127,
    "toLine": 130
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 152,
    "toLine": 155
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 186,
    "toLine": 189
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 239,
    "toLine": 242
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 299,
    "toLine": 302
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 360,
    "toLine": 363
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 396,
    "toLine": 399
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 445,
    "toLine": 448
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 500,
    "toLine": 503
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 555,
    "toLine": 558
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 602,
    "toLine": 605
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 678,
    "toLine": 681
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 637,
    "toLine": 640
}
,]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 4,
        "mass": 12,
        "clones": 13,
        "snippet": "{\n            System.out.println();\n            System.out.println(\"===================================================================\");\n        }\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 127,
    "toLine": 130
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 152,
    "toLine": 155
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 186,
    "toLine": 189
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 239,
    "toLine": 242
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 299,
    "toLine": 302
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 360,
    "toLine": 363
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 396,
    "toLine": 399
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 445,
    "toLine": 448
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 500,
    "toLine": 503
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 555,
    "toLine": 558
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 602,
    "toLine": 605
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 678,
    "toLine": 681
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 637,
    "toLine": 640
}
,]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 1,
        "mass": 12,
        "clones": 2,
        "snippet": "PreparedStatement pr = con.prepareStatement( \"UPDATE \" + tableName + \" SET bi=?,c=?,d=?,de=?,f=?,im=?,i=?,m=?,n=?,r=?,sd=?,si=?,sm=?,sy=?,t=?,ti=?,vb=?,vc=? WHERE i=?\" );\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 412,
    "toLine": 412
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 519,
    "toLine": 519
}
,]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 1,
        "mass": 12,
        "clones": 2,
        "snippet": "PreparedStatement pr = con.prepareStatement( \"UPDATE \" + tableName + \" SET bi=?,c=?,d=?,de=?,f=?,im=?,i=?,m=?,n=?,r=?,sd=?,si=?,sm=?,sy=?,t=?,ti=?,vb=?,vc=? WHERE i=?\" );\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 412,
    "toLine": 412
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 519,
    "toLine": 519
}
,]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 1,
        "mass": 19,
        "clones": 2,
        "snippet": "java.io.FileOutputStream fos = new java.io.FileOutputStream(tableName+\".bin\");\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 618,
    "toLine": 618
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 655,
    "toLine": 655
}
,]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 1,
        "mass": 19,
        "clones": 2,
        "snippet": "java.io.FileOutputStream fos = new java.io.FileOutputStream(tableName+\".bin\");\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 618,
    "toLine": 618
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 655,
    "toLine": 655
}
,]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 1,
        "mass": 19,
        "clones": 2,
        "snippet": "java.io.FileInputStream fis = new java.io.FileInputStream(tableName+\".bin\");\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 624,
    "toLine": 624
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 661,
    "toLine": 661
}
,]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 1,
        "mass": 19,
        "clones": 2,
        "snippet": "java.io.FileInputStream fis = new java.io.FileInputStream(tableName+\".bin\");\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 624,
    "toLine": 624
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 661,
    "toLine": 661
}
,]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 4,
        "mass": 16,
        "clones": 2,
        "snippet": "if (updateCount != 1){\n                    System.out.println( \"  Failed: Update count should be 1 but it is \" + updateCount + \".\");\n                    return;\n                }\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 488,
    "toLine": 491
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 435,
    "toLine": 438
}
,]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 4,
        "mass": 16,
        "clones": 2,
        "snippet": "if (updateCount != 1){\n                    System.out.println( \"  Failed: Update count should be 1 but it is \" + updateCount + \".\");\n                    return;\n                }\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 488,
    "toLine": 491
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 435,
    "toLine": 438
}
,]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 1,
        "mass": 13,
        "clones": 20,
        "snippet": "Statement st = con.createStatement(ResultSet.TYPE_SCROLL_SENSITIVE, ResultSet.CONCUR_UPDATABLE);\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestOrderBy.java",
    "fromLine": 701,
    "toLine": 701
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestOrderBy.java",
    "fromLine": 732,
    "toLine": 732
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestOrderBy.java",
    "fromLine": 763,
    "toLine": 763
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestStatement.java",
    "fromLine": 309,
    "toLine": 309
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestResultSet.java",
    "fromLine": 68,
    "toLine": 68
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestResultSet.java",
    "fromLine": 113,
    "toLine": 113
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestResultSet.java",
    "fromLine": 156,
    "toLine": 156
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestResultSet.java",
    "fromLine": 193,
    "toLine": 193
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestResultSet.java",
    "fromLine": 252,
    "toLine": 252
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestScrollable.java",
    "fromLine": 53,
    "toLine": 53
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestScrollable.java",
    "fromLine": 86,
    "toLine": 86
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestScrollable.java",
    "fromLine": 118,
    "toLine": 118
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestScrollable.java",
    "fromLine": 154,
    "toLine": 154
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestScrollable.java",
    "fromLine": 192,
    "toLine": 192
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestScrollable.java",
    "fromLine": 275,
    "toLine": 275
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 112,
    "toLine": 112
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 169,
    "toLine": 169
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 222,
    "toLine": 222
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 256,
    "toLine": 256
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 377,
    "toLine": 377
}
,]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 1,
        "mass": 13,
        "clones": 20,
        "snippet": "Statement st = con.createStatement(ResultSet.TYPE_SCROLL_SENSITIVE, ResultSet.CONCUR_UPDATABLE);\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestOrderBy.java",
    "fromLine": 701,
    "toLine": 701
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestOrderBy.java",
    "fromLine": 732,
    "toLine": 732
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestOrderBy.java",
    "fromLine": 763,
    "toLine": 763
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestStatement.java",
    "fromLine": 309,
    "toLine": 309
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestResultSet.java",
    "fromLine": 68,
    "toLine": 68
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestResultSet.java",
    "fromLine": 113,
    "toLine": 113
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestResultSet.java",
    "fromLine": 156,
    "toLine": 156
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestResultSet.java",
    "fromLine": 193,
    "toLine": 193
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestResultSet.java",
    "fromLine": 252,
    "toLine": 252
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestScrollable.java",
    "fromLine": 53,
    "toLine": 53
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestScrollable.java",
    "fromLine": 86,
    "toLine": 86
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestScrollable.java",
    "fromLine": 118,
    "toLine": 118
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestScrollable.java",
    "fromLine": 154,
    "toLine": 154
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestScrollable.java",
    "fromLine": 192,
    "toLine": 192
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestScrollable.java",
    "fromLine": 275,
    "toLine": 275
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 112,
    "toLine": 112
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 169,
    "toLine": 169
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 222,
    "toLine": 222
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 256,
    "toLine": 256
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 377,
    "toLine": 377
}
,]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 1,
        "mass": 13,
        "clones": 20,
        "snippet": "Statement st = con.createStatement(ResultSet.TYPE_SCROLL_SENSITIVE, ResultSet.CONCUR_UPDATABLE);\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestOrderBy.java",
    "fromLine": 701,
    "toLine": 701
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestOrderBy.java",
    "fromLine": 732,
    "toLine": 732
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestOrderBy.java",
    "fromLine": 763,
    "toLine": 763
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestStatement.java",
    "fromLine": 309,
    "toLine": 309
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestResultSet.java",
    "fromLine": 68,
    "toLine": 68
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestResultSet.java",
    "fromLine": 113,
    "toLine": 113
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestResultSet.java",
    "fromLine": 156,
    "toLine": 156
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestResultSet.java",
    "fromLine": 193,
    "toLine": 193
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestResultSet.java",
    "fromLine": 252,
    "toLine": 252
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestScrollable.java",
    "fromLine": 53,
    "toLine": 53
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestScrollable.java",
    "fromLine": 86,
    "toLine": 86
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestScrollable.java",
    "fromLine": 118,
    "toLine": 118
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestScrollable.java",
    "fromLine": 154,
    "toLine": 154
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestScrollable.java",
    "fromLine": 192,
    "toLine": 192
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestScrollable.java",
    "fromLine": 275,
    "toLine": 275
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 112,
    "toLine": 112
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 169,
    "toLine": 169
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 222,
    "toLine": 222
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 256,
    "toLine": 256
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 377,
    "toLine": 377
}
,]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 1,
        "mass": 13,
        "clones": 20,
        "snippet": "Statement st = con.createStatement(ResultSet.TYPE_SCROLL_SENSITIVE, ResultSet.CONCUR_UPDATABLE);\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestOrderBy.java",
    "fromLine": 701,
    "toLine": 701
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestOrderBy.java",
    "fromLine": 732,
    "toLine": 732
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestOrderBy.java",
    "fromLine": 763,
    "toLine": 763
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestStatement.java",
    "fromLine": 309,
    "toLine": 309
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestResultSet.java",
    "fromLine": 68,
    "toLine": 68
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestResultSet.java",
    "fromLine": 113,
    "toLine": 113
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestResultSet.java",
    "fromLine": 156,
    "toLine": 156
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestResultSet.java",
    "fromLine": 193,
    "toLine": 193
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestResultSet.java",
    "fromLine": 252,
    "toLine": 252
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestScrollable.java",
    "fromLine": 53,
    "toLine": 53
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestScrollable.java",
    "fromLine": 86,
    "toLine": 86
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestScrollable.java",
    "fromLine": 118,
    "toLine": 118
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestScrollable.java",
    "fromLine": 154,
    "toLine": 154
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestScrollable.java",
    "fromLine": 192,
    "toLine": 192
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestScrollable.java",
    "fromLine": 275,
    "toLine": 275
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 112,
    "toLine": 112
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 169,
    "toLine": 169
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 222,
    "toLine": 222
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 256,
    "toLine": 256
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 377,
    "toLine": 377
}
,]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 1,
        "mass": 13,
        "clones": 20,
        "snippet": "Statement st = con.createStatement(ResultSet.TYPE_SCROLL_SENSITIVE, ResultSet.CONCUR_UPDATABLE);\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestOrderBy.java",
    "fromLine": 701,
    "toLine": 701
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestOrderBy.java",
    "fromLine": 732,
    "toLine": 732
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestOrderBy.java",
    "fromLine": 763,
    "toLine": 763
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestStatement.java",
    "fromLine": 309,
    "toLine": 309
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestResultSet.java",
    "fromLine": 68,
    "toLine": 68
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestResultSet.java",
    "fromLine": 113,
    "toLine": 113
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestResultSet.java",
    "fromLine": 156,
    "toLine": 156
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestResultSet.java",
    "fromLine": 193,
    "toLine": 193
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestResultSet.java",
    "fromLine": 252,
    "toLine": 252
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestScrollable.java",
    "fromLine": 53,
    "toLine": 53
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestScrollable.java",
    "fromLine": 86,
    "toLine": 86
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestScrollable.java",
    "fromLine": 118,
    "toLine": 118
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestScrollable.java",
    "fromLine": 154,
    "toLine": 154
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestScrollable.java",
    "fromLine": 192,
    "toLine": 192
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestScrollable.java",
    "fromLine": 275,
    "toLine": 275
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 112,
    "toLine": 112
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 169,
    "toLine": 169
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 222,
    "toLine": 222
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 256,
    "toLine": 256
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 377,
    "toLine": 377
}
,]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 5,
        "mass": 17,
        "clones": 2,
        "snippet": "{\n            Statement st = con.createStatement();\n            st.execute(\"DELETE FROM \" + tableName);\n            st.close();\n        }\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 726,
    "toLine": 730
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 292,
    "toLine": 297
}
,]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 5,
        "mass": 17,
        "clones": 2,
        "snippet": "{\n            Statement st = con.createStatement();\n            st.execute(\"DELETE FROM \" + tableName);\n            st.close();\n        }\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 726,
    "toLine": 730
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 292,
    "toLine": 297
}
,]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 1,
        "mass": 13,
        "clones": 2,
        "snippet": "Statement st = con.createStatement(ResultSet.TYPE_SCROLL_SENSITIVE, ResultSet.CONCUR_READ_ONLY );\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestOther.java",
    "fromLine": 93,
    "toLine": 93
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 337,
    "toLine": 337
}
,]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 7,
        "mass": 25,
        "clones": 2,
        "snippet": "                if (count == 0){\n                    createTestDataWithClassicInsert( con );\n                    rs.next();\n                    count = rs.getInt(1);\n                }\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 322,
    "toLine": 328
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 208,
    "toLine": 214
}
,]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 7,
        "mass": 25,
        "clones": 2,
        "snippet": "                if (count == 0){\n                    createTestDataWithClassicInsert( con );\n                    rs.next();\n                    count = rs.getInt(1);\n                }\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 322,
    "toLine": 328
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 208,
    "toLine": 214
}
,]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 1,
        "mass": 13,
        "clones": 2,
        "snippet": "System.out.println( \"  Failed: Only \" + (rowCount-count) + \" rows were deleted.\");\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 216,
    "toLine": 216
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 234,
    "toLine": 234
}
,]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 1,
        "mass": 13,
        "clones": 2,
        "snippet": "System.out.println( \"  Failed: Only \" + (rowCount-count) + \" rows were deleted.\");\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 216,
    "toLine": 216
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 234,
    "toLine": 234
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
    "filename": "project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionYear.java",
    "metadata": {
        "volume": 0,
        "cloneClassesType1": 1
    },
    "results": {
        "type-1": [
            
{
    "metadata": {
        "cc": 1,
        "volume": 1,
        "mass": 14,
        "clones": 6,
        "snippet": "DateTime.Details details = new DateTime.Details(param1.getLong());\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionMonth.java",
    "fromLine": 50,
    "toLine": 50
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionHour.java",
    "fromLine": 50,
    "toLine": 50
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionDayOfYear.java",
    "fromLine": 50,
    "toLine": 50
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionMinute.java",
    "fromLine": 50,
    "toLine": 50
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionDayOfMonth.java",
    "fromLine": 50,
    "toLine": 50
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionYear.java",
    "fromLine": 50,
    "toLine": 50
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
    "filename": "project://smallsql0.21_src/src/smallsql/junit/TestMoneyRounding.java",
    "metadata": {
        "volume": 0,
        "cloneClassesType1": 1
    },
    "results": {
        "type-1": [
            
{
    "metadata": {
        "cc": 2,
        "volume": 10,
        "mass": 33,
        "clones": 4,
        "snippet": "public void tearDown(){\n        try{\n            Connection con = AllTests.getConnection();\n            Statement st = con.createStatement();\n            st.execute(\"drop table \" + table);\n            st.close();\n        }catch(Throwable e){\n        }\n    }\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestOperatoren.java",
    "fromLine": 95,
    "toLine": 104
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestDataTypes.java",
    "fromLine": 68,
    "toLine": 77
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestMoneyRounding.java",
    "fromLine": 53,
    "toLine": 62
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestFunctions.java",
    "fromLine": 374,
    "toLine": 383
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
    "filename": "project://smallsql0.21_src/src/smallsql/database/CommandInsert.java",
    "metadata": {
        "volume": 0,
        "cloneClassesType1": 2
    },
    "results": {
        "type-1": [
            
{
    "metadata": {
        "cc": 1,
        "volume": 5,
        "mass": 12,
        "clones": 2,
        "snippet": "{\n                            keyColumnNames.add(column.getName());\n                            keys.add(valueExpress.getObject());\n                            break;\n                        }\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/CommandInsert.java",
    "fromLine": 166,
    "toLine": 170
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/CommandInsert.java",
    "fromLine": 156,
    "toLine": 160
}
,]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 5,
        "mass": 12,
        "clones": 2,
        "snippet": "{\n                            keyColumnNames.add(column.getName());\n                            keys.add(valueExpress.getObject());\n                            break;\n                        }\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/CommandInsert.java",
    "fromLine": 166,
    "toLine": 170
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/CommandInsert.java",
    "fromLine": 156,
    "toLine": 160
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
    "filename": "project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionReplace.java",
    "metadata": {
        "volume": 0,
        "cloneClassesType1": 1
    },
    "results": {
        "type-1": [
            
{
    "metadata": {
        "cc": 3,
        "volume": 3,
        "mass": 13,
        "clones": 2,
        "snippet": "final boolean isNull() throws Exception {\n\t\treturn param1.isNull() || param2.isNull() || param3.isNull();\n\t}\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionSubstring.java",
    "fromLine": 49,
    "toLine": 51
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionReplace.java",
    "fromLine": 49,
    "toLine": 51
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
    "filename": "project://smallsql0.21_src/src/smallsql/database/StorePageMap.java",
    "metadata": {
        "volume": 0,
        "cloneClassesType1": 3
    },
    "results": {
        "type-1": [
            
{
    "metadata": {
        "cc": 1,
        "volume": 1,
        "mass": 12,
        "clones": 3,
        "snippet": "int i = (int)(key % table.length);\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/StorePageMap.java",
    "fromLine": 99,
    "toLine": 99
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/StorePageMap.java",
    "fromLine": 127,
    "toLine": 127
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/StorePageMap.java",
    "fromLine": 198,
    "toLine": 198
}
,]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 1,
        "mass": 12,
        "clones": 3,
        "snippet": "int i = (int)(key % table.length);\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/StorePageMap.java",
    "fromLine": 99,
    "toLine": 99
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/StorePageMap.java",
    "fromLine": 127,
    "toLine": 127
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/StorePageMap.java",
    "fromLine": 198,
    "toLine": 198
}
,]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 1,
        "mass": 12,
        "clones": 3,
        "snippet": "int i = (int)(key % table.length);\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/StorePageMap.java",
    "fromLine": 99,
    "toLine": 99
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/StorePageMap.java",
    "fromLine": 127,
    "toLine": 127
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/StorePageMap.java",
    "fromLine": 198,
    "toLine": 198
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
    "filename": "project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionAbs.java",
    "metadata": {
        "volume": 0,
        "cloneClassesType1": 1
    },
    "results": {
        "type-1": [
            
{
    "metadata": {
        "cc": 2,
        "volume": 5,
        "mass": 16,
        "clones": 3,
        "snippet": "{\n        Object obj = getObject();\n        if(obj == null) return null;\n        return obj.toString();\n    }\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionReturnFloat.java",
    "fromLine": 76,
    "toLine": 80
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionAbs.java",
    "fromLine": 104,
    "toLine": 108
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionFloor.java",
    "fromLine": 46,
    "toLine": 50
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
    "filename": "project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java",
    "metadata": {
        "volume": 0,
        "cloneClassesType1": 9
    },
    "results": {
        "type-1": [
            
{
    "metadata": {
        "cc": 1,
        "volume": 1,
        "mass": 25,
        "clones": 2,
        "snippet": "String[] colNames = {\"TABLE_CAT\", \"TABLE_SCHEM\", \"TABLE_NAME\", \"COLUMN_NAME\", \"DATA_TYPE\", \"TYPE_NAME\", \"COLUMN_SIZE\", \"BUFFER_LENGTH\", \"DECIMAL_DIGITS\", \"NUM_PREC_RADIX\", \"NULLABLE\", \"REMARKS\", \"COLUMN_DEF\", \"SQL_DATA_TYPE\", \"SQL_DATETIME_SUB\", \"CHAR_OCTET_LENGTH\", \"ORDINAL_POSITION\", \"IS_NULLABLE\"};\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestDBMetaData.java",
    "fromLine": 182,
    "toLine": 182
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java",
    "fromLine": 753,
    "toLine": 753
}
,]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 1,
        "mass": 17,
        "clones": 2,
        "snippet": "String[] colNames = {\"TABLE_CAT\",\"TABLE_SCHEM\",\"TABLE_NAME\",\"TABLE_TYPE\",\"REMARKS\",\"TYPE_CAT\",\"TYPE_SCHEM\",\"TYPE_NAME\",\"SELF_REFERENCING_COL_NAME\",\"REF_GENERATION\"};\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestDBMetaData.java",
    "fromLine": 110,
    "toLine": 110
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java",
    "fromLine": 678,
    "toLine": 678
}
,]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 1,
        "mass": 13,
        "clones": 2,
        "snippet": "String[] colNames = {\"TYPE_CAT\", \"TYPE_SCHEM\", \"TYPE_NAME\", \"CLASS_NAME\", \"DATA_TYPE\", \"REMARKS\"};\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestDBMetaData.java",
    "fromLine": 296,
    "toLine": 296
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java",
    "fromLine": 951,
    "toLine": 951
}
,]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 1,
        "mass": 15,
        "clones": 2,
        "snippet": "String[] colNames = {\"PROCEDURE_CAT\", \"PROCEDURE_SCHEM\", \"PROCEDURE_NAME\", \"\", \"\", \"\", \"REMARKS\", \"PROCEDURE_TYPE\"};\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestDBMetaData.java",
    "fromLine": 93,
    "toLine": 93
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java",
    "fromLine": 664,
    "toLine": 664
}
,]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 1,
        "mass": 20,
        "clones": 2,
        "snippet": "String[] colNames = {\"PROCEDURE_CAT\", \"PROCEDURE_SCHEM\", \"PROCEDURE_NAME\", \"COLUMN_NAME\", \"COLUMN_TYPE\", \"DATA_TYPE\", \"TYPE_NAME\", \"PRECISION\", \"LENGTH\", \"SCALE\", \"RADIX\", \"NULLABLE\", \"REMARKS\" };\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestDBMetaData.java",
    "fromLine": 103,
    "toLine": 103
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java",
    "fromLine": 671,
    "toLine": 671
}
,]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 1,
        "mass": 15,
        "clones": 3,
        "snippet": "String[] colNames = {\"SCOPE\", \"COLUMN_NAME\", \"DATA_TYPE\", \"TYPE_NAME\", \"COLUMN_SIZE\", \"BUFFER_LENGTH\", \"DECIMAL_DIGITS\", \"PSEUDO_COLUMN\"};\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestDBMetaData.java",
    "fromLine": 263,
    "toLine": 263
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java",
    "fromLine": 778,
    "toLine": 778
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java",
    "fromLine": 789,
    "toLine": 789
}
,]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 1,
        "mass": 15,
        "clones": 3,
        "snippet": "String[] colNames = {\"SCOPE\", \"COLUMN_NAME\", \"DATA_TYPE\", \"TYPE_NAME\", \"COLUMN_SIZE\", \"BUFFER_LENGTH\", \"DECIMAL_DIGITS\", \"PSEUDO_COLUMN\"};\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestDBMetaData.java",
    "fromLine": 263,
    "toLine": 263
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java",
    "fromLine": 778,
    "toLine": 778
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java",
    "fromLine": 789,
    "toLine": 789
}
,]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 1,
        "mass": 25,
        "clones": 2,
        "snippet": "String[] colNames = {\"TYPE_NAME\", \"DATA_TYPE\", \"PRECISION\", \"LITERAL_PREFIX\", \"LITERAL_SUFFIX\", \"CREATE_PARAMS\", \"NULLABLE\", \"CASE_SENSITIVE\", \"SEARCHABLE\", \"UNSIGNED_ATTRIBUTE\", \"FIXED_PREC_SCALE\", \"AUTO_INCREMENT\", \"LOCAL_TYPE_NAME\", \"MINIMUM_SCALE\", \"MAXIMUM_SCALE\", \"SQL_DATA_TYPE\", \"SQL_DATETIME_SUB\", \"NUM_PREC_RADIX\"};\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestDBMetaData.java",
    "fromLine": 210,
    "toLine": 210
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java",
    "fromLine": 831,
    "toLine": 831
}
,]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 1,
        "mass": 21,
        "clones": 2,
        "snippet": "String[] colNames = {\"PKTABLE_CAT\", \"PKTABLE_SCHEM\", \"PKTABLE_NAME\", \"PKCOLUMN_NAME\", \"FKTABLE_CAT\", \"FKTABLE_SCHEM\", \"FKTABLE_NAME\", \"FKCOLUMN_NAME\", \"KEY_SEQ\", \"UPDATE_RULE\", \"DELETE_RULE\", \"FK_NAME\", \"PK_NAME\", \"DEFERRABILITY\"};\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestDBMetaData.java",
    "fromLine": 234,
    "toLine": 234
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java",
    "fromLine": 821,
    "toLine": 821
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
    "filename": "project://smallsql0.21_src/src/smallsql/database/Strings.java",
    "metadata": {
        "volume": 0,
        "cloneClassesType1": 2
    },
    "results": {
        "type-1": [
            
{
    "metadata": {
        "cc": 2,
        "volume": 6,
        "mass": 20,
        "clones": 4,
        "snippet": "{\n\t\tif (idx >= size)\n\t\t\tthrow new IndexOutOfBoundsException(\"Column index: \"+idx+\", Size: \"+size);\n\t\treturn data[idx];\n\t}\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/IndexDescriptions.java",
    "fromLine": 62,
    "toLine": 67
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/Columns.java",
    "fromLine": 58,
    "toLine": 62
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/ForeignKeys.java",
    "fromLine": 56,
    "toLine": 60
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/Strings.java",
    "fromLine": 56,
    "toLine": 60
}
,]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 3,
        "mass": 12,
        "clones": 7,
        "snippet": "if(size >= data.length ){\n\t\t\tresize(size << 1);\n\t\t}\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/IndexDescriptions.java",
    "fromLine": 71,
    "toLine": 73
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/Columns.java",
    "fromLine": 96,
    "toLine": 98
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/LongList.java",
    "fromLine": 68,
    "toLine": 70
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/Strings.java",
    "fromLine": 64,
    "toLine": 66
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/Expressions.java",
    "fromLine": 72,
    "toLine": 74
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/ForeignKeys.java",
    "fromLine": 64,
    "toLine": 66
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/Expressions.java",
    "fromLine": 79,
    "toLine": 81
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
    "filename": "project://smallsql0.21_src/src/smallsql/database/IndexDescription.java",
    "metadata": {
        "volume": 0,
        "cloneClassesType1": 1
    },
    "results": {
        "type-1": [
            
{
    "metadata": {
        "cc": 4,
        "volume": 9,
        "mass": 28,
        "clones": 2,
        "snippet": "catch(Throwable e){\n\t\t\tif(raFile != null)\n\t\t\t\ttry{\n\t\t\t\t\traFile.close();\n\t\t\t\t}catch(Exception e2){\n\t\t\t\t\tDriverManager.println(e2.toString());\n\t\t\t\t}\n\t\t\tthrow SmallSQLException.createFromException(e);\n\t\t}\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/TableView.java",
    "fromLine": 105,
    "toLine": 113
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/IndexDescription.java",
    "fromLine": 186,
    "toLine": 194
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
    "filename": "project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionSubstring.java",
    "metadata": {
        "volume": 0,
        "cloneClassesType1": 3
    },
    "results": {
        "type-1": [
            
{
    "metadata": {
        "cc": 3,
        "volume": 3,
        "mass": 13,
        "clones": 2,
        "snippet": "final boolean isNull() throws Exception {\n\t\treturn param1.isNull() || param2.isNull() || param3.isNull();\n\t}\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionSubstring.java",
    "fromLine": 49,
    "toLine": 51
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionReplace.java",
    "fromLine": 49,
    "toLine": 51
}
,]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 2,
        "mass": 14,
        "clones": 2,
        "snippet": "if(length < 0) \n\t\t\tthrow SmallSQLException.create(Language.SUBSTR_INVALID_LEN, new Integer(length));\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionSubstring.java",
    "fromLine": 81,
    "toLine": 82
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionSubstring.java",
    "fromLine": 60,
    "toLine": 61
}
,]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 2,
        "mass": 14,
        "clones": 2,
        "snippet": "if(length < 0) \n\t\t\tthrow SmallSQLException.create(Language.SUBSTR_INVALID_LEN, new Integer(length));\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionSubstring.java",
    "fromLine": 81,
    "toLine": 82
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionSubstring.java",
    "fromLine": 60,
    "toLine": 61
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
    "filename": "project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionInsert.java",
    "metadata": {
        "volume": 0,
        "cloneClassesType1": 2
    },
    "results": {
        "type-1": [
            
{
    "metadata": {
        "cc": 2,
        "volume": 2,
        "mass": 14,
        "clones": 2,
        "snippet": "if(length < 0) \n            throw SmallSQLException.create(Language.INSERT_INVALID_LEN, new Integer(length));\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionInsert.java",
    "fromLine": 77,
    "toLine": 78
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionInsert.java",
    "fromLine": 62,
    "toLine": 63
}
,]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 2,
        "mass": 14,
        "clones": 2,
        "snippet": "if(length < 0) \n            throw SmallSQLException.create(Language.INSERT_INVALID_LEN, new Integer(length));\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionInsert.java",
    "fromLine": 77,
    "toLine": 78
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionInsert.java",
    "fromLine": 62,
    "toLine": 63
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
    "filename": "project://smallsql0.21_src/src/smallsql/junit/TestOther.java",
    "metadata": {
        "volume": 0,
        "cloneClassesType1": 1
    },
    "results": {
        "type-1": [
            
{
    "metadata": {
        "cc": 1,
        "volume": 1,
        "mass": 13,
        "clones": 2,
        "snippet": "Statement st = con.createStatement(ResultSet.TYPE_SCROLL_SENSITIVE, ResultSet.CONCUR_READ_ONLY );\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestOther.java",
    "fromLine": 93,
    "toLine": 93
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 337,
    "toLine": 337
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
    "filename": "project://smallsql0.21_src/src/smallsql/database/SQLTokenizer.java",
    "metadata": {
        "volume": 0,
        "cloneClassesType1": 2
    },
    "results": {
        "type-1": [
            
{
    "metadata": {
        "cc": 1,
        "volume": 4,
        "mass": 14,
        "clones": 2,
        "snippet": "{\n                                   tokens.add( new SQLToken( value, tokenStart, i) );\n                                   value = 0;\n                                }\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/SQLTokenizer.java",
    "fromLine": 173,
    "toLine": 176
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/SQLTokenizer.java",
    "fromLine": 112,
    "toLine": 115
}
,]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 4,
        "mass": 14,
        "clones": 2,
        "snippet": "{\n                                   tokens.add( new SQLToken( value, tokenStart, i) );\n                                   value = 0;\n                                }\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/SQLTokenizer.java",
    "fromLine": 173,
    "toLine": 176
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/SQLTokenizer.java",
    "fromLine": 112,
    "toLine": 115
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
    "filename": "project://smallsql0.21_src/src/smallsql/database/StoreImpl.java",
    "metadata": {
        "volume": 0,
        "cloneClassesType1": 13
    },
    "results": {
        "type-1": [
            
{
    "metadata": {
        "cc": 1,
        "volume": 1,
        "mass": 12,
        "clones": 3,
        "snippet": "page[ offset++ ] = (byte)(value >> 8);\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/StoreImpl.java",
    "fromLine": 363,
    "toLine": 363
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/StoreImpl.java",
    "fromLine": 377,
    "toLine": 377
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/StoreImpl.java",
    "fromLine": 398,
    "toLine": 398
}
,]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 1,
        "mass": 12,
        "clones": 3,
        "snippet": "page[ offset++ ] = (byte)(value >> 8);\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/StoreImpl.java",
    "fromLine": 363,
    "toLine": 363
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/StoreImpl.java",
    "fromLine": 377,
    "toLine": 377
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/StoreImpl.java",
    "fromLine": 398,
    "toLine": 398
}
,]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 1,
        "mass": 12,
        "clones": 3,
        "snippet": "page[ offset++ ] = (byte)(value >> 8);\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/StoreImpl.java",
    "fromLine": 363,
    "toLine": 363
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/StoreImpl.java",
    "fromLine": 377,
    "toLine": 377
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/StoreImpl.java",
    "fromLine": 398,
    "toLine": 398
}
,]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 2,
        "mass": 13,
        "clones": 2,
        "snippet": "\t\t\t\t((TableStorePage)newData.storePage).lockType = TableView.LOCK_INSERT;\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/StoreImpl.java",
    "fromLine": 296,
    "toLine": 297
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/StoreImpl.java",
    "fromLine": 291,
    "toLine": 292
}
,]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 2,
        "mass": 13,
        "clones": 2,
        "snippet": "\t\t\t\t((TableStorePage)newData.storePage).lockType = TableView.LOCK_INSERT;\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/StoreImpl.java",
    "fromLine": 296,
    "toLine": 297
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/StoreImpl.java",
    "fromLine": 291,
    "toLine": 292
}
,]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 1,
        "mass": 14,
        "clones": 2,
        "snippet": "throw SmallSQLException.create(Language.VALUE_CANT_CONVERT, new Object[] { SQLTokenizer.getKeyWord(dataType), \"NUMERIC\" });\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/StoreImpl.java",
    "fromLine": 1145,
    "toLine": 1145
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/StoreImpl.java",
    "fromLine": 1263,
    "toLine": 1263
}
,]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 1,
        "mass": 14,
        "clones": 2,
        "snippet": "throw SmallSQLException.create(Language.VALUE_CANT_CONVERT, new Object[] { SQLTokenizer.getKeyWord(dataType), \"NUMERIC\" });\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/StoreImpl.java",
    "fromLine": 1145,
    "toLine": 1145
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/StoreImpl.java",
    "fromLine": 1263,
    "toLine": 1263
}
,]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 1,
        "mass": 12,
        "clones": 2,
        "snippet": "page[ offset++ ] = (byte)(value >> 16);\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/StoreImpl.java",
    "fromLine": 376,
    "toLine": 376
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/StoreImpl.java",
    "fromLine": 397,
    "toLine": 397
}
,]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 1,
        "mass": 12,
        "clones": 2,
        "snippet": "page[ offset++ ] = (byte)(value >> 16);\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/StoreImpl.java",
    "fromLine": 376,
    "toLine": 376
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/StoreImpl.java",
    "fromLine": 397,
    "toLine": 397
}
,]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 1,
        "mass": 12,
        "clones": 2,
        "snippet": "page[ offset++ ] = (byte)(value >> 24);\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/StoreImpl.java",
    "fromLine": 375,
    "toLine": 375
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/StoreImpl.java",
    "fromLine": 396,
    "toLine": 396
}
,]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 1,
        "mass": 12,
        "clones": 2,
        "snippet": "page[ offset++ ] = (byte)(value >> 24);\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/StoreImpl.java",
    "fromLine": 375,
    "toLine": 375
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/StoreImpl.java",
    "fromLine": 396,
    "toLine": 396
}
,]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 1,
        "mass": 17,
        "clones": 2,
        "snippet": "StoreImpl store = table.getLobStore( ((TableStorePage)storePage).con, lobFilePos, SQLTokenizer.SELECT );\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/StoreImpl.java",
    "fromLine": 565,
    "toLine": 565
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/StoreImpl.java",
    "fromLine": 598,
    "toLine": 598
}
,]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 1,
        "mass": 17,
        "clones": 2,
        "snippet": "StoreImpl store = table.getLobStore( ((TableStorePage)storePage).con, lobFilePos, SQLTokenizer.SELECT );\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/StoreImpl.java",
    "fromLine": 565,
    "toLine": 565
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/StoreImpl.java",
    "fromLine": 598,
    "toLine": 598
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
    "filename": "project://smallsql0.21_src/src/smallsql/junit/TestStatement.java",
    "metadata": {
        "volume": 0,
        "cloneClassesType1": 1
    },
    "results": {
        "type-1": [
            
{
    "metadata": {
        "cc": 1,
        "volume": 1,
        "mass": 13,
        "clones": 20,
        "snippet": "Statement st = con.createStatement(ResultSet.TYPE_SCROLL_SENSITIVE, ResultSet.CONCUR_UPDATABLE);\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestOrderBy.java",
    "fromLine": 701,
    "toLine": 701
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestOrderBy.java",
    "fromLine": 732,
    "toLine": 732
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestOrderBy.java",
    "fromLine": 763,
    "toLine": 763
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestStatement.java",
    "fromLine": 309,
    "toLine": 309
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestResultSet.java",
    "fromLine": 68,
    "toLine": 68
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestResultSet.java",
    "fromLine": 113,
    "toLine": 113
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestResultSet.java",
    "fromLine": 156,
    "toLine": 156
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestResultSet.java",
    "fromLine": 193,
    "toLine": 193
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestResultSet.java",
    "fromLine": 252,
    "toLine": 252
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestScrollable.java",
    "fromLine": 53,
    "toLine": 53
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestScrollable.java",
    "fromLine": 86,
    "toLine": 86
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestScrollable.java",
    "fromLine": 118,
    "toLine": 118
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestScrollable.java",
    "fromLine": 154,
    "toLine": 154
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestScrollable.java",
    "fromLine": 192,
    "toLine": 192
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestScrollable.java",
    "fromLine": 275,
    "toLine": 275
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 112,
    "toLine": 112
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 169,
    "toLine": 169
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 222,
    "toLine": 222
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 256,
    "toLine": 256
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 377,
    "toLine": 377
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
    "filename": "project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionDayOfYear.java",
    "metadata": {
        "volume": 0,
        "cloneClassesType1": 1
    },
    "results": {
        "type-1": [
            
{
    "metadata": {
        "cc": 1,
        "volume": 1,
        "mass": 14,
        "clones": 6,
        "snippet": "DateTime.Details details = new DateTime.Details(param1.getLong());\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionMonth.java",
    "fromLine": 50,
    "toLine": 50
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionHour.java",
    "fromLine": 50,
    "toLine": 50
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionDayOfYear.java",
    "fromLine": 50,
    "toLine": 50
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionMinute.java",
    "fromLine": 50,
    "toLine": 50
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionDayOfMonth.java",
    "fromLine": 50,
    "toLine": 50
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionYear.java",
    "fromLine": 50,
    "toLine": 50
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
    "filename": "project://smallsql0.21_src/src/smallsql/database/Money.java",
    "metadata": {
        "volume": 0,
        "cloneClassesType1": 2
    },
    "results": {
        "type-1": [
            
{
    "metadata": {
        "cc": 1,
        "volume": 5,
        "mass": 17,
        "clones": 2,
        "snippet": "{\n        Money money = new Money();\n        money.value = value;\n        return money;\n    }\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/Money.java",
    "fromLine": 67,
    "toLine": 71
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/Money.java",
    "fromLine": 61,
    "toLine": 65
}
,]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 5,
        "mass": 17,
        "clones": 2,
        "snippet": "{\n        Money money = new Money();\n        money.value = value;\n        return money;\n    }\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/Money.java",
    "fromLine": 67,
    "toLine": 71
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/Money.java",
    "fromLine": 61,
    "toLine": 65
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
    "filename": "project://smallsql0.21_src/src/smallsql/junit/TestDataTypes.java",
    "metadata": {
        "volume": 0,
        "cloneClassesType1": 1
    },
    "results": {
        "type-1": [
            
{
    "metadata": {
        "cc": 2,
        "volume": 10,
        "mass": 33,
        "clones": 4,
        "snippet": "public void tearDown(){\n        try{\n            Connection con = AllTests.getConnection();\n            Statement st = con.createStatement();\n            st.execute(\"drop table \" + table);\n            st.close();\n        }catch(Throwable e){\n        }\n    }\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestOperatoren.java",
    "fromLine": 95,
    "toLine": 104
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestDataTypes.java",
    "fromLine": 68,
    "toLine": 77
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestMoneyRounding.java",
    "fromLine": 53,
    "toLine": 62
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestFunctions.java",
    "fromLine": 374,
    "toLine": 383
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
    "filename": "project://smallsql0.21_src/src/smallsql/junit/TestAlterTable.java",
    "metadata": {
        "volume": 0,
        "cloneClassesType1": 1
    },
    "results": {
        "type-1": [
            
{
    "metadata": {
        "cc": 2,
        "volume": 7,
        "mass": 18,
        "clones": 2,
        "snippet": "public void tearDown(){\n        try {\n            dropTable( AllTests.getConnection(), table );\n        } catch (SQLException ex) {\n            ex.printStackTrace();\n        }\n    }\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestAlterTable2.java",
    "fromLine": 20,
    "toLine": 26
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestAlterTable.java",
    "fromLine": 39,
    "toLine": 45
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
    "filename": "project://smallsql0.21_src/src/smallsql/database/MutableNumeric.java",
    "metadata": {
        "volume": 0,
        "cloneClassesType1": 6
    },
    "results": {
        "type-1": [
            
{
    "metadata": {
        "cc": 1,
        "volume": 2,
        "mass": 20,
        "clones": 4,
        "snippet": "                long temp = (((long)value[0]) << 32) | (value[1] & 0xFFFFFFFFL);\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/MutableNumeric.java",
    "fromLine": 474,
    "toLine": 475
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/MutableNumeric.java",
    "fromLine": 503,
    "toLine": 504
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/MutableNumeric.java",
    "fromLine": 550,
    "toLine": 551
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/MutableNumeric.java",
    "fromLine": 526,
    "toLine": 527
}
,]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 2,
        "mass": 20,
        "clones": 4,
        "snippet": "                long temp = (((long)value[0]) << 32) | (value[1] & 0xFFFFFFFFL);\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/MutableNumeric.java",
    "fromLine": 474,
    "toLine": 475
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/MutableNumeric.java",
    "fromLine": 503,
    "toLine": 504
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/MutableNumeric.java",
    "fromLine": 550,
    "toLine": 551
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/MutableNumeric.java",
    "fromLine": 526,
    "toLine": 527
}
,]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 2,
        "mass": 20,
        "clones": 4,
        "snippet": "                long temp = (((long)value[0]) << 32) | (value[1] & 0xFFFFFFFFL);\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/MutableNumeric.java",
    "fromLine": 474,
    "toLine": 475
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/MutableNumeric.java",
    "fromLine": 503,
    "toLine": 504
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/MutableNumeric.java",
    "fromLine": 550,
    "toLine": 551
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/MutableNumeric.java",
    "fromLine": 526,
    "toLine": 527
}
,]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 2,
        "mass": 20,
        "clones": 4,
        "snippet": "                long temp = (((long)value[0]) << 32) | (value[1] & 0xFFFFFFFFL);\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/MutableNumeric.java",
    "fromLine": 474,
    "toLine": 475
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/MutableNumeric.java",
    "fromLine": 503,
    "toLine": 504
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/MutableNumeric.java",
    "fromLine": 550,
    "toLine": 551
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/MutableNumeric.java",
    "fromLine": 526,
    "toLine": 527
}
,]
}
,
{
    "metadata": {
        "cc": 3,
        "volume": 6,
        "mass": 23,
        "clones": 2,
        "snippet": "if(num.scale < scale){\n\t\t\tnum.setScale(scale);\n\t\t}else\n\t\tif(num.scale > scale){\n\t\t\tsetScale(num.scale);\n\t\t}\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/MutableNumeric.java",
    "fromLine": 235,
    "toLine": 240
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/MutableNumeric.java",
    "fromLine": 167,
    "toLine": 172
}
,]
}
,
{
    "metadata": {
        "cc": 3,
        "volume": 6,
        "mass": 23,
        "clones": 2,
        "snippet": "if(num.scale < scale){\n\t\t\tnum.setScale(scale);\n\t\t}else\n\t\tif(num.scale > scale){\n\t\t\tsetScale(num.scale);\n\t\t}\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/MutableNumeric.java",
    "fromLine": 235,
    "toLine": 240
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/MutableNumeric.java",
    "fromLine": 167,
    "toLine": 172
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
    "filename": "project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java",
    "metadata": {
        "volume": 0,
        "cloneClassesType1": 6
    },
    "results": {
        "type-1": [
            
{
    "metadata": {
        "cc": 1,
        "volume": 6,
        "mass": 14,
        "clones": 2,
        "snippet": "{\n\t\t\t\trecreateTestTab(stat);\n\t\t\t\tstat.execute(\"CREATE TABLE \" + TABLE_NAME + \" (id_test INT)\");\n\t\t\t\tfail();\n\t\t\t}\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java",
    "fromLine": 104,
    "toLine": 109
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java",
    "fromLine": 84,
    "toLine": 89
}
,]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 6,
        "mass": 14,
        "clones": 2,
        "snippet": "{\n\t\t\t\trecreateTestTab(stat);\n\t\t\t\tstat.execute(\"CREATE TABLE \" + TABLE_NAME + \" (id_test INT)\");\n\t\t\t\tfail();\n\t\t\t}\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java",
    "fromLine": 104,
    "toLine": 109
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java",
    "fromLine": 84,
    "toLine": 89
}
,]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 4,
        "mass": 13,
        "clones": 2,
        "snippet": "{\n                    msgBuf.append(itr.next());\n                    if (itr.hasNext()) msgBuf.append(',');\n                }\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java",
    "fromLine": 255,
    "toLine": 258
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java",
    "fromLine": 241,
    "toLine": 244
}
,]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 4,
        "mass": 13,
        "clones": 2,
        "snippet": "{\n                    msgBuf.append(itr.next());\n                    if (itr.hasNext()) msgBuf.append(',');\n                }\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java",
    "fromLine": 255,
    "toLine": 258
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java",
    "fromLine": 241,
    "toLine": 244
}
,]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 3,
        "mass": 13,
        "clones": 2,
        "snippet": "catch(SQLException e) {\n\t\t\t\tassertMessage(e, \"La tabella\/vista '\" + TABLE_NAME + \"' è già esistente.\");\n\t\t\t}\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java",
    "fromLine": 110,
    "toLine": 112
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java",
    "fromLine": 90,
    "toLine": 92
}
,]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 3,
        "mass": 13,
        "clones": 2,
        "snippet": "catch(SQLException e) {\n\t\t\t\tassertMessage(e, \"La tabella\/vista '\" + TABLE_NAME + \"' è già esistente.\");\n\t\t\t}\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java",
    "fromLine": 110,
    "toLine": 112
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java",
    "fromLine": 90,
    "toLine": 92
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
    "filename": "project://smallsql0.21_src/src/smallsql/database/Columns.java",
    "metadata": {
        "volume": 0,
        "cloneClassesType1": 2
    },
    "results": {
        "type-1": [
            
{
    "metadata": {
        "cc": 2,
        "volume": 6,
        "mass": 20,
        "clones": 4,
        "snippet": "{\n\t\tif (idx >= size)\n\t\t\tthrow new IndexOutOfBoundsException(\"Column index: \"+idx+\", Size: \"+size);\n\t\treturn data[idx];\n\t}\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/IndexDescriptions.java",
    "fromLine": 62,
    "toLine": 67
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/Columns.java",
    "fromLine": 58,
    "toLine": 62
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/ForeignKeys.java",
    "fromLine": 56,
    "toLine": 60
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/Strings.java",
    "fromLine": 56,
    "toLine": 60
}
,]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 3,
        "mass": 12,
        "clones": 7,
        "snippet": "if(size >= data.length ){\n\t\t\tresize(size << 1);\n\t\t}\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/IndexDescriptions.java",
    "fromLine": 71,
    "toLine": 73
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/Columns.java",
    "fromLine": 96,
    "toLine": 98
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/LongList.java",
    "fromLine": 68,
    "toLine": 70
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/Strings.java",
    "fromLine": 64,
    "toLine": 66
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/Expressions.java",
    "fromLine": 72,
    "toLine": 74
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/ForeignKeys.java",
    "fromLine": 64,
    "toLine": 66
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/Expressions.java",
    "fromLine": 79,
    "toLine": 81
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
    "filename": "project://smallsql0.21_src/src/smallsql/database/View.java",
    "metadata": {
        "volume": 0,
        "cloneClassesType1": 1
    },
    "results": {
        "type-1": [
            
{
    "metadata": {
        "cc": 1,
        "volume": 1,
        "mass": 13,
        "clones": 2,
        "snippet": "StoreImpl store = StoreImpl.createStore( null, storePage, SQLTokenizer.SELECT, offset);\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/FileIndexNode.java",
    "fromLine": 93,
    "toLine": 93
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/View.java",
    "fromLine": 56,
    "toLine": 56
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
    "filename": "project://smallsql0.21_src/src/smallsql/database/GroupResult.java",
    "metadata": {
        "volume": 0,
        "cloneClassesType1": 2
    },
    "results": {
        "type-1": [
            
{
    "metadata": {
        "cc": 2,
        "volume": 6,
        "mass": 23,
        "clones": 2,
        "snippet": "{\n\t\t\tint idx = internalExpressions.indexOf(expr);\n\t\t\tif(idx >= 0) return idx;\n\t\t\tinternalExpressions.add(expr);\n\t\t\treturn internalExpressions.size()-1;\n\t\t}\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/GroupResult.java",
    "fromLine": 111,
    "toLine": 116
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/GroupResult.java",
    "fromLine": 89,
    "toLine": 94
}
,]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 6,
        "mass": 23,
        "clones": 2,
        "snippet": "{\n\t\t\tint idx = internalExpressions.indexOf(expr);\n\t\t\tif(idx >= 0) return idx;\n\t\t\tinternalExpressions.add(expr);\n\t\t\treturn internalExpressions.size()-1;\n\t\t}\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/GroupResult.java",
    "fromLine": 111,
    "toLine": 116
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/GroupResult.java",
    "fromLine": 89,
    "toLine": 94
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
    "filename": "project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java",
    "metadata": {
        "volume": 0,
        "cloneClassesType1": 13
    },
    "results": {
        "type-1": [
            
{
    "metadata": {
        "cc": 2,
        "volume": 3,
        "mass": 15,
        "clones": 1,
        "snippet": "try{\n\t\t\t\tcon.createStatement().execute(\"Drop Table transactions\");\n\t\t\t}catch(Throwable e){e.printStackTrace();}\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java",
    "fromLine": 69,
    "toLine": 71
}
,]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 2,
        "mass": 15,
        "clones": 2,
        "snippet": "ResultSet rs = con.createStatement(ResultSet.TYPE_SCROLL_SENSITIVE, ResultSet.CONCUR_UPDATABLE)\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java",
    "fromLine": 354,
    "toLine": 355
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java",
    "fromLine": 204,
    "toLine": 205
}
,]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 2,
        "mass": 15,
        "clones": 2,
        "snippet": "ResultSet rs = con.createStatement(ResultSet.TYPE_SCROLL_SENSITIVE, ResultSet.CONCUR_UPDATABLE)\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java",
    "fromLine": 354,
    "toLine": 355
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java",
    "fromLine": 204,
    "toLine": 205
}
,]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 5,
        "mass": 16,
        "clones": 2,
        "snippet": "{\n\t\t\ttry{\n\t\t\t\tcon.createStatement().execute(\"Drop Table transactions\");\n\t\t\t}catch(Throwable e){e.printStackTrace();}\n\t\t}\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java",
    "fromLine": 397,
    "toLine": 401
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java",
    "fromLine": 223,
    "toLine": 227
}
,]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 5,
        "mass": 16,
        "clones": 2,
        "snippet": "{\n\t\t\ttry{\n\t\t\t\tcon.createStatement().execute(\"Drop Table transactions\");\n\t\t\t}catch(Throwable e){e.printStackTrace();}\n\t\t}\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java",
    "fromLine": 397,
    "toLine": 401
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java",
    "fromLine": 223,
    "toLine": 227
}
,]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 5,
        "mass": 12,
        "clones": 2,
        "snippet": "{\n            dropTable(con1, \"transactions\");\n\t\t\tcon1.setAutoCommit(true);\n\t\t\tcon2.close();\n\t\t}\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java",
    "fromLine": 441,
    "toLine": 445
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java",
    "fromLine": 419,
    "toLine": 423
}
,]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 5,
        "mass": 12,
        "clones": 2,
        "snippet": "{\n            dropTable(con1, \"transactions\");\n\t\t\tcon1.setAutoCommit(true);\n\t\t\tcon2.close();\n\t\t}\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java",
    "fromLine": 441,
    "toLine": 445
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java",
    "fromLine": 419,
    "toLine": 423
}
,]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 6,
        "mass": 20,
        "clones": 6,
        "snippet": "{\n\t\t\ttry{\n\t\t\t\tcon.createStatement().execute(\"Drop Table transactions\");\n\t\t\t}catch(Throwable e){e.printStackTrace();}\n\t\t\tcon.setAutoCommit(true);\n\t\t}\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java",
    "fromLine": 98,
    "toLine": 103
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java",
    "fromLine": 129,
    "toLine": 134
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java",
    "fromLine": 157,
    "toLine": 162
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java",
    "fromLine": 188,
    "toLine": 193
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java",
    "fromLine": 365,
    "toLine": 370
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java",
    "fromLine": 281,
    "toLine": 286
}
,]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 6,
        "mass": 20,
        "clones": 6,
        "snippet": "{\n\t\t\ttry{\n\t\t\t\tcon.createStatement().execute(\"Drop Table transactions\");\n\t\t\t}catch(Throwable e){e.printStackTrace();}\n\t\t\tcon.setAutoCommit(true);\n\t\t}\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java",
    "fromLine": 98,
    "toLine": 103
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java",
    "fromLine": 129,
    "toLine": 134
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java",
    "fromLine": 157,
    "toLine": 162
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java",
    "fromLine": 188,
    "toLine": 193
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java",
    "fromLine": 365,
    "toLine": 370
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java",
    "fromLine": 281,
    "toLine": 286
}
,]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 6,
        "mass": 20,
        "clones": 6,
        "snippet": "{\n\t\t\ttry{\n\t\t\t\tcon.createStatement().execute(\"Drop Table transactions\");\n\t\t\t}catch(Throwable e){e.printStackTrace();}\n\t\t\tcon.setAutoCommit(true);\n\t\t}\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java",
    "fromLine": 98,
    "toLine": 103
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java",
    "fromLine": 129,
    "toLine": 134
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java",
    "fromLine": 157,
    "toLine": 162
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java",
    "fromLine": 188,
    "toLine": 193
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java",
    "fromLine": 365,
    "toLine": 370
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java",
    "fromLine": 281,
    "toLine": 286
}
,]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 6,
        "mass": 20,
        "clones": 6,
        "snippet": "{\n\t\t\ttry{\n\t\t\t\tcon.createStatement().execute(\"Drop Table transactions\");\n\t\t\t}catch(Throwable e){e.printStackTrace();}\n\t\t\tcon.setAutoCommit(true);\n\t\t}\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java",
    "fromLine": 98,
    "toLine": 103
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java",
    "fromLine": 129,
    "toLine": 134
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java",
    "fromLine": 157,
    "toLine": 162
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java",
    "fromLine": 188,
    "toLine": 193
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java",
    "fromLine": 365,
    "toLine": 370
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java",
    "fromLine": 281,
    "toLine": 286
}
,]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 6,
        "mass": 20,
        "clones": 6,
        "snippet": "{\n\t\t\ttry{\n\t\t\t\tcon.createStatement().execute(\"Drop Table transactions\");\n\t\t\t}catch(Throwable e){e.printStackTrace();}\n\t\t\tcon.setAutoCommit(true);\n\t\t}\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java",
    "fromLine": 98,
    "toLine": 103
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java",
    "fromLine": 129,
    "toLine": 134
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java",
    "fromLine": 157,
    "toLine": 162
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java",
    "fromLine": 188,
    "toLine": 193
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java",
    "fromLine": 365,
    "toLine": 370
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java",
    "fromLine": 281,
    "toLine": 286
}
,]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 6,
        "mass": 20,
        "clones": 6,
        "snippet": "{\n\t\t\ttry{\n\t\t\t\tcon.createStatement().execute(\"Drop Table transactions\");\n\t\t\t}catch(Throwable e){e.printStackTrace();}\n\t\t\tcon.setAutoCommit(true);\n\t\t}\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java",
    "fromLine": 98,
    "toLine": 103
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java",
    "fromLine": 129,
    "toLine": 134
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java",
    "fromLine": 157,
    "toLine": 162
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java",
    "fromLine": 188,
    "toLine": 193
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java",
    "fromLine": 365,
    "toLine": 370
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java",
    "fromLine": 281,
    "toLine": 286
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
    "filename": "project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionMinute.java",
    "metadata": {
        "volume": 0,
        "cloneClassesType1": 1
    },
    "results": {
        "type-1": [
            
{
    "metadata": {
        "cc": 1,
        "volume": 1,
        "mass": 14,
        "clones": 6,
        "snippet": "DateTime.Details details = new DateTime.Details(param1.getLong());\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionMonth.java",
    "fromLine": 50,
    "toLine": 50
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionHour.java",
    "fromLine": 50,
    "toLine": 50
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionDayOfYear.java",
    "fromLine": 50,
    "toLine": 50
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionMinute.java",
    "fromLine": 50,
    "toLine": 50
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionDayOfMonth.java",
    "fromLine": 50,
    "toLine": 50
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionYear.java",
    "fromLine": 50,
    "toLine": 50
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
    "filename": "project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionReturnFloat.java",
    "metadata": {
        "volume": 0,
        "cloneClassesType1": 1
    },
    "results": {
        "type-1": [
            
{
    "metadata": {
        "cc": 2,
        "volume": 5,
        "mass": 16,
        "clones": 3,
        "snippet": "{\n        Object obj = getObject();\n        if(obj == null) return null;\n        return obj.toString();\n    }\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionReturnFloat.java",
    "fromLine": 76,
    "toLine": 80
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionAbs.java",
    "fromLine": 104,
    "toLine": 108
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionFloor.java",
    "fromLine": 46,
    "toLine": 50
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
    "filename": "project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionFloor.java",
    "metadata": {
        "volume": 0,
        "cloneClassesType1": 1
    },
    "results": {
        "type-1": [
            
{
    "metadata": {
        "cc": 2,
        "volume": 5,
        "mass": 16,
        "clones": 3,
        "snippet": "{\n        Object obj = getObject();\n        if(obj == null) return null;\n        return obj.toString();\n    }\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionReturnFloat.java",
    "fromLine": 76,
    "toLine": 80
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionAbs.java",
    "fromLine": 104,
    "toLine": 108
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionFloor.java",
    "fromLine": 46,
    "toLine": 50
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
    "filename": "project://smallsql0.21_src/src/smallsql/junit/TestThreads.java",
    "metadata": {
        "volume": 0,
        "cloneClassesType1": 3
    },
    "results": {
        "type-1": [
            
{
    "metadata": {
        "cc": 1,
        "volume": 4,
        "mass": 16,
        "clones": 3,
        "snippet": "{\n            Thread thread = (Thread)threadList.get(i);\n            thread.join(5000);\n        }\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestThreads.java",
    "fromLine": 60,
    "toLine": 63
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestThreads.java",
    "fromLine": 161,
    "toLine": 164
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestThreads.java",
    "fromLine": 107,
    "toLine": 110
}
,]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 4,
        "mass": 16,
        "clones": 3,
        "snippet": "{\n            Thread thread = (Thread)threadList.get(i);\n            thread.join(5000);\n        }\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestThreads.java",
    "fromLine": 60,
    "toLine": 63
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestThreads.java",
    "fromLine": 161,
    "toLine": 164
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestThreads.java",
    "fromLine": 107,
    "toLine": 110
}
,]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 4,
        "mass": 16,
        "clones": 3,
        "snippet": "{\n            Thread thread = (Thread)threadList.get(i);\n            thread.join(5000);\n        }\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestThreads.java",
    "fromLine": 60,
    "toLine": 63
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestThreads.java",
    "fromLine": 161,
    "toLine": 164
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestThreads.java",
    "fromLine": 107,
    "toLine": 110
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
    "filename": "project://smallsql0.21_src/src/smallsql/junit/TestJoins.java",
    "metadata": {
        "volume": 0,
        "cloneClassesType1": 3
    },
    "results": {
        "type-1": [
            
{
    "metadata": {
        "cc": 1,
        "volume": 1,
        "mass": 12,
        "clones": 2,
        "snippet": "PreparedStatement pr = con.prepareStatement(\"INSERT into \" + table + \"(a,b) Values(?,?)\");\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestOperatoren.java",
    "fromLine": 113,
    "toLine": 113
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestJoins.java",
    "fromLine": 119,
    "toLine": 119
}
,]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 5,
        "mass": 13,
        "clones": 2,
        "snippet": "private static class TestValue{\n        String dataType;\n        Object small;\n        Object large;\n    }\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestJoins.java",
    "fromLine": 212,
    "toLine": 216
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestOperatoren.java",
    "fromLine": 275,
    "toLine": 279
}
,]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 7,
        "mass": 41,
        "clones": 2,
        "snippet": "private static TestValue a(String dataType, Object small, Object large){\n        TestValue value = new TestValue();\n        value.dataType  = dataType;\n        value.small     = small;\n        value.large     = large;\n        return value;\n    }\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestJoins.java",
    "fromLine": 204,
    "toLine": 210
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestOperatoren.java",
    "fromLine": 267,
    "toLine": 273
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
    "filename": "project://smallsql0.21_src/src/smallsql/database/ExpressionValue.java",
    "metadata": {
        "volume": 0,
        "cloneClassesType1": 2
    },
    "results": {
        "type-1": [
            
{
    "metadata": {
        "cc": 2,
        "volume": 6,
        "mass": 12,
        "clones": 2,
        "snippet": "{\n\t\t\t\t\tif(expr.isNull())\n\t\t\t\t\t\tdataType = expr.getDataType();\n\t\t\t\t\telse\n\t\t\t\t\t\tinitValue( expr );\n\t\t\t\t}\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/ExpressionValue.java",
    "fromLine": 211,
    "toLine": 216
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/ExpressionValue.java",
    "fromLine": 154,
    "toLine": 159
}
,]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 6,
        "mass": 12,
        "clones": 2,
        "snippet": "{\n\t\t\t\t\tif(expr.isNull())\n\t\t\t\t\t\tdataType = expr.getDataType();\n\t\t\t\t\telse\n\t\t\t\t\t\tinitValue( expr );\n\t\t\t\t}\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/ExpressionValue.java",
    "fromLine": 211,
    "toLine": 216
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/ExpressionValue.java",
    "fromLine": 154,
    "toLine": 159
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
    "filename": "project://smallsql0.21_src/src/smallsql/database/MemoryStream.java",
    "metadata": {
        "volume": 0,
        "cloneClassesType1": 7
    },
    "results": {
        "type-1": [
            
{
    "metadata": {
        "cc": 1,
        "volume": 1,
        "mass": 12,
        "clones": 3,
        "snippet": "puffer[ offset++ ] = (byte)(value >> 8);\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/MemoryStream.java",
    "fromLine": 63,
    "toLine": 63
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/MemoryStream.java",
    "fromLine": 71,
    "toLine": 71
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/MemoryStream.java",
    "fromLine": 83,
    "toLine": 83
}
,]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 1,
        "mass": 12,
        "clones": 3,
        "snippet": "puffer[ offset++ ] = (byte)(value >> 8);\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/MemoryStream.java",
    "fromLine": 63,
    "toLine": 63
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/MemoryStream.java",
    "fromLine": 71,
    "toLine": 71
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/MemoryStream.java",
    "fromLine": 83,
    "toLine": 83
}
,]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 1,
        "mass": 12,
        "clones": 3,
        "snippet": "puffer[ offset++ ] = (byte)(value >> 8);\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/MemoryStream.java",
    "fromLine": 63,
    "toLine": 63
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/MemoryStream.java",
    "fromLine": 71,
    "toLine": 71
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/MemoryStream.java",
    "fromLine": 83,
    "toLine": 83
}
,]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 1,
        "mass": 12,
        "clones": 2,
        "snippet": "puffer[ offset++ ] = (byte)(value >> 16);\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/MemoryStream.java",
    "fromLine": 70,
    "toLine": 70
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/MemoryStream.java",
    "fromLine": 82,
    "toLine": 82
}
,]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 1,
        "mass": 12,
        "clones": 2,
        "snippet": "puffer[ offset++ ] = (byte)(value >> 16);\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/MemoryStream.java",
    "fromLine": 70,
    "toLine": 70
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/MemoryStream.java",
    "fromLine": 82,
    "toLine": 82
}
,]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 1,
        "mass": 12,
        "clones": 2,
        "snippet": "puffer[ offset++ ] = (byte)(value >> 24);\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/MemoryStream.java",
    "fromLine": 69,
    "toLine": 69
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/MemoryStream.java",
    "fromLine": 81,
    "toLine": 81
}
,]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 1,
        "mass": 12,
        "clones": 2,
        "snippet": "puffer[ offset++ ] = (byte)(value >> 24);\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/MemoryStream.java",
    "fromLine": 69,
    "toLine": 69
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/MemoryStream.java",
    "fromLine": 81,
    "toLine": 81
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
    "filename": "project://smallsql0.21_src/src/smallsql/junit/TestResultSet.java",
    "metadata": {
        "volume": 0,
        "cloneClassesType1": 5
    },
    "results": {
        "type-1": [
            
{
    "metadata": {
        "cc": 1,
        "volume": 1,
        "mass": 13,
        "clones": 20,
        "snippet": "Statement st = con.createStatement(ResultSet.TYPE_SCROLL_SENSITIVE, ResultSet.CONCUR_UPDATABLE);\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestOrderBy.java",
    "fromLine": 701,
    "toLine": 701
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestOrderBy.java",
    "fromLine": 732,
    "toLine": 732
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestOrderBy.java",
    "fromLine": 763,
    "toLine": 763
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestStatement.java",
    "fromLine": 309,
    "toLine": 309
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestResultSet.java",
    "fromLine": 68,
    "toLine": 68
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestResultSet.java",
    "fromLine": 113,
    "toLine": 113
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestResultSet.java",
    "fromLine": 156,
    "toLine": 156
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestResultSet.java",
    "fromLine": 193,
    "toLine": 193
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestResultSet.java",
    "fromLine": 252,
    "toLine": 252
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestScrollable.java",
    "fromLine": 53,
    "toLine": 53
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestScrollable.java",
    "fromLine": 86,
    "toLine": 86
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestScrollable.java",
    "fromLine": 118,
    "toLine": 118
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestScrollable.java",
    "fromLine": 154,
    "toLine": 154
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestScrollable.java",
    "fromLine": 192,
    "toLine": 192
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestScrollable.java",
    "fromLine": 275,
    "toLine": 275
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 112,
    "toLine": 112
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 169,
    "toLine": 169
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 222,
    "toLine": 222
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 256,
    "toLine": 256
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 377,
    "toLine": 377
}
,]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 1,
        "mass": 13,
        "clones": 20,
        "snippet": "Statement st = con.createStatement(ResultSet.TYPE_SCROLL_SENSITIVE, ResultSet.CONCUR_UPDATABLE);\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestOrderBy.java",
    "fromLine": 701,
    "toLine": 701
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestOrderBy.java",
    "fromLine": 732,
    "toLine": 732
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestOrderBy.java",
    "fromLine": 763,
    "toLine": 763
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestStatement.java",
    "fromLine": 309,
    "toLine": 309
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestResultSet.java",
    "fromLine": 68,
    "toLine": 68
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestResultSet.java",
    "fromLine": 113,
    "toLine": 113
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestResultSet.java",
    "fromLine": 156,
    "toLine": 156
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestResultSet.java",
    "fromLine": 193,
    "toLine": 193
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestResultSet.java",
    "fromLine": 252,
    "toLine": 252
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestScrollable.java",
    "fromLine": 53,
    "toLine": 53
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestScrollable.java",
    "fromLine": 86,
    "toLine": 86
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestScrollable.java",
    "fromLine": 118,
    "toLine": 118
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestScrollable.java",
    "fromLine": 154,
    "toLine": 154
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestScrollable.java",
    "fromLine": 192,
    "toLine": 192
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestScrollable.java",
    "fromLine": 275,
    "toLine": 275
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 112,
    "toLine": 112
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 169,
    "toLine": 169
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 222,
    "toLine": 222
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 256,
    "toLine": 256
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 377,
    "toLine": 377
}
,]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 1,
        "mass": 13,
        "clones": 20,
        "snippet": "Statement st = con.createStatement(ResultSet.TYPE_SCROLL_SENSITIVE, ResultSet.CONCUR_UPDATABLE);\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestOrderBy.java",
    "fromLine": 701,
    "toLine": 701
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestOrderBy.java",
    "fromLine": 732,
    "toLine": 732
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestOrderBy.java",
    "fromLine": 763,
    "toLine": 763
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestStatement.java",
    "fromLine": 309,
    "toLine": 309
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestResultSet.java",
    "fromLine": 68,
    "toLine": 68
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestResultSet.java",
    "fromLine": 113,
    "toLine": 113
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestResultSet.java",
    "fromLine": 156,
    "toLine": 156
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestResultSet.java",
    "fromLine": 193,
    "toLine": 193
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestResultSet.java",
    "fromLine": 252,
    "toLine": 252
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestScrollable.java",
    "fromLine": 53,
    "toLine": 53
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestScrollable.java",
    "fromLine": 86,
    "toLine": 86
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestScrollable.java",
    "fromLine": 118,
    "toLine": 118
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestScrollable.java",
    "fromLine": 154,
    "toLine": 154
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestScrollable.java",
    "fromLine": 192,
    "toLine": 192
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestScrollable.java",
    "fromLine": 275,
    "toLine": 275
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 112,
    "toLine": 112
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 169,
    "toLine": 169
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 222,
    "toLine": 222
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 256,
    "toLine": 256
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 377,
    "toLine": 377
}
,]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 1,
        "mass": 13,
        "clones": 20,
        "snippet": "Statement st = con.createStatement(ResultSet.TYPE_SCROLL_SENSITIVE, ResultSet.CONCUR_UPDATABLE);\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestOrderBy.java",
    "fromLine": 701,
    "toLine": 701
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestOrderBy.java",
    "fromLine": 732,
    "toLine": 732
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestOrderBy.java",
    "fromLine": 763,
    "toLine": 763
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestStatement.java",
    "fromLine": 309,
    "toLine": 309
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestResultSet.java",
    "fromLine": 68,
    "toLine": 68
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestResultSet.java",
    "fromLine": 113,
    "toLine": 113
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestResultSet.java",
    "fromLine": 156,
    "toLine": 156
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestResultSet.java",
    "fromLine": 193,
    "toLine": 193
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestResultSet.java",
    "fromLine": 252,
    "toLine": 252
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestScrollable.java",
    "fromLine": 53,
    "toLine": 53
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestScrollable.java",
    "fromLine": 86,
    "toLine": 86
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestScrollable.java",
    "fromLine": 118,
    "toLine": 118
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestScrollable.java",
    "fromLine": 154,
    "toLine": 154
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestScrollable.java",
    "fromLine": 192,
    "toLine": 192
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestScrollable.java",
    "fromLine": 275,
    "toLine": 275
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 112,
    "toLine": 112
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 169,
    "toLine": 169
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 222,
    "toLine": 222
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 256,
    "toLine": 256
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 377,
    "toLine": 377
}
,]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 1,
        "mass": 13,
        "clones": 20,
        "snippet": "Statement st = con.createStatement(ResultSet.TYPE_SCROLL_SENSITIVE, ResultSet.CONCUR_UPDATABLE);\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestOrderBy.java",
    "fromLine": 701,
    "toLine": 701
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestOrderBy.java",
    "fromLine": 732,
    "toLine": 732
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestOrderBy.java",
    "fromLine": 763,
    "toLine": 763
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestStatement.java",
    "fromLine": 309,
    "toLine": 309
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestResultSet.java",
    "fromLine": 68,
    "toLine": 68
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestResultSet.java",
    "fromLine": 113,
    "toLine": 113
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestResultSet.java",
    "fromLine": 156,
    "toLine": 156
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestResultSet.java",
    "fromLine": 193,
    "toLine": 193
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestResultSet.java",
    "fromLine": 252,
    "toLine": 252
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestScrollable.java",
    "fromLine": 53,
    "toLine": 53
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestScrollable.java",
    "fromLine": 86,
    "toLine": 86
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestScrollable.java",
    "fromLine": 118,
    "toLine": 118
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestScrollable.java",
    "fromLine": 154,
    "toLine": 154
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestScrollable.java",
    "fromLine": 192,
    "toLine": 192
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestScrollable.java",
    "fromLine": 275,
    "toLine": 275
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 112,
    "toLine": 112
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 169,
    "toLine": 169
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 222,
    "toLine": 222
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 256,
    "toLine": 256
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 377,
    "toLine": 377
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
    "filename": "project://smallsql0.21_src/src/smallsql/junit/TestOrderBy.java",
    "metadata": {
        "volume": 0,
        "cloneClassesType1": 14
    },
    "results": {
        "type-1": [
            
{
    "metadata": {
        "cc": 2,
        "volume": 5,
        "mass": 28,
        "clones": 2,
        "snippet": "while(rs.next()){\n\t\t\tassertTrue( oldValue.compareTo( (Integer)rs.getObject(\"i\") ) < 0 );\n\t\t\toldValue = (Integer)rs.getObject(\"i\");\n\t\t\tcount++;\n\t\t}\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestOrderBy.java",
    "fromLine": 431,
    "toLine": 435
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestOrderBy.java",
    "fromLine": 346,
    "toLine": 350
}
,]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 5,
        "mass": 28,
        "clones": 2,
        "snippet": "while(rs.next()){\n\t\t\tassertTrue( oldValue.compareTo( (Integer)rs.getObject(\"i\") ) < 0 );\n\t\t\toldValue = (Integer)rs.getObject(\"i\");\n\t\t\tcount++;\n\t\t}\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestOrderBy.java",
    "fromLine": 431,
    "toLine": 435
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestOrderBy.java",
    "fromLine": 346,
    "toLine": 350
}
,]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 1,
        "mass": 12,
        "clones": 2,
        "snippet": "assertTrue( oldValue + \"<\" + newValue, oldValue.compareTo( newValue ) < 0 );\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestOrderBy.java",
    "fromLine": 134,
    "toLine": 134
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestOrderBy.java",
    "fromLine": 162,
    "toLine": 162
}
,]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 1,
        "mass": 12,
        "clones": 2,
        "snippet": "assertTrue( oldValue + \"<\" + newValue, oldValue.compareTo( newValue ) < 0 );\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestOrderBy.java",
    "fromLine": 134,
    "toLine": 134
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestOrderBy.java",
    "fromLine": 162,
    "toLine": 162
}
,]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 5,
        "mass": 14,
        "clones": 2,
        "snippet": "{\n\t\t\toldValue = rs.getBoolean(\"b\");\n\t\t\tassertFalse(rs.wasNull());\n\t\t\tcount++;\n\t\t}\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestOrderBy.java",
    "fromLine": 597,
    "toLine": 601
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestOrderBy.java",
    "fromLine": 592,
    "toLine": 596
}
,]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 5,
        "mass": 14,
        "clones": 2,
        "snippet": "{\n\t\t\toldValue = rs.getBoolean(\"b\");\n\t\t\tassertFalse(rs.wasNull());\n\t\t\tcount++;\n\t\t}\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestOrderBy.java",
    "fromLine": 597,
    "toLine": 601
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestOrderBy.java",
    "fromLine": 592,
    "toLine": 596
}
,]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 4,
        "mass": 15,
        "clones": 3,
        "snippet": "if(newValue != null){\n\t\t\t\tassertTrue( oldValue.compareTo( newValue ) > 0 );\n\t\t\t\tcount++;\n\t\t\t}\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestOrderBy.java",
    "fromLine": 213,
    "toLine": 216
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestOrderBy.java",
    "fromLine": 455,
    "toLine": 458
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestOrderBy.java",
    "fromLine": 241,
    "toLine": 244
}
,]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 4,
        "mass": 15,
        "clones": 3,
        "snippet": "if(newValue != null){\n\t\t\t\tassertTrue( oldValue.compareTo( newValue ) > 0 );\n\t\t\t\tcount++;\n\t\t\t}\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestOrderBy.java",
    "fromLine": 213,
    "toLine": 216
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestOrderBy.java",
    "fromLine": 455,
    "toLine": 458
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestOrderBy.java",
    "fromLine": 241,
    "toLine": 244
}
,]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 4,
        "mass": 15,
        "clones": 3,
        "snippet": "if(newValue != null){\n\t\t\t\tassertTrue( oldValue.compareTo( newValue ) > 0 );\n\t\t\t\tcount++;\n\t\t\t}\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestOrderBy.java",
    "fromLine": 213,
    "toLine": 216
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestOrderBy.java",
    "fromLine": 455,
    "toLine": 458
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestOrderBy.java",
    "fromLine": 241,
    "toLine": 244
}
,]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 6,
        "mass": 23,
        "clones": 2,
        "snippet": "{\n\t\t\tString newValue = rs.getString(\"v\");\n\t\t\tassertTrue( oldValue.compareTo( newValue ) < 0 );\n\t\t\toldValue = newValue;\n\t\t\tcount++;\n\t\t}\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestOrderBy.java",
    "fromLine": 811,
    "toLine": 816
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestOrderBy.java",
    "fromLine": 187,
    "toLine": 192
}
,]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 6,
        "mass": 23,
        "clones": 2,
        "snippet": "{\n\t\t\tString newValue = rs.getString(\"v\");\n\t\t\tassertTrue( oldValue.compareTo( newValue ) < 0 );\n\t\t\toldValue = newValue;\n\t\t\tcount++;\n\t\t}\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestOrderBy.java",
    "fromLine": 811,
    "toLine": 816
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestOrderBy.java",
    "fromLine": 187,
    "toLine": 192
}
,]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 1,
        "mass": 13,
        "clones": 20,
        "snippet": "Statement st = con.createStatement(ResultSet.TYPE_SCROLL_SENSITIVE, ResultSet.CONCUR_UPDATABLE);\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestOrderBy.java",
    "fromLine": 701,
    "toLine": 701
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestOrderBy.java",
    "fromLine": 732,
    "toLine": 732
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestOrderBy.java",
    "fromLine": 763,
    "toLine": 763
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestStatement.java",
    "fromLine": 309,
    "toLine": 309
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestResultSet.java",
    "fromLine": 68,
    "toLine": 68
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestResultSet.java",
    "fromLine": 113,
    "toLine": 113
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestResultSet.java",
    "fromLine": 156,
    "toLine": 156
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestResultSet.java",
    "fromLine": 193,
    "toLine": 193
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestResultSet.java",
    "fromLine": 252,
    "toLine": 252
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestScrollable.java",
    "fromLine": 53,
    "toLine": 53
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestScrollable.java",
    "fromLine": 86,
    "toLine": 86
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestScrollable.java",
    "fromLine": 118,
    "toLine": 118
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestScrollable.java",
    "fromLine": 154,
    "toLine": 154
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestScrollable.java",
    "fromLine": 192,
    "toLine": 192
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestScrollable.java",
    "fromLine": 275,
    "toLine": 275
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 112,
    "toLine": 112
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 169,
    "toLine": 169
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 222,
    "toLine": 222
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 256,
    "toLine": 256
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 377,
    "toLine": 377
}
,]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 1,
        "mass": 13,
        "clones": 20,
        "snippet": "Statement st = con.createStatement(ResultSet.TYPE_SCROLL_SENSITIVE, ResultSet.CONCUR_UPDATABLE);\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestOrderBy.java",
    "fromLine": 701,
    "toLine": 701
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestOrderBy.java",
    "fromLine": 732,
    "toLine": 732
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestOrderBy.java",
    "fromLine": 763,
    "toLine": 763
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestStatement.java",
    "fromLine": 309,
    "toLine": 309
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestResultSet.java",
    "fromLine": 68,
    "toLine": 68
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestResultSet.java",
    "fromLine": 113,
    "toLine": 113
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestResultSet.java",
    "fromLine": 156,
    "toLine": 156
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestResultSet.java",
    "fromLine": 193,
    "toLine": 193
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestResultSet.java",
    "fromLine": 252,
    "toLine": 252
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestScrollable.java",
    "fromLine": 53,
    "toLine": 53
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestScrollable.java",
    "fromLine": 86,
    "toLine": 86
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestScrollable.java",
    "fromLine": 118,
    "toLine": 118
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestScrollable.java",
    "fromLine": 154,
    "toLine": 154
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestScrollable.java",
    "fromLine": 192,
    "toLine": 192
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestScrollable.java",
    "fromLine": 275,
    "toLine": 275
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 112,
    "toLine": 112
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 169,
    "toLine": 169
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 222,
    "toLine": 222
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 256,
    "toLine": 256
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 377,
    "toLine": 377
}
,]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 1,
        "mass": 13,
        "clones": 20,
        "snippet": "Statement st = con.createStatement(ResultSet.TYPE_SCROLL_SENSITIVE, ResultSet.CONCUR_UPDATABLE);\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestOrderBy.java",
    "fromLine": 701,
    "toLine": 701
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestOrderBy.java",
    "fromLine": 732,
    "toLine": 732
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestOrderBy.java",
    "fromLine": 763,
    "toLine": 763
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestStatement.java",
    "fromLine": 309,
    "toLine": 309
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestResultSet.java",
    "fromLine": 68,
    "toLine": 68
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestResultSet.java",
    "fromLine": 113,
    "toLine": 113
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestResultSet.java",
    "fromLine": 156,
    "toLine": 156
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestResultSet.java",
    "fromLine": 193,
    "toLine": 193
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestResultSet.java",
    "fromLine": 252,
    "toLine": 252
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestScrollable.java",
    "fromLine": 53,
    "toLine": 53
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestScrollable.java",
    "fromLine": 86,
    "toLine": 86
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestScrollable.java",
    "fromLine": 118,
    "toLine": 118
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestScrollable.java",
    "fromLine": 154,
    "toLine": 154
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestScrollable.java",
    "fromLine": 192,
    "toLine": 192
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestScrollable.java",
    "fromLine": 275,
    "toLine": 275
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 112,
    "toLine": 112
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 169,
    "toLine": 169
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 222,
    "toLine": 222
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 256,
    "toLine": 256
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 377,
    "toLine": 377
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
    "filename": "project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionUCase.java",
    "metadata": {
        "volume": 0,
        "cloneClassesType1": 1
    },
    "results": {
        "type-1": [
            
{
    "metadata": {
        "cc": 2,
        "volume": 4,
        "mass": 12,
        "clones": 2,
        "snippet": "final byte[] getBytes() throws Exception{\n        if(isNull()) return null;\n        return getString().getBytes();\n\t}\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionLCase.java",
    "fromLine": 52,
    "toLine": 55
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionUCase.java",
    "fromLine": 52,
    "toLine": 55
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
    "filename": "project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionDayOfMonth.java",
    "metadata": {
        "volume": 0,
        "cloneClassesType1": 1
    },
    "results": {
        "type-1": [
            
{
    "metadata": {
        "cc": 1,
        "volume": 1,
        "mass": 14,
        "clones": 6,
        "snippet": "DateTime.Details details = new DateTime.Details(param1.getLong());\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionMonth.java",
    "fromLine": 50,
    "toLine": 50
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionHour.java",
    "fromLine": 50,
    "toLine": 50
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionDayOfYear.java",
    "fromLine": 50,
    "toLine": 50
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionMinute.java",
    "fromLine": 50,
    "toLine": 50
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionDayOfMonth.java",
    "fromLine": 50,
    "toLine": 50
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionYear.java",
    "fromLine": 50,
    "toLine": 50
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
    "filename": "project://smallsql0.21_src/src/smallsql/database/IndexNode.java",
    "metadata": {
        "volume": 0,
        "cloneClassesType1": 4
    },
    "results": {
        "type-1": [
            
{
    "metadata": {
        "cc": 2,
        "volume": 1,
        "mass": 17,
        "clones": 2,
        "snippet": "value = (unique) ? (Object)new Long(rowOffset) : new LongTreeList(rowOffset);\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/IndexNode.java",
    "fromLine": 243,
    "toLine": 243
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/IndexNode.java",
    "fromLine": 249,
    "toLine": 249
}
,]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 1,
        "mass": 17,
        "clones": 2,
        "snippet": "value = (unique) ? (Object)new Long(rowOffset) : new LongTreeList(rowOffset);\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/IndexNode.java",
    "fromLine": 243,
    "toLine": 243
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/IndexNode.java",
    "fromLine": 249,
    "toLine": 249
}
,]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 1,
        "mass": 12,
        "clones": 2,
        "snippet": "int mid = start + (end - start)\/2;\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/IndexNode.java",
    "fromLine": 349,
    "toLine": 349
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/IndexNode.java",
    "fromLine": 368,
    "toLine": 368
}
,]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 1,
        "mass": 12,
        "clones": 2,
        "snippet": "int mid = start + (end - start)\/2;\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/IndexNode.java",
    "fromLine": 349,
    "toLine": 349
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/IndexNode.java",
    "fromLine": 368,
    "toLine": 368
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
    "filename": "project://smallsql0.21_src/src/smallsql/junit/TestDBMetaData.java",
    "metadata": {
        "volume": 0,
        "cloneClassesType1": 8
    },
    "results": {
        "type-1": [
            
{
    "metadata": {
        "cc": 1,
        "volume": 1,
        "mass": 25,
        "clones": 2,
        "snippet": "String[] colNames = {\"TABLE_CAT\", \"TABLE_SCHEM\", \"TABLE_NAME\", \"COLUMN_NAME\", \"DATA_TYPE\", \"TYPE_NAME\", \"COLUMN_SIZE\", \"BUFFER_LENGTH\", \"DECIMAL_DIGITS\", \"NUM_PREC_RADIX\", \"NULLABLE\", \"REMARKS\", \"COLUMN_DEF\", \"SQL_DATA_TYPE\", \"SQL_DATETIME_SUB\", \"CHAR_OCTET_LENGTH\", \"ORDINAL_POSITION\", \"IS_NULLABLE\"};\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestDBMetaData.java",
    "fromLine": 182,
    "toLine": 182
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java",
    "fromLine": 753,
    "toLine": 753
}
,]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 1,
        "mass": 17,
        "clones": 2,
        "snippet": "String[] colNames = {\"TABLE_CAT\",\"TABLE_SCHEM\",\"TABLE_NAME\",\"TABLE_TYPE\",\"REMARKS\",\"TYPE_CAT\",\"TYPE_SCHEM\",\"TYPE_NAME\",\"SELF_REFERENCING_COL_NAME\",\"REF_GENERATION\"};\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestDBMetaData.java",
    "fromLine": 110,
    "toLine": 110
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java",
    "fromLine": 678,
    "toLine": 678
}
,]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 1,
        "mass": 13,
        "clones": 2,
        "snippet": "String[] colNames = {\"TYPE_CAT\", \"TYPE_SCHEM\", \"TYPE_NAME\", \"CLASS_NAME\", \"DATA_TYPE\", \"REMARKS\"};\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestDBMetaData.java",
    "fromLine": 296,
    "toLine": 296
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java",
    "fromLine": 951,
    "toLine": 951
}
,]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 1,
        "mass": 15,
        "clones": 2,
        "snippet": "String[] colNames = {\"PROCEDURE_CAT\", \"PROCEDURE_SCHEM\", \"PROCEDURE_NAME\", \"\", \"\", \"\", \"REMARKS\", \"PROCEDURE_TYPE\"};\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestDBMetaData.java",
    "fromLine": 93,
    "toLine": 93
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java",
    "fromLine": 664,
    "toLine": 664
}
,]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 1,
        "mass": 20,
        "clones": 2,
        "snippet": "String[] colNames = {\"PROCEDURE_CAT\", \"PROCEDURE_SCHEM\", \"PROCEDURE_NAME\", \"COLUMN_NAME\", \"COLUMN_TYPE\", \"DATA_TYPE\", \"TYPE_NAME\", \"PRECISION\", \"LENGTH\", \"SCALE\", \"RADIX\", \"NULLABLE\", \"REMARKS\" };\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestDBMetaData.java",
    "fromLine": 103,
    "toLine": 103
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java",
    "fromLine": 671,
    "toLine": 671
}
,]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 1,
        "mass": 15,
        "clones": 3,
        "snippet": "String[] colNames = {\"SCOPE\", \"COLUMN_NAME\", \"DATA_TYPE\", \"TYPE_NAME\", \"COLUMN_SIZE\", \"BUFFER_LENGTH\", \"DECIMAL_DIGITS\", \"PSEUDO_COLUMN\"};\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestDBMetaData.java",
    "fromLine": 263,
    "toLine": 263
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java",
    "fromLine": 778,
    "toLine": 778
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java",
    "fromLine": 789,
    "toLine": 789
}
,]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 1,
        "mass": 25,
        "clones": 2,
        "snippet": "String[] colNames = {\"TYPE_NAME\", \"DATA_TYPE\", \"PRECISION\", \"LITERAL_PREFIX\", \"LITERAL_SUFFIX\", \"CREATE_PARAMS\", \"NULLABLE\", \"CASE_SENSITIVE\", \"SEARCHABLE\", \"UNSIGNED_ATTRIBUTE\", \"FIXED_PREC_SCALE\", \"AUTO_INCREMENT\", \"LOCAL_TYPE_NAME\", \"MINIMUM_SCALE\", \"MAXIMUM_SCALE\", \"SQL_DATA_TYPE\", \"SQL_DATETIME_SUB\", \"NUM_PREC_RADIX\"};\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestDBMetaData.java",
    "fromLine": 210,
    "toLine": 210
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java",
    "fromLine": 831,
    "toLine": 831
}
,]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 1,
        "mass": 21,
        "clones": 2,
        "snippet": "String[] colNames = {\"PKTABLE_CAT\", \"PKTABLE_SCHEM\", \"PKTABLE_NAME\", \"PKCOLUMN_NAME\", \"FKTABLE_CAT\", \"FKTABLE_SCHEM\", \"FKTABLE_NAME\", \"FKCOLUMN_NAME\", \"KEY_SEQ\", \"UPDATE_RULE\", \"DELETE_RULE\", \"FK_NAME\", \"PK_NAME\", \"DEFERRABILITY\"};\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestDBMetaData.java",
    "fromLine": 234,
    "toLine": 234
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java",
    "fromLine": 821,
    "toLine": 821
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
    "filename": "project://smallsql0.21_src/src/smallsql/junit/TestOperatoren.java",
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
        "mass": 12,
        "clones": 2,
        "snippet": "PreparedStatement pr = con.prepareStatement(\"INSERT into \" + table + \"(a,b) Values(?,?)\");\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestOperatoren.java",
    "fromLine": 113,
    "toLine": 113
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestJoins.java",
    "fromLine": 119,
    "toLine": 119
}
,]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 5,
        "mass": 13,
        "clones": 2,
        "snippet": "private static class TestValue{\n        String dataType;\n        Object small;\n        Object large;\n    }\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestJoins.java",
    "fromLine": 212,
    "toLine": 216
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestOperatoren.java",
    "fromLine": 275,
    "toLine": 279
}
,]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 10,
        "mass": 33,
        "clones": 4,
        "snippet": "public void tearDown(){\n        try{\n            Connection con = AllTests.getConnection();\n            Statement st = con.createStatement();\n            st.execute(\"drop table \" + table);\n            st.close();\n        }catch(Throwable e){\n        }\n    }\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestOperatoren.java",
    "fromLine": 95,
    "toLine": 104
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestDataTypes.java",
    "fromLine": 68,
    "toLine": 77
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestMoneyRounding.java",
    "fromLine": 53,
    "toLine": 62
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestFunctions.java",
    "fromLine": 374,
    "toLine": 383
}
,]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 7,
        "mass": 41,
        "clones": 2,
        "snippet": "private static TestValue a(String dataType, Object small, Object large){\n        TestValue value = new TestValue();\n        value.dataType  = dataType;\n        value.small     = small;\n        value.large     = large;\n        return value;\n    }\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestJoins.java",
    "fromLine": 204,
    "toLine": 210
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestOperatoren.java",
    "fromLine": 267,
    "toLine": 273
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
    "filename": "project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionTimestampAdd.java",
    "metadata": {
        "volume": 0,
        "cloneClassesType1": 3
    },
    "results": {
        "type-1": [
            
{
    "metadata": {
        "cc": 1,
        "volume": 1,
        "mass": 14,
        "clones": 6,
        "snippet": "DateTime.Details details2 = new DateTime.Details(param2.getLong());\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionTimestampAdd.java",
    "fromLine": 87,
    "toLine": 87
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionTimestampAdd.java",
    "fromLine": 92,
    "toLine": 92
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionTimestampAdd.java",
    "fromLine": 97,
    "toLine": 97
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionTimestampDiff.java",
    "fromLine": 109,
    "toLine": 109
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionTimestampDiff.java",
    "fromLine": 114,
    "toLine": 114
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionTimestampDiff.java",
    "fromLine": 119,
    "toLine": 119
}
,]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 1,
        "mass": 14,
        "clones": 6,
        "snippet": "DateTime.Details details2 = new DateTime.Details(param2.getLong());\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionTimestampAdd.java",
    "fromLine": 87,
    "toLine": 87
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionTimestampAdd.java",
    "fromLine": 92,
    "toLine": 92
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionTimestampAdd.java",
    "fromLine": 97,
    "toLine": 97
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionTimestampDiff.java",
    "fromLine": 109,
    "toLine": 109
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionTimestampDiff.java",
    "fromLine": 114,
    "toLine": 114
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionTimestampDiff.java",
    "fromLine": 119,
    "toLine": 119
}
,]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 1,
        "mass": 14,
        "clones": 6,
        "snippet": "DateTime.Details details2 = new DateTime.Details(param2.getLong());\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionTimestampAdd.java",
    "fromLine": 87,
    "toLine": 87
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionTimestampAdd.java",
    "fromLine": 92,
    "toLine": 92
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionTimestampAdd.java",
    "fromLine": 97,
    "toLine": 97
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionTimestampDiff.java",
    "fromLine": 109,
    "toLine": 109
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionTimestampDiff.java",
    "fromLine": 114,
    "toLine": 114
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionTimestampDiff.java",
    "fromLine": 119,
    "toLine": 119
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
    "filename": "project://smallsql0.21_src/src/smallsql/database/TableView.java",
    "metadata": {
        "volume": 0,
        "cloneClassesType1": 1
    },
    "results": {
        "type-1": [
            
{
    "metadata": {
        "cc": 4,
        "volume": 9,
        "mass": 28,
        "clones": 2,
        "snippet": "catch(Throwable e){\n\t\t\tif(raFile != null)\n\t\t\t\ttry{\n\t\t\t\t\traFile.close();\n\t\t\t\t}catch(Exception e2){\n\t\t\t\t\tDriverManager.println(e2.toString());\n\t\t\t\t}\n\t\t\tthrow SmallSQLException.createFromException(e);\n\t\t}\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/TableView.java",
    "fromLine": 105,
    "toLine": 113
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/IndexDescription.java",
    "fromLine": 186,
    "toLine": 194
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
    "filename": "project://smallsql0.21_src/src/smallsql/database/DateTime.java",
    "metadata": {
        "volume": 0,
        "cloneClassesType1": 2
    },
    "results": {
        "type-1": [
            
{
    "metadata": {
        "cc": 2,
        "volume": 5,
        "mass": 12,
        "clones": 2,
        "snippet": "if(t<0){\n\t\t\t\tt += 86400000;\n\t\t\t\td--;\n\t\t\t}\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/DateTime.java",
    "fromLine": 740,
    "toLine": 744
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/DateTime.java",
    "fromLine": 675,
    "toLine": 679
}
,]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 5,
        "mass": 12,
        "clones": 2,
        "snippet": "if(t<0){\n\t\t\t\tt += 86400000;\n\t\t\t\td--;\n\t\t\t}\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/DateTime.java",
    "fromLine": 740,
    "toLine": 744
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/DateTime.java",
    "fromLine": 675,
    "toLine": 679
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
    "filename": "project://smallsql0.21_src/src/smallsql/database/Database.java",
    "metadata": {
        "volume": 0,
        "cloneClassesType1": 5
    },
    "results": {
        "type-1": [
            
{
    "metadata": {
        "cc": 1,
        "volume": 1,
        "mass": 12,
        "clones": 5,
        "snippet": "Object[][] result = new Object[rows.size()][];\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/Database.java",
    "fromLine": 395,
    "toLine": 395
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/Database.java",
    "fromLine": 438,
    "toLine": 438
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/Database.java",
    "fromLine": 474,
    "toLine": 474
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/Database.java",
    "fromLine": 505,
    "toLine": 505
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/Database.java",
    "fromLine": 542,
    "toLine": 542
}
,]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 1,
        "mass": 12,
        "clones": 5,
        "snippet": "Object[][] result = new Object[rows.size()][];\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/Database.java",
    "fromLine": 395,
    "toLine": 395
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/Database.java",
    "fromLine": 438,
    "toLine": 438
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/Database.java",
    "fromLine": 474,
    "toLine": 474
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/Database.java",
    "fromLine": 505,
    "toLine": 505
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/Database.java",
    "fromLine": 542,
    "toLine": 542
}
,]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 1,
        "mass": 12,
        "clones": 5,
        "snippet": "Object[][] result = new Object[rows.size()][];\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/Database.java",
    "fromLine": 395,
    "toLine": 395
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/Database.java",
    "fromLine": 438,
    "toLine": 438
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/Database.java",
    "fromLine": 474,
    "toLine": 474
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/Database.java",
    "fromLine": 505,
    "toLine": 505
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/Database.java",
    "fromLine": 542,
    "toLine": 542
}
,]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 1,
        "mass": 12,
        "clones": 5,
        "snippet": "Object[][] result = new Object[rows.size()][];\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/Database.java",
    "fromLine": 395,
    "toLine": 395
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/Database.java",
    "fromLine": 438,
    "toLine": 438
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/Database.java",
    "fromLine": 474,
    "toLine": 474
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/Database.java",
    "fromLine": 505,
    "toLine": 505
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/Database.java",
    "fromLine": 542,
    "toLine": 542
}
,]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 1,
        "mass": 12,
        "clones": 5,
        "snippet": "Object[][] result = new Object[rows.size()][];\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/Database.java",
    "fromLine": 395,
    "toLine": 395
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/Database.java",
    "fromLine": 438,
    "toLine": 438
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/Database.java",
    "fromLine": 474,
    "toLine": 474
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/Database.java",
    "fromLine": 505,
    "toLine": 505
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/Database.java",
    "fromLine": 542,
    "toLine": 542
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
    "filename": "project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java",
    "metadata": {
        "volume": 0,
        "cloneClassesType1": 7
    },
    "results": {
        "type-1": [
            
{
    "metadata": {
        "cc": 1,
        "volume": 1,
        "mass": 21,
        "clones": 2,
        "snippet": "private final static char[] digits = {'0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'};\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java",
    "fromLine": 101,
    "toLine": 101
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/Utils.java",
    "fromLine": 476,
    "toLine": 476
}
,]
}
,
{
    "metadata": {
        "cc": 4,
        "volume": 6,
        "mass": 31,
        "clones": 2,
        "snippet": "static boolean string2boolean( String val){\n        try{\n            return Double.parseDouble( val ) != 0;\n        return \"true\".equalsIgnoreCase( val ) || \"yes\".equalsIgnoreCase( val ) || \"t\".equalsIgnoreCase( val );\n    }\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/Utils.java",
    "fromLine": 317,
    "toLine": 322
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java",
    "fromLine": 188,
    "toLine": 196
}
,]
}
,
{
    "metadata": {
        "cc": 3,
        "volume": 1,
        "mass": 13,
        "clones": 2,
        "snippet": "for(; k>= 0; k--) if(tmp[k] != 0) break;\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java",
    "fromLine": 131,
    "toLine": 131
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java",
    "fromLine": 144,
    "toLine": 144
}
,]
}
,
{
    "metadata": {
        "cc": 3,
        "volume": 1,
        "mass": 13,
        "clones": 2,
        "snippet": "for(; k>= 0; k--) if(tmp[k] != 0) break;\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java",
    "fromLine": 131,
    "toLine": 131
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java",
    "fromLine": 144,
    "toLine": 144
}
,]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 1,
        "mass": 16,
        "clones": 2,
        "snippet": "String message = \"Check DisplaySize: \" + expectedLen + \"!=\" + Integer.MAX_VALUE + \")\";\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java",
    "fromLine": 315,
    "toLine": 315
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java",
    "fromLine": 323,
    "toLine": 323
}
,]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 1,
        "mass": 16,
        "clones": 2,
        "snippet": "String message = \"Check DisplaySize: \" + expectedLen + \"!=\" + Integer.MAX_VALUE + \")\";\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java",
    "fromLine": 315,
    "toLine": 315
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java",
    "fromLine": 323,
    "toLine": 323
}
,]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 8,
        "mass": 55,
        "clones": 2,
        "snippet": "{\n        StringBuffer buf = new StringBuffer(bytes.length << 1);\n        for(int i=0; i<bytes.length; i++){\n            buf.append( digits[ (bytes[i] >> 4) & 0x0F ] );\n            buf.append( digits[ (bytes[i]     ) & 0x0F ] );\n        }\n        return buf.toString();\n    }\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/Utils.java",
    "fromLine": 205,
    "toLine": 212
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java",
    "fromLine": 102,
    "toLine": 109
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
    "filename": "project://smallsql0.21_src/src/smallsql/database/LongList.java",
    "metadata": {
        "volume": 0,
        "cloneClassesType1": 2
    },
    "results": {
        "type-1": [
            
{
    "metadata": {
        "cc": 2,
        "volume": 2,
        "mass": 15,
        "clones": 5,
        "snippet": "if (idx >= size)\n\t\t\tthrow new IndexOutOfBoundsException(\"Index: \"+idx+\", Size: \"+size);\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/LongList.java",
    "fromLine": 61,
    "toLine": 62
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/Expressions.java",
    "fromLine": 65,
    "toLine": 66
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/LongLongList.java",
    "fromLine": 56,
    "toLine": 57
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/DataSources.java",
    "fromLine": 49,
    "toLine": 50
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/LongLongList.java",
    "fromLine": 62,
    "toLine": 63
}
,]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 3,
        "mass": 12,
        "clones": 7,
        "snippet": "if(size >= data.length ){\n\t\t\tresize(size << 1);\n\t\t}\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/IndexDescriptions.java",
    "fromLine": 71,
    "toLine": 73
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/Columns.java",
    "fromLine": 96,
    "toLine": 98
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/LongList.java",
    "fromLine": 68,
    "toLine": 70
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/Strings.java",
    "fromLine": 64,
    "toLine": 66
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/Expressions.java",
    "fromLine": 72,
    "toLine": 74
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/ForeignKeys.java",
    "fromLine": 64,
    "toLine": 66
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/Expressions.java",
    "fromLine": 79,
    "toLine": 81
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
    "filename": "project://smallsql0.21_src/src/smallsql/database/Index.java",
    "metadata": {
        "volume": 0,
        "cloneClassesType1": 6
    },
    "results": {
        "type-1": [
            
{
    "metadata": {
        "cc": 1,
        "volume": 1,
        "mass": 13,
        "clones": 2,
        "snippet": "char digit = (char)(key >> (i<<4));\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/Index.java",
    "fromLine": 330,
    "toLine": 330
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/Index.java",
    "fromLine": 350,
    "toLine": 350
}
,]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 1,
        "mass": 13,
        "clones": 2,
        "snippet": "char digit = (char)(key >> (i<<4));\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/Index.java",
    "fromLine": 330,
    "toLine": 330
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/Index.java",
    "fromLine": 350,
    "toLine": 350
}
,]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 4,
        "mass": 17,
        "clones": 2,
        "snippet": "if(i + 1 == count)\n                return page.getValue();\n            else\n                page = (IndexNode)page.getValue();\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/Index.java",
    "fromLine": 130,
    "toLine": 133
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/Index.java",
    "fromLine": 103,
    "toLine": 106
}
,]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 4,
        "mass": 17,
        "clones": 2,
        "snippet": "if(i + 1 == count)\n                return page.getValue();\n            else\n                page = (IndexNode)page.getValue();\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/Index.java",
    "fromLine": 130,
    "toLine": 133
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/Index.java",
    "fromLine": 103,
    "toLine": 106
}
,]
}
,
{
    "metadata": {
        "cc": 3,
        "volume": 3,
        "mass": 22,
        "clones": 2,
        "snippet": "\t\t\tchar digit = (i<0) ? (length == 0 ? (char)1 : 2)\n\t\t\t\t\t\t\t  : (key[i]);\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/Index.java",
    "fromLine": 407,
    "toLine": 409
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/Index.java",
    "fromLine": 382,
    "toLine": 384
}
,]
}
,
{
    "metadata": {
        "cc": 3,
        "volume": 3,
        "mass": 22,
        "clones": 2,
        "snippet": "\t\t\tchar digit = (i<0) ? (length == 0 ? (char)1 : 2)\n\t\t\t\t\t\t\t  : (key[i]);\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/Index.java",
    "fromLine": 407,
    "toLine": 409
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/Index.java",
    "fromLine": 382,
    "toLine": 384
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
    "filename": "project://smallsql0.21_src/src/smallsql/database/SSPreparedStatement.java",
    "metadata": {
        "volume": 0,
        "cloneClassesType1": 1
    },
    "results": {
        "type-1": [
            
{
    "metadata": {
        "cc": 2,
        "volume": 4,
        "mass": 22,
        "clones": 2,
        "snippet": "if(failed == null){\n                    failed = new BatchUpdateException(ex.getMessage(), ex.getSQLState(), ex.getErrorCode(), result);\n                    failed.initCause(ex);\n                }\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/SSStatement.java",
    "fromLine": 271,
    "toLine": 274
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/SSPreparedStatement.java",
    "fromLine": 249,
    "toLine": 252
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
    "filename": "project://smallsql0.21_src/src/smallsql/database/IndexScrollStatus.java",
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
        "mass": 12,
        "clones": 2,
        "snippet": "nodeStack.push( new IndexNodeScrollStatus(node, status.asc, scroll, level) );\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/IndexScrollStatus.java",
    "fromLine": 115,
    "toLine": 115
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/IndexScrollStatus.java",
    "fromLine": 144,
    "toLine": 144
}
,]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 1,
        "mass": 12,
        "clones": 2,
        "snippet": "nodeStack.push( new IndexNodeScrollStatus(node, status.asc, scroll, level) );\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/IndexScrollStatus.java",
    "fromLine": 115,
    "toLine": 115
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/IndexScrollStatus.java",
    "fromLine": 144,
    "toLine": 144
}
,]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 8,
        "mass": 28,
        "clones": 2,
        "snippet": "{\n\t\t\t\t\t\t\tlevel++;\n\t\t\t\t\t\t\tnodeStack.push(\n\t\t\t\t\t\t\t\tnew IndexNodeScrollStatus( \t(IndexNode)status.nodeValue, \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t(expressions.get(level).getAlias() != SQLTokenizer.DESC_STR), \n\t\t\t\t\t\t\t\t\t\t\t\t\t\tscroll, level));\n\t\t\t\t\t\t\tcontinue;\n\t\t\t\t\t\t}\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/IndexScrollStatus.java",
    "fromLine": 121,
    "toLine": 128
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/IndexScrollStatus.java",
    "fromLine": 90,
    "toLine": 97
}
,]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 8,
        "mass": 28,
        "clones": 2,
        "snippet": "{\n\t\t\t\t\t\t\tlevel++;\n\t\t\t\t\t\t\tnodeStack.push(\n\t\t\t\t\t\t\t\tnew IndexNodeScrollStatus( \t(IndexNode)status.nodeValue, \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t(expressions.get(level).getAlias() != SQLTokenizer.DESC_STR), \n\t\t\t\t\t\t\t\t\t\t\t\t\t\tscroll, level));\n\t\t\t\t\t\t\tcontinue;\n\t\t\t\t\t\t}\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/IndexScrollStatus.java",
    "fromLine": 121,
    "toLine": 128
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/IndexScrollStatus.java",
    "fromLine": 90,
    "toLine": 97
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
    "filename": "project://smallsql0.21_src/src/smallsql/database/Utils.java",
    "metadata": {
        "volume": 0,
        "cloneClassesType1": 5
    },
    "results": {
        "type-1": [
            
{
    "metadata": {
        "cc": 1,
        "volume": 1,
        "mass": 21,
        "clones": 2,
        "snippet": "private final static char[] digits = {'0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'};\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java",
    "fromLine": 101,
    "toLine": 101
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/Utils.java",
    "fromLine": 476,
    "toLine": 476
}
,]
}
,
{
    "metadata": {
        "cc": 4,
        "volume": 6,
        "mass": 31,
        "clones": 2,
        "snippet": "static boolean string2boolean( String val){\n        try{\n            return Double.parseDouble( val ) != 0;\n        return \"true\".equalsIgnoreCase( val ) || \"yes\".equalsIgnoreCase( val ) || \"t\".equalsIgnoreCase( val );\n    }\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/Utils.java",
    "fromLine": 317,
    "toLine": 322
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java",
    "fromLine": 188,
    "toLine": 196
}
,]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 3,
        "mass": 15,
        "clones": 2,
        "snippet": "{\n            result = (result << 8) | (bytes[i] & 0xFF);\n        }\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/Utils.java",
    "fromLine": 163,
    "toLine": 165
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/Utils.java",
    "fromLine": 154,
    "toLine": 156
}
,]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 3,
        "mass": 15,
        "clones": 2,
        "snippet": "{\n            result = (result << 8) | (bytes[i] & 0xFF);\n        }\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/Utils.java",
    "fromLine": 163,
    "toLine": 165
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/Utils.java",
    "fromLine": 154,
    "toLine": 156
}
,]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 8,
        "mass": 55,
        "clones": 2,
        "snippet": "{\n        StringBuffer buf = new StringBuffer(bytes.length << 1);\n        for(int i=0; i<bytes.length; i++){\n            buf.append( digits[ (bytes[i] >> 4) & 0x0F ] );\n            buf.append( digits[ (bytes[i]     ) & 0x0F ] );\n        }\n        return buf.toString();\n    }\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/Utils.java",
    "fromLine": 205,
    "toLine": 212
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java",
    "fromLine": 102,
    "toLine": 109
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
    "filename": "project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionMonth.java",
    "metadata": {
        "volume": 0,
        "cloneClassesType1": 1
    },
    "results": {
        "type-1": [
            
{
    "metadata": {
        "cc": 1,
        "volume": 1,
        "mass": 14,
        "clones": 6,
        "snippet": "DateTime.Details details = new DateTime.Details(param1.getLong());\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionMonth.java",
    "fromLine": 50,
    "toLine": 50
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionHour.java",
    "fromLine": 50,
    "toLine": 50
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionDayOfYear.java",
    "fromLine": 50,
    "toLine": 50
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionMinute.java",
    "fromLine": 50,
    "toLine": 50
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionDayOfMonth.java",
    "fromLine": 50,
    "toLine": 50
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionYear.java",
    "fromLine": 50,
    "toLine": 50
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
    "filename": "project://smallsql0.21_src/src/smallsql/database/LongTreeList.java",
    "metadata": {
        "volume": 0,
        "cloneClassesType1": 8
    },
    "results": {
        "type-1": [
            
{
    "metadata": {
        "cc": 1,
        "volume": 1,
        "mass": 12,
        "clones": 2,
        "snippet": "int octet = (int)(value >> shift) & 0xFFFF;\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/LongTreeList.java",
    "fromLine": 224,
    "toLine": 224
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/LongTreeList.java",
    "fromLine": 271,
    "toLine": 271
}
,]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 1,
        "mass": 12,
        "clones": 2,
        "snippet": "int octet = (int)(value >> shift) & 0xFFFF;\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/LongTreeList.java",
    "fromLine": 224,
    "toLine": 224
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/LongTreeList.java",
    "fromLine": 271,
    "toLine": 271
}
,]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 1,
        "mass": 12,
        "clones": 2,
        "snippet": "int shift = (3-listEnum.stack) << 4;\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/LongTreeList.java",
    "fromLine": 323,
    "toLine": 323
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/LongTreeList.java",
    "fromLine": 362,
    "toLine": 362
}
,]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 1,
        "mass": 12,
        "clones": 2,
        "snippet": "int shift = (3-listEnum.stack) << 4;\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/LongTreeList.java",
    "fromLine": 323,
    "toLine": 323
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/LongTreeList.java",
    "fromLine": 362,
    "toLine": 362
}
,]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 1,
        "mass": 12,
        "clones": 2,
        "snippet": "listEnum.offsetStack[listEnum.stack] = offset+pointerSize;\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/LongTreeList.java",
    "fromLine": 337,
    "toLine": 337
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/LongTreeList.java",
    "fromLine": 382,
    "toLine": 382
}
,]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 1,
        "mass": 12,
        "clones": 2,
        "snippet": "listEnum.offsetStack[listEnum.stack] = offset+pointerSize;\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/LongTreeList.java",
    "fromLine": 337,
    "toLine": 337
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/LongTreeList.java",
    "fromLine": 382,
    "toLine": 382
}
,]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 4,
        "mass": 19,
        "clones": 2,
        "snippet": "if(listEnum.stack>=3){\n\t\t\t\t\tlistEnum.offsetStack[listEnum.stack] = offset;\n\t\t\t\t\treturn result;\n\t\t\t\t}\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/LongTreeList.java",
    "fromLine": 378,
    "toLine": 381
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/LongTreeList.java",
    "fromLine": 333,
    "toLine": 336
}
,]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 4,
        "mass": 19,
        "clones": 2,
        "snippet": "if(listEnum.stack>=3){\n\t\t\t\t\tlistEnum.offsetStack[listEnum.stack] = offset;\n\t\t\t\t\treturn result;\n\t\t\t\t}\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/LongTreeList.java",
    "fromLine": 378,
    "toLine": 381
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/LongTreeList.java",
    "fromLine": 333,
    "toLine": 336
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
    "filename": "project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionReturnInt.java",
    "metadata": {
        "volume": 0,
        "cloneClassesType1": 3
    },
    "results": {
        "type-1": [
            
{
    "metadata": {
        "cc": 2,
        "volume": 4,
        "mass": 13,
        "clones": 2,
        "snippet": "Object getObject() throws Exception {\n\t\tif(isNull()) return null;\n\t\treturn Utils.getInteger(getInt());\n\t}\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionReturnInt.java",
    "fromLine": 81,
    "toLine": 84
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionTimestampDiff.java",
    "fromLine": 154,
    "toLine": 157
}
,]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 4,
        "mass": 14,
        "clones": 2,
        "snippet": "final MutableNumeric getNumeric() throws Exception {\n\t\tif(isNull()) return null;\n\t\treturn new MutableNumeric(getInt());\n\t}\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionReturnInt.java",
    "fromLine": 75,
    "toLine": 78
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionTimestampDiff.java",
    "fromLine": 148,
    "toLine": 151
}
,]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 4,
        "mass": 13,
        "clones": 2,
        "snippet": "final String getString() throws Exception {\n\t\tif(isNull()) return null;\n\t\treturn String.valueOf(getInt());\n\t}\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionReturnInt.java",
    "fromLine": 87,
    "toLine": 90
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionTimestampDiff.java",
    "fromLine": 160,
    "toLine": 163
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
    "filename": "project://smallsql0.21_src/src/smallsql/database/SSStatement.java",
    "metadata": {
        "volume": 0,
        "cloneClassesType1": 1
    },
    "results": {
        "type-1": [
            
{
    "metadata": {
        "cc": 2,
        "volume": 4,
        "mass": 22,
        "clones": 2,
        "snippet": "if(failed == null){\n                    failed = new BatchUpdateException(ex.getMessage(), ex.getSQLState(), ex.getErrorCode(), result);\n                    failed.initCause(ex);\n                }\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/SSStatement.java",
    "fromLine": 271,
    "toLine": 274
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/SSPreparedStatement.java",
    "fromLine": 249,
    "toLine": 252
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
    "filename": "project://smallsql0.21_src/src/smallsql/database/Table.java",
    "metadata": {
        "volume": 0,
        "cloneClassesType1": 5
    },
    "results": {
        "type-1": [
            
{
    "metadata": {
        "cc": 1,
        "volume": 1,
        "mass": 12,
        "clones": 2,
        "snippet": "TableStorePage lock = new TableStorePage(con, this, LOCK_TAB, page);\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/Table.java",
    "fromLine": 379,
    "toLine": 379
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/Table.java",
    "fromLine": 397,
    "toLine": 397
}
,]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 1,
        "mass": 12,
        "clones": 2,
        "snippet": "TableStorePage lock = new TableStorePage(con, this, LOCK_TAB, page);\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/Table.java",
    "fromLine": 379,
    "toLine": 379
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/Table.java",
    "fromLine": 397,
    "toLine": 397
}
,]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 4,
        "mass": 19,
        "clones": 3,
        "snippet": "{\n\t\t\t\t\t\t\t\tTableStorePage lock = (TableStorePage)values.next();\n\t\t\t\t\t\t\t\tif(lock.con != con) return null;\n\t\t\t\t\t\t\t}\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/Table.java",
    "fromLine": 360,
    "toLine": 363
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/Table.java",
    "fromLine": 390,
    "toLine": 393
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/Table.java",
    "fromLine": 372,
    "toLine": 375
}
,]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 4,
        "mass": 19,
        "clones": 3,
        "snippet": "{\n\t\t\t\t\t\t\t\tTableStorePage lock = (TableStorePage)values.next();\n\t\t\t\t\t\t\t\tif(lock.con != con) return null;\n\t\t\t\t\t\t\t}\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/Table.java",
    "fromLine": 360,
    "toLine": 363
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/Table.java",
    "fromLine": 390,
    "toLine": 393
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/Table.java",
    "fromLine": 372,
    "toLine": 375
}
,]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 4,
        "mass": 19,
        "clones": 3,
        "snippet": "{\n\t\t\t\t\t\t\t\tTableStorePage lock = (TableStorePage)values.next();\n\t\t\t\t\t\t\t\tif(lock.con != con) return null;\n\t\t\t\t\t\t\t}\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/Table.java",
    "fromLine": 360,
    "toLine": 363
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/Table.java",
    "fromLine": 390,
    "toLine": 393
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/Table.java",
    "fromLine": 372,
    "toLine": 375
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
    "filename": "project://smallsql0.21_src/src/smallsql/database/LongLongList.java",
    "metadata": {
        "volume": 0,
        "cloneClassesType1": 2
    },
    "results": {
        "type-1": [
            
{
    "metadata": {
        "cc": 2,
        "volume": 2,
        "mass": 15,
        "clones": 5,
        "snippet": "if (idx >= size)\n\t\t\tthrow new IndexOutOfBoundsException(\"Index: \"+idx+\", Size: \"+size);\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/LongList.java",
    "fromLine": 61,
    "toLine": 62
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/Expressions.java",
    "fromLine": 65,
    "toLine": 66
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/LongLongList.java",
    "fromLine": 56,
    "toLine": 57
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/DataSources.java",
    "fromLine": 49,
    "toLine": 50
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/LongLongList.java",
    "fromLine": 62,
    "toLine": 63
}
,]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 2,
        "mass": 15,
        "clones": 5,
        "snippet": "if (idx >= size)\n\t\t\tthrow new IndexOutOfBoundsException(\"Index: \"+idx+\", Size: \"+size);\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/LongList.java",
    "fromLine": 61,
    "toLine": 62
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/Expressions.java",
    "fromLine": 65,
    "toLine": 66
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/LongLongList.java",
    "fromLine": 56,
    "toLine": 57
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/DataSources.java",
    "fromLine": 49,
    "toLine": 50
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/LongLongList.java",
    "fromLine": 62,
    "toLine": 63
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
    "filename": "project://smallsql0.21_src/src/smallsql/junit/TestScrollable.java",
    "metadata": {
        "volume": 0,
        "cloneClassesType1": 10
    },
    "results": {
        "type-1": [
            
{
    "metadata": {
        "cc": 2,
        "volume": 6,
        "mass": 19,
        "clones": 4,
        "snippet": "try{\n            rs.getString(\"v\");\n            fail(\"SQLException 'No current row' should be throw\");\n        }catch(SQLException ex){\n            assertSQLException( \"01000\", 0, ex );\n        }\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestScrollable.java",
    "fromLine": 67,
    "toLine": 72
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestScrollable.java",
    "fromLine": 99,
    "toLine": 104
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestScrollable.java",
    "fromLine": 173,
    "toLine": 178
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestScrollable.java",
    "fromLine": 135,
    "toLine": 140
}
,]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 6,
        "mass": 19,
        "clones": 4,
        "snippet": "try{\n            rs.getString(\"v\");\n            fail(\"SQLException 'No current row' should be throw\");\n        }catch(SQLException ex){\n            assertSQLException( \"01000\", 0, ex );\n        }\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestScrollable.java",
    "fromLine": 67,
    "toLine": 72
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestScrollable.java",
    "fromLine": 99,
    "toLine": 104
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestScrollable.java",
    "fromLine": 173,
    "toLine": 178
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestScrollable.java",
    "fromLine": 135,
    "toLine": 140
}
,]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 6,
        "mass": 19,
        "clones": 4,
        "snippet": "try{\n            rs.getString(\"v\");\n            fail(\"SQLException 'No current row' should be throw\");\n        }catch(SQLException ex){\n            assertSQLException( \"01000\", 0, ex );\n        }\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestScrollable.java",
    "fromLine": 67,
    "toLine": 72
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestScrollable.java",
    "fromLine": 99,
    "toLine": 104
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestScrollable.java",
    "fromLine": 173,
    "toLine": 178
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestScrollable.java",
    "fromLine": 135,
    "toLine": 140
}
,]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 6,
        "mass": 19,
        "clones": 4,
        "snippet": "try{\n            rs.getString(\"v\");\n            fail(\"SQLException 'No current row' should be throw\");\n        }catch(SQLException ex){\n            assertSQLException( \"01000\", 0, ex );\n        }\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestScrollable.java",
    "fromLine": 67,
    "toLine": 72
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestScrollable.java",
    "fromLine": 99,
    "toLine": 104
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestScrollable.java",
    "fromLine": 173,
    "toLine": 178
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestScrollable.java",
    "fromLine": 135,
    "toLine": 140
}
,]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 1,
        "mass": 13,
        "clones": 20,
        "snippet": "Statement st = con.createStatement(ResultSet.TYPE_SCROLL_SENSITIVE, ResultSet.CONCUR_UPDATABLE);\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestOrderBy.java",
    "fromLine": 701,
    "toLine": 701
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestOrderBy.java",
    "fromLine": 732,
    "toLine": 732
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestOrderBy.java",
    "fromLine": 763,
    "toLine": 763
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestStatement.java",
    "fromLine": 309,
    "toLine": 309
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestResultSet.java",
    "fromLine": 68,
    "toLine": 68
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestResultSet.java",
    "fromLine": 113,
    "toLine": 113
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestResultSet.java",
    "fromLine": 156,
    "toLine": 156
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestResultSet.java",
    "fromLine": 193,
    "toLine": 193
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestResultSet.java",
    "fromLine": 252,
    "toLine": 252
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestScrollable.java",
    "fromLine": 53,
    "toLine": 53
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestScrollable.java",
    "fromLine": 86,
    "toLine": 86
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestScrollable.java",
    "fromLine": 118,
    "toLine": 118
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestScrollable.java",
    "fromLine": 154,
    "toLine": 154
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestScrollable.java",
    "fromLine": 192,
    "toLine": 192
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestScrollable.java",
    "fromLine": 275,
    "toLine": 275
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 112,
    "toLine": 112
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 169,
    "toLine": 169
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 222,
    "toLine": 222
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 256,
    "toLine": 256
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 377,
    "toLine": 377
}
,]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 1,
        "mass": 13,
        "clones": 20,
        "snippet": "Statement st = con.createStatement(ResultSet.TYPE_SCROLL_SENSITIVE, ResultSet.CONCUR_UPDATABLE);\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestOrderBy.java",
    "fromLine": 701,
    "toLine": 701
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestOrderBy.java",
    "fromLine": 732,
    "toLine": 732
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestOrderBy.java",
    "fromLine": 763,
    "toLine": 763
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestStatement.java",
    "fromLine": 309,
    "toLine": 309
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestResultSet.java",
    "fromLine": 68,
    "toLine": 68
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestResultSet.java",
    "fromLine": 113,
    "toLine": 113
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestResultSet.java",
    "fromLine": 156,
    "toLine": 156
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestResultSet.java",
    "fromLine": 193,
    "toLine": 193
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestResultSet.java",
    "fromLine": 252,
    "toLine": 252
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestScrollable.java",
    "fromLine": 53,
    "toLine": 53
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestScrollable.java",
    "fromLine": 86,
    "toLine": 86
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestScrollable.java",
    "fromLine": 118,
    "toLine": 118
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestScrollable.java",
    "fromLine": 154,
    "toLine": 154
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestScrollable.java",
    "fromLine": 192,
    "toLine": 192
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestScrollable.java",
    "fromLine": 275,
    "toLine": 275
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 112,
    "toLine": 112
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 169,
    "toLine": 169
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 222,
    "toLine": 222
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 256,
    "toLine": 256
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 377,
    "toLine": 377
}
,]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 1,
        "mass": 13,
        "clones": 20,
        "snippet": "Statement st = con.createStatement(ResultSet.TYPE_SCROLL_SENSITIVE, ResultSet.CONCUR_UPDATABLE);\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestOrderBy.java",
    "fromLine": 701,
    "toLine": 701
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestOrderBy.java",
    "fromLine": 732,
    "toLine": 732
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestOrderBy.java",
    "fromLine": 763,
    "toLine": 763
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestStatement.java",
    "fromLine": 309,
    "toLine": 309
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestResultSet.java",
    "fromLine": 68,
    "toLine": 68
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestResultSet.java",
    "fromLine": 113,
    "toLine": 113
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestResultSet.java",
    "fromLine": 156,
    "toLine": 156
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestResultSet.java",
    "fromLine": 193,
    "toLine": 193
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestResultSet.java",
    "fromLine": 252,
    "toLine": 252
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestScrollable.java",
    "fromLine": 53,
    "toLine": 53
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestScrollable.java",
    "fromLine": 86,
    "toLine": 86
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestScrollable.java",
    "fromLine": 118,
    "toLine": 118
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestScrollable.java",
    "fromLine": 154,
    "toLine": 154
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestScrollable.java",
    "fromLine": 192,
    "toLine": 192
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestScrollable.java",
    "fromLine": 275,
    "toLine": 275
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 112,
    "toLine": 112
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 169,
    "toLine": 169
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 222,
    "toLine": 222
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 256,
    "toLine": 256
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 377,
    "toLine": 377
}
,]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 1,
        "mass": 13,
        "clones": 20,
        "snippet": "Statement st = con.createStatement(ResultSet.TYPE_SCROLL_SENSITIVE, ResultSet.CONCUR_UPDATABLE);\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestOrderBy.java",
    "fromLine": 701,
    "toLine": 701
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestOrderBy.java",
    "fromLine": 732,
    "toLine": 732
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestOrderBy.java",
    "fromLine": 763,
    "toLine": 763
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestStatement.java",
    "fromLine": 309,
    "toLine": 309
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestResultSet.java",
    "fromLine": 68,
    "toLine": 68
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestResultSet.java",
    "fromLine": 113,
    "toLine": 113
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestResultSet.java",
    "fromLine": 156,
    "toLine": 156
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestResultSet.java",
    "fromLine": 193,
    "toLine": 193
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestResultSet.java",
    "fromLine": 252,
    "toLine": 252
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestScrollable.java",
    "fromLine": 53,
    "toLine": 53
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestScrollable.java",
    "fromLine": 86,
    "toLine": 86
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestScrollable.java",
    "fromLine": 118,
    "toLine": 118
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestScrollable.java",
    "fromLine": 154,
    "toLine": 154
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestScrollable.java",
    "fromLine": 192,
    "toLine": 192
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestScrollable.java",
    "fromLine": 275,
    "toLine": 275
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 112,
    "toLine": 112
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 169,
    "toLine": 169
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 222,
    "toLine": 222
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 256,
    "toLine": 256
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 377,
    "toLine": 377
}
,]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 1,
        "mass": 13,
        "clones": 20,
        "snippet": "Statement st = con.createStatement(ResultSet.TYPE_SCROLL_SENSITIVE, ResultSet.CONCUR_UPDATABLE);\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestOrderBy.java",
    "fromLine": 701,
    "toLine": 701
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestOrderBy.java",
    "fromLine": 732,
    "toLine": 732
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestOrderBy.java",
    "fromLine": 763,
    "toLine": 763
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestStatement.java",
    "fromLine": 309,
    "toLine": 309
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestResultSet.java",
    "fromLine": 68,
    "toLine": 68
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestResultSet.java",
    "fromLine": 113,
    "toLine": 113
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestResultSet.java",
    "fromLine": 156,
    "toLine": 156
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestResultSet.java",
    "fromLine": 193,
    "toLine": 193
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestResultSet.java",
    "fromLine": 252,
    "toLine": 252
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestScrollable.java",
    "fromLine": 53,
    "toLine": 53
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestScrollable.java",
    "fromLine": 86,
    "toLine": 86
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestScrollable.java",
    "fromLine": 118,
    "toLine": 118
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestScrollable.java",
    "fromLine": 154,
    "toLine": 154
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestScrollable.java",
    "fromLine": 192,
    "toLine": 192
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestScrollable.java",
    "fromLine": 275,
    "toLine": 275
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 112,
    "toLine": 112
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 169,
    "toLine": 169
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 222,
    "toLine": 222
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 256,
    "toLine": 256
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 377,
    "toLine": 377
}
,]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 1,
        "mass": 13,
        "clones": 20,
        "snippet": "Statement st = con.createStatement(ResultSet.TYPE_SCROLL_SENSITIVE, ResultSet.CONCUR_UPDATABLE);\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestOrderBy.java",
    "fromLine": 701,
    "toLine": 701
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestOrderBy.java",
    "fromLine": 732,
    "toLine": 732
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestOrderBy.java",
    "fromLine": 763,
    "toLine": 763
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestStatement.java",
    "fromLine": 309,
    "toLine": 309
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestResultSet.java",
    "fromLine": 68,
    "toLine": 68
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestResultSet.java",
    "fromLine": 113,
    "toLine": 113
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestResultSet.java",
    "fromLine": 156,
    "toLine": 156
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestResultSet.java",
    "fromLine": 193,
    "toLine": 193
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestResultSet.java",
    "fromLine": 252,
    "toLine": 252
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestScrollable.java",
    "fromLine": 53,
    "toLine": 53
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestScrollable.java",
    "fromLine": 86,
    "toLine": 86
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestScrollable.java",
    "fromLine": 118,
    "toLine": 118
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestScrollable.java",
    "fromLine": 154,
    "toLine": 154
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestScrollable.java",
    "fromLine": 192,
    "toLine": 192
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestScrollable.java",
    "fromLine": 275,
    "toLine": 275
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 112,
    "toLine": 112
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 169,
    "toLine": 169
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 222,
    "toLine": 222
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 256,
    "toLine": 256
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 377,
    "toLine": 377
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
    "filename": "project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionTruncate.java",
    "metadata": {
        "volume": 0,
        "cloneClassesType1": 3
    },
    "results": {
        "type-1": [
            
{
    "metadata": {
        "cc": 2,
        "volume": 5,
        "mass": 14,
        "clones": 2,
        "snippet": "if(places > 0){\n\t\t\tvalue \/= factor;\n\t\t}else{\n\t\t}\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionRound.java",
    "fromLine": 62,
    "toLine": 66
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionTruncate.java",
    "fromLine": 62,
    "toLine": 66
}
,]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 3,
        "mass": 16,
        "clones": 2,
        "snippet": "for(int i=0; i>places; i--){\n\t\t\t}\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionRound.java",
    "fromLine": 56,
    "toLine": 58
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionTruncate.java",
    "fromLine": 56,
    "toLine": 58
}
,]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 3,
        "mass": 16,
        "clones": 2,
        "snippet": "for(int i=0; i<places; i++){\n\t\t\t}\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionRound.java",
    "fromLine": 51,
    "toLine": 53
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionTruncate.java",
    "fromLine": 51,
    "toLine": 53
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
    "filename": "project://smallsql0.21_src/src/smallsql/database/DataSources.java",
    "metadata": {
        "volume": 0,
        "cloneClassesType1": 1
    },
    "results": {
        "type-1": [
            
{
    "metadata": {
        "cc": 2,
        "volume": 2,
        "mass": 15,
        "clones": 5,
        "snippet": "if (idx >= size)\n\t\t\tthrow new IndexOutOfBoundsException(\"Index: \"+idx+\", Size: \"+size);\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/LongList.java",
    "fromLine": 61,
    "toLine": 62
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/Expressions.java",
    "fromLine": 65,
    "toLine": 66
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/LongLongList.java",
    "fromLine": 56,
    "toLine": 57
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/DataSources.java",
    "fromLine": 49,
    "toLine": 50
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/LongLongList.java",
    "fromLine": 62,
    "toLine": 63
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