var results = {
		
	"Project-Name": "smallsql0.21_src",
	"metadata": {
        "Volume": 23717,
        "%-Duplicated-Lines": 2,
        "Number-Duplicated-Lines": 478,
        "Number-Clones": 288,
        "Number-Clone-Classes": 104,
        "Biggest-Clone-Lines": 19,
        "Biggest-Clone-Class": 20
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
    "filename": "project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionHour.java",
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
        "mass": 36,
        "clones": 6,
        "snippet": "if(param1.isNull()) return 0;\n\t\tDateTime.Details details = new DateTime.Details(param1.getLong());\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionMonth.java",
    "fromLine": 49,
    "toLine": 50
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionHour.java",
    "fromLine": 49,
    "toLine": 50
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionDayOfYear.java",
    "fromLine": 49,
    "toLine": 50
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionMinute.java",
    "fromLine": 49,
    "toLine": 50
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionDayOfMonth.java",
    "fromLine": 49,
    "toLine": 50
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionYear.java",
    "fromLine": 49,
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
    "filename": "project://smallsql0.21_src/src/smallsql/database/IndexDescriptions.java",
    "metadata": {
        "volume": 0,
        "cloneClassesType1": 2
    },
    "results": {
        "type-1": [
            
{
    "metadata": {
        "cc": 3,
        "volume": 10,
        "mass": 93,
        "clones": 4,
        "snippet": "{\n\t\treturn size;\n\t}\n\tfinal IndexDescription get(int idx){\n\t\tif (idx >= size)\n\t\t\tthrow new IndexOutOfBoundsException(\"Column index: \"+idx+\", Size: \"+size);\n\t\treturn data[idx];\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/IndexDescriptions.java",
    "fromLine": 57,
    "toLine": 66
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/Columns.java",
    "fromLine": 54,
    "toLine": 61
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/ForeignKeys.java",
    "fromLine": 51,
    "toLine": 59
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/Strings.java",
    "fromLine": 51,
    "toLine": 59
}
,]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 2,
        "mass": 42,
        "clones": 7,
        "snippet": "if(size >= data.length ){\n\t\t\tresize(size << 1);\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/IndexDescriptions.java",
    "fromLine": 71,
    "toLine": 72
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/Columns.java",
    "fromLine": 96,
    "toLine": 97
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/LongList.java",
    "fromLine": 68,
    "toLine": 69
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/Strings.java",
    "fromLine": 64,
    "toLine": 65
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/Expressions.java",
    "fromLine": 72,
    "toLine": 73
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/ForeignKeys.java",
    "fromLine": 64,
    "toLine": 65
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/Expressions.java",
    "fromLine": 79,
    "toLine": 80
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
    "filename": "project://smallsql0.21_src/src/smallsql/database/CommandSelect.java",
    "metadata": {
        "volume": 0,
        "cloneClassesType1": 3
    },
    "results": {
        "type-1": [
            
{
    "metadata": {
        "cc": 4,
        "volume": 5,
        "mass": 77,
        "clones": 4,
        "snippet": "catch(Throwable e){\n\t\t\tcon.rollback(savepoint);\n\t\t\tthrow SmallSQLException.createFromException(e);\n\t\t}finally{\n\t\t\tif(con.getAutoCommit()) con.commit();\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/CommandSelect.java",
    "fromLine": 436,
    "toLine": 440
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/CommandSelect.java",
    "fromLine": 478,
    "toLine": 482
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/Command.java",
    "fromLine": 138,
    "toLine": 142
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/CommandSelect.java",
    "fromLine": 494,
    "toLine": 498
}
,]
}
,
{
    "metadata": {
        "cc": 4,
        "volume": 5,
        "mass": 77,
        "clones": 4,
        "snippet": "catch(Throwable e){\n\t\t\tcon.rollback(savepoint);\n\t\t\tthrow SmallSQLException.createFromException(e);\n\t\t}finally{\n\t\t\tif(con.getAutoCommit()) con.commit();\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/CommandSelect.java",
    "fromLine": 436,
    "toLine": 440
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/CommandSelect.java",
    "fromLine": 478,
    "toLine": 482
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/Command.java",
    "fromLine": 138,
    "toLine": 142
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/CommandSelect.java",
    "fromLine": 494,
    "toLine": 498
}
,]
}
,
{
    "metadata": {
        "cc": 4,
        "volume": 5,
        "mass": 77,
        "clones": 4,
        "snippet": "catch(Throwable e){\n\t\t\tcon.rollback(savepoint);\n\t\t\tthrow SmallSQLException.createFromException(e);\n\t\t}finally{\n\t\t\tif(con.getAutoCommit()) con.commit();\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/CommandSelect.java",
    "fromLine": 436,
    "toLine": 440
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/CommandSelect.java",
    "fromLine": 478,
    "toLine": 482
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/Command.java",
    "fromLine": 138,
    "toLine": 142
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/CommandSelect.java",
    "fromLine": 494,
    "toLine": 498
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
        "volume": 6,
        "mass": 96,
        "clones": 2,
        "snippet": "{\n\t\t\t\t\tbyte[] buffer = new byte[length];\n\t\t\t\t\tSystem.arraycopy(bytes, 0, buffer, 0, Math.min(bytes.length,length) );\n\t\t\t\t\treturn buffer;\n\t\t\t\t}\n\t\t\t\treturn bytes;\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionConvert.java",
    "fromLine": 142,
    "toLine": 147
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionConvert.java",
    "fromLine": 153,
    "toLine": 158
}
,]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 6,
        "mass": 96,
        "clones": 2,
        "snippet": "{\n\t\t\t\t\tbyte[] buffer = new byte[length];\n\t\t\t\t\tSystem.arraycopy(bytes, 0, buffer, 0, Math.min(bytes.length,length) );\n\t\t\t\t\treturn buffer;\n\t\t\t\t}\n\t\t\t\treturn bytes;\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionConvert.java",
    "fromLine": 142,
    "toLine": 147
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionConvert.java",
    "fromLine": 153,
    "toLine": 158
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
        "volume": 6,
        "mass": 57,
        "clones": 2,
        "snippet": "if(places > 0){\n\t\t\tvalue \/= factor;\n\t\t}else{\n\t\t}\n\t\treturn value;\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionRound.java",
    "fromLine": 62,
    "toLine": 67
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionTruncate.java",
    "fromLine": 62,
    "toLine": 67
}
,]
}
,
{
    "metadata": {
        "cc": 9,
        "volume": 14,
        "mass": 281,
        "clones": 2,
        "snippet": "if(isNull()) return 0;\n\t\tfinal int places = param2.getInt();\n\t\tdouble value = param1.getDouble();\n\t\tlong factor = 1;\n\t\tif(places > 0){\n\t\t\tfor(int i=0; i<places; i++){\n\t\t\t}\n\t\t}else{\n\t\t\tfor(int i=0; i>places; i--){\n\t\t\t}\n\t\t\tvalue \/= factor;\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionRound.java",
    "fromLine": 46,
    "toLine": 59
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionTruncate.java",
    "fromLine": 46,
    "toLine": 59
}
,]
}
,
{
    "metadata": {
        "cc": 9,
        "volume": 14,
        "mass": 281,
        "clones": 2,
        "snippet": "if(isNull()) return 0;\n\t\tfinal int places = param2.getInt();\n\t\tdouble value = param1.getDouble();\n\t\tlong factor = 1;\n\t\tif(places > 0){\n\t\t\tfor(int i=0; i<places; i++){\n\t\t\t}\n\t\t}else{\n\t\t\tfor(int i=0; i>places; i--){\n\t\t\t}\n\t\t\tvalue \/= factor;\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionRound.java",
    "fromLine": 46,
    "toLine": 59
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionTruncate.java",
    "fromLine": 46,
    "toLine": 59
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
        "mass": 44,
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
        "mass": 42,
        "clones": 7,
        "snippet": "if(size >= data.length ){\n\t\t\tresize(size << 1);\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/IndexDescriptions.java",
    "fromLine": 71,
    "toLine": 72
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/Columns.java",
    "fromLine": 96,
    "toLine": 97
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/LongList.java",
    "fromLine": 68,
    "toLine": 69
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/Strings.java",
    "fromLine": 64,
    "toLine": 65
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/Expressions.java",
    "fromLine": 72,
    "toLine": 73
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/ForeignKeys.java",
    "fromLine": 64,
    "toLine": 65
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/Expressions.java",
    "fromLine": 79,
    "toLine": 80
}
,]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 2,
        "mass": 42,
        "clones": 7,
        "snippet": "if(size >= data.length ){\n\t\t\tresize(size << 1);\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/IndexDescriptions.java",
    "fromLine": 71,
    "toLine": 72
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/Columns.java",
    "fromLine": 96,
    "toLine": 97
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/LongList.java",
    "fromLine": 68,
    "toLine": 69
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/Strings.java",
    "fromLine": 64,
    "toLine": 65
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/Expressions.java",
    "fromLine": 72,
    "toLine": 73
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/ForeignKeys.java",
    "fromLine": 64,
    "toLine": 65
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/Expressions.java",
    "fromLine": 79,
    "toLine": 80
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
        "mass": 23,
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
        "mass": 23,
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
        "mass": 24,
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
        "mass": 24,
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
        "mass": 24,
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
        "cc": 5,
        "volume": 11,
        "mass": 193,
        "clones": 2,
        "snippet": "catch(Exception e){\n            throw SmallSQLException.createFromException( e );\n        }\n    }\n    public double getDouble(int i) throws SQLException {\n        try{\n            Expression expr = getValue(i);\n            wasNull = expr.isNull();\n            return expr.getLong();\n        }catch(Exception e){\n            throw SmallSQLException.createFromException( e );\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java",
    "fromLine": 131,
    "toLine": 141
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java",
    "fromLine": 113,
    "toLine": 123
}
,]
}
,
{
    "metadata": {
        "cc": 5,
        "volume": 11,
        "mass": 193,
        "clones": 2,
        "snippet": "catch(Exception e){\n            throw SmallSQLException.createFromException( e );\n        }\n    }\n    public double getDouble(int i) throws SQLException {\n        try{\n            Expression expr = getValue(i);\n            wasNull = expr.isNull();\n            return expr.getLong();\n        }catch(Exception e){\n            throw SmallSQLException.createFromException( e );\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java",
    "fromLine": 131,
    "toLine": 141
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java",
    "fromLine": 113,
    "toLine": 123
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
        "cc": 2,
        "volume": 2,
        "mass": 36,
        "clones": 6,
        "snippet": "if(param1.isNull()) return 0;\n\t\tDateTime.Details details = new DateTime.Details(param1.getLong());\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionMonth.java",
    "fromLine": 49,
    "toLine": 50
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionHour.java",
    "fromLine": 49,
    "toLine": 50
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionDayOfYear.java",
    "fromLine": 49,
    "toLine": 50
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionMinute.java",
    "fromLine": 49,
    "toLine": 50
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionDayOfMonth.java",
    "fromLine": 49,
    "toLine": 50
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionYear.java",
    "fromLine": 49,
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
    "filename": "project://smallsql0.21_src/src/smallsql/database/SSStatement.java",
    "metadata": {
        "volume": 0,
        "cloneClassesType1": 1
    },
    "results": {
        "type-1": [
            
{
    "metadata": {
        "cc": 3,
        "volume": 11,
        "mass": 135,
        "clones": 2,
        "snippet": "if(failed == null){\n                    failed = new BatchUpdateException(ex.getMessage(), ex.getSQLState(), ex.getErrorCode(), result);\n                    failed.initCause(ex);\n                }\n                failed.setNextException(ex);\n            }\n        }\n        batches.clear();\n        if(failed != null)\n            throw failed;\n        return result;\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/SSStatement.java",
    "fromLine": 271,
    "toLine": 281
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/SSPreparedStatement.java",
    "fromLine": 249,
    "toLine": 259
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
        "volume": 4,
        "mass": 58,
        "clones": 2,
        "snippet": "if(token2 != null && token2.value == SQLTokenizer.POINT){\n                                    expr.setNameAfterTableAlias( nextIdentifier() );\n                                }else{\n                                    previousToken();\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/SQLParser.java",
    "fromLine": 1332,
    "toLine": 1335
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/SQLParser.java",
    "fromLine": 1239,
    "toLine": 1242
}
,]
}
,
{
    "metadata": {
        "cc": 3,
        "volume": 4,
        "mass": 58,
        "clones": 2,
        "snippet": "if(token2 != null && token2.value == SQLTokenizer.POINT){\n                                    expr.setNameAfterTableAlias( nextIdentifier() );\n                                }else{\n                                    previousToken();\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/SQLParser.java",
    "fromLine": 1332,
    "toLine": 1335
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/SQLParser.java",
    "fromLine": 1239,
    "toLine": 1242
}
,]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 3,
        "mass": 46,
        "clones": 3,
        "snippet": "token = nextToken(MISSING_OUTER_JOIN);\n                \tif(token.value == SQLTokenizer.OUTER)\n                \t\ttoken = nextToken(MISSING_JOIN);\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/SQLParser.java",
    "fromLine": 1862,
    "toLine": 1864
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/SQLParser.java",
    "fromLine": 1874,
    "toLine": 1876
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/SQLParser.java",
    "fromLine": 1868,
    "toLine": 1870
}
,]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 3,
        "mass": 46,
        "clones": 3,
        "snippet": "token = nextToken(MISSING_OUTER_JOIN);\n                \tif(token.value == SQLTokenizer.OUTER)\n                \t\ttoken = nextToken(MISSING_JOIN);\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/SQLParser.java",
    "fromLine": 1862,
    "toLine": 1864
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/SQLParser.java",
    "fromLine": 1874,
    "toLine": 1876
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/SQLParser.java",
    "fromLine": 1868,
    "toLine": 1870
}
,]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 3,
        "mass": 46,
        "clones": 3,
        "snippet": "token = nextToken(MISSING_OUTER_JOIN);\n                \tif(token.value == SQLTokenizer.OUTER)\n                \t\ttoken = nextToken(MISSING_JOIN);\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/SQLParser.java",
    "fromLine": 1862,
    "toLine": 1864
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/SQLParser.java",
    "fromLine": 1874,
    "toLine": 1876
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/SQLParser.java",
    "fromLine": 1868,
    "toLine": 1870
}
,]
}
,
{
    "metadata": {
        "cc": 3,
        "volume": 4,
        "mass": 99,
        "clones": 2,
        "snippet": "try{\n\t\t\t\t\t\t\tvalue = Integer.parseInt(token.getName(sql) );\n\t\t\t\t\t\t}catch(Exception e){\n\t\t\t\t\t\t\tthrow createSyntaxError(token, MISSING_NUMBERVALUE );\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/SQLParser.java",
    "fromLine": 849,
    "toLine": 852
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/SQLParser.java",
    "fromLine": 839,
    "toLine": 842
}
,]
}
,
{
    "metadata": {
        "cc": 3,
        "volume": 4,
        "mass": 99,
        "clones": 2,
        "snippet": "try{\n\t\t\t\t\t\t\tvalue = Integer.parseInt(token.getName(sql) );\n\t\t\t\t\t\t}catch(Exception e){\n\t\t\t\t\t\t\tthrow createSyntaxError(token, MISSING_NUMBERVALUE );\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/SQLParser.java",
    "fromLine": 849,
    "toLine": 852
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/SQLParser.java",
    "fromLine": 839,
    "toLine": 842
}
,]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 2,
        "mass": 33,
        "clones": 2,
        "snippet": "SQLToken last = lastToken();\n\t\t\t\t\tint length = last.offset + last.length - offset;\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/SQLParser.java",
    "fromLine": 674,
    "toLine": 675
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/SQLParser.java",
    "fromLine": 1104,
    "toLine": 1105
}
,]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 2,
        "mass": 33,
        "clones": 2,
        "snippet": "SQLToken last = lastToken();\n\t\t\t\t\tint length = last.offset + last.length - offset;\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/SQLParser.java",
    "fromLine": 674,
    "toLine": 675
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/SQLParser.java",
    "fromLine": 1104,
    "toLine": 1105
}
,]
}
,
{
    "metadata": {
        "cc": 3,
        "volume": 5,
        "mass": 160,
        "clones": 2,
        "snippet": "try{\n            int maxRows = Integer.parseInt(token.getName(sql));\n            selCmd.setMaxRows(maxRows);\n        }catch(NumberFormatException e){\n            throw createSyntaxError(token, Language.STXADD_NOT_NUMBER, token.getName(sql));\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/SQLParser.java",
    "fromLine": 1932,
    "toLine": 1936
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/SQLParser.java",
    "fromLine": 352,
    "toLine": 356
}
,]
}
,
{
    "metadata": {
        "cc": 3,
        "volume": 5,
        "mass": 160,
        "clones": 2,
        "snippet": "try{\n            int maxRows = Integer.parseInt(token.getName(sql));\n            selCmd.setMaxRows(maxRows);\n        }catch(NumberFormatException e){\n            throw createSyntaxError(token, Language.STXADD_NOT_NUMBER, token.getName(sql));\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/SQLParser.java",
    "fromLine": 1932,
    "toLine": 1936
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/SQLParser.java",
    "fromLine": 352,
    "toLine": 356
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
        "mass": 36,
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
        "mass": 36,
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
        "cc": 4,
        "volume": 5,
        "mass": 77,
        "clones": 4,
        "snippet": "catch(Throwable e){\n\t\t\tcon.rollback(savepoint);\n\t\t\tthrow SmallSQLException.createFromException(e);\n\t\t}finally{\n\t\t\tif(con.getAutoCommit()) con.commit();\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/CommandSelect.java",
    "fromLine": 436,
    "toLine": 440
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/CommandSelect.java",
    "fromLine": 478,
    "toLine": 482
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/Command.java",
    "fromLine": 138,
    "toLine": 142
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/CommandSelect.java",
    "fromLine": 494,
    "toLine": 498
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
        "cloneClassesType1": 2
    },
    "results": {
        "type-1": [
            
{
    "metadata": {
        "cc": 1,
        "volume": 4,
        "mass": 90,
        "clones": 2,
        "snippet": "st.execute(\"alter table \"+table+\" add b varchar(4) primary key\");\n        assertRSMetaData( rs, new String[]{\"a\", \"b\"},  new int[]{Types.VARCHAR, Types.VARCHAR} );\n        rs = con.getMetaData().getIndexInfo( null, null, table, false, false );\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestAlterTable2.java",
    "fromLine": 45,
    "toLine": 48
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestAlterTable2.java",
    "fromLine": 75,
    "toLine": 78
}
,]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 4,
        "mass": 90,
        "clones": 2,
        "snippet": "st.execute(\"alter table \"+table+\" add b varchar(4) primary key\");\n        assertRSMetaData( rs, new String[]{\"a\", \"b\"},  new int[]{Types.VARCHAR, Types.VARCHAR} );\n        rs = con.getMetaData().getIndexInfo( null, null, table, false, false );\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestAlterTable2.java",
    "fromLine": 45,
    "toLine": 48
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestAlterTable2.java",
    "fromLine": 75,
    "toLine": 78
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
        "cloneClassesType1": 6
    },
    "results": {
        "type-1": [
            
{
    "metadata": {
        "cc": 1,
        "volume": 2,
        "mass": 49,
        "clones": 3,
        "snippet": "DateTime.Details details2 = new DateTime.Details(param2.getLong());\n\t\t\t\tDateTime.Details details1 = new DateTime.Details(param1.getLong());\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionTimestampDiff.java",
    "fromLine": 109,
    "toLine": 110
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionTimestampDiff.java",
    "fromLine": 114,
    "toLine": 115
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionTimestampDiff.java",
    "fromLine": 119,
    "toLine": 120
}
,]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 2,
        "mass": 49,
        "clones": 3,
        "snippet": "DateTime.Details details2 = new DateTime.Details(param2.getLong());\n\t\t\t\tDateTime.Details details1 = new DateTime.Details(param1.getLong());\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionTimestampDiff.java",
    "fromLine": 109,
    "toLine": 110
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionTimestampDiff.java",
    "fromLine": 114,
    "toLine": 115
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionTimestampDiff.java",
    "fromLine": 119,
    "toLine": 120
}
,]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 2,
        "mass": 49,
        "clones": 3,
        "snippet": "DateTime.Details details2 = new DateTime.Details(param2.getLong());\n\t\t\t\tDateTime.Details details1 = new DateTime.Details(param1.getLong());\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionTimestampDiff.java",
    "fromLine": 109,
    "toLine": 110
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionTimestampDiff.java",
    "fromLine": 114,
    "toLine": 115
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionTimestampDiff.java",
    "fromLine": 119,
    "toLine": 120
}
,]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 1,
        "mass": 25,
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
        "mass": 25,
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
        "mass": 25,
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
        "volume": 3,
        "mass": 57,
        "clones": 2,
        "snippet": "catch (SQLException e) {\n\t\t\tout.println(\"REGULAR: \" + e.getMessage() + '\\n');\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestTokenizer.java",
    "fromLine": 147,
    "toLine": 149
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestTokenizer.java",
    "fromLine": 87,
    "toLine": 89
}
,]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 3,
        "mass": 57,
        "clones": 2,
        "snippet": "catch (SQLException e) {\n\t\t\tout.println(\"REGULAR: \" + e.getMessage() + '\\n');\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestTokenizer.java",
    "fromLine": 147,
    "toLine": 149
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestTokenizer.java",
    "fromLine": 87,
    "toLine": 89
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
        "volume": 2,
        "mass": 36,
        "clones": 2,
        "snippet": "String message = translateMsg(messageCode, new Object[] { param0 });\n    \tString sqlState = language.getSqlState(messageCode);\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/SmallSQLException.java",
    "fromLine": 145,
    "toLine": 146
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/SmallSQLException.java",
    "fromLine": 182,
    "toLine": 183
}
,]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 2,
        "mass": 36,
        "clones": 2,
        "snippet": "String message = translateMsg(messageCode, new Object[] { param0 });\n    \tString sqlState = language.getSqlState(messageCode);\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/SmallSQLException.java",
    "fromLine": 145,
    "toLine": 146
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/SmallSQLException.java",
    "fromLine": 182,
    "toLine": 183
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
        "cc": 3,
        "volume": 10,
        "mass": 93,
        "clones": 4,
        "snippet": "{\n\t\treturn size;\n\t}\n\tfinal IndexDescription get(int idx){\n\t\tif (idx >= size)\n\t\t\tthrow new IndexOutOfBoundsException(\"Column index: \"+idx+\", Size: \"+size);\n\t\treturn data[idx];\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/IndexDescriptions.java",
    "fromLine": 57,
    "toLine": 66
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/Columns.java",
    "fromLine": 54,
    "toLine": 61
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/ForeignKeys.java",
    "fromLine": 51,
    "toLine": 59
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/Strings.java",
    "fromLine": 51,
    "toLine": 59
}
,]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 2,
        "mass": 42,
        "clones": 7,
        "snippet": "if(size >= data.length ){\n\t\t\tresize(size << 1);\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/IndexDescriptions.java",
    "fromLine": 71,
    "toLine": 72
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/Columns.java",
    "fromLine": 96,
    "toLine": 97
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/LongList.java",
    "fromLine": 68,
    "toLine": 69
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/Strings.java",
    "fromLine": 64,
    "toLine": 65
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/Expressions.java",
    "fromLine": 72,
    "toLine": 73
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/ForeignKeys.java",
    "fromLine": 64,
    "toLine": 65
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/Expressions.java",
    "fromLine": 79,
    "toLine": 80
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
        "mass": 25,
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
        "mass": 25,
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
        "volume": 2,
        "mass": 41,
        "clones": 2,
        "snippet": "if(st.rsType == ResultSet.TYPE_FORWARD_ONLY) throw SmallSQLException.create(Language.RSET_FWDONLY);\n            moveToCurrentRow();\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/SSResultSet.java",
    "fromLine": 372,
    "toLine": 373
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/SSResultSet.java",
    "fromLine": 413,
    "toLine": 414
}
,]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 2,
        "mass": 41,
        "clones": 2,
        "snippet": "if(st.rsType == ResultSet.TYPE_FORWARD_ONLY) throw SmallSQLException.create(Language.RSET_FWDONLY);\n            moveToCurrentRow();\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/SSResultSet.java",
    "fromLine": 372,
    "toLine": 373
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/SSResultSet.java",
    "fromLine": 413,
    "toLine": 414
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
        "cc": 2,
        "volume": 8,
        "mass": 142,
        "clones": 2,
        "snippet": "java.io.FileOutputStream fos = new java.io.FileOutputStream(tableName+\".bin\");\n            byte bytes[] = new byte[1024];\n            for(int i=0; i<rowCount; i++){\n                fos.write(bytes);\n            }\n            fos.close();\n            java.io.FileInputStream fis = new java.io.FileInputStream(tableName+\".bin\");\n            long time = -System.currentTimeMillis();\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 618,
    "toLine": 625
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 655,
    "toLine": 662
}
,]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 8,
        "mass": 142,
        "clones": 2,
        "snippet": "java.io.FileOutputStream fos = new java.io.FileOutputStream(tableName+\".bin\");\n            byte bytes[] = new byte[1024];\n            for(int i=0; i<rowCount; i++){\n                fos.write(bytes);\n            }\n            fos.close();\n            java.io.FileInputStream fis = new java.io.FileInputStream(tableName+\".bin\");\n            long time = -System.currentTimeMillis();\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 618,
    "toLine": 625
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 655,
    "toLine": 662
}
,]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 11,
        "mass": 171,
        "clones": 2,
        "snippet": "pr.close();\n            time += System.currentTimeMillis();\n            System.out.println( \"  Test time: \" + time + \" ms\");\n            fis.close();\n            java.io.File file = new java.io.File(tableName+\".bin\");\n            file.delete();\n        }catch(Exception e){\n            System.out.println(\"  Failed:\"+e);\n        }finally{\n            System.out.println();\n            System.out.println(\"===================================================================\");\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 629,
    "toLine": 639
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 670,
    "toLine": 680
}
,]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 11,
        "mass": 171,
        "clones": 2,
        "snippet": "pr.close();\n            time += System.currentTimeMillis();\n            System.out.println( \"  Test time: \" + time + \" ms\");\n            fis.close();\n            java.io.File file = new java.io.File(tableName+\".bin\");\n            file.delete();\n        }catch(Exception e){\n            System.out.println(\"  Failed:\"+e);\n        }finally{\n            System.out.println();\n            System.out.println(\"===================================================================\");\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 629,
    "toLine": 639
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 670,
    "toLine": 680
}
,]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 5,
        "mass": 95,
        "clones": 12,
        "snippet": "catch(Exception e){\n            System.out.println(\"  Failed:\"+e);\n        }finally{\n            System.out.println();\n            System.out.println(\"===================================================================\");\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 125,
    "toLine": 129
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 150,
    "toLine": 154
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 184,
    "toLine": 188
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 237,
    "toLine": 241
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 358,
    "toLine": 362
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 394,
    "toLine": 398
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 443,
    "toLine": 447
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 498,
    "toLine": 502
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 553,
    "toLine": 557
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 600,
    "toLine": 604
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 676,
    "toLine": 680
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 635,
    "toLine": 639
}
,]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 5,
        "mass": 95,
        "clones": 12,
        "snippet": "catch(Exception e){\n            System.out.println(\"  Failed:\"+e);\n        }finally{\n            System.out.println();\n            System.out.println(\"===================================================================\");\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 125,
    "toLine": 129
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 150,
    "toLine": 154
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 184,
    "toLine": 188
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 237,
    "toLine": 241
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 358,
    "toLine": 362
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 394,
    "toLine": 398
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 443,
    "toLine": 447
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 498,
    "toLine": 502
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 553,
    "toLine": 557
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 600,
    "toLine": 604
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 676,
    "toLine": 680
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 635,
    "toLine": 639
}
,]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 5,
        "mass": 95,
        "clones": 12,
        "snippet": "catch(Exception e){\n            System.out.println(\"  Failed:\"+e);\n        }finally{\n            System.out.println();\n            System.out.println(\"===================================================================\");\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 125,
    "toLine": 129
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 150,
    "toLine": 154
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 184,
    "toLine": 188
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 237,
    "toLine": 241
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 358,
    "toLine": 362
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 394,
    "toLine": 398
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 443,
    "toLine": 447
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 498,
    "toLine": 502
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 553,
    "toLine": 557
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 600,
    "toLine": 604
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 676,
    "toLine": 680
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 635,
    "toLine": 639
}
,]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 5,
        "mass": 95,
        "clones": 12,
        "snippet": "catch(Exception e){\n            System.out.println(\"  Failed:\"+e);\n        }finally{\n            System.out.println();\n            System.out.println(\"===================================================================\");\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 125,
    "toLine": 129
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 150,
    "toLine": 154
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 184,
    "toLine": 188
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 237,
    "toLine": 241
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 358,
    "toLine": 362
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 394,
    "toLine": 398
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 443,
    "toLine": 447
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 498,
    "toLine": 502
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 553,
    "toLine": 557
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 600,
    "toLine": 604
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 676,
    "toLine": 680
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 635,
    "toLine": 639
}
,]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 5,
        "mass": 95,
        "clones": 12,
        "snippet": "catch(Exception e){\n            System.out.println(\"  Failed:\"+e);\n        }finally{\n            System.out.println();\n            System.out.println(\"===================================================================\");\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 125,
    "toLine": 129
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 150,
    "toLine": 154
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 184,
    "toLine": 188
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 237,
    "toLine": 241
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 358,
    "toLine": 362
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 394,
    "toLine": 398
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 443,
    "toLine": 447
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 498,
    "toLine": 502
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 553,
    "toLine": 557
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 600,
    "toLine": 604
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 676,
    "toLine": 680
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 635,
    "toLine": 639
}
,]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 5,
        "mass": 95,
        "clones": 12,
        "snippet": "catch(Exception e){\n            System.out.println(\"  Failed:\"+e);\n        }finally{\n            System.out.println();\n            System.out.println(\"===================================================================\");\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 125,
    "toLine": 129
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 150,
    "toLine": 154
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 184,
    "toLine": 188
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 237,
    "toLine": 241
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 358,
    "toLine": 362
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 394,
    "toLine": 398
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 443,
    "toLine": 447
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 498,
    "toLine": 502
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 553,
    "toLine": 557
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 600,
    "toLine": 604
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 676,
    "toLine": 680
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 635,
    "toLine": 639
}
,]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 5,
        "mass": 95,
        "clones": 12,
        "snippet": "catch(Exception e){\n            System.out.println(\"  Failed:\"+e);\n        }finally{\n            System.out.println();\n            System.out.println(\"===================================================================\");\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 125,
    "toLine": 129
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 150,
    "toLine": 154
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 184,
    "toLine": 188
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 237,
    "toLine": 241
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 358,
    "toLine": 362
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 394,
    "toLine": 398
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 443,
    "toLine": 447
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 498,
    "toLine": 502
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 553,
    "toLine": 557
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 600,
    "toLine": 604
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 676,
    "toLine": 680
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 635,
    "toLine": 639
}
,]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 5,
        "mass": 95,
        "clones": 12,
        "snippet": "catch(Exception e){\n            System.out.println(\"  Failed:\"+e);\n        }finally{\n            System.out.println();\n            System.out.println(\"===================================================================\");\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 125,
    "toLine": 129
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 150,
    "toLine": 154
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 184,
    "toLine": 188
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 237,
    "toLine": 241
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 358,
    "toLine": 362
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 394,
    "toLine": 398
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 443,
    "toLine": 447
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 498,
    "toLine": 502
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 553,
    "toLine": 557
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 600,
    "toLine": 604
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 676,
    "toLine": 680
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 635,
    "toLine": 639
}
,]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 5,
        "mass": 95,
        "clones": 12,
        "snippet": "catch(Exception e){\n            System.out.println(\"  Failed:\"+e);\n        }finally{\n            System.out.println();\n            System.out.println(\"===================================================================\");\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 125,
    "toLine": 129
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 150,
    "toLine": 154
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 184,
    "toLine": 188
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 237,
    "toLine": 241
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 358,
    "toLine": 362
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 394,
    "toLine": 398
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 443,
    "toLine": 447
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 498,
    "toLine": 502
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 553,
    "toLine": 557
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 600,
    "toLine": 604
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 676,
    "toLine": 680
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 635,
    "toLine": 639
}
,]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 5,
        "mass": 95,
        "clones": 12,
        "snippet": "catch(Exception e){\n            System.out.println(\"  Failed:\"+e);\n        }finally{\n            System.out.println();\n            System.out.println(\"===================================================================\");\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 125,
    "toLine": 129
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 150,
    "toLine": 154
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 184,
    "toLine": 188
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 237,
    "toLine": 241
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 358,
    "toLine": 362
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 394,
    "toLine": 398
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 443,
    "toLine": 447
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 498,
    "toLine": 502
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 553,
    "toLine": 557
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 600,
    "toLine": 604
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 676,
    "toLine": 680
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 635,
    "toLine": 639
}
,]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 5,
        "mass": 95,
        "clones": 12,
        "snippet": "catch(Exception e){\n            System.out.println(\"  Failed:\"+e);\n        }finally{\n            System.out.println();\n            System.out.println(\"===================================================================\");\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 125,
    "toLine": 129
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 150,
    "toLine": 154
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 184,
    "toLine": 188
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 237,
    "toLine": 241
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 358,
    "toLine": 362
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 394,
    "toLine": 398
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 443,
    "toLine": 447
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 498,
    "toLine": 502
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 553,
    "toLine": 557
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 600,
    "toLine": 604
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 676,
    "toLine": 680
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 635,
    "toLine": 639
}
,]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 5,
        "mass": 95,
        "clones": 12,
        "snippet": "catch(Exception e){\n            System.out.println(\"  Failed:\"+e);\n        }finally{\n            System.out.println();\n            System.out.println(\"===================================================================\");\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 125,
    "toLine": 129
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 150,
    "toLine": 154
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 184,
    "toLine": 188
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 237,
    "toLine": 241
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 358,
    "toLine": 362
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 394,
    "toLine": 398
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 443,
    "toLine": 447
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 498,
    "toLine": 502
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 553,
    "toLine": 557
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 600,
    "toLine": 604
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 676,
    "toLine": 680
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 635,
    "toLine": 639
}
,]
}
,
{
    "metadata": {
        "cc": 3,
        "volume": 11,
        "mass": 195,
        "clones": 2,
        "snippet": "rs.next();\n            int count = rs.getInt(1);\n            if (count != rowCount)\n                 System.out.println( \"  Failed: Only \" + count + \" rows were inserted.\");\n            else System.out.println( \"  Test time: \" + time + \" ms\");\n            st.close();\n        }catch(Exception e){\n            System.out.println(\"  Failed:\"+e);\n        }finally{\n            System.out.println();\n            System.out.println(\"===================================================================\");\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 178,
    "toLine": 188
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 119,
    "toLine": 129
}
,]
}
,
{
    "metadata": {
        "cc": 3,
        "volume": 11,
        "mass": 195,
        "clones": 2,
        "snippet": "rs.next();\n            int count = rs.getInt(1);\n            if (count != rowCount)\n                 System.out.println( \"  Failed: Only \" + count + \" rows were inserted.\");\n            else System.out.println( \"  Test time: \" + time + \" ms\");\n            st.close();\n        }catch(Exception e){\n            System.out.println(\"  Failed:\"+e);\n        }finally{\n            System.out.println();\n            System.out.println(\"===================================================================\");\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 178,
    "toLine": 188
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 119,
    "toLine": 129
}
,]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 8,
        "mass": 142,
        "clones": 2,
        "snippet": "java.io.FileOutputStream fos = new java.io.FileOutputStream(tableName+\".bin\");\n            byte bytes[] = new byte[1024];\n            for(int i=0; i<rowCount; i++){\n                fos.write(bytes);\n            }\n            fos.close();\n            java.io.FileInputStream fis = new java.io.FileInputStream(tableName+\".bin\");\n            long time = -System.currentTimeMillis();\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 655,
    "toLine": 662
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 618,
    "toLine": 625
}
,]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 8,
        "mass": 142,
        "clones": 2,
        "snippet": "java.io.FileOutputStream fos = new java.io.FileOutputStream(tableName+\".bin\");\n            byte bytes[] = new byte[1024];\n            for(int i=0; i<rowCount; i++){\n                fos.write(bytes);\n            }\n            fos.close();\n            java.io.FileInputStream fis = new java.io.FileInputStream(tableName+\".bin\");\n            long time = -System.currentTimeMillis();\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 655,
    "toLine": 662
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 618,
    "toLine": 625
}
,]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 4,
        "mass": 57,
        "clones": 13,
        "snippet": "System.out.println(\"  Failed:\"+e);\n        }finally{\n            System.out.println();\n            System.out.println(\"===================================================================\");\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 126,
    "toLine": 129
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 151,
    "toLine": 154
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 185,
    "toLine": 188
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 238,
    "toLine": 241
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 298,
    "toLine": 301
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 359,
    "toLine": 362
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 395,
    "toLine": 398
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 444,
    "toLine": 447
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 499,
    "toLine": 502
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 554,
    "toLine": 557
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 601,
    "toLine": 604
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 677,
    "toLine": 680
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 636,
    "toLine": 639
}
,]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 4,
        "mass": 57,
        "clones": 13,
        "snippet": "System.out.println(\"  Failed:\"+e);\n        }finally{\n            System.out.println();\n            System.out.println(\"===================================================================\");\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 126,
    "toLine": 129
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 151,
    "toLine": 154
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 185,
    "toLine": 188
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 238,
    "toLine": 241
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 298,
    "toLine": 301
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 359,
    "toLine": 362
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 395,
    "toLine": 398
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 444,
    "toLine": 447
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 499,
    "toLine": 502
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 554,
    "toLine": 557
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 601,
    "toLine": 604
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 677,
    "toLine": 680
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 636,
    "toLine": 639
}
,]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 4,
        "mass": 57,
        "clones": 13,
        "snippet": "System.out.println(\"  Failed:\"+e);\n        }finally{\n            System.out.println();\n            System.out.println(\"===================================================================\");\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 126,
    "toLine": 129
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 151,
    "toLine": 154
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 185,
    "toLine": 188
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 238,
    "toLine": 241
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 298,
    "toLine": 301
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 359,
    "toLine": 362
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 395,
    "toLine": 398
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 444,
    "toLine": 447
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 499,
    "toLine": 502
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 554,
    "toLine": 557
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 601,
    "toLine": 604
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 677,
    "toLine": 680
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 636,
    "toLine": 639
}
,]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 4,
        "mass": 57,
        "clones": 13,
        "snippet": "System.out.println(\"  Failed:\"+e);\n        }finally{\n            System.out.println();\n            System.out.println(\"===================================================================\");\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 126,
    "toLine": 129
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 151,
    "toLine": 154
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 185,
    "toLine": 188
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 238,
    "toLine": 241
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 298,
    "toLine": 301
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 359,
    "toLine": 362
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 395,
    "toLine": 398
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 444,
    "toLine": 447
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 499,
    "toLine": 502
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 554,
    "toLine": 557
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 601,
    "toLine": 604
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 677,
    "toLine": 680
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 636,
    "toLine": 639
}
,]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 4,
        "mass": 57,
        "clones": 13,
        "snippet": "System.out.println(\"  Failed:\"+e);\n        }finally{\n            System.out.println();\n            System.out.println(\"===================================================================\");\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 126,
    "toLine": 129
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 151,
    "toLine": 154
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 185,
    "toLine": 188
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 238,
    "toLine": 241
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 298,
    "toLine": 301
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 359,
    "toLine": 362
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 395,
    "toLine": 398
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 444,
    "toLine": 447
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 499,
    "toLine": 502
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 554,
    "toLine": 557
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 601,
    "toLine": 604
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 677,
    "toLine": 680
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 636,
    "toLine": 639
}
,]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 4,
        "mass": 57,
        "clones": 13,
        "snippet": "System.out.println(\"  Failed:\"+e);\n        }finally{\n            System.out.println();\n            System.out.println(\"===================================================================\");\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 126,
    "toLine": 129
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 151,
    "toLine": 154
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 185,
    "toLine": 188
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 238,
    "toLine": 241
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 298,
    "toLine": 301
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 359,
    "toLine": 362
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 395,
    "toLine": 398
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 444,
    "toLine": 447
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 499,
    "toLine": 502
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 554,
    "toLine": 557
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 601,
    "toLine": 604
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 677,
    "toLine": 680
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 636,
    "toLine": 639
}
,]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 4,
        "mass": 57,
        "clones": 13,
        "snippet": "System.out.println(\"  Failed:\"+e);\n        }finally{\n            System.out.println();\n            System.out.println(\"===================================================================\");\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 126,
    "toLine": 129
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 151,
    "toLine": 154
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 185,
    "toLine": 188
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 238,
    "toLine": 241
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 298,
    "toLine": 301
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 359,
    "toLine": 362
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 395,
    "toLine": 398
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 444,
    "toLine": 447
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 499,
    "toLine": 502
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 554,
    "toLine": 557
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 601,
    "toLine": 604
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 677,
    "toLine": 680
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 636,
    "toLine": 639
}
,]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 4,
        "mass": 57,
        "clones": 13,
        "snippet": "System.out.println(\"  Failed:\"+e);\n        }finally{\n            System.out.println();\n            System.out.println(\"===================================================================\");\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 126,
    "toLine": 129
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 151,
    "toLine": 154
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 185,
    "toLine": 188
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 238,
    "toLine": 241
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 298,
    "toLine": 301
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 359,
    "toLine": 362
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 395,
    "toLine": 398
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 444,
    "toLine": 447
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 499,
    "toLine": 502
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 554,
    "toLine": 557
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 601,
    "toLine": 604
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 677,
    "toLine": 680
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 636,
    "toLine": 639
}
,]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 4,
        "mass": 57,
        "clones": 13,
        "snippet": "System.out.println(\"  Failed:\"+e);\n        }finally{\n            System.out.println();\n            System.out.println(\"===================================================================\");\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 126,
    "toLine": 129
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 151,
    "toLine": 154
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 185,
    "toLine": 188
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 238,
    "toLine": 241
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 298,
    "toLine": 301
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 359,
    "toLine": 362
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 395,
    "toLine": 398
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 444,
    "toLine": 447
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 499,
    "toLine": 502
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 554,
    "toLine": 557
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 601,
    "toLine": 604
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 677,
    "toLine": 680
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 636,
    "toLine": 639
}
,]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 4,
        "mass": 57,
        "clones": 13,
        "snippet": "System.out.println(\"  Failed:\"+e);\n        }finally{\n            System.out.println();\n            System.out.println(\"===================================================================\");\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 126,
    "toLine": 129
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 151,
    "toLine": 154
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 185,
    "toLine": 188
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 238,
    "toLine": 241
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 298,
    "toLine": 301
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 359,
    "toLine": 362
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 395,
    "toLine": 398
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 444,
    "toLine": 447
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 499,
    "toLine": 502
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 554,
    "toLine": 557
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 601,
    "toLine": 604
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 677,
    "toLine": 680
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 636,
    "toLine": 639
}
,]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 4,
        "mass": 57,
        "clones": 13,
        "snippet": "System.out.println(\"  Failed:\"+e);\n        }finally{\n            System.out.println();\n            System.out.println(\"===================================================================\");\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 126,
    "toLine": 129
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 151,
    "toLine": 154
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 185,
    "toLine": 188
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 238,
    "toLine": 241
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 298,
    "toLine": 301
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 359,
    "toLine": 362
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 395,
    "toLine": 398
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 444,
    "toLine": 447
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 499,
    "toLine": 502
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 554,
    "toLine": 557
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 601,
    "toLine": 604
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 677,
    "toLine": 680
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 636,
    "toLine": 639
}
,]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 4,
        "mass": 57,
        "clones": 13,
        "snippet": "System.out.println(\"  Failed:\"+e);\n        }finally{\n            System.out.println();\n            System.out.println(\"===================================================================\");\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 126,
    "toLine": 129
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 151,
    "toLine": 154
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 185,
    "toLine": 188
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 238,
    "toLine": 241
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 298,
    "toLine": 301
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 359,
    "toLine": 362
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 395,
    "toLine": 398
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 444,
    "toLine": 447
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 499,
    "toLine": 502
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 554,
    "toLine": 557
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 601,
    "toLine": 604
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 677,
    "toLine": 680
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 636,
    "toLine": 639
}
,]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 4,
        "mass": 57,
        "clones": 13,
        "snippet": "System.out.println(\"  Failed:\"+e);\n        }finally{\n            System.out.println();\n            System.out.println(\"===================================================================\");\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 126,
    "toLine": 129
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 151,
    "toLine": 154
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 185,
    "toLine": 188
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 238,
    "toLine": 241
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 298,
    "toLine": 301
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 359,
    "toLine": 362
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 395,
    "toLine": 398
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 444,
    "toLine": 447
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 499,
    "toLine": 502
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 554,
    "toLine": 557
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 601,
    "toLine": 604
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 677,
    "toLine": 680
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 636,
    "toLine": 639
}
,]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 2,
        "mass": 32,
        "clones": 2,
        "snippet": "PreparedStatement pr = con.prepareStatement( \"UPDATE \" + tableName + \" SET bi=?,c=?,d=?,de=?,f=?,im=?,i=?,m=?,n=?,r=?,sd=?,si=?,sm=?,sy=?,t=?,ti=?,vb=?,vc=? WHERE i=?\" );\n            long time = -System.currentTimeMillis();\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 412,
    "toLine": 413
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 519,
    "toLine": 520
}
,]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 2,
        "mass": 32,
        "clones": 2,
        "snippet": "PreparedStatement pr = con.prepareStatement( \"UPDATE \" + tableName + \" SET bi=?,c=?,d=?,de=?,f=?,im=?,i=?,m=?,n=?,r=?,sd=?,si=?,sm=?,sy=?,t=?,ti=?,vb=?,vc=? WHERE i=?\" );\n            long time = -System.currentTimeMillis();\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 412,
    "toLine": 413
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 519,
    "toLine": 520
}
,]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 8,
        "mass": 142,
        "clones": 2,
        "snippet": "java.io.FileOutputStream fos = new java.io.FileOutputStream(tableName+\".bin\");\n            byte bytes[] = new byte[1024];\n            for(int i=0; i<rowCount; i++){\n                fos.write(bytes);\n            }\n            fos.close();\n            java.io.FileInputStream fis = new java.io.FileInputStream(tableName+\".bin\");\n            long time = -System.currentTimeMillis();\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 618,
    "toLine": 625
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 655,
    "toLine": 662
}
,]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 8,
        "mass": 142,
        "clones": 2,
        "snippet": "java.io.FileOutputStream fos = new java.io.FileOutputStream(tableName+\".bin\");\n            byte bytes[] = new byte[1024];\n            for(int i=0; i<rowCount; i++){\n                fos.write(bytes);\n            }\n            fos.close();\n            java.io.FileInputStream fis = new java.io.FileInputStream(tableName+\".bin\");\n            long time = -System.currentTimeMillis();\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 618,
    "toLine": 625
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 655,
    "toLine": 662
}
,]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 8,
        "mass": 103,
        "clones": 2,
        "snippet": "int updateCount = pr.executeUpdate();\n                if (updateCount != 1){\n                    System.out.println( \"  Failed: Update count should be 1 but it is \" + updateCount + \".\");\n                    return;\n                }\n            }\n            time += System.currentTimeMillis();\n            System.out.println( \"  Test time: \" + time + \" ms\");\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 487,
    "toLine": 494
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 434,
    "toLine": 441
}
,]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 8,
        "mass": 103,
        "clones": 2,
        "snippet": "int updateCount = pr.executeUpdate();\n                if (updateCount != 1){\n                    System.out.println( \"  Failed: Update count should be 1 but it is \" + updateCount + \".\");\n                    return;\n                }\n            }\n            time += System.currentTimeMillis();\n            System.out.println( \"  Test time: \" + time + \" ms\");\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 487,
    "toLine": 494
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 434,
    "toLine": 441
}
,]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 1,
        "mass": 24,
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
        "mass": 24,
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
        "mass": 24,
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
        "mass": 24,
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
        "mass": 24,
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
        "volume": 4,
        "mass": 56,
        "clones": 2,
        "snippet": "{\n            Statement st = con.createStatement();\n            st.execute(\"DELETE FROM \" + tableName);\n            st.close();\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 726,
    "toLine": 729
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 292,
    "toLine": 296
}
,]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 4,
        "mass": 56,
        "clones": 2,
        "snippet": "{\n            Statement st = con.createStatement();\n            st.execute(\"DELETE FROM \" + tableName);\n            st.close();\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 726,
    "toLine": 729
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 292,
    "toLine": 296
}
,]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 1,
        "mass": 24,
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
        "volume": 6,
        "mass": 118,
        "clones": 2,
        "snippet": "                if (count == 0){\n                    createTestDataWithClassicInsert( con );\n                    rs.next();\n                    count = rs.getInt(1);\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 322,
    "toLine": 327
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 208,
    "toLine": 213
}
,]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 6,
        "mass": 118,
        "clones": 2,
        "snippet": "                if (count == 0){\n                    createTestDataWithClassicInsert( con );\n                    rs.next();\n                    count = rs.getInt(1);\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 322,
    "toLine": 327
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",
    "fromLine": 208,
    "toLine": 213
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
        "mass": 25,
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
        "cc": 2,
        "volume": 2,
        "mass": 36,
        "clones": 6,
        "snippet": "if(param1.isNull()) return 0;\n\t\tDateTime.Details details = new DateTime.Details(param1.getLong());\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionMonth.java",
    "fromLine": 49,
    "toLine": 50
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionHour.java",
    "fromLine": 49,
    "toLine": 50
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionDayOfYear.java",
    "fromLine": 49,
    "toLine": 50
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionMinute.java",
    "fromLine": 49,
    "toLine": 50
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionDayOfMonth.java",
    "fromLine": 49,
    "toLine": 50
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionYear.java",
    "fromLine": 49,
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
        "volume": 4,
        "mass": 40,
        "clones": 2,
        "snippet": "{\n                            keyColumnNames.add(column.getName());\n                            keys.add(valueExpress.getObject());\n                            break;\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/CommandInsert.java",
    "fromLine": 166,
    "toLine": 169
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/CommandInsert.java",
    "fromLine": 156,
    "toLine": 159
}
,]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 4,
        "mass": 40,
        "clones": 2,
        "snippet": "{\n                            keyColumnNames.add(column.getName());\n                            keys.add(valueExpress.getObject());\n                            break;\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/CommandInsert.java",
    "fromLine": 166,
    "toLine": 169
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/CommandInsert.java",
    "fromLine": 156,
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
        "mass": 22,
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
        "mass": 22,
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
        "mass": 22,
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
        "cc": 3,
        "volume": 4,
        "mass": 53,
        "clones": 3,
        "snippet": "{\n        Object obj = getObject();\n        if(obj == null) return null;\n        return obj.toString();\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionReturnFloat.java",
    "fromLine": 76,
    "toLine": 79
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionAbs.java",
    "fromLine": 104,
    "toLine": 107
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionFloor.java",
    "fromLine": 46,
    "toLine": 49
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
        "mass": 49,
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
        "mass": 33,
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
        "mass": 25,
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
        "mass": 29,
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
        "mass": 39,
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
        "mass": 29,
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
        "mass": 29,
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
        "mass": 49,
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
        "mass": 41,
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
        "cc": 3,
        "volume": 10,
        "mass": 93,
        "clones": 4,
        "snippet": "{\n\t\treturn size;\n\t}\n\tfinal IndexDescription get(int idx){\n\t\tif (idx >= size)\n\t\t\tthrow new IndexOutOfBoundsException(\"Column index: \"+idx+\", Size: \"+size);\n\t\treturn data[idx];\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/IndexDescriptions.java",
    "fromLine": 57,
    "toLine": 66
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/Columns.java",
    "fromLine": 54,
    "toLine": 61
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/ForeignKeys.java",
    "fromLine": 51,
    "toLine": 59
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/Strings.java",
    "fromLine": 51,
    "toLine": 59
}
,]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 2,
        "mass": 42,
        "clones": 7,
        "snippet": "if(size >= data.length ){\n\t\t\tresize(size << 1);\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/IndexDescriptions.java",
    "fromLine": 71,
    "toLine": 72
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/Columns.java",
    "fromLine": 96,
    "toLine": 97
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/LongList.java",
    "fromLine": 68,
    "toLine": 69
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/Strings.java",
    "fromLine": 64,
    "toLine": 65
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/Expressions.java",
    "fromLine": 72,
    "toLine": 73
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/ForeignKeys.java",
    "fromLine": 64,
    "toLine": 65
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/Expressions.java",
    "fromLine": 79,
    "toLine": 80
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
        "cc": 10,
        "volume": 8,
        "mass": 189,
        "clones": 2,
        "snippet": "catch(Throwable e){\n\t\t\tif(raFile != null)\n\t\t\t\ttry{\n\t\t\t\t\traFile.close();\n\t\t\t\t}catch(Exception e2){\n\t\t\t\t\tDriverManager.println(e2.toString());\n\t\t\t\t}\n\t\t\tthrow SmallSQLException.createFromException(e);\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/TableView.java",
    "fromLine": 105,
    "toLine": 112
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/IndexDescription.java",
    "fromLine": 186,
    "toLine": 193
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
        "cloneClassesType1": 2
    },
    "results": {
        "type-1": [
            
{
    "metadata": {
        "cc": 2,
        "volume": 3,
        "mass": 53,
        "clones": 2,
        "snippet": "int length = param3.getInt();\n\t\tif(length < 0) \n\t\t\tthrow SmallSQLException.create(Language.SUBSTR_INVALID_LEN, new Integer(length));\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionSubstring.java",
    "fromLine": 80,
    "toLine": 82
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionSubstring.java",
    "fromLine": 59,
    "toLine": 61
}
,]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 3,
        "mass": 53,
        "clones": 2,
        "snippet": "int length = param3.getInt();\n\t\tif(length < 0) \n\t\t\tthrow SmallSQLException.create(Language.SUBSTR_INVALID_LEN, new Integer(length));\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionSubstring.java",
    "fromLine": 80,
    "toLine": 82
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionSubstring.java",
    "fromLine": 59,
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
        "mass": 44,
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
        "mass": 44,
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
        "mass": 24,
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
        "cc": 2,
        "volume": 3,
        "mass": 77,
        "clones": 2,
        "snippet": "if(!wasWhiteSpace){\n                                   tokens.add( new SQLToken( value, tokenStart, i) );\n                                   value = 0;\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/SQLTokenizer.java",
    "fromLine": 173,
    "toLine": 175
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/SQLTokenizer.java",
    "fromLine": 112,
    "toLine": 114
}
,]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 3,
        "mass": 77,
        "clones": 2,
        "snippet": "if(!wasWhiteSpace){\n                                   tokens.add( new SQLToken( value, tokenStart, i) );\n                                   value = 0;\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/SQLTokenizer.java",
    "fromLine": 173,
    "toLine": 175
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/SQLTokenizer.java",
    "fromLine": 112,
    "toLine": 114
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
        "volume": 2,
        "mass": 43,
        "clones": 3,
        "snippet": "page[ offset++ ] = (byte)(value >> 8);\n        page[ offset++ ] = (byte)(value);\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/StoreImpl.java",
    "fromLine": 363,
    "toLine": 364
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/StoreImpl.java",
    "fromLine": 377,
    "toLine": 378
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/StoreImpl.java",
    "fromLine": 398,
    "toLine": 399
}
,]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 2,
        "mass": 43,
        "clones": 3,
        "snippet": "page[ offset++ ] = (byte)(value >> 8);\n        page[ offset++ ] = (byte)(value);\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/StoreImpl.java",
    "fromLine": 363,
    "toLine": 364
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/StoreImpl.java",
    "fromLine": 377,
    "toLine": 378
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/StoreImpl.java",
    "fromLine": 398,
    "toLine": 399
}
,]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 2,
        "mass": 43,
        "clones": 3,
        "snippet": "page[ offset++ ] = (byte)(value >> 8);\n        page[ offset++ ] = (byte)(value);\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/StoreImpl.java",
    "fromLine": 363,
    "toLine": 364
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/StoreImpl.java",
    "fromLine": 377,
    "toLine": 378
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/StoreImpl.java",
    "fromLine": 398,
    "toLine": 399
}
,]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 2,
        "mass": 25,
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
        "mass": 25,
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
        "mass": 29,
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
        "mass": 29,
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
        "volume": 4,
        "mass": 89,
        "clones": 2,
        "snippet": "page[ offset++ ] = (byte)(value >> 24);\n        page[ offset++ ] = (byte)(value >> 16);\n        page[ offset++ ] = (byte)(value >> 8);\n        page[ offset++ ] = (byte)(value);\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/StoreImpl.java",
    "fromLine": 375,
    "toLine": 378
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/StoreImpl.java",
    "fromLine": 396,
    "toLine": 399
}
,]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 4,
        "mass": 89,
        "clones": 2,
        "snippet": "page[ offset++ ] = (byte)(value >> 24);\n        page[ offset++ ] = (byte)(value >> 16);\n        page[ offset++ ] = (byte)(value >> 8);\n        page[ offset++ ] = (byte)(value);\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/StoreImpl.java",
    "fromLine": 375,
    "toLine": 378
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/StoreImpl.java",
    "fromLine": 396,
    "toLine": 399
}
,]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 4,
        "mass": 89,
        "clones": 2,
        "snippet": "page[ offset++ ] = (byte)(value >> 24);\n        page[ offset++ ] = (byte)(value >> 16);\n        page[ offset++ ] = (byte)(value >> 8);\n        page[ offset++ ] = (byte)(value);\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/StoreImpl.java",
    "fromLine": 375,
    "toLine": 378
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/StoreImpl.java",
    "fromLine": 396,
    "toLine": 399
}
,]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 4,
        "mass": 89,
        "clones": 2,
        "snippet": "page[ offset++ ] = (byte)(value >> 24);\n        page[ offset++ ] = (byte)(value >> 16);\n        page[ offset++ ] = (byte)(value >> 8);\n        page[ offset++ ] = (byte)(value);\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/StoreImpl.java",
    "fromLine": 375,
    "toLine": 378
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/StoreImpl.java",
    "fromLine": 396,
    "toLine": 399
}
,]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 2,
        "mass": 38,
        "clones": 2,
        "snippet": "long lobFilePos = readLong();\n        StoreImpl store = table.getLobStore( ((TableStorePage)storePage).con, lobFilePos, SQLTokenizer.SELECT );\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/StoreImpl.java",
    "fromLine": 564,
    "toLine": 565
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/StoreImpl.java",
    "fromLine": 597,
    "toLine": 598
}
,]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 2,
        "mass": 38,
        "clones": 2,
        "snippet": "long lobFilePos = readLong();\n        StoreImpl store = table.getLobStore( ((TableStorePage)storePage).con, lobFilePos, SQLTokenizer.SELECT );\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/StoreImpl.java",
    "fromLine": 564,
    "toLine": 565
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/StoreImpl.java",
    "fromLine": 597,
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
        "mass": 24,
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
        "cc": 2,
        "volume": 2,
        "mass": 36,
        "clones": 6,
        "snippet": "if(param1.isNull()) return 0;\n\t\tDateTime.Details details = new DateTime.Details(param1.getLong());\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionMonth.java",
    "fromLine": 49,
    "toLine": 50
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionHour.java",
    "fromLine": 49,
    "toLine": 50
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionDayOfYear.java",
    "fromLine": 49,
    "toLine": 50
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionMinute.java",
    "fromLine": 49,
    "toLine": 50
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionDayOfMonth.java",
    "fromLine": 49,
    "toLine": 50
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionYear.java",
    "fromLine": 49,
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
        "volume": 4,
        "mass": 54,
        "clones": 2,
        "snippet": "{\n        Money money = new Money();\n        money.value = value;\n        return money;\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/Money.java",
    "fromLine": 67,
    "toLine": 70
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/Money.java",
    "fromLine": 61,
    "toLine": 64
}
,]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 4,
        "mass": 54,
        "clones": 2,
        "snippet": "{\n        Money money = new Money();\n        money.value = value;\n        return money;\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/Money.java",
    "fromLine": 67,
    "toLine": 70
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/Money.java",
    "fromLine": 61,
    "toLine": 64
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
        "mass": 39,
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
        "mass": 39,
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
        "mass": 39,
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
        "mass": 39,
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
        "cc": 4,
        "volume": 5,
        "mass": 96,
        "clones": 2,
        "snippet": "if(num.scale < scale){\n\t\t\tnum.setScale(scale);\n\t\t}else\n\t\tif(num.scale > scale){\n\t\t\tsetScale(num.scale);\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/MutableNumeric.java",
    "fromLine": 235,
    "toLine": 239
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/MutableNumeric.java",
    "fromLine": 167,
    "toLine": 171
}
,]
}
,
{
    "metadata": {
        "cc": 4,
        "volume": 5,
        "mass": 96,
        "clones": 2,
        "snippet": "if(num.scale < scale){\n\t\t\tnum.setScale(scale);\n\t\t}else\n\t\tif(num.scale > scale){\n\t\t\tsetScale(num.scale);\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/MutableNumeric.java",
    "fromLine": 235,
    "toLine": 239
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/MutableNumeric.java",
    "fromLine": 167,
    "toLine": 171
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
        "cc": 2,
        "volume": 8,
        "mass": 96,
        "clones": 2,
        "snippet": "{\n\t\t\t\trecreateTestTab(stat);\n\t\t\t\tstat.execute(\"CREATE TABLE \" + TABLE_NAME + \" (id_test INT)\");\n\t\t\t\tfail();\n\t\t\t}\n\t\t\tcatch(SQLException e) {\n\t\t\t\tassertMessage(e, \"La tabella\/vista '\" + TABLE_NAME + \"' è già esistente.\");\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java",
    "fromLine": 104,
    "toLine": 111
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java",
    "fromLine": 84,
    "toLine": 91
}
,]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 8,
        "mass": 96,
        "clones": 2,
        "snippet": "{\n\t\t\t\trecreateTestTab(stat);\n\t\t\t\tstat.execute(\"CREATE TABLE \" + TABLE_NAME + \" (id_test INT)\");\n\t\t\t\tfail();\n\t\t\t}\n\t\t\tcatch(SQLException e) {\n\t\t\t\tassertMessage(e, \"La tabella\/vista '\" + TABLE_NAME + \"' è già esistente.\");\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java",
    "fromLine": 104,
    "toLine": 111
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java",
    "fromLine": 84,
    "toLine": 91
}
,]
}
,
{
    "metadata": {
        "cc": 5,
        "volume": 3,
        "mass": 90,
        "clones": 2,
        "snippet": "for (Iterator itr = diff.iterator(); itr.hasNext(); ) {\n                    msgBuf.append(itr.next());\n                    if (itr.hasNext()) msgBuf.append(',');\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java",
    "fromLine": 255,
    "toLine": 257
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java",
    "fromLine": 241,
    "toLine": 243
}
,]
}
,
{
    "metadata": {
        "cc": 5,
        "volume": 3,
        "mass": 90,
        "clones": 2,
        "snippet": "for (Iterator itr = diff.iterator(); itr.hasNext(); ) {\n                    msgBuf.append(itr.next());\n                    if (itr.hasNext()) msgBuf.append(',');\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java",
    "fromLine": 255,
    "toLine": 257
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java",
    "fromLine": 241,
    "toLine": 243
}
,]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 8,
        "mass": 96,
        "clones": 2,
        "snippet": "{\n\t\t\t\trecreateTestTab(stat);\n\t\t\t\tstat.execute(\"CREATE TABLE \" + TABLE_NAME + \" (id_test INT)\");\n\t\t\t\tfail();\n\t\t\t}\n\t\t\tcatch(SQLException e) {\n\t\t\t\tassertMessage(e, \"La tabella\/vista '\" + TABLE_NAME + \"' è già esistente.\");\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java",
    "fromLine": 104,
    "toLine": 111
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java",
    "fromLine": 84,
    "toLine": 91
}
,]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 8,
        "mass": 96,
        "clones": 2,
        "snippet": "{\n\t\t\t\trecreateTestTab(stat);\n\t\t\t\tstat.execute(\"CREATE TABLE \" + TABLE_NAME + \" (id_test INT)\");\n\t\t\t\tfail();\n\t\t\t}\n\t\t\tcatch(SQLException e) {\n\t\t\t\tassertMessage(e, \"La tabella\/vista '\" + TABLE_NAME + \"' è già esistente.\");\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java",
    "fromLine": 104,
    "toLine": 111
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java",
    "fromLine": 84,
    "toLine": 91
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
        "cc": 3,
        "volume": 10,
        "mass": 93,
        "clones": 4,
        "snippet": "{\n\t\treturn size;\n\t}\n\tfinal IndexDescription get(int idx){\n\t\tif (idx >= size)\n\t\t\tthrow new IndexOutOfBoundsException(\"Column index: \"+idx+\", Size: \"+size);\n\t\treturn data[idx];\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/IndexDescriptions.java",
    "fromLine": 57,
    "toLine": 66
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/Columns.java",
    "fromLine": 54,
    "toLine": 61
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/ForeignKeys.java",
    "fromLine": 51,
    "toLine": 59
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/Strings.java",
    "fromLine": 51,
    "toLine": 59
}
,]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 2,
        "mass": 42,
        "clones": 7,
        "snippet": "if(size >= data.length ){\n\t\t\tresize(size << 1);\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/IndexDescriptions.java",
    "fromLine": 71,
    "toLine": 72
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/Columns.java",
    "fromLine": 96,
    "toLine": 97
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/LongList.java",
    "fromLine": 68,
    "toLine": 69
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/Strings.java",
    "fromLine": 64,
    "toLine": 65
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/Expressions.java",
    "fromLine": 72,
    "toLine": 73
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/ForeignKeys.java",
    "fromLine": 64,
    "toLine": 65
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/Expressions.java",
    "fromLine": 79,
    "toLine": 80
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
        "mass": 24,
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
        "cc": 3,
        "volume": 5,
        "mass": 79,
        "clones": 2,
        "snippet": "{\n\t\t\tint idx = internalExpressions.indexOf(expr);\n\t\t\tif(idx >= 0) return idx;\n\t\t\tinternalExpressions.add(expr);\n\t\t\treturn internalExpressions.size()-1;\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/GroupResult.java",
    "fromLine": 111,
    "toLine": 115
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/GroupResult.java",
    "fromLine": 89,
    "toLine": 93
}
,]
}
,
{
    "metadata": {
        "cc": 3,
        "volume": 5,
        "mass": 79,
        "clones": 2,
        "snippet": "{\n\t\t\tint idx = internalExpressions.indexOf(expr);\n\t\t\tif(idx >= 0) return idx;\n\t\t\tinternalExpressions.add(expr);\n\t\t\treturn internalExpressions.size()-1;\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/GroupResult.java",
    "fromLine": 111,
    "toLine": 115
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/GroupResult.java",
    "fromLine": 89,
    "toLine": 93
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
        "cloneClassesType1": 12
    },
    "results": {
        "type-1": [
            
{
    "metadata": {
        "cc": 1,
        "volume": 7,
        "mass": 53,
        "clones": 2,
        "snippet": "con.createStatement().execute(\"Create Table transactions (i int identity, v varchar(20))\");\n\t\t\tcon.createStatement().execute(\"Insert Into transactions(v) Values('qwert')\");\n\t\t\tResultSet rs = con.createStatement(ResultSet.TYPE_SCROLL_SENSITIVE, ResultSet.CONCUR_UPDATABLE)\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java",
    "fromLine": 349,
    "toLine": 355
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java",
    "fromLine": 199,
    "toLine": 205
}
,]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 7,
        "mass": 53,
        "clones": 2,
        "snippet": "con.createStatement().execute(\"Create Table transactions (i int identity, v varchar(20))\");\n\t\t\tcon.createStatement().execute(\"Insert Into transactions(v) Values('qwert')\");\n\t\t\tResultSet rs = con.createStatement(ResultSet.TYPE_SCROLL_SENSITIVE, ResultSet.CONCUR_UPDATABLE)\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java",
    "fromLine": 349,
    "toLine": 355
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java",
    "fromLine": 199,
    "toLine": 205
}
,]
}
,
{
    "metadata": {
        "cc": 4,
        "volume": 5,
        "mass": 97,
        "clones": 2,
        "snippet": "assertFalse( rs.next() );\n\t\t}finally{\n\t\t\ttry{\n\t\t\t\tcon.createStatement().execute(\"Drop Table transactions\");\n\t\t\t}catch(Throwable e){e.printStackTrace();\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java",
    "fromLine": 396,
    "toLine": 400
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java",
    "fromLine": 221,
    "toLine": 226
}
,]
}
,
{
    "metadata": {
        "cc": 4,
        "volume": 5,
        "mass": 97,
        "clones": 2,
        "snippet": "assertFalse( rs.next() );\n\t\t}finally{\n\t\t\ttry{\n\t\t\t\tcon.createStatement().execute(\"Drop Table transactions\");\n\t\t\t}catch(Throwable e){e.printStackTrace();\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java",
    "fromLine": 396,
    "toLine": 400
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java",
    "fromLine": 221,
    "toLine": 226
}
,]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 4,
        "mass": 40,
        "clones": 2,
        "snippet": "{\n            dropTable(con1, \"transactions\");\n\t\t\tcon1.setAutoCommit(true);\n\t\t\tcon2.close();\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java",
    "fromLine": 441,
    "toLine": 444
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java",
    "fromLine": 419,
    "toLine": 422
}
,]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 4,
        "mass": 40,
        "clones": 2,
        "snippet": "{\n            dropTable(con1, \"transactions\");\n\t\t\tcon1.setAutoCommit(true);\n\t\t\tcon2.close();\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java",
    "fromLine": 441,
    "toLine": 444
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java",
    "fromLine": 419,
    "toLine": 422
}
,]
}
,
{
    "metadata": {
        "cc": 4,
        "volume": 5,
        "mass": 104,
        "clones": 6,
        "snippet": "{\n\t\t\ttry{\n\t\t\t\tcon.createStatement().execute(\"Drop Table transactions\");\n\t\t\t}catch(Throwable e){e.printStackTrace();}\n\t\t\tcon.setAutoCommit(true);\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java",
    "fromLine": 98,
    "toLine": 102
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java",
    "fromLine": 129,
    "toLine": 133
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java",
    "fromLine": 157,
    "toLine": 161
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java",
    "fromLine": 188,
    "toLine": 192
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java",
    "fromLine": 365,
    "toLine": 369
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java",
    "fromLine": 281,
    "toLine": 285
}
,]
}
,
{
    "metadata": {
        "cc": 4,
        "volume": 5,
        "mass": 104,
        "clones": 6,
        "snippet": "{\n\t\t\ttry{\n\t\t\t\tcon.createStatement().execute(\"Drop Table transactions\");\n\t\t\t}catch(Throwable e){e.printStackTrace();}\n\t\t\tcon.setAutoCommit(true);\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java",
    "fromLine": 98,
    "toLine": 102
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java",
    "fromLine": 129,
    "toLine": 133
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java",
    "fromLine": 157,
    "toLine": 161
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java",
    "fromLine": 188,
    "toLine": 192
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java",
    "fromLine": 365,
    "toLine": 369
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java",
    "fromLine": 281,
    "toLine": 285
}
,]
}
,
{
    "metadata": {
        "cc": 4,
        "volume": 5,
        "mass": 104,
        "clones": 6,
        "snippet": "{\n\t\t\ttry{\n\t\t\t\tcon.createStatement().execute(\"Drop Table transactions\");\n\t\t\t}catch(Throwable e){e.printStackTrace();}\n\t\t\tcon.setAutoCommit(true);\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java",
    "fromLine": 98,
    "toLine": 102
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java",
    "fromLine": 129,
    "toLine": 133
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java",
    "fromLine": 157,
    "toLine": 161
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java",
    "fromLine": 188,
    "toLine": 192
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java",
    "fromLine": 365,
    "toLine": 369
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java",
    "fromLine": 281,
    "toLine": 285
}
,]
}
,
{
    "metadata": {
        "cc": 4,
        "volume": 5,
        "mass": 104,
        "clones": 6,
        "snippet": "{\n\t\t\ttry{\n\t\t\t\tcon.createStatement().execute(\"Drop Table transactions\");\n\t\t\t}catch(Throwable e){e.printStackTrace();}\n\t\t\tcon.setAutoCommit(true);\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java",
    "fromLine": 98,
    "toLine": 102
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java",
    "fromLine": 129,
    "toLine": 133
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java",
    "fromLine": 157,
    "toLine": 161
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java",
    "fromLine": 188,
    "toLine": 192
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java",
    "fromLine": 365,
    "toLine": 369
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java",
    "fromLine": 281,
    "toLine": 285
}
,]
}
,
{
    "metadata": {
        "cc": 4,
        "volume": 5,
        "mass": 104,
        "clones": 6,
        "snippet": "{\n\t\t\ttry{\n\t\t\t\tcon.createStatement().execute(\"Drop Table transactions\");\n\t\t\t}catch(Throwable e){e.printStackTrace();}\n\t\t\tcon.setAutoCommit(true);\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java",
    "fromLine": 98,
    "toLine": 102
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java",
    "fromLine": 129,
    "toLine": 133
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java",
    "fromLine": 157,
    "toLine": 161
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java",
    "fromLine": 188,
    "toLine": 192
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java",
    "fromLine": 365,
    "toLine": 369
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java",
    "fromLine": 281,
    "toLine": 285
}
,]
}
,
{
    "metadata": {
        "cc": 4,
        "volume": 5,
        "mass": 104,
        "clones": 6,
        "snippet": "{\n\t\t\ttry{\n\t\t\t\tcon.createStatement().execute(\"Drop Table transactions\");\n\t\t\t}catch(Throwable e){e.printStackTrace();}\n\t\t\tcon.setAutoCommit(true);\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java",
    "fromLine": 98,
    "toLine": 102
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java",
    "fromLine": 129,
    "toLine": 133
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java",
    "fromLine": 157,
    "toLine": 161
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java",
    "fromLine": 188,
    "toLine": 192
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java",
    "fromLine": 365,
    "toLine": 369
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java",
    "fromLine": 281,
    "toLine": 285
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
        "cc": 2,
        "volume": 2,
        "mass": 36,
        "clones": 6,
        "snippet": "if(param1.isNull()) return 0;\n\t\tDateTime.Details details = new DateTime.Details(param1.getLong());\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionMonth.java",
    "fromLine": 49,
    "toLine": 50
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionHour.java",
    "fromLine": 49,
    "toLine": 50
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionDayOfYear.java",
    "fromLine": 49,
    "toLine": 50
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionMinute.java",
    "fromLine": 49,
    "toLine": 50
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionDayOfMonth.java",
    "fromLine": 49,
    "toLine": 50
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionYear.java",
    "fromLine": 49,
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
        "cc": 3,
        "volume": 4,
        "mass": 53,
        "clones": 3,
        "snippet": "{\n        Object obj = getObject();\n        if(obj == null) return null;\n        return obj.toString();\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionReturnFloat.java",
    "fromLine": 76,
    "toLine": 79
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionAbs.java",
    "fromLine": 104,
    "toLine": 107
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionFloor.java",
    "fromLine": 46,
    "toLine": 49
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
        "cc": 3,
        "volume": 4,
        "mass": 53,
        "clones": 3,
        "snippet": "{\n        Object obj = getObject();\n        if(obj == null) return null;\n        return obj.toString();\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionReturnFloat.java",
    "fromLine": 76,
    "toLine": 79
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionAbs.java",
    "fromLine": 104,
    "toLine": 107
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionFloor.java",
    "fromLine": 46,
    "toLine": 49
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
        "cc": 4,
        "volume": 19,
        "mass": 158,
        "clones": 3,
        "snippet": "catch(Throwable ex){\n                        throwable = ex;\n                    }\n                }\n            });\n            threadList.add(thread);\n            thread.start();\n        }\n        for(int i = 0; i < threadList.size(); i++){\n            Thread thread = (Thread)threadList.get(i);\n            thread.join(5000);\n        }\n        if(throwable != null){\n            throw throwable;\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestThreads.java",
    "fromLine": 49,
    "toLine": 67
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestThreads.java",
    "fromLine": 150,
    "toLine": 168
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestThreads.java",
    "fromLine": 96,
    "toLine": 114
}
,]
}
,
{
    "metadata": {
        "cc": 4,
        "volume": 19,
        "mass": 158,
        "clones": 3,
        "snippet": "catch(Throwable ex){\n                        throwable = ex;\n                    }\n                }\n            });\n            threadList.add(thread);\n            thread.start();\n        }\n        for(int i = 0; i < threadList.size(); i++){\n            Thread thread = (Thread)threadList.get(i);\n            thread.join(5000);\n        }\n        if(throwable != null){\n            throw throwable;\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestThreads.java",
    "fromLine": 49,
    "toLine": 67
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestThreads.java",
    "fromLine": 150,
    "toLine": 168
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestThreads.java",
    "fromLine": 96,
    "toLine": 114
}
,]
}
,
{
    "metadata": {
        "cc": 4,
        "volume": 19,
        "mass": 158,
        "clones": 3,
        "snippet": "catch(Throwable ex){\n                        throwable = ex;\n                    }\n                }\n            });\n            threadList.add(thread);\n            thread.start();\n        }\n        for(int i = 0; i < threadList.size(); i++){\n            Thread thread = (Thread)threadList.get(i);\n            thread.join(5000);\n        }\n        if(throwable != null){\n            throw throwable;\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestThreads.java",
    "fromLine": 49,
    "toLine": 67
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestThreads.java",
    "fromLine": 150,
    "toLine": 168
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestThreads.java",
    "fromLine": 96,
    "toLine": 114
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
        "cloneClassesType1": 1
    },
    "results": {
        "type-1": [
            
{
    "metadata": {
        "cc": 1,
        "volume": 1,
        "mass": 21,
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
        "cc": 3,
        "volume": 5,
        "mass": 54,
        "clones": 2,
        "snippet": "{\n\t\t\t\t\tif(expr.isNull())\n\t\t\t\t\t\tdataType = expr.getDataType();\n\t\t\t\t\telse\n\t\t\t\t\t\tinitValue( expr );\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/ExpressionValue.java",
    "fromLine": 211,
    "toLine": 215
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/ExpressionValue.java",
    "fromLine": 154,
    "toLine": 158
}
,]
}
,
{
    "metadata": {
        "cc": 3,
        "volume": 5,
        "mass": 54,
        "clones": 2,
        "snippet": "{\n\t\t\t\t\tif(expr.isNull())\n\t\t\t\t\t\tdataType = expr.getDataType();\n\t\t\t\t\telse\n\t\t\t\t\t\tinitValue( expr );\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/ExpressionValue.java",
    "fromLine": 211,
    "toLine": 215
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/ExpressionValue.java",
    "fromLine": 154,
    "toLine": 158
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
        "volume": 2,
        "mass": 43,
        "clones": 3,
        "snippet": "puffer[ offset++ ] = (byte)(value >> 8);\n\t\tpuffer[ offset++ ] = (byte)(value);\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/MemoryStream.java",
    "fromLine": 63,
    "toLine": 64
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/MemoryStream.java",
    "fromLine": 71,
    "toLine": 72
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/MemoryStream.java",
    "fromLine": 83,
    "toLine": 84
}
,]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 2,
        "mass": 43,
        "clones": 3,
        "snippet": "puffer[ offset++ ] = (byte)(value >> 8);\n\t\tpuffer[ offset++ ] = (byte)(value);\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/MemoryStream.java",
    "fromLine": 63,
    "toLine": 64
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/MemoryStream.java",
    "fromLine": 71,
    "toLine": 72
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/MemoryStream.java",
    "fromLine": 83,
    "toLine": 84
}
,]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 2,
        "mass": 43,
        "clones": 3,
        "snippet": "puffer[ offset++ ] = (byte)(value >> 8);\n\t\tpuffer[ offset++ ] = (byte)(value);\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/MemoryStream.java",
    "fromLine": 63,
    "toLine": 64
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/MemoryStream.java",
    "fromLine": 71,
    "toLine": 72
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/MemoryStream.java",
    "fromLine": 83,
    "toLine": 84
}
,]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 4,
        "mass": 89,
        "clones": 2,
        "snippet": "puffer[ offset++ ] = (byte)(value >> 24);\n\t\tpuffer[ offset++ ] = (byte)(value >> 16);\n\t\tpuffer[ offset++ ] = (byte)(value >> 8);\n\t\tpuffer[ offset++ ] = (byte)(value);\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/MemoryStream.java",
    "fromLine": 69,
    "toLine": 72
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/MemoryStream.java",
    "fromLine": 81,
    "toLine": 84
}
,]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 4,
        "mass": 89,
        "clones": 2,
        "snippet": "puffer[ offset++ ] = (byte)(value >> 24);\n\t\tpuffer[ offset++ ] = (byte)(value >> 16);\n\t\tpuffer[ offset++ ] = (byte)(value >> 8);\n\t\tpuffer[ offset++ ] = (byte)(value);\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/MemoryStream.java",
    "fromLine": 69,
    "toLine": 72
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/MemoryStream.java",
    "fromLine": 81,
    "toLine": 84
}
,]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 4,
        "mass": 89,
        "clones": 2,
        "snippet": "puffer[ offset++ ] = (byte)(value >> 24);\n\t\tpuffer[ offset++ ] = (byte)(value >> 16);\n\t\tpuffer[ offset++ ] = (byte)(value >> 8);\n\t\tpuffer[ offset++ ] = (byte)(value);\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/MemoryStream.java",
    "fromLine": 69,
    "toLine": 72
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/MemoryStream.java",
    "fromLine": 81,
    "toLine": 84
}
,]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 4,
        "mass": 89,
        "clones": 2,
        "snippet": "puffer[ offset++ ] = (byte)(value >> 24);\n\t\tpuffer[ offset++ ] = (byte)(value >> 16);\n\t\tpuffer[ offset++ ] = (byte)(value >> 8);\n\t\tpuffer[ offset++ ] = (byte)(value);\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/MemoryStream.java",
    "fromLine": 69,
    "toLine": 72
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/MemoryStream.java",
    "fromLine": 81,
    "toLine": 84
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
        "mass": 24,
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
        "mass": 24,
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
        "mass": 24,
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
        "mass": 24,
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
        "mass": 24,
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
        "volume": 14,
        "mass": 202,
        "clones": 2,
        "snippet": "assertTrue( rs.next() );\n\t\toldValue = (Integer)rs.getObject(\"i\");\n\t\tassertNull(oldValue);\n\t\tassertTrue( rs.next() );\n\t\toldValue = (Integer)rs.getObject(\"i\");\n\t\tint count = 1;\n\t\twhile(rs.next()){\n\t\t\tassertTrue( oldValue.compareTo( (Integer)rs.getObject(\"i\") ) < 0 );\n\t\t\toldValue = (Integer)rs.getObject(\"i\");\n\t\t\tcount++;\n\t\t}\n\t\tassertEquals( valueCount, count );\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestOrderBy.java",
    "fromLine": 423,
    "toLine": 436
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestOrderBy.java",
    "fromLine": 338,
    "toLine": 351
}
,]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 14,
        "mass": 202,
        "clones": 2,
        "snippet": "assertTrue( rs.next() );\n\t\toldValue = (Integer)rs.getObject(\"i\");\n\t\tassertNull(oldValue);\n\t\tassertTrue( rs.next() );\n\t\toldValue = (Integer)rs.getObject(\"i\");\n\t\tint count = 1;\n\t\twhile(rs.next()){\n\t\t\tassertTrue( oldValue.compareTo( (Integer)rs.getObject(\"i\") ) < 0 );\n\t\t\toldValue = (Integer)rs.getObject(\"i\");\n\t\t\tcount++;\n\t\t}\n\t\tassertEquals( valueCount, count );\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestOrderBy.java",
    "fromLine": 423,
    "toLine": 436
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestOrderBy.java",
    "fromLine": 338,
    "toLine": 351
}
,]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 3,
        "mass": 35,
        "clones": 2,
        "snippet": "assertTrue( oldValue + \"<\" + newValue, oldValue.compareTo( newValue ) < 0 );\n\t\t\toldValue = newValue;\n\t\t\tcount++;\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestOrderBy.java",
    "fromLine": 134,
    "toLine": 136
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestOrderBy.java",
    "fromLine": 162,
    "toLine": 164
}
,]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 3,
        "mass": 35,
        "clones": 2,
        "snippet": "assertTrue( oldValue + \"<\" + newValue, oldValue.compareTo( newValue ) < 0 );\n\t\t\toldValue = newValue;\n\t\t\tcount++;\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestOrderBy.java",
    "fromLine": 134,
    "toLine": 136
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestOrderBy.java",
    "fromLine": 162,
    "toLine": 164
}
,]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 4,
        "mass": 48,
        "clones": 2,
        "snippet": "{\n\t\t\toldValue = rs.getBoolean(\"b\");\n\t\t\tassertFalse(rs.wasNull());\n\t\t\tcount++;\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestOrderBy.java",
    "fromLine": 597,
    "toLine": 600
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestOrderBy.java",
    "fromLine": 592,
    "toLine": 595
}
,]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 4,
        "mass": 48,
        "clones": 2,
        "snippet": "{\n\t\t\toldValue = rs.getBoolean(\"b\");\n\t\t\tassertFalse(rs.wasNull());\n\t\t\tcount++;\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestOrderBy.java",
    "fromLine": 597,
    "toLine": 600
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestOrderBy.java",
    "fromLine": 592,
    "toLine": 595
}
,]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 10,
        "mass": 90,
        "clones": 3,
        "snippet": "if(newValue != null){\n\t\t\t\tassertTrue( oldValue.compareTo( newValue ) > 0 );\n\t\t\t\tcount++;\n\t\t\t}\n\t\t\toldValue = newValue;\n\t\t}\n\t\tassertNull(oldValue);\n\t\tassertFalse( rs.next() );\n\t\tassertEquals( valueCount, count );\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestOrderBy.java",
    "fromLine": 213,
    "toLine": 222
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestOrderBy.java",
    "fromLine": 455,
    "toLine": 463
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestOrderBy.java",
    "fromLine": 241,
    "toLine": 250
}
,]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 10,
        "mass": 90,
        "clones": 3,
        "snippet": "if(newValue != null){\n\t\t\t\tassertTrue( oldValue.compareTo( newValue ) > 0 );\n\t\t\t\tcount++;\n\t\t\t}\n\t\t\toldValue = newValue;\n\t\t}\n\t\tassertNull(oldValue);\n\t\tassertFalse( rs.next() );\n\t\tassertEquals( valueCount, count );\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestOrderBy.java",
    "fromLine": 213,
    "toLine": 222
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestOrderBy.java",
    "fromLine": 455,
    "toLine": 463
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestOrderBy.java",
    "fromLine": 241,
    "toLine": 250
}
,]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 10,
        "mass": 90,
        "clones": 3,
        "snippet": "if(newValue != null){\n\t\t\t\tassertTrue( oldValue.compareTo( newValue ) > 0 );\n\t\t\t\tcount++;\n\t\t\t}\n\t\t\toldValue = newValue;\n\t\t}\n\t\tassertNull(oldValue);\n\t\tassertFalse( rs.next() );\n\t\tassertEquals( valueCount, count );\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestOrderBy.java",
    "fromLine": 213,
    "toLine": 222
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestOrderBy.java",
    "fromLine": 455,
    "toLine": 463
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestOrderBy.java",
    "fromLine": 241,
    "toLine": 250
}
,]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 5,
        "mass": 122,
        "clones": 2,
        "snippet": "while(rs.next()){\n\t\t\tString newValue = rs.getString(\"v\");\n\t\t\tassertTrue( oldValue.compareTo( newValue ) < 0 );\n\t\t\toldValue = newValue;\n\t\t\tcount++;\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestOrderBy.java",
    "fromLine": 811,
    "toLine": 815
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestOrderBy.java",
    "fromLine": 187,
    "toLine": 191
}
,]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 5,
        "mass": 122,
        "clones": 2,
        "snippet": "while(rs.next()){\n\t\t\tString newValue = rs.getString(\"v\");\n\t\t\tassertTrue( oldValue.compareTo( newValue ) < 0 );\n\t\t\toldValue = newValue;\n\t\t\tcount++;\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestOrderBy.java",
    "fromLine": 811,
    "toLine": 815
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestOrderBy.java",
    "fromLine": 187,
    "toLine": 191
}
,]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 1,
        "mass": 24,
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
        "mass": 24,
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
        "mass": 24,
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
        "mass": 31,
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
        "mass": 31,
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
        "volume": 3,
        "mass": 49,
        "clones": 2,
        "snippet": "int mid = start + (end - start)\/2;\n\t\tchar nodeDigit = nodes[mid].digit;\n\t\tif(nodeDigit == digit) return mid;\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/IndexNode.java",
    "fromLine": 349,
    "toLine": 351
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/IndexNode.java",
    "fromLine": 368,
    "toLine": 370
}
,]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 3,
        "mass": 49,
        "clones": 2,
        "snippet": "int mid = start + (end - start)\/2;\n\t\tchar nodeDigit = nodes[mid].digit;\n\t\tif(nodeDigit == digit) return mid;\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/IndexNode.java",
    "fromLine": 349,
    "toLine": 351
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/IndexNode.java",
    "fromLine": 368,
    "toLine": 370
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
        "mass": 49,
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
        "mass": 33,
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
        "mass": 25,
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
        "mass": 29,
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
        "mass": 39,
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
        "mass": 29,
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
        "mass": 49,
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
        "mass": 41,
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
        "cloneClassesType1": 1
    },
    "results": {
        "type-1": [
            
{
    "metadata": {
        "cc": 1,
        "volume": 1,
        "mass": 21,
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
        "mass": 25,
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
        "mass": 25,
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
        "mass": 25,
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
        "cc": 10,
        "volume": 8,
        "mass": 189,
        "clones": 2,
        "snippet": "catch(Throwable e){\n\t\t\tif(raFile != null)\n\t\t\t\ttry{\n\t\t\t\t\traFile.close();\n\t\t\t\t}catch(Exception e2){\n\t\t\t\t\tDriverManager.println(e2.toString());\n\t\t\t\t}\n\t\t\tthrow SmallSQLException.createFromException(e);\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/TableView.java",
    "fromLine": 105,
    "toLine": 112
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/IndexDescription.java",
    "fromLine": 186,
    "toLine": 193
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
        "volume": 4,
        "mass": 46,
        "clones": 2,
        "snippet": "if(t<0){\n\t\t\t\tt += 86400000;\n\t\t\t\td--;\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/DateTime.java",
    "fromLine": 740,
    "toLine": 743
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/DateTime.java",
    "fromLine": 675,
    "toLine": 678
}
,]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 4,
        "mass": 46,
        "clones": 2,
        "snippet": "if(t<0){\n\t\t\t\tt += 86400000;\n\t\t\t\td--;\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/DateTime.java",
    "fromLine": 740,
    "toLine": 743
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/DateTime.java",
    "fromLine": 675,
    "toLine": 678
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
        "volume": 3,
        "mass": 37,
        "clones": 5,
        "snippet": "Object[][] result = new Object[rows.size()][];\n\t\trows.toArray(result);\n\t\treturn result;\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/Database.java",
    "fromLine": 395,
    "toLine": 397
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/Database.java",
    "fromLine": 438,
    "toLine": 440
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/Database.java",
    "fromLine": 474,
    "toLine": 476
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/Database.java",
    "fromLine": 505,
    "toLine": 507
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/Database.java",
    "fromLine": 542,
    "toLine": 544
}
,]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 3,
        "mass": 37,
        "clones": 5,
        "snippet": "Object[][] result = new Object[rows.size()][];\n\t\trows.toArray(result);\n\t\treturn result;\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/Database.java",
    "fromLine": 395,
    "toLine": 397
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/Database.java",
    "fromLine": 438,
    "toLine": 440
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/Database.java",
    "fromLine": 474,
    "toLine": 476
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/Database.java",
    "fromLine": 505,
    "toLine": 507
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/Database.java",
    "fromLine": 542,
    "toLine": 544
}
,]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 3,
        "mass": 37,
        "clones": 5,
        "snippet": "Object[][] result = new Object[rows.size()][];\n\t\trows.toArray(result);\n\t\treturn result;\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/Database.java",
    "fromLine": 395,
    "toLine": 397
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/Database.java",
    "fromLine": 438,
    "toLine": 440
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/Database.java",
    "fromLine": 474,
    "toLine": 476
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/Database.java",
    "fromLine": 505,
    "toLine": 507
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/Database.java",
    "fromLine": 542,
    "toLine": 544
}
,]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 3,
        "mass": 37,
        "clones": 5,
        "snippet": "Object[][] result = new Object[rows.size()][];\n\t\trows.toArray(result);\n\t\treturn result;\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/Database.java",
    "fromLine": 395,
    "toLine": 397
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/Database.java",
    "fromLine": 438,
    "toLine": 440
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/Database.java",
    "fromLine": 474,
    "toLine": 476
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/Database.java",
    "fromLine": 505,
    "toLine": 507
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/Database.java",
    "fromLine": 542,
    "toLine": 544
}
,]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 3,
        "mass": 37,
        "clones": 5,
        "snippet": "Object[][] result = new Object[rows.size()][];\n\t\trows.toArray(result);\n\t\treturn result;\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/Database.java",
    "fromLine": 395,
    "toLine": 397
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/Database.java",
    "fromLine": 438,
    "toLine": 440
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/Database.java",
    "fromLine": 474,
    "toLine": 476
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/Database.java",
    "fromLine": 505,
    "toLine": 507
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/Database.java",
    "fromLine": 542,
    "toLine": 544
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
        "cloneClassesType1": 5
    },
    "results": {
        "type-1": [
            
{
    "metadata": {
        "cc": 4,
        "volume": 5,
        "mass": 90,
        "clones": 2,
        "snippet": "int k=tmp.length-1;\n                for(; k>= 0; k--) if(tmp[k] != 0) break;\n                k++;\n                byte[] tmp2 = new byte[k];\n                System.arraycopy( tmp, 0, tmp2, 0, k);\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java",
    "fromLine": 130,
    "toLine": 134
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java",
    "fromLine": 143,
    "toLine": 147
}
,]
}
,
{
    "metadata": {
        "cc": 4,
        "volume": 5,
        "mass": 90,
        "clones": 2,
        "snippet": "int k=tmp.length-1;\n                for(; k>= 0; k--) if(tmp[k] != 0) break;\n                k++;\n                byte[] tmp2 = new byte[k];\n                System.arraycopy( tmp, 0, tmp2, 0, k);\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java",
    "fromLine": 130,
    "toLine": 134
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java",
    "fromLine": 143,
    "toLine": 147
}
,]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 2,
        "mass": 42,
        "clones": 2,
        "snippet": "String message = \"Check DisplaySize: \" + expectedLen + \"!=\" + Integer.MAX_VALUE + \")\";\n\t\t\t\tassertTrue( message, expectedLen == Integer.MAX_VALUE );\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java",
    "fromLine": 315,
    "toLine": 316
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java",
    "fromLine": 323,
    "toLine": 324
}
,]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 2,
        "mass": 42,
        "clones": 2,
        "snippet": "String message = \"Check DisplaySize: \" + expectedLen + \"!=\" + Integer.MAX_VALUE + \")\";\n\t\t\t\tassertTrue( message, expectedLen == Integer.MAX_VALUE );\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java",
    "fromLine": 315,
    "toLine": 316
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java",
    "fromLine": 323,
    "toLine": 324
}
,]
}
,
{
    "metadata": {
        "cc": 3,
        "volume": 7,
        "mass": 309,
        "clones": 2,
        "snippet": "{\n        StringBuffer buf = new StringBuffer(bytes.length << 1);\n        for(int i=0; i<bytes.length; i++){\n            buf.append( digits[ (bytes[i] >> 4) & 0x0F ] );\n            buf.append( digits[ (bytes[i]     ) & 0x0F ] );\n        }\n        return buf.toString();\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/Utils.java",
    "fromLine": 205,
    "toLine": 211
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java",
    "fromLine": 102,
    "toLine": 108
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
        "mass": 44,
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
        "mass": 42,
        "clones": 7,
        "snippet": "if(size >= data.length ){\n\t\t\tresize(size << 1);\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/IndexDescriptions.java",
    "fromLine": 71,
    "toLine": 72
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/Columns.java",
    "fromLine": 96,
    "toLine": 97
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/LongList.java",
    "fromLine": 68,
    "toLine": 69
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/Strings.java",
    "fromLine": 64,
    "toLine": 65
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/Expressions.java",
    "fromLine": 72,
    "toLine": 73
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/ForeignKeys.java",
    "fromLine": 64,
    "toLine": 65
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/Expressions.java",
    "fromLine": 79,
    "toLine": 80
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
        "mass": 23,
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
        "mass": 23,
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
        "cc": 3,
        "volume": 8,
        "mass": 69,
        "clones": 2,
        "snippet": "if(page == null)\n                return null;\n            if(i + 1 == count)\n                return page.getValue();\n            else\n                page = (IndexNode)page.getValue();\n        }\n        throw new Error();\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/Index.java",
    "fromLine": 128,
    "toLine": 135
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/Index.java",
    "fromLine": 101,
    "toLine": 108
}
,]
}
,
{
    "metadata": {
        "cc": 3,
        "volume": 8,
        "mass": 69,
        "clones": 2,
        "snippet": "if(page == null)\n                return null;\n            if(i + 1 == count)\n                return page.getValue();\n            else\n                page = (IndexNode)page.getValue();\n        }\n        throw new Error();\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/Index.java",
    "fromLine": 128,
    "toLine": 135
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/Index.java",
    "fromLine": 101,
    "toLine": 108
}
,]
}
,
{
    "metadata": {
        "cc": 3,
        "volume": 3,
        "mass": 42,
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
        "mass": 42,
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
        "cc": 3,
        "volume": 11,
        "mass": 135,
        "clones": 2,
        "snippet": "if(failed == null){\n                    failed = new BatchUpdateException(ex.getMessage(), ex.getSQLState(), ex.getErrorCode(), result);\n                    failed.initCause(ex);\n                }\n                failed.setNextException(ex);\n            }\n        }\n        batches.clear();\n        if(failed != null)\n            throw failed;\n        return result;\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/SSStatement.java",
    "fromLine": 271,
    "toLine": 281
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/SSPreparedStatement.java",
    "fromLine": 249,
    "toLine": 259
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
        "volume": 5,
        "mass": 47,
        "clones": 2,
        "snippet": "return -1;\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\tIndexNode node = status.nodes[idx];\n\t\t\t\tnodeStack.push( new IndexNodeScrollStatus(node, status.asc, scroll, level) );\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/IndexScrollStatus.java",
    "fromLine": 111,
    "toLine": 115
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/IndexScrollStatus.java",
    "fromLine": 139,
    "toLine": 144
}
,]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 5,
        "mass": 47,
        "clones": 2,
        "snippet": "return -1;\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\tIndexNode node = status.nodes[idx];\n\t\t\t\tnodeStack.push( new IndexNodeScrollStatus(node, status.asc, scroll, level) );\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/IndexScrollStatus.java",
    "fromLine": 111,
    "toLine": 115
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/IndexScrollStatus.java",
    "fromLine": 139,
    "toLine": 144
}
,]
}
,
{
    "metadata": {
        "cc": 5,
        "volume": 10,
        "mass": 335,
        "clones": 2,
        "snippet": "if(status.nodeValue != null){\n\t\t\t\t\t\tif(status.nodeValue instanceof IndexNode){\n\t\t\t\t\t\t\tlevel++;\n\t\t\t\t\t\t\tnodeStack.push(\n\t\t\t\t\t\t\t\tnew IndexNodeScrollStatus( \t(IndexNode)status.nodeValue, \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t(expressions.get(level).getAlias() != SQLTokenizer.DESC_STR), \n\t\t\t\t\t\t\t\t\t\t\t\t\t\tscroll, level));\n\t\t\t\t\t\t\tcontinue;\n\t\t\t\t\t\t}else\n\t\t\t\t\t\t\treturn getReturnValue(status.nodeValue);\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/IndexScrollStatus.java",
    "fromLine": 120,
    "toLine": 129
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/IndexScrollStatus.java",
    "fromLine": 89,
    "toLine": 98
}
,]
}
,
{
    "metadata": {
        "cc": 5,
        "volume": 10,
        "mass": 335,
        "clones": 2,
        "snippet": "if(status.nodeValue != null){\n\t\t\t\t\t\tif(status.nodeValue instanceof IndexNode){\n\t\t\t\t\t\t\tlevel++;\n\t\t\t\t\t\t\tnodeStack.push(\n\t\t\t\t\t\t\t\tnew IndexNodeScrollStatus( \t(IndexNode)status.nodeValue, \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t(expressions.get(level).getAlias() != SQLTokenizer.DESC_STR), \n\t\t\t\t\t\t\t\t\t\t\t\t\t\tscroll, level));\n\t\t\t\t\t\t\tcontinue;\n\t\t\t\t\t\t}else\n\t\t\t\t\t\t\treturn getReturnValue(status.nodeValue);\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/IndexScrollStatus.java",
    "fromLine": 120,
    "toLine": 129
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/IndexScrollStatus.java",
    "fromLine": 89,
    "toLine": 98
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
        "cloneClassesType1": 3
    },
    "results": {
        "type-1": [
            
{
    "metadata": {
        "cc": 2,
        "volume": 4,
        "mass": 109,
        "clones": 2,
        "snippet": "for(int i=0; i<length; i++){\n            result = (result << 8) | (bytes[i] & 0xFF);\n        }\n        return result;\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/Utils.java",
    "fromLine": 163,
    "toLine": 166
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/Utils.java",
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
        "mass": 109,
        "clones": 2,
        "snippet": "for(int i=0; i<length; i++){\n            result = (result << 8) | (bytes[i] & 0xFF);\n        }\n        return result;\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/Utils.java",
    "fromLine": 163,
    "toLine": 166
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/Utils.java",
    "fromLine": 154,
    "toLine": 157
}
,]
}
,
{
    "metadata": {
        "cc": 3,
        "volume": 7,
        "mass": 309,
        "clones": 2,
        "snippet": "{\n        StringBuffer buf = new StringBuffer(bytes.length << 1);\n        for(int i=0; i<bytes.length; i++){\n            buf.append( digits[ (bytes[i] >> 4) & 0x0F ] );\n            buf.append( digits[ (bytes[i]     ) & 0x0F ] );\n        }\n        return buf.toString();\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/Utils.java",
    "fromLine": 205,
    "toLine": 211
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java",
    "fromLine": 102,
    "toLine": 108
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
        "cc": 2,
        "volume": 2,
        "mass": 36,
        "clones": 6,
        "snippet": "if(param1.isNull()) return 0;\n\t\tDateTime.Details details = new DateTime.Details(param1.getLong());\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionMonth.java",
    "fromLine": 49,
    "toLine": 50
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionHour.java",
    "fromLine": 49,
    "toLine": 50
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionDayOfYear.java",
    "fromLine": 49,
    "toLine": 50
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionMinute.java",
    "fromLine": 49,
    "toLine": 50
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionDayOfMonth.java",
    "fromLine": 49,
    "toLine": 50
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionYear.java",
    "fromLine": 49,
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
        "mass": 21,
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
        "mass": 21,
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
        "mass": 22,
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
        "mass": 22,
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
        "cc": 2,
        "volume": 11,
        "mass": 173,
        "clones": 2,
        "snippet": "\t\t\t\tresult |= (((long)nextEntry) << shift);\n\t\t\t\tif(listEnum.stack>=3){\n\t\t\t\t\tlistEnum.offsetStack[listEnum.stack] = offset;\n\t\t\t\t\treturn result;\n\t\t\t\t}\n\t\t\t\tlistEnum.offsetStack[listEnum.stack] = offset+pointerSize;\n\t\t\t\toffset = getPointer();\n\t\t\t\tshift -= 16;\n\t\t\t\tlistEnum.stack++;\n\t\t\t\tlistEnum.resultStack[listEnum.stack] = result;\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/LongTreeList.java",
    "fromLine": 331,
    "toLine": 341
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/LongTreeList.java",
    "fromLine": 376,
    "toLine": 386
}
,]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 11,
        "mass": 173,
        "clones": 2,
        "snippet": "\t\t\t\tresult |= (((long)nextEntry) << shift);\n\t\t\t\tif(listEnum.stack>=3){\n\t\t\t\t\tlistEnum.offsetStack[listEnum.stack] = offset;\n\t\t\t\t\treturn result;\n\t\t\t\t}\n\t\t\t\tlistEnum.offsetStack[listEnum.stack] = offset+pointerSize;\n\t\t\t\toffset = getPointer();\n\t\t\t\tshift -= 16;\n\t\t\t\tlistEnum.stack++;\n\t\t\t\tlistEnum.resultStack[listEnum.stack] = result;\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/LongTreeList.java",
    "fromLine": 331,
    "toLine": 341
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/LongTreeList.java",
    "fromLine": 376,
    "toLine": 386
}
,]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 11,
        "mass": 173,
        "clones": 2,
        "snippet": "\t\t\t\tresult |= (((long)nextEntry) << shift);\n\t\t\t\tif(listEnum.stack>=3){\n\t\t\t\t\tlistEnum.offsetStack[listEnum.stack] = offset;\n\t\t\t\t\treturn result;\n\t\t\t\t}\n\t\t\t\tlistEnum.offsetStack[listEnum.stack] = offset+pointerSize;\n\t\t\t\toffset = getPointer();\n\t\t\t\tshift -= 16;\n\t\t\t\tlistEnum.stack++;\n\t\t\t\tlistEnum.resultStack[listEnum.stack] = result;\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/LongTreeList.java",
    "fromLine": 376,
    "toLine": 386
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/LongTreeList.java",
    "fromLine": 331,
    "toLine": 341
}
,]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 11,
        "mass": 173,
        "clones": 2,
        "snippet": "\t\t\t\tresult |= (((long)nextEntry) << shift);\n\t\t\t\tif(listEnum.stack>=3){\n\t\t\t\t\tlistEnum.offsetStack[listEnum.stack] = offset;\n\t\t\t\t\treturn result;\n\t\t\t\t}\n\t\t\t\tlistEnum.offsetStack[listEnum.stack] = offset+pointerSize;\n\t\t\t\toffset = getPointer();\n\t\t\t\tshift -= 16;\n\t\t\t\tlistEnum.stack++;\n\t\t\t\tlistEnum.resultStack[listEnum.stack] = result;\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/LongTreeList.java",
    "fromLine": 376,
    "toLine": 386
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/LongTreeList.java",
    "fromLine": 331,
    "toLine": 341
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
        "cc": 10,
        "volume": 12,
        "mass": 258,
        "clones": 2,
        "snippet": "return null;\n\t\t\t\t\t\t}\n\t\t\t\t\t\tif(serializeConnections.size() > 0){\n\t\t\t\t\t\t\tIterator values = locks.values().iterator();\n\t\t\t\t\t\t\twhile(values.hasNext()){\n\t\t\t\t\t\t\t\tTableStorePage lock = (TableStorePage)values.next();\n\t\t\t\t\t\t\t\tif(lock.con != con) return null;\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t\ttabLockConnection = con;\n\t\t\t\t\t\ttabLockCount++;\n\t\t\t\t\t\tTableStorePage lock = new TableStorePage(con, this, LOCK_TAB, page);\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/Table.java",
    "fromLine": 368,
    "toLine": 379
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/Table.java",
    "fromLine": 386,
    "toLine": 397
}
,]
}
,
{
    "metadata": {
        "cc": 10,
        "volume": 12,
        "mass": 258,
        "clones": 2,
        "snippet": "return null;\n\t\t\t\t\t\t}\n\t\t\t\t\t\tif(serializeConnections.size() > 0){\n\t\t\t\t\t\t\tIterator values = locks.values().iterator();\n\t\t\t\t\t\t\twhile(values.hasNext()){\n\t\t\t\t\t\t\t\tTableStorePage lock = (TableStorePage)values.next();\n\t\t\t\t\t\t\t\tif(lock.con != con) return null;\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t\ttabLockConnection = con;\n\t\t\t\t\t\ttabLockCount++;\n\t\t\t\t\t\tTableStorePage lock = new TableStorePage(con, this, LOCK_TAB, page);\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/Table.java",
    "fromLine": 368,
    "toLine": 379
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/Table.java",
    "fromLine": 386,
    "toLine": 397
}
,]
}
,
{
    "metadata": {
        "cc": 7,
        "volume": 5,
        "mass": 164,
        "clones": 3,
        "snippet": "{\n\t\t\t\t\t\t\tIterator values = locks.values().iterator();\n\t\t\t\t\t\t\twhile(values.hasNext()){\n\t\t\t\t\t\t\t\tTableStorePage lock = (TableStorePage)values.next();\n\t\t\t\t\t\t\t\tif(lock.con != con) return null;\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/Table.java",
    "fromLine": 358,
    "toLine": 362
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/Table.java",
    "fromLine": 388,
    "toLine": 392
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/Table.java",
    "fromLine": 370,
    "toLine": 374
}
,]
}
,
{
    "metadata": {
        "cc": 7,
        "volume": 5,
        "mass": 164,
        "clones": 3,
        "snippet": "{\n\t\t\t\t\t\t\tIterator values = locks.values().iterator();\n\t\t\t\t\t\t\twhile(values.hasNext()){\n\t\t\t\t\t\t\t\tTableStorePage lock = (TableStorePage)values.next();\n\t\t\t\t\t\t\t\tif(lock.con != con) return null;\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/Table.java",
    "fromLine": 358,
    "toLine": 362
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/Table.java",
    "fromLine": 388,
    "toLine": 392
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/Table.java",
    "fromLine": 370,
    "toLine": 374
}
,]
}
,
{
    "metadata": {
        "cc": 7,
        "volume": 5,
        "mass": 164,
        "clones": 3,
        "snippet": "{\n\t\t\t\t\t\t\tIterator values = locks.values().iterator();\n\t\t\t\t\t\t\twhile(values.hasNext()){\n\t\t\t\t\t\t\t\tTableStorePage lock = (TableStorePage)values.next();\n\t\t\t\t\t\t\t\tif(lock.con != con) return null;\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/Table.java",
    "fromLine": 358,
    "toLine": 362
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/Table.java",
    "fromLine": 388,
    "toLine": 392
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/Table.java",
    "fromLine": 370,
    "toLine": 374
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
        "mass": 44,
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
        "mass": 44,
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
        "cc": 3,
        "volume": 5,
        "mass": 91,
        "clones": 4,
        "snippet": "try{\n            rs.getString(\"v\");\n            fail(\"SQLException 'No current row' should be throw\");\n        }catch(SQLException ex){\n            assertSQLException( \"01000\", 0, ex );\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestScrollable.java",
    "fromLine": 67,
    "toLine": 71
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestScrollable.java",
    "fromLine": 99,
    "toLine": 103
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestScrollable.java",
    "fromLine": 173,
    "toLine": 177
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestScrollable.java",
    "fromLine": 135,
    "toLine": 139
}
,]
}
,
{
    "metadata": {
        "cc": 3,
        "volume": 5,
        "mass": 91,
        "clones": 4,
        "snippet": "try{\n            rs.getString(\"v\");\n            fail(\"SQLException 'No current row' should be throw\");\n        }catch(SQLException ex){\n            assertSQLException( \"01000\", 0, ex );\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestScrollable.java",
    "fromLine": 67,
    "toLine": 71
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestScrollable.java",
    "fromLine": 99,
    "toLine": 103
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestScrollable.java",
    "fromLine": 173,
    "toLine": 177
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestScrollable.java",
    "fromLine": 135,
    "toLine": 139
}
,]
}
,
{
    "metadata": {
        "cc": 3,
        "volume": 5,
        "mass": 91,
        "clones": 4,
        "snippet": "try{\n            rs.getString(\"v\");\n            fail(\"SQLException 'No current row' should be throw\");\n        }catch(SQLException ex){\n            assertSQLException( \"01000\", 0, ex );\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestScrollable.java",
    "fromLine": 67,
    "toLine": 71
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestScrollable.java",
    "fromLine": 99,
    "toLine": 103
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestScrollable.java",
    "fromLine": 173,
    "toLine": 177
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestScrollable.java",
    "fromLine": 135,
    "toLine": 139
}
,]
}
,
{
    "metadata": {
        "cc": 3,
        "volume": 5,
        "mass": 91,
        "clones": 4,
        "snippet": "try{\n            rs.getString(\"v\");\n            fail(\"SQLException 'No current row' should be throw\");\n        }catch(SQLException ex){\n            assertSQLException( \"01000\", 0, ex );\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestScrollable.java",
    "fromLine": 67,
    "toLine": 71
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestScrollable.java",
    "fromLine": 99,
    "toLine": 103
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestScrollable.java",
    "fromLine": 173,
    "toLine": 177
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/junit/TestScrollable.java",
    "fromLine": 135,
    "toLine": 139
}
,]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 1,
        "mass": 24,
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
        "mass": 24,
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
        "mass": 24,
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
        "mass": 24,
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
        "mass": 24,
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
        "mass": 24,
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
        "volume": 6,
        "mass": 57,
        "clones": 2,
        "snippet": "if(places > 0){\n\t\t\tvalue \/= factor;\n\t\t}else{\n\t\t}\n\t\treturn value;\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionRound.java",
    "fromLine": 62,
    "toLine": 67
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionTruncate.java",
    "fromLine": 62,
    "toLine": 67
}
,]
}
,
{
    "metadata": {
        "cc": 9,
        "volume": 14,
        "mass": 281,
        "clones": 2,
        "snippet": "if(isNull()) return 0;\n\t\tfinal int places = param2.getInt();\n\t\tdouble value = param1.getDouble();\n\t\tlong factor = 1;\n\t\tif(places > 0){\n\t\t\tfor(int i=0; i<places; i++){\n\t\t\t}\n\t\t}else{\n\t\t\tfor(int i=0; i>places; i--){\n\t\t\t}\n\t\t\tvalue \/= factor;\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionRound.java",
    "fromLine": 46,
    "toLine": 59
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionTruncate.java",
    "fromLine": 46,
    "toLine": 59
}
,]
}
,
{
    "metadata": {
        "cc": 9,
        "volume": 14,
        "mass": 281,
        "clones": 2,
        "snippet": "if(isNull()) return 0;\n\t\tfinal int places = param2.getInt();\n\t\tdouble value = param1.getDouble();\n\t\tlong factor = 1;\n\t\tif(places > 0){\n\t\t\tfor(int i=0; i<places; i++){\n\t\t\t}\n\t\t}else{\n\t\t\tfor(int i=0; i>places; i--){\n\t\t\t}\n\t\t\tvalue \/= factor;\n"
    },
    "edges": [
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionRound.java",
    "fromLine": 46,
    "toLine": 59
}
,
{
	"loc": "project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionTruncate.java",
    "fromLine": 46,
    "toLine": 59
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
        "mass": 44,
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