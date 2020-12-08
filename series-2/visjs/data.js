var results = {
		
	"project-name": "|project://smallsql0.21_src|",
	"metadata": {
        "cloneClassesType1": 41
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
    "edges": ["project://smallsql0.21_src/src/smallsql/junit/TestOperatoren.java","project://smallsql0.21_src/src/smallsql/junit/TestDataTypes.java","project://smallsql0.21_src/src/smallsql/junit/TestMoneyRounding.java","project://smallsql0.21_src/src/smallsql/junit/TestFunctions.java",]
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
        "cloneClassesType1": 1
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
    "edges": ["project://smallsql0.21_src/src/smallsql/database/IndexDescriptions.java","project://smallsql0.21_src/src/smallsql/database/Columns.java","project://smallsql0.21_src/src/smallsql/database/ForeignKeys.java","project://smallsql0.21_src/src/smallsql/database/Strings.java",]
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
        "cloneClassesType1": 1
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
    "edges": ["project://smallsql0.21_src/src/smallsql/database/IndexDescriptions.java","project://smallsql0.21_src/src/smallsql/database/Columns.java","project://smallsql0.21_src/src/smallsql/database/ForeignKeys.java","project://smallsql0.21_src/src/smallsql/database/Strings.java",]
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
        "volume": 5,
        "mass": 24,
        "clones": 2,
        "snippet": "{\n\t\t\t\t\tbyte[] buffer = new byte[length];\n\t\t\t\t\tSystem.arraycopy(bytes, 0, buffer, 0, Math.min(bytes.length,length) );\n\t\t\t\t\treturn buffer;\n\t\t\t\t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionConvert.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionConvert.java",]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 5,
        "mass": 24,
        "clones": 2,
        "snippet": "{\n\t\t\t\t\tbyte[] buffer = new byte[length];\n\t\t\t\t\tSystem.arraycopy(bytes, 0, buffer, 0, Math.min(bytes.length,length) );\n\t\t\t\t\treturn buffer;\n\t\t\t\t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionConvert.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionConvert.java",]
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
    "edges": ["project://smallsql0.21_src/src/smallsql/junit/TestOperatoren.java","project://smallsql0.21_src/src/smallsql/junit/TestDataTypes.java","project://smallsql0.21_src/src/smallsql/junit/TestMoneyRounding.java","project://smallsql0.21_src/src/smallsql/junit/TestFunctions.java",]
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
        "cc": 4,
        "volume": 11,
        "mass": 46,
        "clones": 2,
        "snippet": "if(places > 0){\n\t\t\tfor(int i=0; i<places; i++){\n\t\t\t}\n\t\t}else{\n\t\t\tfor(int i=0; i>places; i--){\n\t\t\t}\n\t\t\tvalue \/= factor;\n\t\t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionRound.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionTruncate.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 6,
        "mass": 21,
        "clones": 2,
        "snippet": "{\n\t\t\tfor(int i=0; i>places; i--){\n\t\t\t}\n\t\t\tvalue \/= factor;\n\t\t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionRound.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionTruncate.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 6,
        "mass": 21,
        "clones": 2,
        "snippet": "{\n\t\t\tfor(int i=0; i<places; i++){\n\t\t\t}\n\t\t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionRound.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionTruncate.java",]
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
        "cloneClassesType1": 1
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
    "edges": ["project://smallsql0.21_src/src/smallsql/database/IndexDescriptions.java","project://smallsql0.21_src/src/smallsql/database/Columns.java","project://smallsql0.21_src/src/smallsql/database/ForeignKeys.java","project://smallsql0.21_src/src/smallsql/database/Strings.java",]
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
        "cloneClassesType1": 1
    },
    "results": {
        "type-1": [
            
{
    "metadata": {
        "cc": 2,
        "volume": 5,
        "mass": 20,
        "clones": 3,
        "snippet": "{\n\t\tif (idx >= size)\n\t\t\tthrow new IndexOutOfBoundsException(\"Index: \"+idx+\", Size: \"+size);\n\t\treturn data[idx];\n\t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/LongList.java","project://smallsql0.21_src/src/smallsql/database/DataSources.java","project://smallsql0.21_src/src/smallsql/database/Expressions.java",]
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
    "edges": ["project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java",]
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
    "edges": ["project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java",]
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
        "cloneClassesType1": 8
    },
    "results": {
        "type-1": [
            
{
    "metadata": {
        "cc": 4,
        "volume": 8,
        "mass": 35,
        "clones": 2,
        "snippet": "while(oldValue != null && rs.next()){\n\t\t\tString newValue = rs.getString(\"v\");\n\t\t\tif(newValue != null){\n\t\t\t\tassertTrue( oldValue.compareTo( newValue ) > 0 );\n\t\t\t\tcount++;\n\t\t\t}\n\t\t\toldValue = newValue;\n\t\t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/junit/TestOrderBy.java","project://smallsql0.21_src/src/smallsql/junit/TestOrderBy.java",]
}
,
{
    "metadata": {
        "cc": 4,
        "volume": 8,
        "mass": 35,
        "clones": 2,
        "snippet": "while(oldValue != null && rs.next()){\n\t\t\tString newValue = rs.getString(\"v\");\n\t\t\tif(newValue != null){\n\t\t\t\tassertTrue( oldValue.compareTo( newValue ) > 0 );\n\t\t\t\tcount++;\n\t\t\t}\n\t\t\toldValue = newValue;\n\t\t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/junit/TestOrderBy.java","project://smallsql0.21_src/src/smallsql/junit/TestOrderBy.java",]
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
    "edges": ["project://smallsql0.21_src/src/smallsql/junit/TestOrderBy.java","project://smallsql0.21_src/src/smallsql/junit/TestOrderBy.java",]
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
    "edges": ["project://smallsql0.21_src/src/smallsql/junit/TestOrderBy.java","project://smallsql0.21_src/src/smallsql/junit/TestOrderBy.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 6,
        "mass": 26,
        "clones": 2,
        "snippet": "while(rs.next()){\n\t\t\tString newValue = rs.getString(\"v\");\n\t\t\tassertTrue( oldValue.compareTo( newValue ) < 0 );\n\t\t\toldValue = newValue;\n\t\t\tcount++;\n\t\t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/junit/TestOrderBy.java","project://smallsql0.21_src/src/smallsql/junit/TestOrderBy.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 6,
        "mass": 26,
        "clones": 2,
        "snippet": "while(rs.next()){\n\t\t\tString newValue = rs.getString(\"v\");\n\t\t\tassertTrue( oldValue.compareTo( newValue ) < 0 );\n\t\t\toldValue = newValue;\n\t\t\tcount++;\n\t\t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/junit/TestOrderBy.java","project://smallsql0.21_src/src/smallsql/junit/TestOrderBy.java",]
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
    "edges": ["project://smallsql0.21_src/src/smallsql/junit/TestOrderBy.java","project://smallsql0.21_src/src/smallsql/junit/TestOrderBy.java",]
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
    "edges": ["project://smallsql0.21_src/src/smallsql/junit/TestOrderBy.java","project://smallsql0.21_src/src/smallsql/junit/TestOrderBy.java",]
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
    "edges": ["project://smallsql0.21_src/src/smallsql/database/SSStatement.java","project://smallsql0.21_src/src/smallsql/database/SSPreparedStatement.java",]
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
        "cloneClassesType1": 4
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
    "edges": ["project://smallsql0.21_src/src/smallsql/database/SQLParser.java","project://smallsql0.21_src/src/smallsql/database/SQLParser.java",]
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
    "edges": ["project://smallsql0.21_src/src/smallsql/database/SQLParser.java","project://smallsql0.21_src/src/smallsql/database/SQLParser.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 6,
        "mass": 29,
        "clones": 2,
        "snippet": "try{\n            int maxRows = Integer.parseInt(token.getName(sql));\n            selCmd.setMaxRows(maxRows);\n        }catch(NumberFormatException e){\n            throw createSyntaxError(token, Language.STXADD_NOT_NUMBER, token.getName(sql));\n        }\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/SQLParser.java","project://smallsql0.21_src/src/smallsql/database/SQLParser.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 6,
        "mass": 29,
        "clones": 2,
        "snippet": "try{\n            int maxRows = Integer.parseInt(token.getName(sql));\n            selCmd.setMaxRows(maxRows);\n        }catch(NumberFormatException e){\n            throw createSyntaxError(token, Language.STXADD_NOT_NUMBER, token.getName(sql));\n        }\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/SQLParser.java","project://smallsql0.21_src/src/smallsql/database/SQLParser.java",]
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
        "cloneClassesType1": 4
    },
    "results": {
        "type-1": [
            
{
    "metadata": {
        "cc": 2,
        "volume": 3,
        "mass": 24,
        "clones": 2,
        "snippet": "if (count != rowCount)\n                 System.out.println( \"  Failed: Only \" + count + \" rows were inserted.\");\n            else System.out.println( \"  Test time: \" + time + \" ms\");\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",]
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
    "edges": ["project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",]
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
    "edges": ["project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",]
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
    "edges": ["project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",]
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
    "edges": ["project://smallsql0.21_src/src/smallsql/junit/TestOperatoren.java","project://smallsql0.21_src/src/smallsql/junit/TestDataTypes.java","project://smallsql0.21_src/src/smallsql/junit/TestMoneyRounding.java","project://smallsql0.21_src/src/smallsql/junit/TestFunctions.java",]
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
        "mass": 20,
        "clones": 3,
        "snippet": "final String getString() throws Exception{\n        Object obj = getObject();\n        if(obj == null) return null;\n        return obj.toString();\n    }\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionReturnFloat.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionAbs.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionFloor.java",]
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
        "cloneClassesType1": 8
    },
    "results": {
        "type-1": [
            
{
    "metadata": {
        "cc": 1,
        "volume": 1,
        "mass": 20,
        "clones": 4,
        "snippet": "String[] colNames = {\"PROCEDURE_CAT\", \"PROCEDURE_SCHEM\", \"PROCEDURE_NAME\", \"COLUMN_NAME\", \"COLUMN_TYPE\", \"DATA_TYPE\", \"TYPE_NAME\", \"PRECISION\", \"LENGTH\", \"SCALE\", \"RADIX\", \"NULLABLE\", \"REMARKS\" };\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/junit/TestDBMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/junit/TestDBMetaData.java",]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 1,
        "mass": 20,
        "clones": 4,
        "snippet": "String[] colNames = {\"PROCEDURE_CAT\", \"PROCEDURE_SCHEM\", \"PROCEDURE_NAME\", \"COLUMN_NAME\", \"COLUMN_TYPE\", \"DATA_TYPE\", \"TYPE_NAME\", \"PRECISION\", \"LENGTH\", \"SCALE\", \"RADIX\", \"NULLABLE\", \"REMARKS\" };\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/junit/TestDBMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/junit/TestDBMetaData.java",]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 1,
        "mass": 25,
        "clones": 4,
        "snippet": "String[] colNames = {\"TYPE_NAME\", \"DATA_TYPE\", \"PRECISION\", \"LITERAL_PREFIX\", \"LITERAL_SUFFIX\", \"CREATE_PARAMS\", \"NULLABLE\", \"CASE_SENSITIVE\", \"SEARCHABLE\", \"UNSIGNED_ATTRIBUTE\", \"FIXED_PREC_SCALE\", \"AUTO_INCREMENT\", \"LOCAL_TYPE_NAME\", \"MINIMUM_SCALE\", \"MAXIMUM_SCALE\", \"SQL_DATA_TYPE\", \"SQL_DATETIME_SUB\", \"NUM_PREC_RADIX\"};\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/junit/TestDBMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/junit/TestDBMetaData.java",]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 1,
        "mass": 25,
        "clones": 4,
        "snippet": "String[] colNames = {\"TYPE_NAME\", \"DATA_TYPE\", \"PRECISION\", \"LITERAL_PREFIX\", \"LITERAL_SUFFIX\", \"CREATE_PARAMS\", \"NULLABLE\", \"CASE_SENSITIVE\", \"SEARCHABLE\", \"UNSIGNED_ATTRIBUTE\", \"FIXED_PREC_SCALE\", \"AUTO_INCREMENT\", \"LOCAL_TYPE_NAME\", \"MINIMUM_SCALE\", \"MAXIMUM_SCALE\", \"SQL_DATA_TYPE\", \"SQL_DATETIME_SUB\", \"NUM_PREC_RADIX\"};\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/junit/TestDBMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/junit/TestDBMetaData.java",]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 1,
        "mass": 21,
        "clones": 4,
        "snippet": "String[] colNames = {\"PKTABLE_CAT\", \"PKTABLE_SCHEM\", \"PKTABLE_NAME\", \"PKCOLUMN_NAME\", \"FKTABLE_CAT\", \"FKTABLE_SCHEM\", \"FKTABLE_NAME\", \"FKCOLUMN_NAME\", \"KEY_SEQ\", \"UPDATE_RULE\", \"DELETE_RULE\", \"FK_NAME\", \"PK_NAME\", \"DEFERRABILITY\"};\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/junit/TestDBMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/junit/TestDBMetaData.java",]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 1,
        "mass": 21,
        "clones": 4,
        "snippet": "String[] colNames = {\"PKTABLE_CAT\", \"PKTABLE_SCHEM\", \"PKTABLE_NAME\", \"PKCOLUMN_NAME\", \"FKTABLE_CAT\", \"FKTABLE_SCHEM\", \"FKTABLE_NAME\", \"FKCOLUMN_NAME\", \"KEY_SEQ\", \"UPDATE_RULE\", \"DELETE_RULE\", \"FK_NAME\", \"PK_NAME\", \"DEFERRABILITY\"};\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/junit/TestDBMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/junit/TestDBMetaData.java",]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 1,
        "mass": 25,
        "clones": 4,
        "snippet": "String[] colNames = {\"TABLE_CAT\", \"TABLE_SCHEM\", \"TABLE_NAME\", \"COLUMN_NAME\", \"DATA_TYPE\", \"TYPE_NAME\", \"COLUMN_SIZE\", \"BUFFER_LENGTH\", \"DECIMAL_DIGITS\", \"NUM_PREC_RADIX\", \"NULLABLE\", \"REMARKS\", \"COLUMN_DEF\", \"SQL_DATA_TYPE\", \"SQL_DATETIME_SUB\", \"CHAR_OCTET_LENGTH\", \"ORDINAL_POSITION\", \"IS_NULLABLE\"};\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/junit/TestDBMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/junit/TestDBMetaData.java",]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 1,
        "mass": 25,
        "clones": 4,
        "snippet": "String[] colNames = {\"TABLE_CAT\", \"TABLE_SCHEM\", \"TABLE_NAME\", \"COLUMN_NAME\", \"DATA_TYPE\", \"TYPE_NAME\", \"COLUMN_SIZE\", \"BUFFER_LENGTH\", \"DECIMAL_DIGITS\", \"NUM_PREC_RADIX\", \"NULLABLE\", \"REMARKS\", \"COLUMN_DEF\", \"SQL_DATA_TYPE\", \"SQL_DATETIME_SUB\", \"CHAR_OCTET_LENGTH\", \"ORDINAL_POSITION\", \"IS_NULLABLE\"};\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/junit/TestDBMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/junit/TestDBMetaData.java",]
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
        "cloneClassesType1": 1
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
    "edges": ["project://smallsql0.21_src/src/smallsql/database/IndexDescriptions.java","project://smallsql0.21_src/src/smallsql/database/Columns.java","project://smallsql0.21_src/src/smallsql/database/ForeignKeys.java","project://smallsql0.21_src/src/smallsql/database/Strings.java",]
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
    "edges": ["project://smallsql0.21_src/src/smallsql/database/TableView.java","project://smallsql0.21_src/src/smallsql/database/IndexDescription.java",]
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
    "edges": ["project://smallsql0.21_src/src/smallsql/database/MutableNumeric.java","project://smallsql0.21_src/src/smallsql/database/MutableNumeric.java","project://smallsql0.21_src/src/smallsql/database/MutableNumeric.java","project://smallsql0.21_src/src/smallsql/database/MutableNumeric.java",]
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
    "edges": ["project://smallsql0.21_src/src/smallsql/database/MutableNumeric.java","project://smallsql0.21_src/src/smallsql/database/MutableNumeric.java","project://smallsql0.21_src/src/smallsql/database/MutableNumeric.java","project://smallsql0.21_src/src/smallsql/database/MutableNumeric.java",]
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
    "edges": ["project://smallsql0.21_src/src/smallsql/database/MutableNumeric.java","project://smallsql0.21_src/src/smallsql/database/MutableNumeric.java","project://smallsql0.21_src/src/smallsql/database/MutableNumeric.java","project://smallsql0.21_src/src/smallsql/database/MutableNumeric.java",]
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
    "edges": ["project://smallsql0.21_src/src/smallsql/database/MutableNumeric.java","project://smallsql0.21_src/src/smallsql/database/MutableNumeric.java","project://smallsql0.21_src/src/smallsql/database/MutableNumeric.java","project://smallsql0.21_src/src/smallsql/database/MutableNumeric.java",]
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
    "edges": ["project://smallsql0.21_src/src/smallsql/database/MutableNumeric.java","project://smallsql0.21_src/src/smallsql/database/MutableNumeric.java",]
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
    "edges": ["project://smallsql0.21_src/src/smallsql/database/MutableNumeric.java","project://smallsql0.21_src/src/smallsql/database/MutableNumeric.java",]
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
        "cloneClassesType1": 2
    },
    "results": {
        "type-1": [
            
{
    "metadata": {
        "cc": 3,
        "volume": 4,
        "mass": 23,
        "clones": 2,
        "snippet": "for (Iterator itr = diff.iterator(); itr.hasNext(); ) {\n                    msgBuf.append(itr.next());\n                    if (itr.hasNext()) msgBuf.append(',');\n                }\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java",]
}
,
{
    "metadata": {
        "cc": 3,
        "volume": 4,
        "mass": 23,
        "clones": 2,
        "snippet": "for (Iterator itr = diff.iterator(); itr.hasNext(); ) {\n                    msgBuf.append(itr.next());\n                    if (itr.hasNext()) msgBuf.append(',');\n                }\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java",]
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
    "edges": ["project://smallsql0.21_src/src/smallsql/database/GroupResult.java","project://smallsql0.21_src/src/smallsql/database/GroupResult.java",]
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
    "edges": ["project://smallsql0.21_src/src/smallsql/database/GroupResult.java","project://smallsql0.21_src/src/smallsql/database/GroupResult.java",]
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
        "cloneClassesType1": 6
    },
    "results": {
        "type-1": [
            
{
    "metadata": {
        "cc": 2,
        "volume": 6,
        "mass": 20,
        "clones": 6,
        "snippet": "{\n\t\t\ttry{\n\t\t\t\tcon.createStatement().execute(\"Drop Table transactions\");\n\t\t\t}catch(Throwable e){e.printStackTrace();}\n\t\t\tcon.setAutoCommit(true);\n\t\t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java",]
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
    "edges": ["project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java",]
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
    "edges": ["project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java",]
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
    "edges": ["project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java",]
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
    "edges": ["project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java",]
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
    "edges": ["project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java",]
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
        "mass": 20,
        "clones": 3,
        "snippet": "final String getString() throws Exception{\n        Object obj = getObject();\n        if(obj == null) return null;\n        return obj.toString();\n    }\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionReturnFloat.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionAbs.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionFloor.java",]
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
        "mass": 20,
        "clones": 3,
        "snippet": "final String getString() throws Exception{\n        Object obj = getObject();\n        if(obj == null) return null;\n        return obj.toString();\n    }\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionReturnFloat.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionAbs.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionFloor.java",]
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
        "cc": 2,
        "volume": 5,
        "mass": 28,
        "clones": 3,
        "snippet": "        for(int i = 0; i < threadList.size(); i++){\n            Thread thread = (Thread)threadList.get(i);\n            thread.join(5000);\n        }\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/junit/TestThreads.java","project://smallsql0.21_src/src/smallsql/junit/TestThreads.java","project://smallsql0.21_src/src/smallsql/junit/TestThreads.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 5,
        "mass": 28,
        "clones": 3,
        "snippet": "        for(int i = 0; i < threadList.size(); i++){\n            Thread thread = (Thread)threadList.get(i);\n            thread.join(5000);\n        }\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/junit/TestThreads.java","project://smallsql0.21_src/src/smallsql/junit/TestThreads.java","project://smallsql0.21_src/src/smallsql/junit/TestThreads.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 5,
        "mass": 28,
        "clones": 3,
        "snippet": "        for(int i = 0; i < threadList.size(); i++){\n            Thread thread = (Thread)threadList.get(i);\n            thread.join(5000);\n        }\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/junit/TestThreads.java","project://smallsql0.21_src/src/smallsql/junit/TestThreads.java","project://smallsql0.21_src/src/smallsql/junit/TestThreads.java",]
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
        "volume": 7,
        "mass": 41,
        "clones": 2,
        "snippet": "private static TestValue a(String dataType, Object small, Object large){\n        TestValue value = new TestValue();\n        value.dataType  = dataType;\n        value.small     = small;\n        value.large     = large;\n        return value;\n    }\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/junit/TestJoins.java","project://smallsql0.21_src/src/smallsql/junit/TestOperatoren.java",]
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
        "mass": 20,
        "clones": 4,
        "snippet": "String[] colNames = {\"PROCEDURE_CAT\", \"PROCEDURE_SCHEM\", \"PROCEDURE_NAME\", \"COLUMN_NAME\", \"COLUMN_TYPE\", \"DATA_TYPE\", \"TYPE_NAME\", \"PRECISION\", \"LENGTH\", \"SCALE\", \"RADIX\", \"NULLABLE\", \"REMARKS\" };\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/junit/TestDBMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/junit/TestDBMetaData.java",]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 1,
        "mass": 20,
        "clones": 4,
        "snippet": "String[] colNames = {\"PROCEDURE_CAT\", \"PROCEDURE_SCHEM\", \"PROCEDURE_NAME\", \"COLUMN_NAME\", \"COLUMN_TYPE\", \"DATA_TYPE\", \"TYPE_NAME\", \"PRECISION\", \"LENGTH\", \"SCALE\", \"RADIX\", \"NULLABLE\", \"REMARKS\" };\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/junit/TestDBMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/junit/TestDBMetaData.java",]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 1,
        "mass": 25,
        "clones": 4,
        "snippet": "String[] colNames = {\"TYPE_NAME\", \"DATA_TYPE\", \"PRECISION\", \"LITERAL_PREFIX\", \"LITERAL_SUFFIX\", \"CREATE_PARAMS\", \"NULLABLE\", \"CASE_SENSITIVE\", \"SEARCHABLE\", \"UNSIGNED_ATTRIBUTE\", \"FIXED_PREC_SCALE\", \"AUTO_INCREMENT\", \"LOCAL_TYPE_NAME\", \"MINIMUM_SCALE\", \"MAXIMUM_SCALE\", \"SQL_DATA_TYPE\", \"SQL_DATETIME_SUB\", \"NUM_PREC_RADIX\"};\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/junit/TestDBMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/junit/TestDBMetaData.java",]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 1,
        "mass": 25,
        "clones": 4,
        "snippet": "String[] colNames = {\"TYPE_NAME\", \"DATA_TYPE\", \"PRECISION\", \"LITERAL_PREFIX\", \"LITERAL_SUFFIX\", \"CREATE_PARAMS\", \"NULLABLE\", \"CASE_SENSITIVE\", \"SEARCHABLE\", \"UNSIGNED_ATTRIBUTE\", \"FIXED_PREC_SCALE\", \"AUTO_INCREMENT\", \"LOCAL_TYPE_NAME\", \"MINIMUM_SCALE\", \"MAXIMUM_SCALE\", \"SQL_DATA_TYPE\", \"SQL_DATETIME_SUB\", \"NUM_PREC_RADIX\"};\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/junit/TestDBMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/junit/TestDBMetaData.java",]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 1,
        "mass": 21,
        "clones": 4,
        "snippet": "String[] colNames = {\"PKTABLE_CAT\", \"PKTABLE_SCHEM\", \"PKTABLE_NAME\", \"PKCOLUMN_NAME\", \"FKTABLE_CAT\", \"FKTABLE_SCHEM\", \"FKTABLE_NAME\", \"FKCOLUMN_NAME\", \"KEY_SEQ\", \"UPDATE_RULE\", \"DELETE_RULE\", \"FK_NAME\", \"PK_NAME\", \"DEFERRABILITY\"};\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/junit/TestDBMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/junit/TestDBMetaData.java",]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 1,
        "mass": 21,
        "clones": 4,
        "snippet": "String[] colNames = {\"PKTABLE_CAT\", \"PKTABLE_SCHEM\", \"PKTABLE_NAME\", \"PKCOLUMN_NAME\", \"FKTABLE_CAT\", \"FKTABLE_SCHEM\", \"FKTABLE_NAME\", \"FKCOLUMN_NAME\", \"KEY_SEQ\", \"UPDATE_RULE\", \"DELETE_RULE\", \"FK_NAME\", \"PK_NAME\", \"DEFERRABILITY\"};\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/junit/TestDBMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/junit/TestDBMetaData.java",]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 1,
        "mass": 25,
        "clones": 4,
        "snippet": "String[] colNames = {\"TABLE_CAT\", \"TABLE_SCHEM\", \"TABLE_NAME\", \"COLUMN_NAME\", \"DATA_TYPE\", \"TYPE_NAME\", \"COLUMN_SIZE\", \"BUFFER_LENGTH\", \"DECIMAL_DIGITS\", \"NUM_PREC_RADIX\", \"NULLABLE\", \"REMARKS\", \"COLUMN_DEF\", \"SQL_DATA_TYPE\", \"SQL_DATETIME_SUB\", \"CHAR_OCTET_LENGTH\", \"ORDINAL_POSITION\", \"IS_NULLABLE\"};\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/junit/TestDBMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/junit/TestDBMetaData.java",]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 1,
        "mass": 25,
        "clones": 4,
        "snippet": "String[] colNames = {\"TABLE_CAT\", \"TABLE_SCHEM\", \"TABLE_NAME\", \"COLUMN_NAME\", \"DATA_TYPE\", \"TYPE_NAME\", \"COLUMN_SIZE\", \"BUFFER_LENGTH\", \"DECIMAL_DIGITS\", \"NUM_PREC_RADIX\", \"NULLABLE\", \"REMARKS\", \"COLUMN_DEF\", \"SQL_DATA_TYPE\", \"SQL_DATETIME_SUB\", \"CHAR_OCTET_LENGTH\", \"ORDINAL_POSITION\", \"IS_NULLABLE\"};\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/junit/TestDBMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/junit/TestDBMetaData.java",]
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
        "cloneClassesType1": 2
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
    "edges": ["project://smallsql0.21_src/src/smallsql/junit/TestOperatoren.java","project://smallsql0.21_src/src/smallsql/junit/TestDataTypes.java","project://smallsql0.21_src/src/smallsql/junit/TestMoneyRounding.java","project://smallsql0.21_src/src/smallsql/junit/TestFunctions.java",]
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
    "edges": ["project://smallsql0.21_src/src/smallsql/junit/TestJoins.java","project://smallsql0.21_src/src/smallsql/junit/TestOperatoren.java",]
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
        "cc": 2,
        "volume": 8,
        "mass": 61,
        "clones": 2,
        "snippet": "static String bytes2hex( byte[] bytes ){\n        StringBuffer buf = new StringBuffer(bytes.length << 1);\n        for(int i=0; i<bytes.length; i++){\n            buf.append( digits[ (bytes[i] >> 4) & 0x0F ] );\n            buf.append( digits[ (bytes[i]     ) & 0x0F ] );\n        }\n        return buf.toString();\n    }\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/Utils.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java",]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 1,
        "mass": 21,
        "clones": 4,
        "snippet": "private final static char[] digits = {'0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'};\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/database/Utils.java","project://smallsql0.21_src/src/smallsql/database/Utils.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java",]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 1,
        "mass": 21,
        "clones": 4,
        "snippet": "private final static char[] digits = {'0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'};\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/database/Utils.java","project://smallsql0.21_src/src/smallsql/database/Utils.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java",]
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
    "edges": ["project://smallsql0.21_src/src/smallsql/database/Utils.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java",]
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
    "edges": ["project://smallsql0.21_src/src/smallsql/database/Utils.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java",]
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
    "edges": ["project://smallsql0.21_src/src/smallsql/database/TableView.java","project://smallsql0.21_src/src/smallsql/database/IndexDescription.java",]
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
        "cloneClassesType1": 1
    },
    "results": {
        "type-1": [
            
{
    "metadata": {
        "cc": 2,
        "volume": 5,
        "mass": 20,
        "clones": 3,
        "snippet": "{\n\t\tif (idx >= size)\n\t\t\tthrow new IndexOutOfBoundsException(\"Index: \"+idx+\", Size: \"+size);\n\t\treturn data[idx];\n\t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/LongList.java","project://smallsql0.21_src/src/smallsql/database/DataSources.java","project://smallsql0.21_src/src/smallsql/database/Expressions.java",]
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
        "cloneClassesType1": 2
    },
    "results": {
        "type-1": [
            
{
    "metadata": {
        "cc": 3,
        "volume": 3,
        "mass": 22,
        "clones": 2,
        "snippet": "\t\t\tchar digit = (i<0) ? (length == 0 ? (char)1 : 2)\n\t\t\t\t\t\t\t  : (key[i]);\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/Index.java","project://smallsql0.21_src/src/smallsql/database/Index.java",]
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
    "edges": ["project://smallsql0.21_src/src/smallsql/database/Index.java","project://smallsql0.21_src/src/smallsql/database/Index.java",]
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
    "edges": ["project://smallsql0.21_src/src/smallsql/database/SSStatement.java","project://smallsql0.21_src/src/smallsql/database/SSPreparedStatement.java",]
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
        "cloneClassesType1": 6
    },
    "results": {
        "type-1": [
            
{
    "metadata": {
        "cc": 2,
        "volume": 12,
        "mass": 41,
        "clones": 2,
        "snippet": "{\n\t\t\t\t\t\tif(status.nodeValue instanceof IndexNode){\n\t\t\t\t\t\t\tlevel++;\n\t\t\t\t\t\t\tnodeStack.push(\n\t\t\t\t\t\t\t\tnew IndexNodeScrollStatus( \t(IndexNode)status.nodeValue, \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t(expressions.get(level).getAlias() != SQLTokenizer.DESC_STR), \n\t\t\t\t\t\t\t\t\t\t\t\t\t\tscroll, level));\n\t\t\t\t\t\t\tcontinue;\n\t\t\t\t\t\t}else\n\t\t\t\t\t\t\treturn getReturnValue(status.nodeValue);\n\t\t\t\t\t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/IndexScrollStatus.java","project://smallsql0.21_src/src/smallsql/database/IndexScrollStatus.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 12,
        "mass": 41,
        "clones": 2,
        "snippet": "{\n\t\t\t\t\t\tif(status.nodeValue instanceof IndexNode){\n\t\t\t\t\t\t\tlevel++;\n\t\t\t\t\t\t\tnodeStack.push(\n\t\t\t\t\t\t\t\tnew IndexNodeScrollStatus( \t(IndexNode)status.nodeValue, \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t(expressions.get(level).getAlias() != SQLTokenizer.DESC_STR), \n\t\t\t\t\t\t\t\t\t\t\t\t\t\tscroll, level));\n\t\t\t\t\t\t\tcontinue;\n\t\t\t\t\t\t}else\n\t\t\t\t\t\t\treturn getReturnValue(status.nodeValue);\n\t\t\t\t\t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/IndexScrollStatus.java","project://smallsql0.21_src/src/smallsql/database/IndexScrollStatus.java",]
}
,
{
    "metadata": {
        "cc": 3,
        "volume": 12,
        "mass": 47,
        "clones": 2,
        "snippet": "if(status.nodeValue != null){\n\t\t\t\t\t\tif(status.nodeValue instanceof IndexNode){\n\t\t\t\t\t\t\tlevel++;\n\t\t\t\t\t\t\tnodeStack.push(\n\t\t\t\t\t\t\t\tnew IndexNodeScrollStatus( \t(IndexNode)status.nodeValue, \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t(expressions.get(level).getAlias() != SQLTokenizer.DESC_STR), \n\t\t\t\t\t\t\t\t\t\t\t\t\t\tscroll, level));\n\t\t\t\t\t\t\tcontinue;\n\t\t\t\t\t\t}else\n\t\t\t\t\t\t\treturn getReturnValue(status.nodeValue);\n\t\t\t\t\t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/IndexScrollStatus.java","project://smallsql0.21_src/src/smallsql/database/IndexScrollStatus.java",]
}
,
{
    "metadata": {
        "cc": 3,
        "volume": 12,
        "mass": 47,
        "clones": 2,
        "snippet": "if(status.nodeValue != null){\n\t\t\t\t\t\tif(status.nodeValue instanceof IndexNode){\n\t\t\t\t\t\t\tlevel++;\n\t\t\t\t\t\t\tnodeStack.push(\n\t\t\t\t\t\t\t\tnew IndexNodeScrollStatus( \t(IndexNode)status.nodeValue, \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t(expressions.get(level).getAlias() != SQLTokenizer.DESC_STR), \n\t\t\t\t\t\t\t\t\t\t\t\t\t\tscroll, level));\n\t\t\t\t\t\t\tcontinue;\n\t\t\t\t\t\t}else\n\t\t\t\t\t\t\treturn getReturnValue(status.nodeValue);\n\t\t\t\t\t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/IndexScrollStatus.java","project://smallsql0.21_src/src/smallsql/database/IndexScrollStatus.java",]
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
    "edges": ["project://smallsql0.21_src/src/smallsql/database/IndexScrollStatus.java","project://smallsql0.21_src/src/smallsql/database/IndexScrollStatus.java",]
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
    "edges": ["project://smallsql0.21_src/src/smallsql/database/IndexScrollStatus.java","project://smallsql0.21_src/src/smallsql/database/IndexScrollStatus.java",]
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
        "cloneClassesType1": 7
    },
    "results": {
        "type-1": [
            
{
    "metadata": {
        "cc": 2,
        "volume": 8,
        "mass": 61,
        "clones": 2,
        "snippet": "static String bytes2hex( byte[] bytes ){\n        StringBuffer buf = new StringBuffer(bytes.length << 1);\n        for(int i=0; i<bytes.length; i++){\n            buf.append( digits[ (bytes[i] >> 4) & 0x0F ] );\n            buf.append( digits[ (bytes[i]     ) & 0x0F ] );\n        }\n        return buf.toString();\n    }\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/Utils.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java",]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 1,
        "mass": 21,
        "clones": 4,
        "snippet": "private final static char[] digits = {'0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'};\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/database/Utils.java","project://smallsql0.21_src/src/smallsql/database/Utils.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java",]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 1,
        "mass": 21,
        "clones": 4,
        "snippet": "private final static char[] digits = {'0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'};\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/database/Utils.java","project://smallsql0.21_src/src/smallsql/database/Utils.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java",]
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
    "edges": ["project://smallsql0.21_src/src/smallsql/database/Utils.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 3,
        "mass": 26,
        "clones": 2,
        "snippet": "for(int i=0; i<length; i++){\n            result = (result << 8) | (bytes[i] & 0xFF);\n        }\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/Utils.java","project://smallsql0.21_src/src/smallsql/database/Utils.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 3,
        "mass": 26,
        "clones": 2,
        "snippet": "for(int i=0; i<length; i++){\n            result = (result << 8) | (bytes[i] & 0xFF);\n        }\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/Utils.java","project://smallsql0.21_src/src/smallsql/database/Utils.java",]
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
    "edges": ["project://smallsql0.21_src/src/smallsql/database/Utils.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java",]
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
        "cc": 4,
        "volume": 7,
        "mass": 36,
        "clones": 2,
        "snippet": "if(serializeConnections.size() > 0){\n                        Iterator values = locks.values().iterator();\n                        while(values.hasNext()){\n                            TableStorePage lock = (TableStorePage)values.next();\n                            if(lock.con != con) return null;\n                        }\n                    }\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/Table.java","project://smallsql0.21_src/src/smallsql/database/Table.java",]
}
,
{
    "metadata": {
        "cc": 4,
        "volume": 7,
        "mass": 36,
        "clones": 2,
        "snippet": "if(serializeConnections.size() > 0){\n                        Iterator values = locks.values().iterator();\n                        while(values.hasNext()){\n                            TableStorePage lock = (TableStorePage)values.next();\n                            if(lock.con != con) return null;\n                        }\n                    }\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/Table.java","project://smallsql0.21_src/src/smallsql/database/Table.java",]
}
,
{
    "metadata": {
        "cc": 3,
        "volume": 7,
        "mass": 31,
        "clones": 3,
        "snippet": "{\n\t\t\t\t\t\t\tIterator values = locks.values().iterator();\n\t\t\t\t\t\t\twhile(values.hasNext()){\n\t\t\t\t\t\t\t\tTableStorePage lock = (TableStorePage)values.next();\n\t\t\t\t\t\t\t\tif(lock.con != con) return null;\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/Table.java","project://smallsql0.21_src/src/smallsql/database/Table.java","project://smallsql0.21_src/src/smallsql/database/Table.java",]
}
,
{
    "metadata": {
        "cc": 3,
        "volume": 7,
        "mass": 31,
        "clones": 3,
        "snippet": "{\n\t\t\t\t\t\t\tIterator values = locks.values().iterator();\n\t\t\t\t\t\t\twhile(values.hasNext()){\n\t\t\t\t\t\t\t\tTableStorePage lock = (TableStorePage)values.next();\n\t\t\t\t\t\t\t\tif(lock.con != con) return null;\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/Table.java","project://smallsql0.21_src/src/smallsql/database/Table.java","project://smallsql0.21_src/src/smallsql/database/Table.java",]
}
,
{
    "metadata": {
        "cc": 3,
        "volume": 7,
        "mass": 31,
        "clones": 3,
        "snippet": "{\n\t\t\t\t\t\t\tIterator values = locks.values().iterator();\n\t\t\t\t\t\t\twhile(values.hasNext()){\n\t\t\t\t\t\t\t\tTableStorePage lock = (TableStorePage)values.next();\n\t\t\t\t\t\t\t\tif(lock.con != con) return null;\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/Table.java","project://smallsql0.21_src/src/smallsql/database/Table.java","project://smallsql0.21_src/src/smallsql/database/Table.java",]
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
        "cc": 4,
        "volume": 11,
        "mass": 46,
        "clones": 2,
        "snippet": "if(places > 0){\n\t\t\tfor(int i=0; i<places; i++){\n\t\t\t}\n\t\t}else{\n\t\t\tfor(int i=0; i>places; i--){\n\t\t\t}\n\t\t\tvalue \/= factor;\n\t\t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionRound.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionTruncate.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 6,
        "mass": 21,
        "clones": 2,
        "snippet": "{\n\t\t\tfor(int i=0; i>places; i--){\n\t\t\t}\n\t\t\tvalue \/= factor;\n\t\t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionRound.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionTruncate.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 6,
        "mass": 21,
        "clones": 2,
        "snippet": "{\n\t\t\tfor(int i=0; i<places; i++){\n\t\t\t}\n\t\t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionRound.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionTruncate.java",]
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
        "volume": 5,
        "mass": 20,
        "clones": 3,
        "snippet": "{\n\t\tif (idx >= size)\n\t\t\tthrow new IndexOutOfBoundsException(\"Index: \"+idx+\", Size: \"+size);\n\t\treturn data[idx];\n\t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/LongList.java","project://smallsql0.21_src/src/smallsql/database/DataSources.java","project://smallsql0.21_src/src/smallsql/database/Expressions.java",]
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