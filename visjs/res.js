var results = {
		
	"project-name": "|project://smallsql0.21_src|",
	"metadata": {
        "cloneClassesType1": 191
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
    "filename": "project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionReturnP1StringAndBinary.java",
    "metadata": {
        "volume": 0,
        "cloneClassesType1": 13
    },
    "results": {
        "type-1": [
            
{
    "metadata": {
        "cc": 2,
        "volume": 4,
        "mass": 5,
        "clones": 2,
        "snippet": "final float getFloat() throws Exception {\n\t\tif(isNull()) return 0;\n\t\treturn Float.parseFloat(getString().trim());\n\t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionReturnP1StringAndBinary.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionReturnString.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 4,
        "mass": 5,
        "clones": 2,
        "snippet": "final MutableNumeric getNumeric() throws Exception {\n\t\tif(isNull()) return null;\n\t\treturn new MutableNumeric(getString().trim());\n\t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionReturnP1StringAndBinary.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionReturnString.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 4,
        "mass": 4,
        "clones": 2,
        "snippet": "{\n\t\tif(isNull()) return 0;\n\t\treturn Float.parseFloat(getString().trim());\n\t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionReturnP1StringAndBinary.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionReturnString.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 4,
        "mass": 4,
        "clones": 2,
        "snippet": "{\n\t\tif(isNull()) return null;\n\t\treturn new MutableNumeric(getString().trim());\n\t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionReturnP1StringAndBinary.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionReturnString.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 4,
        "mass": 5,
        "clones": 2,
        "snippet": "final long getMoney() throws Exception {\n\t\tif(isNull()) return 0;\n\t\treturn Money.parseMoney(getString().trim());\n\t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionReturnP1StringAndBinary.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionReturnString.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 4,
        "mass": 4,
        "clones": 2,
        "snippet": "{\n\t\tif(isNull()) return 0;\n\t\treturn Money.parseMoney(getString().trim());\n\t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionReturnP1StringAndBinary.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionReturnString.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 4,
        "mass": 5,
        "clones": 2,
        "snippet": "final int getInt() throws Exception {\n\t\tif(isNull()) return 0;\n\t\treturn Integer.parseInt(getString().trim());\n\t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionReturnP1StringAndBinary.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionReturnString.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 4,
        "mass": 5,
        "clones": 2,
        "snippet": "final long getLong() throws Exception {\n\t\tif(isNull()) return 0;\n\t\treturn Long.parseLong(getString().trim());\n\t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionReturnP1StringAndBinary.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionReturnString.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 4,
        "mass": 5,
        "clones": 2,
        "snippet": "final boolean getBoolean() throws Exception {\n\t\tif(isNull()) return false;\n\t\treturn Utils.string2boolean(getString().trim());\n\t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionReturnP1StringAndBinary.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionReturnString.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 4,
        "mass": 5,
        "clones": 2,
        "snippet": "final double getDouble() throws Exception {\n\t\tif(isNull()) return 0;\n\t\treturn Double.parseDouble(getString().trim());\n\t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionReturnP1StringAndBinary.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionReturnString.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 4,
        "mass": 4,
        "clones": 2,
        "snippet": "{\n\t\tif(isNull()) return 0;\n\t\treturn Double.parseDouble(getString().trim());\n\t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionReturnP1StringAndBinary.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionReturnString.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 4,
        "mass": 4,
        "clones": 2,
        "snippet": "{\n\t\tif(isNull()) return 0;\n\t\treturn Long.parseLong(getString().trim());\n\t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionReturnP1StringAndBinary.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionReturnString.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 4,
        "mass": 4,
        "clones": 2,
        "snippet": "{\n\t\tif(isNull()) return 0;\n\t\treturn Integer.parseInt(getString().trim());\n\t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionReturnP1StringAndBinary.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionReturnString.java",]
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
        "cloneClassesType1": 3
    },
    "results": {
        "type-1": [
            
{
    "metadata": {
        "cc": 2,
        "volume": 6,
        "mass": 4,
        "clones": 4,
        "snippet": "{\n\t\tif (idx >= size)\n\t\t\tthrow new IndexOutOfBoundsException(\"Column index: \"+idx+\", Size: \"+size);\n\t\treturn data[idx];\n\t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/IndexDescriptions.java","project://smallsql0.21_src/src/smallsql/database/Columns.java","project://smallsql0.21_src/src/smallsql/database/ForeignKeys.java","project://smallsql0.21_src/src/smallsql/database/Strings.java",]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 3,
        "mass": 3,
        "clones": 9,
        "snippet": "final int size(){\n\t\treturn size;\n\t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/IndexDescriptions.java","project://smallsql0.21_src/src/smallsql/database/Columns.java","project://smallsql0.21_src/src/smallsql/database/LongList.java","project://smallsql0.21_src/src/smallsql/database/Strings.java","project://smallsql0.21_src/src/smallsql/database/Expressions.java","project://smallsql0.21_src/src/smallsql/database/ForeignKeys.java","project://smallsql0.21_src/src/smallsql/database/LongLongList.java","project://smallsql0.21_src/src/smallsql/database/DataSources.java","project://smallsql0.21_src/src/smallsql/database/StorePageMap.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 3,
        "mass": 3,
        "clones": 7,
        "snippet": "if(size >= data.length ){\n\t\t\tresize(size << 1);\n\t\t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/IndexDescriptions.java","project://smallsql0.21_src/src/smallsql/database/Columns.java","project://smallsql0.21_src/src/smallsql/database/LongList.java","project://smallsql0.21_src/src/smallsql/database/Strings.java","project://smallsql0.21_src/src/smallsql/database/Expressions.java","project://smallsql0.21_src/src/smallsql/database/ForeignKeys.java","project://smallsql0.21_src/src/smallsql/database/Expressions.java",]
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
        "cloneClassesType1": 17
    },
    "results": {
        "type-1": [
            
{
    "metadata": {
        "cc": 1,
        "volume": 4,
        "mass": 3,
        "clones": 2,
        "snippet": "{\n\t\t\t\t\t\tpreviousToken();\n\t\t\t\t\t\treturn list;\n\t\t\t\t\t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/SQLParser.java","project://smallsql0.21_src/src/smallsql/database/SQLParser.java",]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 4,
        "mass": 3,
        "clones": 2,
        "snippet": "{\n\t\t\t\t\t\tpreviousToken();\n\t\t\t\t\t\treturn list;\n\t\t\t\t\t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/SQLParser.java","project://smallsql0.21_src/src/smallsql/database/SQLParser.java",]
}
,
{
    "metadata": {
        "cc": 3,
        "volume": 5,
        "mass": 5,
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
        "mass": 5,
        "clones": 2,
        "snippet": "if(token2 != null && token2.value == SQLTokenizer.POINT){\n                                    expr.setNameAfterTableAlias( nextIdentifier() );\n                                }else{\n                                    previousToken();\n                                }\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/SQLParser.java","project://smallsql0.21_src/src/smallsql/database/SQLParser.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 5,
        "mass": 7,
        "clones": 2,
        "snippet": "try{\n\t\t\t\t\t\t\tvalue = Integer.parseInt(token.getName(sql) );\n\t\t\t\t\t\t}catch(Exception e){\n\t\t\t\t\t\t\tthrow createSyntaxError(token, MISSING_NUMBERVALUE );\n\t\t\t\t\t\t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/SQLParser.java","project://smallsql0.21_src/src/smallsql/database/SQLParser.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 5,
        "mass": 7,
        "clones": 2,
        "snippet": "try{\n\t\t\t\t\t\t\tvalue = Integer.parseInt(token.getName(sql) );\n\t\t\t\t\t\t}catch(Exception e){\n\t\t\t\t\t\t\tthrow createSyntaxError(token, MISSING_NUMBERVALUE );\n\t\t\t\t\t\t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/SQLParser.java","project://smallsql0.21_src/src/smallsql/database/SQLParser.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 3,
        "mass": 4,
        "clones": 3,
        "snippet": "catch(Exception e){\n\t\t\t\t\t\tthrow createSyntaxError(token, MISSING_NUMBERVALUE );\n\t\t\t\t\t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/SQLParser.java","project://smallsql0.21_src/src/smallsql/database/SQLParser.java","project://smallsql0.21_src/src/smallsql/database/SQLParser.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 3,
        "mass": 4,
        "clones": 3,
        "snippet": "catch(Exception e){\n\t\t\t\t\t\tthrow createSyntaxError(token, MISSING_NUMBERVALUE );\n\t\t\t\t\t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/SQLParser.java","project://smallsql0.21_src/src/smallsql/database/SQLParser.java","project://smallsql0.21_src/src/smallsql/database/SQLParser.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 3,
        "mass": 4,
        "clones": 3,
        "snippet": "catch(Exception e){\n\t\t\t\t\t\tthrow createSyntaxError(token, MISSING_NUMBERVALUE );\n\t\t\t\t\t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/SQLParser.java","project://smallsql0.21_src/src/smallsql/database/SQLParser.java","project://smallsql0.21_src/src/smallsql/database/SQLParser.java",]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 4,
        "mass": 3,
        "clones": 2,
        "snippet": "{\n\t\t\t\t\t\tpreviousToken();\n\t\t\t\t\t\treturn fromSource;\n                \t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/SQLParser.java","project://smallsql0.21_src/src/smallsql/database/SQLParser.java",]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 4,
        "mass": 3,
        "clones": 2,
        "snippet": "{\n\t\t\t\t\t\tpreviousToken();\n\t\t\t\t\t\treturn fromSource;\n                \t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/SQLParser.java","project://smallsql0.21_src/src/smallsql/database/SQLParser.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 6,
        "mass": 9,
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
        "mass": 9,
        "clones": 2,
        "snippet": "try{\n            int maxRows = Integer.parseInt(token.getName(sql));\n            selCmd.setMaxRows(maxRows);\n        }catch(NumberFormatException e){\n            throw createSyntaxError(token, Language.STXADD_NOT_NUMBER, token.getName(sql));\n        }\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/SQLParser.java","project://smallsql0.21_src/src/smallsql/database/SQLParser.java",]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 5,
        "mass": 4,
        "clones": 2,
        "snippet": "{\n                        invalidParamCount = true;\n                        expr = null;\/\/Only for the compiler\n                        break;\n                    }\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/SQLParser.java","project://smallsql0.21_src/src/smallsql/database/SQLParser.java",]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 5,
        "mass": 4,
        "clones": 2,
        "snippet": "{\n                        invalidParamCount = true;\n                        expr = null;\/\/Only for the compiler\n                        break;\n                    }\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/SQLParser.java","project://smallsql0.21_src/src/smallsql/database/SQLParser.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 3,
        "mass": 4,
        "clones": 2,
        "snippet": "catch(NumberFormatException e){\n            throw createSyntaxError(token, Language.STXADD_NOT_NUMBER, token.getName(sql));\n        }\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/SQLParser.java","project://smallsql0.21_src/src/smallsql/database/SQLParser.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 3,
        "mass": 4,
        "clones": 2,
        "snippet": "catch(NumberFormatException e){\n            throw createSyntaxError(token, Language.STXADD_NOT_NUMBER, token.getName(sql));\n        }\n"
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
    "filename": "project://smallsql0.21_src/src/smallsql/database/CommandCreateView.java",
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
        "mass": 4,
        "clones": 2,
        "snippet": "    final void addColumn(Column column){\n        columns.add(column);\n    }\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/MemoryResult.java","project://smallsql0.21_src/src/smallsql/database/CommandCreateView.java",]
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
        "cloneClassesType1": 2
    },
    "results": {
        "type-1": [
            
{
    "metadata": {
        "cc": 2,
        "volume": 1,
        "mass": 4,
        "clones": 37,
        "snippet": "catch(Throwable e){e.printStackTrace();}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestOperatoren.java","project://smallsql0.21_src/src/smallsql/junit/TestFunctions.java","project://smallsql0.21_src/src/smallsql/junit/TestOrderBy.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/AllTests.java","project://smallsql0.21_src/src/smallsql/junit/TestAlterTable.java","project://smallsql0.21_src/src/smallsql/database/SSDriver.java","project://smallsql0.21_src/src/smallsql/junit/TestGroupBy.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 10,
        "mass": 13,
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
    "filename": "project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionRight.java",
    "metadata": {
        "volume": 0,
        "cloneClassesType1": 1
    },
    "results": {
        "type-1": [
            
{
    "metadata": {
        "cc": 2,
        "volume": 3,
        "mass": 3,
        "clones": 11,
        "snippet": "boolean isNull() throws Exception {\n\t\treturn param1.isNull() || param2.isNull();\n\t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionTimestampAdd.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionATan2.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionTimestampDiff.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionTruncate.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionRound.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionDifference.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionMod.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionPower.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionRight.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionLocate.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionLeft.java",]
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
        "cloneClassesType1": 2
    },
    "results": {
        "type-1": [
            
{
    "metadata": {
        "cc": 1,
        "volume": 3,
        "mass": 3,
        "clones": 13,
        "snippet": "final boolean isNull() throws Exception {\n\t\treturn param1.isNull();\n\t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionUCase.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionReturnFloat.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionOctetLen.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionRTrim.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionReturnString.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionBitLen.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionReturnP1.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionLCase.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionConvert.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionLTrim.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionReturnInt.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionSoundex.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionCharLen.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 4,
        "mass": 5,
        "clones": 2,
        "snippet": "final byte[] getBytes() throws Exception{\n        if(isNull()) return null;\n        return getString().getBytes();\n\t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionLCase.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionUCase.java",]
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
        "cloneClassesType1": 3
    },
    "results": {
        "type-1": [
            
{
    "metadata": {
        "cc": 1,
        "volume": 4,
        "mass": 3,
        "clones": 2,
        "snippet": "{\n\t\tfilePos = -1;\n\t\tnoRow();\n\t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/TableResult.java","project://smallsql0.21_src/src/smallsql/database/TableResult.java",]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 4,
        "mass": 3,
        "clones": 2,
        "snippet": "{\n\t\tfilePos = -1;\n\t\tnoRow();\n\t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/TableResult.java","project://smallsql0.21_src/src/smallsql/database/TableResult.java",]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 3,
        "mass": 3,
        "clones": 2,
        "snippet": "int getRow(){\n\t\treturn row;\n\t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/Join.java","project://smallsql0.21_src/src/smallsql/database/TableResult.java",]
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
        "cloneClassesType1": 2
    },
    "results": {
        "type-1": [
            
{
    "metadata": {
        "cc": 2,
        "volume": 3,
        "mass": 3,
        "clones": 4,
        "snippet": "{\n\t\t\tif(con.getAutoCommit()) con.commit();\n\t\t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/CommandSelect.java","project://smallsql0.21_src/src/smallsql/database/CommandSelect.java","project://smallsql0.21_src/src/smallsql/database/Command.java","project://smallsql0.21_src/src/smallsql/database/CommandSelect.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 4,
        "mass": 5,
        "clones": 4,
        "snippet": "catch(Throwable e){\n\t\t\tcon.rollback(savepoint);\n\t\t\tthrow SmallSQLException.createFromException(e);\n\t\t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/CommandSelect.java","project://smallsql0.21_src/src/smallsql/database/CommandSelect.java","project://smallsql0.21_src/src/smallsql/database/Command.java","project://smallsql0.21_src/src/smallsql/database/CommandSelect.java",]
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
        "volume": 3,
        "mass": 3,
        "clones": 2,
        "snippet": "public void setUp(){\n        tearDown();\n    }\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/junit/TestAlterTable2.java","project://smallsql0.21_src/src/smallsql/junit/TestDataTypes.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 3,
        "mass": 4,
        "clones": 8,
        "snippet": "catch(SQLException ex){\n            assertSQLException(\"01000\", 0, ex);\n        }\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/junit/TestStatement.java","project://smallsql0.21_src/src/smallsql/junit/TestStatement.java","project://smallsql0.21_src/src/smallsql/junit/TestStatement.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestAlterTable.java","project://smallsql0.21_src/src/smallsql/junit/TestAlterTable2.java","project://smallsql0.21_src/src/smallsql/junit/TestAlterTable.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 7,
        "mass": 9,
        "clones": 2,
        "snippet": "public void tearDown(){\n        try {\n            dropTable( AllTests.getConnection(), table );\n        } catch (SQLException ex) {\n            ex.printStackTrace();\n        }\n    }\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/junit/TestAlterTable2.java","project://smallsql0.21_src/src/smallsql/junit/TestAlterTable.java",]
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
        "volume": 3,
        "mass": 3,
        "clones": 2,
        "snippet": "final boolean getBoolean() throws Exception {\n\t\treturn getInt() != 0;\n\t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionReturnInt.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionTimestampDiff.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 3,
        "mass": 3,
        "clones": 11,
        "snippet": "boolean isNull() throws Exception {\n\t\treturn param1.isNull() || param2.isNull();\n\t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionTimestampAdd.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionATan2.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionTimestampDiff.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionTruncate.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionRound.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionDifference.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionMod.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionPower.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionRight.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionLocate.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionLeft.java",]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 3,
        "mass": 3,
        "clones": 2,
        "snippet": "final int getDataType() {\n\t\treturn SQLTokenizer.INT;\n\t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionReturnInt.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionTimestampDiff.java",]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 3,
        "mass": 3,
        "clones": 2,
        "snippet": "final float getFloat() throws Exception {\n\t\treturn getInt();\n\t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionReturnInt.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionTimestampDiff.java",]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 3,
        "mass": 3,
        "clones": 2,
        "snippet": "final double getDouble() throws Exception {\n\t\treturn getInt();\n\t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionReturnInt.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionTimestampDiff.java",]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 3,
        "mass": 3,
        "clones": 2,
        "snippet": "final long getLong() throws Exception {\n\t\treturn getInt();\n\t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionReturnInt.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionTimestampDiff.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 4,
        "mass": 5,
        "clones": 2,
        "snippet": "Object getObject() throws Exception {\n\t\tif(isNull()) return null;\n\t\treturn Utils.getInteger(getInt());\n\t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionReturnInt.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionTimestampDiff.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 4,
        "mass": 5,
        "clones": 2,
        "snippet": "final MutableNumeric getNumeric() throws Exception {\n\t\tif(isNull()) return null;\n\t\treturn new MutableNumeric(getInt());\n\t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionReturnInt.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionTimestampDiff.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 4,
        "mass": 5,
        "clones": 2,
        "snippet": "final String getString() throws Exception {\n\t\tif(isNull()) return null;\n\t\treturn String.valueOf(getInt());\n\t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionReturnInt.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionTimestampDiff.java",]
}
,
        ],
        "type-2": [
            
        ]
    }
}
,
{
    "filename": "project://smallsql0.21_src/src/smallsql/database/UnionAll.java",
    "metadata": {
        "volume": 0,
        "cloneClassesType1": 2
    },
    "results": {
        "type-1": [
            
{
    "metadata": {
        "cc": 1,
        "volume": 3,
        "mass": 3,
        "clones": 4,
        "snippet": "final boolean isScrollable() {\n\t\treturn false;\n\t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/Distinct.java","project://smallsql0.21_src/src/smallsql/database/TableViewResult.java","project://smallsql0.21_src/src/smallsql/database/UnionAll.java","project://smallsql0.21_src/src/smallsql/database/Join.java",]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 3,
        "mass": 3,
        "clones": 2,
        "snippet": "final int getRow() throws Exception {\n\t\treturn row;\n\t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/UnionAll.java","project://smallsql0.21_src/src/smallsql/database/Distinct.java",]
}
,
        ],
        "type-2": [
            
        ]
    }
}
,
{
    "filename": "project://smallsql0.21_src/src/smallsql/junit/TestExceptionMethods.java",
    "metadata": {
        "volume": 0,
        "cloneClassesType1": 22
    },
    "results": {
        "type-1": [
            
{
    "metadata": {
        "cc": 2,
        "volume": 3,
        "mass": 4,
        "clones": 16,
        "snippet": "catch(SQLException e){\n                assertSQLException(\"01000\", 0, e);\n            }\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/junit/TestExceptionMethods.java","project://smallsql0.21_src/src/smallsql/junit/TestExceptionMethods.java","project://smallsql0.21_src/src/smallsql/junit/TestExceptionMethods.java","project://smallsql0.21_src/src/smallsql/junit/TestExceptionMethods.java","project://smallsql0.21_src/src/smallsql/junit/TestExceptionMethods.java","project://smallsql0.21_src/src/smallsql/junit/TestExceptionMethods.java","project://smallsql0.21_src/src/smallsql/junit/TestExceptionMethods.java","project://smallsql0.21_src/src/smallsql/junit/TestExceptionMethods.java","project://smallsql0.21_src/src/smallsql/junit/TestExceptionMethods.java","project://smallsql0.21_src/src/smallsql/junit/TestExceptionMethods.java","project://smallsql0.21_src/src/smallsql/junit/TestExceptionMethods.java","project://smallsql0.21_src/src/smallsql/junit/TestExceptionMethods.java","project://smallsql0.21_src/src/smallsql/junit/TestExceptionMethods.java","project://smallsql0.21_src/src/smallsql/junit/TestExceptionMethods.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/TestExceptionMethods.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 3,
        "mass": 4,
        "clones": 16,
        "snippet": "catch(SQLException e){\n                assertSQLException(\"01000\", 0, e);\n            }\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/junit/TestExceptionMethods.java","project://smallsql0.21_src/src/smallsql/junit/TestExceptionMethods.java","project://smallsql0.21_src/src/smallsql/junit/TestExceptionMethods.java","project://smallsql0.21_src/src/smallsql/junit/TestExceptionMethods.java","project://smallsql0.21_src/src/smallsql/junit/TestExceptionMethods.java","project://smallsql0.21_src/src/smallsql/junit/TestExceptionMethods.java","project://smallsql0.21_src/src/smallsql/junit/TestExceptionMethods.java","project://smallsql0.21_src/src/smallsql/junit/TestExceptionMethods.java","project://smallsql0.21_src/src/smallsql/junit/TestExceptionMethods.java","project://smallsql0.21_src/src/smallsql/junit/TestExceptionMethods.java","project://smallsql0.21_src/src/smallsql/junit/TestExceptionMethods.java","project://smallsql0.21_src/src/smallsql/junit/TestExceptionMethods.java","project://smallsql0.21_src/src/smallsql/junit/TestExceptionMethods.java","project://smallsql0.21_src/src/smallsql/junit/TestExceptionMethods.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/TestExceptionMethods.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 3,
        "mass": 4,
        "clones": 16,
        "snippet": "catch(SQLException e){\n                assertSQLException(\"01000\", 0, e);\n            }\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/junit/TestExceptionMethods.java","project://smallsql0.21_src/src/smallsql/junit/TestExceptionMethods.java","project://smallsql0.21_src/src/smallsql/junit/TestExceptionMethods.java","project://smallsql0.21_src/src/smallsql/junit/TestExceptionMethods.java","project://smallsql0.21_src/src/smallsql/junit/TestExceptionMethods.java","project://smallsql0.21_src/src/smallsql/junit/TestExceptionMethods.java","project://smallsql0.21_src/src/smallsql/junit/TestExceptionMethods.java","project://smallsql0.21_src/src/smallsql/junit/TestExceptionMethods.java","project://smallsql0.21_src/src/smallsql/junit/TestExceptionMethods.java","project://smallsql0.21_src/src/smallsql/junit/TestExceptionMethods.java","project://smallsql0.21_src/src/smallsql/junit/TestExceptionMethods.java","project://smallsql0.21_src/src/smallsql/junit/TestExceptionMethods.java","project://smallsql0.21_src/src/smallsql/junit/TestExceptionMethods.java","project://smallsql0.21_src/src/smallsql/junit/TestExceptionMethods.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/TestExceptionMethods.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 3,
        "mass": 4,
        "clones": 16,
        "snippet": "catch(SQLException e){\n                assertSQLException(\"01000\", 0, e);\n            }\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/junit/TestExceptionMethods.java","project://smallsql0.21_src/src/smallsql/junit/TestExceptionMethods.java","project://smallsql0.21_src/src/smallsql/junit/TestExceptionMethods.java","project://smallsql0.21_src/src/smallsql/junit/TestExceptionMethods.java","project://smallsql0.21_src/src/smallsql/junit/TestExceptionMethods.java","project://smallsql0.21_src/src/smallsql/junit/TestExceptionMethods.java","project://smallsql0.21_src/src/smallsql/junit/TestExceptionMethods.java","project://smallsql0.21_src/src/smallsql/junit/TestExceptionMethods.java","project://smallsql0.21_src/src/smallsql/junit/TestExceptionMethods.java","project://smallsql0.21_src/src/smallsql/junit/TestExceptionMethods.java","project://smallsql0.21_src/src/smallsql/junit/TestExceptionMethods.java","project://smallsql0.21_src/src/smallsql/junit/TestExceptionMethods.java","project://smallsql0.21_src/src/smallsql/junit/TestExceptionMethods.java","project://smallsql0.21_src/src/smallsql/junit/TestExceptionMethods.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/TestExceptionMethods.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 3,
        "mass": 4,
        "clones": 16,
        "snippet": "catch(SQLException e){\n                assertSQLException(\"01000\", 0, e);\n            }\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/junit/TestExceptionMethods.java","project://smallsql0.21_src/src/smallsql/junit/TestExceptionMethods.java","project://smallsql0.21_src/src/smallsql/junit/TestExceptionMethods.java","project://smallsql0.21_src/src/smallsql/junit/TestExceptionMethods.java","project://smallsql0.21_src/src/smallsql/junit/TestExceptionMethods.java","project://smallsql0.21_src/src/smallsql/junit/TestExceptionMethods.java","project://smallsql0.21_src/src/smallsql/junit/TestExceptionMethods.java","project://smallsql0.21_src/src/smallsql/junit/TestExceptionMethods.java","project://smallsql0.21_src/src/smallsql/junit/TestExceptionMethods.java","project://smallsql0.21_src/src/smallsql/junit/TestExceptionMethods.java","project://smallsql0.21_src/src/smallsql/junit/TestExceptionMethods.java","project://smallsql0.21_src/src/smallsql/junit/TestExceptionMethods.java","project://smallsql0.21_src/src/smallsql/junit/TestExceptionMethods.java","project://smallsql0.21_src/src/smallsql/junit/TestExceptionMethods.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/TestExceptionMethods.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 3,
        "mass": 4,
        "clones": 16,
        "snippet": "catch(SQLException e){\n                assertSQLException(\"01000\", 0, e);\n            }\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/junit/TestExceptionMethods.java","project://smallsql0.21_src/src/smallsql/junit/TestExceptionMethods.java","project://smallsql0.21_src/src/smallsql/junit/TestExceptionMethods.java","project://smallsql0.21_src/src/smallsql/junit/TestExceptionMethods.java","project://smallsql0.21_src/src/smallsql/junit/TestExceptionMethods.java","project://smallsql0.21_src/src/smallsql/junit/TestExceptionMethods.java","project://smallsql0.21_src/src/smallsql/junit/TestExceptionMethods.java","project://smallsql0.21_src/src/smallsql/junit/TestExceptionMethods.java","project://smallsql0.21_src/src/smallsql/junit/TestExceptionMethods.java","project://smallsql0.21_src/src/smallsql/junit/TestExceptionMethods.java","project://smallsql0.21_src/src/smallsql/junit/TestExceptionMethods.java","project://smallsql0.21_src/src/smallsql/junit/TestExceptionMethods.java","project://smallsql0.21_src/src/smallsql/junit/TestExceptionMethods.java","project://smallsql0.21_src/src/smallsql/junit/TestExceptionMethods.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/TestExceptionMethods.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 3,
        "mass": 4,
        "clones": 16,
        "snippet": "catch(SQLException e){\n                assertSQLException(\"01000\", 0, e);\n            }\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/junit/TestExceptionMethods.java","project://smallsql0.21_src/src/smallsql/junit/TestExceptionMethods.java","project://smallsql0.21_src/src/smallsql/junit/TestExceptionMethods.java","project://smallsql0.21_src/src/smallsql/junit/TestExceptionMethods.java","project://smallsql0.21_src/src/smallsql/junit/TestExceptionMethods.java","project://smallsql0.21_src/src/smallsql/junit/TestExceptionMethods.java","project://smallsql0.21_src/src/smallsql/junit/TestExceptionMethods.java","project://smallsql0.21_src/src/smallsql/junit/TestExceptionMethods.java","project://smallsql0.21_src/src/smallsql/junit/TestExceptionMethods.java","project://smallsql0.21_src/src/smallsql/junit/TestExceptionMethods.java","project://smallsql0.21_src/src/smallsql/junit/TestExceptionMethods.java","project://smallsql0.21_src/src/smallsql/junit/TestExceptionMethods.java","project://smallsql0.21_src/src/smallsql/junit/TestExceptionMethods.java","project://smallsql0.21_src/src/smallsql/junit/TestExceptionMethods.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/TestExceptionMethods.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 3,
        "mass": 4,
        "clones": 16,
        "snippet": "catch(SQLException e){\n                assertSQLException(\"01000\", 0, e);\n            }\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/junit/TestExceptionMethods.java","project://smallsql0.21_src/src/smallsql/junit/TestExceptionMethods.java","project://smallsql0.21_src/src/smallsql/junit/TestExceptionMethods.java","project://smallsql0.21_src/src/smallsql/junit/TestExceptionMethods.java","project://smallsql0.21_src/src/smallsql/junit/TestExceptionMethods.java","project://smallsql0.21_src/src/smallsql/junit/TestExceptionMethods.java","project://smallsql0.21_src/src/smallsql/junit/TestExceptionMethods.java","project://smallsql0.21_src/src/smallsql/junit/TestExceptionMethods.java","project://smallsql0.21_src/src/smallsql/junit/TestExceptionMethods.java","project://smallsql0.21_src/src/smallsql/junit/TestExceptionMethods.java","project://smallsql0.21_src/src/smallsql/junit/TestExceptionMethods.java","project://smallsql0.21_src/src/smallsql/junit/TestExceptionMethods.java","project://smallsql0.21_src/src/smallsql/junit/TestExceptionMethods.java","project://smallsql0.21_src/src/smallsql/junit/TestExceptionMethods.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/TestExceptionMethods.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 3,
        "mass": 4,
        "clones": 16,
        "snippet": "catch(SQLException e){\n                assertSQLException(\"01000\", 0, e);\n            }\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/junit/TestExceptionMethods.java","project://smallsql0.21_src/src/smallsql/junit/TestExceptionMethods.java","project://smallsql0.21_src/src/smallsql/junit/TestExceptionMethods.java","project://smallsql0.21_src/src/smallsql/junit/TestExceptionMethods.java","project://smallsql0.21_src/src/smallsql/junit/TestExceptionMethods.java","project://smallsql0.21_src/src/smallsql/junit/TestExceptionMethods.java","project://smallsql0.21_src/src/smallsql/junit/TestExceptionMethods.java","project://smallsql0.21_src/src/smallsql/junit/TestExceptionMethods.java","project://smallsql0.21_src/src/smallsql/junit/TestExceptionMethods.java","project://smallsql0.21_src/src/smallsql/junit/TestExceptionMethods.java","project://smallsql0.21_src/src/smallsql/junit/TestExceptionMethods.java","project://smallsql0.21_src/src/smallsql/junit/TestExceptionMethods.java","project://smallsql0.21_src/src/smallsql/junit/TestExceptionMethods.java","project://smallsql0.21_src/src/smallsql/junit/TestExceptionMethods.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/TestExceptionMethods.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 3,
        "mass": 4,
        "clones": 16,
        "snippet": "catch(SQLException e){\n                assertSQLException(\"01000\", 0, e);\n            }\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/junit/TestExceptionMethods.java","project://smallsql0.21_src/src/smallsql/junit/TestExceptionMethods.java","project://smallsql0.21_src/src/smallsql/junit/TestExceptionMethods.java","project://smallsql0.21_src/src/smallsql/junit/TestExceptionMethods.java","project://smallsql0.21_src/src/smallsql/junit/TestExceptionMethods.java","project://smallsql0.21_src/src/smallsql/junit/TestExceptionMethods.java","project://smallsql0.21_src/src/smallsql/junit/TestExceptionMethods.java","project://smallsql0.21_src/src/smallsql/junit/TestExceptionMethods.java","project://smallsql0.21_src/src/smallsql/junit/TestExceptionMethods.java","project://smallsql0.21_src/src/smallsql/junit/TestExceptionMethods.java","project://smallsql0.21_src/src/smallsql/junit/TestExceptionMethods.java","project://smallsql0.21_src/src/smallsql/junit/TestExceptionMethods.java","project://smallsql0.21_src/src/smallsql/junit/TestExceptionMethods.java","project://smallsql0.21_src/src/smallsql/junit/TestExceptionMethods.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/TestExceptionMethods.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 3,
        "mass": 4,
        "clones": 16,
        "snippet": "catch(SQLException e){\n                assertSQLException(\"01000\", 0, e);\n            }\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/junit/TestExceptionMethods.java","project://smallsql0.21_src/src/smallsql/junit/TestExceptionMethods.java","project://smallsql0.21_src/src/smallsql/junit/TestExceptionMethods.java","project://smallsql0.21_src/src/smallsql/junit/TestExceptionMethods.java","project://smallsql0.21_src/src/smallsql/junit/TestExceptionMethods.java","project://smallsql0.21_src/src/smallsql/junit/TestExceptionMethods.java","project://smallsql0.21_src/src/smallsql/junit/TestExceptionMethods.java","project://smallsql0.21_src/src/smallsql/junit/TestExceptionMethods.java","project://smallsql0.21_src/src/smallsql/junit/TestExceptionMethods.java","project://smallsql0.21_src/src/smallsql/junit/TestExceptionMethods.java","project://smallsql0.21_src/src/smallsql/junit/TestExceptionMethods.java","project://smallsql0.21_src/src/smallsql/junit/TestExceptionMethods.java","project://smallsql0.21_src/src/smallsql/junit/TestExceptionMethods.java","project://smallsql0.21_src/src/smallsql/junit/TestExceptionMethods.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/TestExceptionMethods.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 3,
        "mass": 4,
        "clones": 16,
        "snippet": "catch(SQLException e){\n                assertSQLException(\"01000\", 0, e);\n            }\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/junit/TestExceptionMethods.java","project://smallsql0.21_src/src/smallsql/junit/TestExceptionMethods.java","project://smallsql0.21_src/src/smallsql/junit/TestExceptionMethods.java","project://smallsql0.21_src/src/smallsql/junit/TestExceptionMethods.java","project://smallsql0.21_src/src/smallsql/junit/TestExceptionMethods.java","project://smallsql0.21_src/src/smallsql/junit/TestExceptionMethods.java","project://smallsql0.21_src/src/smallsql/junit/TestExceptionMethods.java","project://smallsql0.21_src/src/smallsql/junit/TestExceptionMethods.java","project://smallsql0.21_src/src/smallsql/junit/TestExceptionMethods.java","project://smallsql0.21_src/src/smallsql/junit/TestExceptionMethods.java","project://smallsql0.21_src/src/smallsql/junit/TestExceptionMethods.java","project://smallsql0.21_src/src/smallsql/junit/TestExceptionMethods.java","project://smallsql0.21_src/src/smallsql/junit/TestExceptionMethods.java","project://smallsql0.21_src/src/smallsql/junit/TestExceptionMethods.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/TestExceptionMethods.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 3,
        "mass": 4,
        "clones": 16,
        "snippet": "catch(SQLException e){\n                assertSQLException(\"01000\", 0, e);\n            }\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/junit/TestExceptionMethods.java","project://smallsql0.21_src/src/smallsql/junit/TestExceptionMethods.java","project://smallsql0.21_src/src/smallsql/junit/TestExceptionMethods.java","project://smallsql0.21_src/src/smallsql/junit/TestExceptionMethods.java","project://smallsql0.21_src/src/smallsql/junit/TestExceptionMethods.java","project://smallsql0.21_src/src/smallsql/junit/TestExceptionMethods.java","project://smallsql0.21_src/src/smallsql/junit/TestExceptionMethods.java","project://smallsql0.21_src/src/smallsql/junit/TestExceptionMethods.java","project://smallsql0.21_src/src/smallsql/junit/TestExceptionMethods.java","project://smallsql0.21_src/src/smallsql/junit/TestExceptionMethods.java","project://smallsql0.21_src/src/smallsql/junit/TestExceptionMethods.java","project://smallsql0.21_src/src/smallsql/junit/TestExceptionMethods.java","project://smallsql0.21_src/src/smallsql/junit/TestExceptionMethods.java","project://smallsql0.21_src/src/smallsql/junit/TestExceptionMethods.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/TestExceptionMethods.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 3,
        "mass": 4,
        "clones": 16,
        "snippet": "catch(SQLException e){\n                assertSQLException(\"01000\", 0, e);\n            }\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/junit/TestExceptionMethods.java","project://smallsql0.21_src/src/smallsql/junit/TestExceptionMethods.java","project://smallsql0.21_src/src/smallsql/junit/TestExceptionMethods.java","project://smallsql0.21_src/src/smallsql/junit/TestExceptionMethods.java","project://smallsql0.21_src/src/smallsql/junit/TestExceptionMethods.java","project://smallsql0.21_src/src/smallsql/junit/TestExceptionMethods.java","project://smallsql0.21_src/src/smallsql/junit/TestExceptionMethods.java","project://smallsql0.21_src/src/smallsql/junit/TestExceptionMethods.java","project://smallsql0.21_src/src/smallsql/junit/TestExceptionMethods.java","project://smallsql0.21_src/src/smallsql/junit/TestExceptionMethods.java","project://smallsql0.21_src/src/smallsql/junit/TestExceptionMethods.java","project://smallsql0.21_src/src/smallsql/junit/TestExceptionMethods.java","project://smallsql0.21_src/src/smallsql/junit/TestExceptionMethods.java","project://smallsql0.21_src/src/smallsql/junit/TestExceptionMethods.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/TestExceptionMethods.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 3,
        "mass": 4,
        "clones": 16,
        "snippet": "catch(SQLException e){\n                assertSQLException(\"01000\", 0, e);\n            }\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/junit/TestExceptionMethods.java","project://smallsql0.21_src/src/smallsql/junit/TestExceptionMethods.java","project://smallsql0.21_src/src/smallsql/junit/TestExceptionMethods.java","project://smallsql0.21_src/src/smallsql/junit/TestExceptionMethods.java","project://smallsql0.21_src/src/smallsql/junit/TestExceptionMethods.java","project://smallsql0.21_src/src/smallsql/junit/TestExceptionMethods.java","project://smallsql0.21_src/src/smallsql/junit/TestExceptionMethods.java","project://smallsql0.21_src/src/smallsql/junit/TestExceptionMethods.java","project://smallsql0.21_src/src/smallsql/junit/TestExceptionMethods.java","project://smallsql0.21_src/src/smallsql/junit/TestExceptionMethods.java","project://smallsql0.21_src/src/smallsql/junit/TestExceptionMethods.java","project://smallsql0.21_src/src/smallsql/junit/TestExceptionMethods.java","project://smallsql0.21_src/src/smallsql/junit/TestExceptionMethods.java","project://smallsql0.21_src/src/smallsql/junit/TestExceptionMethods.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/TestExceptionMethods.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 3,
        "mass": 4,
        "clones": 7,
        "snippet": "catch(SQLException ex){\n            assertSQLException(\"HY010\", 0, ex);\n        }\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/junit/TestExceptionMethods.java","project://smallsql0.21_src/src/smallsql/junit/TestExceptionMethods.java","project://smallsql0.21_src/src/smallsql/junit/TestExceptionMethods.java","project://smallsql0.21_src/src/smallsql/junit/TestExceptionMethods.java","project://smallsql0.21_src/src/smallsql/junit/TestExceptionMethods.java","project://smallsql0.21_src/src/smallsql/junit/TestExceptionMethods.java","project://smallsql0.21_src/src/smallsql/junit/TestExceptionMethods.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 3,
        "mass": 4,
        "clones": 7,
        "snippet": "catch(SQLException ex){\n            assertSQLException(\"HY010\", 0, ex);\n        }\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/junit/TestExceptionMethods.java","project://smallsql0.21_src/src/smallsql/junit/TestExceptionMethods.java","project://smallsql0.21_src/src/smallsql/junit/TestExceptionMethods.java","project://smallsql0.21_src/src/smallsql/junit/TestExceptionMethods.java","project://smallsql0.21_src/src/smallsql/junit/TestExceptionMethods.java","project://smallsql0.21_src/src/smallsql/junit/TestExceptionMethods.java","project://smallsql0.21_src/src/smallsql/junit/TestExceptionMethods.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 3,
        "mass": 4,
        "clones": 7,
        "snippet": "catch(SQLException ex){\n            assertSQLException(\"HY010\", 0, ex);\n        }\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/junit/TestExceptionMethods.java","project://smallsql0.21_src/src/smallsql/junit/TestExceptionMethods.java","project://smallsql0.21_src/src/smallsql/junit/TestExceptionMethods.java","project://smallsql0.21_src/src/smallsql/junit/TestExceptionMethods.java","project://smallsql0.21_src/src/smallsql/junit/TestExceptionMethods.java","project://smallsql0.21_src/src/smallsql/junit/TestExceptionMethods.java","project://smallsql0.21_src/src/smallsql/junit/TestExceptionMethods.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 3,
        "mass": 4,
        "clones": 7,
        "snippet": "catch(SQLException ex){\n            assertSQLException(\"HY010\", 0, ex);\n        }\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/junit/TestExceptionMethods.java","project://smallsql0.21_src/src/smallsql/junit/TestExceptionMethods.java","project://smallsql0.21_src/src/smallsql/junit/TestExceptionMethods.java","project://smallsql0.21_src/src/smallsql/junit/TestExceptionMethods.java","project://smallsql0.21_src/src/smallsql/junit/TestExceptionMethods.java","project://smallsql0.21_src/src/smallsql/junit/TestExceptionMethods.java","project://smallsql0.21_src/src/smallsql/junit/TestExceptionMethods.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 3,
        "mass": 4,
        "clones": 7,
        "snippet": "catch(SQLException ex){\n            assertSQLException(\"HY010\", 0, ex);\n        }\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/junit/TestExceptionMethods.java","project://smallsql0.21_src/src/smallsql/junit/TestExceptionMethods.java","project://smallsql0.21_src/src/smallsql/junit/TestExceptionMethods.java","project://smallsql0.21_src/src/smallsql/junit/TestExceptionMethods.java","project://smallsql0.21_src/src/smallsql/junit/TestExceptionMethods.java","project://smallsql0.21_src/src/smallsql/junit/TestExceptionMethods.java","project://smallsql0.21_src/src/smallsql/junit/TestExceptionMethods.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 3,
        "mass": 4,
        "clones": 7,
        "snippet": "catch(SQLException ex){\n            assertSQLException(\"HY010\", 0, ex);\n        }\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/junit/TestExceptionMethods.java","project://smallsql0.21_src/src/smallsql/junit/TestExceptionMethods.java","project://smallsql0.21_src/src/smallsql/junit/TestExceptionMethods.java","project://smallsql0.21_src/src/smallsql/junit/TestExceptionMethods.java","project://smallsql0.21_src/src/smallsql/junit/TestExceptionMethods.java","project://smallsql0.21_src/src/smallsql/junit/TestExceptionMethods.java","project://smallsql0.21_src/src/smallsql/junit/TestExceptionMethods.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 3,
        "mass": 4,
        "clones": 7,
        "snippet": "catch(SQLException ex){\n            assertSQLException(\"HY010\", 0, ex);\n        }\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/junit/TestExceptionMethods.java","project://smallsql0.21_src/src/smallsql/junit/TestExceptionMethods.java","project://smallsql0.21_src/src/smallsql/junit/TestExceptionMethods.java","project://smallsql0.21_src/src/smallsql/junit/TestExceptionMethods.java","project://smallsql0.21_src/src/smallsql/junit/TestExceptionMethods.java","project://smallsql0.21_src/src/smallsql/junit/TestExceptionMethods.java","project://smallsql0.21_src/src/smallsql/junit/TestExceptionMethods.java",]
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
        "cloneClassesType1": 14
    },
    "results": {
        "type-1": [
            
{
    "metadata": {
        "cc": 2,
        "volume": 4,
        "mass": 5,
        "clones": 2,
        "snippet": "final float getFloat() throws Exception {\n\t\tif(isNull()) return 0;\n\t\treturn Float.parseFloat(getString().trim());\n\t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionReturnP1StringAndBinary.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionReturnString.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 4,
        "mass": 5,
        "clones": 2,
        "snippet": "final MutableNumeric getNumeric() throws Exception {\n\t\tif(isNull()) return null;\n\t\treturn new MutableNumeric(getString().trim());\n\t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionReturnP1StringAndBinary.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionReturnString.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 4,
        "mass": 4,
        "clones": 2,
        "snippet": "{\n\t\tif(isNull()) return 0;\n\t\treturn Float.parseFloat(getString().trim());\n\t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionReturnP1StringAndBinary.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionReturnString.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 4,
        "mass": 4,
        "clones": 2,
        "snippet": "{\n\t\tif(isNull()) return null;\n\t\treturn new MutableNumeric(getString().trim());\n\t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionReturnP1StringAndBinary.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionReturnString.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 4,
        "mass": 5,
        "clones": 2,
        "snippet": "final long getMoney() throws Exception {\n\t\tif(isNull()) return 0;\n\t\treturn Money.parseMoney(getString().trim());\n\t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionReturnP1StringAndBinary.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionReturnString.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 4,
        "mass": 4,
        "clones": 2,
        "snippet": "{\n\t\tif(isNull()) return 0;\n\t\treturn Money.parseMoney(getString().trim());\n\t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionReturnP1StringAndBinary.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionReturnString.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 4,
        "mass": 5,
        "clones": 2,
        "snippet": "final int getInt() throws Exception {\n\t\tif(isNull()) return 0;\n\t\treturn Integer.parseInt(getString().trim());\n\t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionReturnP1StringAndBinary.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionReturnString.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 4,
        "mass": 5,
        "clones": 2,
        "snippet": "final long getLong() throws Exception {\n\t\tif(isNull()) return 0;\n\t\treturn Long.parseLong(getString().trim());\n\t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionReturnP1StringAndBinary.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionReturnString.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 4,
        "mass": 5,
        "clones": 2,
        "snippet": "final boolean getBoolean() throws Exception {\n\t\tif(isNull()) return false;\n\t\treturn Utils.string2boolean(getString().trim());\n\t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionReturnP1StringAndBinary.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionReturnString.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 4,
        "mass": 5,
        "clones": 2,
        "snippet": "final double getDouble() throws Exception {\n\t\tif(isNull()) return 0;\n\t\treturn Double.parseDouble(getString().trim());\n\t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionReturnP1StringAndBinary.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionReturnString.java",]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 3,
        "mass": 3,
        "clones": 13,
        "snippet": "final boolean isNull() throws Exception {\n\t\treturn param1.isNull();\n\t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionUCase.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionReturnFloat.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionOctetLen.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionRTrim.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionReturnString.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionBitLen.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionReturnP1.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionLCase.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionConvert.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionLTrim.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionReturnInt.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionSoundex.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionCharLen.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 4,
        "mass": 4,
        "clones": 2,
        "snippet": "{\n\t\tif(isNull()) return 0;\n\t\treturn Double.parseDouble(getString().trim());\n\t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionReturnP1StringAndBinary.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionReturnString.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 4,
        "mass": 4,
        "clones": 2,
        "snippet": "{\n\t\tif(isNull()) return 0;\n\t\treturn Long.parseLong(getString().trim());\n\t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionReturnP1StringAndBinary.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionReturnString.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 4,
        "mass": 4,
        "clones": 2,
        "snippet": "{\n\t\tif(isNull()) return 0;\n\t\treturn Integer.parseInt(getString().trim());\n\t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionReturnP1StringAndBinary.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionReturnString.java",]
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
        "cloneClassesType1": 3
    },
    "results": {
        "type-1": [
            
{
    "metadata": {
        "cc": 2,
        "volume": 6,
        "mass": 4,
        "clones": 4,
        "snippet": "{\n\t\tif (idx >= size)\n\t\t\tthrow new IndexOutOfBoundsException(\"Column index: \"+idx+\", Size: \"+size);\n\t\treturn data[idx];\n\t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/IndexDescriptions.java","project://smallsql0.21_src/src/smallsql/database/Columns.java","project://smallsql0.21_src/src/smallsql/database/ForeignKeys.java","project://smallsql0.21_src/src/smallsql/database/Strings.java",]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 3,
        "mass": 3,
        "clones": 9,
        "snippet": "final int size(){\n\t\treturn size;\n\t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/IndexDescriptions.java","project://smallsql0.21_src/src/smallsql/database/Columns.java","project://smallsql0.21_src/src/smallsql/database/LongList.java","project://smallsql0.21_src/src/smallsql/database/Strings.java","project://smallsql0.21_src/src/smallsql/database/Expressions.java","project://smallsql0.21_src/src/smallsql/database/ForeignKeys.java","project://smallsql0.21_src/src/smallsql/database/LongLongList.java","project://smallsql0.21_src/src/smallsql/database/DataSources.java","project://smallsql0.21_src/src/smallsql/database/StorePageMap.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 3,
        "mass": 3,
        "clones": 7,
        "snippet": "if(size >= data.length ){\n\t\t\tresize(size << 1);\n\t\t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/IndexDescriptions.java","project://smallsql0.21_src/src/smallsql/database/Columns.java","project://smallsql0.21_src/src/smallsql/database/LongList.java","project://smallsql0.21_src/src/smallsql/database/Strings.java","project://smallsql0.21_src/src/smallsql/database/Expressions.java","project://smallsql0.21_src/src/smallsql/database/ForeignKeys.java","project://smallsql0.21_src/src/smallsql/database/Expressions.java",]
}
,
        ],
        "type-2": [
            
        ]
    }
}
,
{
    "filename": "project://smallsql0.21_src/src/smallsql/database/Language/Language_de.java",
    "metadata": {
        "volume": 0,
        "cloneClassesType1": 7
    },
    "results": {
        "type-1": [
            
{
    "metadata": {
        "cc": 1,
        "volume": 3,
        "mass": 3,
        "clones": 2,
        "snippet": "public String[][] getEntries() {\n\t\treturn ENTRIES;\n\t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/Language/Language_de.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_it.java",]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 1,
        "mass": 3,
        "clones": 24,
        "snippet": "package smallsql.database.language;\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/Language/Language_it.java","project://smallsql0.21_src/src/smallsql/database/Language/Language.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_it.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_de.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_it.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_en.java","project://smallsql0.21_src/src/smallsql/database/Language/Language.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_it.java","project://smallsql0.21_src/src/smallsql/database/Language/Language.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_de.java","project://smallsql0.21_src/src/smallsql/database/Language/Language.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_en.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_de.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_it.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_de.java","project://smallsql0.21_src/src/smallsql/database/Language/Language.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_de.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_en.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_en.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_it.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_en.java","project://smallsql0.21_src/src/smallsql/database/Language/Language.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_en.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_de.java",]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 1,
        "mass": 3,
        "clones": 24,
        "snippet": "package smallsql.database.language;\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/Language/Language_it.java","project://smallsql0.21_src/src/smallsql/database/Language/Language.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_it.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_de.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_it.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_en.java","project://smallsql0.21_src/src/smallsql/database/Language/Language.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_it.java","project://smallsql0.21_src/src/smallsql/database/Language/Language.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_de.java","project://smallsql0.21_src/src/smallsql/database/Language/Language.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_en.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_de.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_it.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_de.java","project://smallsql0.21_src/src/smallsql/database/Language/Language.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_de.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_en.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_en.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_it.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_en.java","project://smallsql0.21_src/src/smallsql/database/Language/Language.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_en.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_de.java",]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 1,
        "mass": 3,
        "clones": 24,
        "snippet": "package smallsql.database.language;\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/Language/Language_it.java","project://smallsql0.21_src/src/smallsql/database/Language/Language.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_it.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_de.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_it.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_en.java","project://smallsql0.21_src/src/smallsql/database/Language/Language.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_it.java","project://smallsql0.21_src/src/smallsql/database/Language/Language.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_de.java","project://smallsql0.21_src/src/smallsql/database/Language/Language.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_en.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_de.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_it.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_de.java","project://smallsql0.21_src/src/smallsql/database/Language/Language.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_de.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_en.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_en.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_it.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_en.java","project://smallsql0.21_src/src/smallsql/database/Language/Language.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_en.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_de.java",]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 1,
        "mass": 3,
        "clones": 24,
        "snippet": "package smallsql.database.language;\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/Language/Language_it.java","project://smallsql0.21_src/src/smallsql/database/Language/Language.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_it.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_de.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_it.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_en.java","project://smallsql0.21_src/src/smallsql/database/Language/Language.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_it.java","project://smallsql0.21_src/src/smallsql/database/Language/Language.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_de.java","project://smallsql0.21_src/src/smallsql/database/Language/Language.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_en.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_de.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_it.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_de.java","project://smallsql0.21_src/src/smallsql/database/Language/Language.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_de.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_en.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_en.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_it.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_en.java","project://smallsql0.21_src/src/smallsql/database/Language/Language.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_en.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_de.java",]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 1,
        "mass": 3,
        "clones": 24,
        "snippet": "package smallsql.database.language;\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/Language/Language_it.java","project://smallsql0.21_src/src/smallsql/database/Language/Language.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_it.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_de.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_it.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_en.java","project://smallsql0.21_src/src/smallsql/database/Language/Language.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_it.java","project://smallsql0.21_src/src/smallsql/database/Language/Language.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_de.java","project://smallsql0.21_src/src/smallsql/database/Language/Language.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_en.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_de.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_it.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_de.java","project://smallsql0.21_src/src/smallsql/database/Language/Language.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_de.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_en.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_en.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_it.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_en.java","project://smallsql0.21_src/src/smallsql/database/Language/Language.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_en.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_de.java",]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 1,
        "mass": 3,
        "clones": 24,
        "snippet": "package smallsql.database.language;\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/Language/Language_it.java","project://smallsql0.21_src/src/smallsql/database/Language/Language.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_it.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_de.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_it.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_en.java","project://smallsql0.21_src/src/smallsql/database/Language/Language.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_it.java","project://smallsql0.21_src/src/smallsql/database/Language/Language.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_de.java","project://smallsql0.21_src/src/smallsql/database/Language/Language.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_en.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_de.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_it.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_de.java","project://smallsql0.21_src/src/smallsql/database/Language/Language.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_de.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_en.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_en.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_it.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_en.java","project://smallsql0.21_src/src/smallsql/database/Language/Language.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_en.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_de.java",]
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
        "cloneClassesType1": 4
    },
    "results": {
        "type-1": [
            
{
    "metadata": {
        "cc": 2,
        "volume": 4,
        "mass": 4,
        "clones": 2,
        "snippet": "catch (SQLException e) {\n\t\t\tout.println(\"REGULAR: \" + e.getMessage() + '\\n');\n\t\t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/junit/TestTokenizer.java","project://smallsql0.21_src/src/smallsql/junit/TestTokenizer.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 4,
        "mass": 4,
        "clones": 2,
        "snippet": "catch (SQLException e) {\n\t\t\tout.println(\"REGULAR: \" + e.getMessage() + '\\n');\n\t\t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/junit/TestTokenizer.java","project://smallsql0.21_src/src/smallsql/junit/TestTokenizer.java",]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 4,
        "mass": 3,
        "clones": 2,
        "snippet": "{\n\t\t\tstat.executeQuery(sql);\n\t\t\tfail(failureMessage);\n\t\t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/junit/TestTokenizer.java","project://smallsql0.21_src/src/smallsql/junit/TestTokenizer.java",]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 4,
        "mass": 3,
        "clones": 2,
        "snippet": "{\n\t\t\tstat.executeQuery(sql);\n\t\t\tfail(failureMessage);\n\t\t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/junit/TestTokenizer.java","project://smallsql0.21_src/src/smallsql/junit/TestTokenizer.java",]
}
,
        ],
        "type-2": [
            
        ]
    }
}
,
{
    "filename": "project://smallsql0.21_src/src/smallsql/database/StoreNull.java",
    "metadata": {
        "volume": 0,
        "cloneClassesType1": 3
    },
    "results": {
        "type-1": [
            
{
    "metadata": {
        "cc": 1,
        "volume": 3,
        "mass": 3,
        "clones": 2,
        "snippet": "final int getUsedSize() {\n\t\treturn 0;\n\t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/StoreNull.java","project://smallsql0.21_src/src/smallsql/database/StoreNoCurrentRow.java",]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 1,
        "mass": 4,
        "clones": 3,
        "snippet": ""
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/StoreNull.java","project://smallsql0.21_src/src/smallsql/database/StoreNull.java","project://smallsql0.21_src/src/smallsql/database/StoreNoCurrentRow.java",]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 1,
        "mass": 4,
        "clones": 3,
        "snippet": ""
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/StoreNull.java","project://smallsql0.21_src/src/smallsql/database/StoreNull.java","project://smallsql0.21_src/src/smallsql/database/StoreNoCurrentRow.java",]
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
        "cloneClassesType1": 3
    },
    "results": {
        "type-1": [
            
{
    "metadata": {
        "cc": 2,
        "volume": 6,
        "mass": 4,
        "clones": 4,
        "snippet": "{\n\t\tif (idx >= size)\n\t\t\tthrow new IndexOutOfBoundsException(\"Column index: \"+idx+\", Size: \"+size);\n\t\treturn data[idx];\n\t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/IndexDescriptions.java","project://smallsql0.21_src/src/smallsql/database/Columns.java","project://smallsql0.21_src/src/smallsql/database/ForeignKeys.java","project://smallsql0.21_src/src/smallsql/database/Strings.java",]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 3,
        "mass": 3,
        "clones": 9,
        "snippet": "final int size(){\n\t\treturn size;\n\t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/IndexDescriptions.java","project://smallsql0.21_src/src/smallsql/database/Columns.java","project://smallsql0.21_src/src/smallsql/database/LongList.java","project://smallsql0.21_src/src/smallsql/database/Strings.java","project://smallsql0.21_src/src/smallsql/database/Expressions.java","project://smallsql0.21_src/src/smallsql/database/ForeignKeys.java","project://smallsql0.21_src/src/smallsql/database/LongLongList.java","project://smallsql0.21_src/src/smallsql/database/DataSources.java","project://smallsql0.21_src/src/smallsql/database/StorePageMap.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 3,
        "mass": 3,
        "clones": 7,
        "snippet": "if(size >= data.length ){\n\t\t\tresize(size << 1);\n\t\t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/IndexDescriptions.java","project://smallsql0.21_src/src/smallsql/database/Columns.java","project://smallsql0.21_src/src/smallsql/database/LongList.java","project://smallsql0.21_src/src/smallsql/database/Strings.java","project://smallsql0.21_src/src/smallsql/database/Expressions.java","project://smallsql0.21_src/src/smallsql/database/ForeignKeys.java","project://smallsql0.21_src/src/smallsql/database/Expressions.java",]
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
        "cloneClassesType1": 7
    },
    "results": {
        "type-1": [
            
{
    "metadata": {
        "cc": 2,
        "volume": 3,
        "mass": 3,
        "clones": 4,
        "snippet": "{\n\t\t\tif(con.getAutoCommit()) con.commit();\n\t\t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/CommandSelect.java","project://smallsql0.21_src/src/smallsql/database/CommandSelect.java","project://smallsql0.21_src/src/smallsql/database/Command.java","project://smallsql0.21_src/src/smallsql/database/CommandSelect.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 3,
        "mass": 3,
        "clones": 4,
        "snippet": "{\n\t\t\tif(con.getAutoCommit()) con.commit();\n\t\t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/CommandSelect.java","project://smallsql0.21_src/src/smallsql/database/CommandSelect.java","project://smallsql0.21_src/src/smallsql/database/Command.java","project://smallsql0.21_src/src/smallsql/database/CommandSelect.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 3,
        "mass": 3,
        "clones": 4,
        "snippet": "{\n\t\t\tif(con.getAutoCommit()) con.commit();\n\t\t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/CommandSelect.java","project://smallsql0.21_src/src/smallsql/database/CommandSelect.java","project://smallsql0.21_src/src/smallsql/database/Command.java","project://smallsql0.21_src/src/smallsql/database/CommandSelect.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 4,
        "mass": 5,
        "clones": 4,
        "snippet": "catch(Throwable e){\n\t\t\tcon.rollback(savepoint);\n\t\t\tthrow SmallSQLException.createFromException(e);\n\t\t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/CommandSelect.java","project://smallsql0.21_src/src/smallsql/database/CommandSelect.java","project://smallsql0.21_src/src/smallsql/database/Command.java","project://smallsql0.21_src/src/smallsql/database/CommandSelect.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 4,
        "mass": 5,
        "clones": 4,
        "snippet": "catch(Throwable e){\n\t\t\tcon.rollback(savepoint);\n\t\t\tthrow SmallSQLException.createFromException(e);\n\t\t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/CommandSelect.java","project://smallsql0.21_src/src/smallsql/database/CommandSelect.java","project://smallsql0.21_src/src/smallsql/database/Command.java","project://smallsql0.21_src/src/smallsql/database/CommandSelect.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 4,
        "mass": 5,
        "clones": 4,
        "snippet": "catch(Throwable e){\n\t\t\tcon.rollback(savepoint);\n\t\t\tthrow SmallSQLException.createFromException(e);\n\t\t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/CommandSelect.java","project://smallsql0.21_src/src/smallsql/database/CommandSelect.java","project://smallsql0.21_src/src/smallsql/database/Command.java","project://smallsql0.21_src/src/smallsql/database/CommandSelect.java",]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 3,
        "mass": 3,
        "clones": 2,
        "snippet": "final public int getMaxRows(){\n        return maxRows;\n    }\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/SSStatement.java","project://smallsql0.21_src/src/smallsql/database/CommandSelect.java",]
}
,
        ],
        "type-2": [
            
        ]
    }
}
,
{
    "filename": "project://smallsql0.21_src/src/smallsql/junit/TestGroupBy.java",
    "metadata": {
        "volume": 0,
        "cloneClassesType1": 3
    },
    "results": {
        "type-1": [
            
{
    "metadata": {
        "cc": 2,
        "volume": 1,
        "mass": 4,
        "clones": 37,
        "snippet": "catch(Throwable e){e.printStackTrace();}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestOperatoren.java","project://smallsql0.21_src/src/smallsql/junit/TestFunctions.java","project://smallsql0.21_src/src/smallsql/junit/TestOrderBy.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/AllTests.java","project://smallsql0.21_src/src/smallsql/junit/TestAlterTable.java","project://smallsql0.21_src/src/smallsql/database/SSDriver.java","project://smallsql0.21_src/src/smallsql/junit/TestGroupBy.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 3,
        "mass": 3,
        "clones": 2,
        "snippet": "while(rs.next()){\n\t\t\trs.getObject(1);\n\t\t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/junit/TestGroupBy.java","project://smallsql0.21_src/src/smallsql/junit/TestGroupBy.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 3,
        "mass": 3,
        "clones": 2,
        "snippet": "while(rs.next()){\n\t\t\trs.getObject(1);\n\t\t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/junit/TestGroupBy.java","project://smallsql0.21_src/src/smallsql/junit/TestGroupBy.java",]
}
,
        ],
        "type-2": [
            
        ]
    }
}
,
{
    "filename": "project://smallsql0.21_src/src/smallsql/database/Where.java",
    "metadata": {
        "volume": 0,
        "cloneClassesType1": 11
    },
    "results": {
        "type-1": [
            
{
    "metadata": {
        "cc": 1,
        "volume": 3,
        "mass": 3,
        "clones": 4,
        "snippet": "final boolean rowInserted() {\n\t\treturn rowSource.rowInserted();\n\t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/Where.java","project://smallsql0.21_src/src/smallsql/database/Distinct.java","project://smallsql0.21_src/src/smallsql/database/SortedResult.java","project://smallsql0.21_src/src/smallsql/database/Scrollable.java",]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 4,
        "mass": 4,
        "clones": 2,
        "snippet": "final void beforeFirst() throws Exception {\n\t\trowSource.beforeFirst();\n\t\trow = 0;\n\t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/Distinct.java","project://smallsql0.21_src/src/smallsql/database/Where.java",]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 3,
        "mass": 4,
        "clones": 2,
        "snippet": "final void setRowPosition(long rowPosition) throws Exception {\n\t\trowSource.setRowPosition(rowPosition);\n\t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/Distinct.java","project://smallsql0.21_src/src/smallsql/database/Where.java",]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 6,
        "mass": 4,
        "clones": 4,
        "snippet": "    boolean isExpressionsFromThisRowSource(Expressions columns){\n        return rowSource.isExpressionsFromThisRowSource(columns);\n    }\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/Where.java","project://smallsql0.21_src/src/smallsql/database/Distinct.java","project://smallsql0.21_src/src/smallsql/database/SortedResult.java","project://smallsql0.21_src/src/smallsql/database/Scrollable.java",]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 4,
        "mass": 4,
        "clones": 3,
        "snippet": "final void noRow() {\n\t\trowSource.noRow();\n\t\trow = 0;\n\t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/Where.java","project://smallsql0.21_src/src/smallsql/database/SortedResult.java","project://smallsql0.21_src/src/smallsql/database/Distinct.java",]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 3,
        "mass": 3,
        "clones": 2,
        "snippet": "final boolean isBeforeFirst(){\n        return row == 0;\n    }\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/SortedResult.java","project://smallsql0.21_src/src/smallsql/database/Where.java",]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 4,
        "mass": 3,
        "clones": 3,
        "snippet": "{\n\t\trowSource.noRow();\n\t\trow = 0;\n\t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/Where.java","project://smallsql0.21_src/src/smallsql/database/SortedResult.java","project://smallsql0.21_src/src/smallsql/database/Distinct.java",]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 3,
        "mass": 3,
        "clones": 4,
        "snippet": "final boolean rowDeleted() {\n\t\treturn rowSource.rowDeleted();\n\t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/Where.java","project://smallsql0.21_src/src/smallsql/database/Distinct.java","project://smallsql0.21_src/src/smallsql/database/SortedResult.java","project://smallsql0.21_src/src/smallsql/database/Scrollable.java",]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 3,
        "mass": 3,
        "clones": 3,
        "snippet": "final long getRowPosition() {\n\t\treturn rowSource.getRowPosition();\n\t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/Where.java","project://smallsql0.21_src/src/smallsql/database/SortedResult.java","project://smallsql0.21_src/src/smallsql/database/Distinct.java",]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 4,
        "mass": 3,
        "clones": 2,
        "snippet": "{\n\t\trowSource.beforeFirst();\n\t\trow = 0;\n\t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/Distinct.java","project://smallsql0.21_src/src/smallsql/database/Where.java",]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 4,
        "mass": 4,
        "clones": 3,
        "snippet": "final void nullRow() {\n\t\trowSource.nullRow();\n\t\trow = 0;\n\t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/Where.java","project://smallsql0.21_src/src/smallsql/database/SortedResult.java","project://smallsql0.21_src/src/smallsql/database/Distinct.java",]
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
        "cloneClassesType1": 31
    },
    "results": {
        "type-1": [
            
{
    "metadata": {
        "cc": 2,
        "volume": 3,
        "mass": 4,
        "clones": 53,
        "snippet": "catch(Exception e){\n    \t\tthrow SmallSQLException.createFromException(e);\n    \t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/SSPreparedStatement.java","project://smallsql0.21_src/src/smallsql/database/SSPreparedStatement.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/ViewResult.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSStatement.java","project://smallsql0.21_src/src/smallsql/database/StorePage.java","project://smallsql0.21_src/src/smallsql/database/Database.java","project://smallsql0.21_src/src/smallsql/database/Database.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 3,
        "mass": 4,
        "clones": 53,
        "snippet": "catch(Exception e){\n    \t\tthrow SmallSQLException.createFromException(e);\n    \t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/SSPreparedStatement.java","project://smallsql0.21_src/src/smallsql/database/SSPreparedStatement.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/ViewResult.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSStatement.java","project://smallsql0.21_src/src/smallsql/database/StorePage.java","project://smallsql0.21_src/src/smallsql/database/Database.java","project://smallsql0.21_src/src/smallsql/database/Database.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 3,
        "mass": 4,
        "clones": 53,
        "snippet": "catch(Exception e){\n    \t\tthrow SmallSQLException.createFromException(e);\n    \t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/SSPreparedStatement.java","project://smallsql0.21_src/src/smallsql/database/SSPreparedStatement.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/ViewResult.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSStatement.java","project://smallsql0.21_src/src/smallsql/database/StorePage.java","project://smallsql0.21_src/src/smallsql/database/Database.java","project://smallsql0.21_src/src/smallsql/database/Database.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 3,
        "mass": 4,
        "clones": 53,
        "snippet": "catch(Exception e){\n    \t\tthrow SmallSQLException.createFromException(e);\n    \t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/SSPreparedStatement.java","project://smallsql0.21_src/src/smallsql/database/SSPreparedStatement.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/ViewResult.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSStatement.java","project://smallsql0.21_src/src/smallsql/database/StorePage.java","project://smallsql0.21_src/src/smallsql/database/Database.java","project://smallsql0.21_src/src/smallsql/database/Database.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 3,
        "mass": 4,
        "clones": 53,
        "snippet": "catch(Exception e){\n    \t\tthrow SmallSQLException.createFromException(e);\n    \t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/SSPreparedStatement.java","project://smallsql0.21_src/src/smallsql/database/SSPreparedStatement.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/ViewResult.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSStatement.java","project://smallsql0.21_src/src/smallsql/database/StorePage.java","project://smallsql0.21_src/src/smallsql/database/Database.java","project://smallsql0.21_src/src/smallsql/database/Database.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 3,
        "mass": 4,
        "clones": 53,
        "snippet": "catch(Exception e){\n    \t\tthrow SmallSQLException.createFromException(e);\n    \t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/SSPreparedStatement.java","project://smallsql0.21_src/src/smallsql/database/SSPreparedStatement.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/ViewResult.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSStatement.java","project://smallsql0.21_src/src/smallsql/database/StorePage.java","project://smallsql0.21_src/src/smallsql/database/Database.java","project://smallsql0.21_src/src/smallsql/database/Database.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 3,
        "mass": 4,
        "clones": 53,
        "snippet": "catch(Exception e){\n    \t\tthrow SmallSQLException.createFromException(e);\n    \t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/SSPreparedStatement.java","project://smallsql0.21_src/src/smallsql/database/SSPreparedStatement.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/ViewResult.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSStatement.java","project://smallsql0.21_src/src/smallsql/database/StorePage.java","project://smallsql0.21_src/src/smallsql/database/Database.java","project://smallsql0.21_src/src/smallsql/database/Database.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 3,
        "mass": 4,
        "clones": 53,
        "snippet": "catch(Exception e){\n    \t\tthrow SmallSQLException.createFromException(e);\n    \t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/SSPreparedStatement.java","project://smallsql0.21_src/src/smallsql/database/SSPreparedStatement.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/ViewResult.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSStatement.java","project://smallsql0.21_src/src/smallsql/database/StorePage.java","project://smallsql0.21_src/src/smallsql/database/Database.java","project://smallsql0.21_src/src/smallsql/database/Database.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 3,
        "mass": 4,
        "clones": 53,
        "snippet": "catch(Exception e){\n    \t\tthrow SmallSQLException.createFromException(e);\n    \t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/SSPreparedStatement.java","project://smallsql0.21_src/src/smallsql/database/SSPreparedStatement.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/ViewResult.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSStatement.java","project://smallsql0.21_src/src/smallsql/database/StorePage.java","project://smallsql0.21_src/src/smallsql/database/Database.java","project://smallsql0.21_src/src/smallsql/database/Database.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 3,
        "mass": 4,
        "clones": 53,
        "snippet": "catch(Exception e){\n    \t\tthrow SmallSQLException.createFromException(e);\n    \t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/SSPreparedStatement.java","project://smallsql0.21_src/src/smallsql/database/SSPreparedStatement.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/ViewResult.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSStatement.java","project://smallsql0.21_src/src/smallsql/database/StorePage.java","project://smallsql0.21_src/src/smallsql/database/Database.java","project://smallsql0.21_src/src/smallsql/database/Database.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 3,
        "mass": 4,
        "clones": 53,
        "snippet": "catch(Exception e){\n    \t\tthrow SmallSQLException.createFromException(e);\n    \t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/SSPreparedStatement.java","project://smallsql0.21_src/src/smallsql/database/SSPreparedStatement.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/ViewResult.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSStatement.java","project://smallsql0.21_src/src/smallsql/database/StorePage.java","project://smallsql0.21_src/src/smallsql/database/Database.java","project://smallsql0.21_src/src/smallsql/database/Database.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 3,
        "mass": 4,
        "clones": 53,
        "snippet": "catch(Exception e){\n    \t\tthrow SmallSQLException.createFromException(e);\n    \t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/SSPreparedStatement.java","project://smallsql0.21_src/src/smallsql/database/SSPreparedStatement.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/ViewResult.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSStatement.java","project://smallsql0.21_src/src/smallsql/database/StorePage.java","project://smallsql0.21_src/src/smallsql/database/Database.java","project://smallsql0.21_src/src/smallsql/database/Database.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 3,
        "mass": 4,
        "clones": 53,
        "snippet": "catch(Exception e){\n    \t\tthrow SmallSQLException.createFromException(e);\n    \t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/SSPreparedStatement.java","project://smallsql0.21_src/src/smallsql/database/SSPreparedStatement.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/ViewResult.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSStatement.java","project://smallsql0.21_src/src/smallsql/database/StorePage.java","project://smallsql0.21_src/src/smallsql/database/Database.java","project://smallsql0.21_src/src/smallsql/database/Database.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 3,
        "mass": 4,
        "clones": 53,
        "snippet": "catch(Exception e){\n    \t\tthrow SmallSQLException.createFromException(e);\n    \t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/SSPreparedStatement.java","project://smallsql0.21_src/src/smallsql/database/SSPreparedStatement.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/ViewResult.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSStatement.java","project://smallsql0.21_src/src/smallsql/database/StorePage.java","project://smallsql0.21_src/src/smallsql/database/Database.java","project://smallsql0.21_src/src/smallsql/database/Database.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 3,
        "mass": 4,
        "clones": 53,
        "snippet": "catch(Exception e){\n    \t\tthrow SmallSQLException.createFromException(e);\n    \t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/SSPreparedStatement.java","project://smallsql0.21_src/src/smallsql/database/SSPreparedStatement.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/ViewResult.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSStatement.java","project://smallsql0.21_src/src/smallsql/database/StorePage.java","project://smallsql0.21_src/src/smallsql/database/Database.java","project://smallsql0.21_src/src/smallsql/database/Database.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 3,
        "mass": 4,
        "clones": 53,
        "snippet": "catch(Exception e){\n    \t\tthrow SmallSQLException.createFromException(e);\n    \t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/SSPreparedStatement.java","project://smallsql0.21_src/src/smallsql/database/SSPreparedStatement.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/ViewResult.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSStatement.java","project://smallsql0.21_src/src/smallsql/database/StorePage.java","project://smallsql0.21_src/src/smallsql/database/Database.java","project://smallsql0.21_src/src/smallsql/database/Database.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 3,
        "mass": 4,
        "clones": 53,
        "snippet": "catch(Exception e){\n    \t\tthrow SmallSQLException.createFromException(e);\n    \t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/SSPreparedStatement.java","project://smallsql0.21_src/src/smallsql/database/SSPreparedStatement.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/ViewResult.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSStatement.java","project://smallsql0.21_src/src/smallsql/database/StorePage.java","project://smallsql0.21_src/src/smallsql/database/Database.java","project://smallsql0.21_src/src/smallsql/database/Database.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 3,
        "mass": 4,
        "clones": 53,
        "snippet": "catch(Exception e){\n    \t\tthrow SmallSQLException.createFromException(e);\n    \t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/SSPreparedStatement.java","project://smallsql0.21_src/src/smallsql/database/SSPreparedStatement.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/ViewResult.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSStatement.java","project://smallsql0.21_src/src/smallsql/database/StorePage.java","project://smallsql0.21_src/src/smallsql/database/Database.java","project://smallsql0.21_src/src/smallsql/database/Database.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 3,
        "mass": 4,
        "clones": 53,
        "snippet": "catch(Exception e){\n    \t\tthrow SmallSQLException.createFromException(e);\n    \t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/SSPreparedStatement.java","project://smallsql0.21_src/src/smallsql/database/SSPreparedStatement.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/ViewResult.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSStatement.java","project://smallsql0.21_src/src/smallsql/database/StorePage.java","project://smallsql0.21_src/src/smallsql/database/Database.java","project://smallsql0.21_src/src/smallsql/database/Database.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 3,
        "mass": 4,
        "clones": 53,
        "snippet": "catch(Exception e){\n    \t\tthrow SmallSQLException.createFromException(e);\n    \t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/SSPreparedStatement.java","project://smallsql0.21_src/src/smallsql/database/SSPreparedStatement.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/ViewResult.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSStatement.java","project://smallsql0.21_src/src/smallsql/database/StorePage.java","project://smallsql0.21_src/src/smallsql/database/Database.java","project://smallsql0.21_src/src/smallsql/database/Database.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 3,
        "mass": 4,
        "clones": 53,
        "snippet": "catch(Exception e){\n    \t\tthrow SmallSQLException.createFromException(e);\n    \t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/SSPreparedStatement.java","project://smallsql0.21_src/src/smallsql/database/SSPreparedStatement.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/ViewResult.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSStatement.java","project://smallsql0.21_src/src/smallsql/database/StorePage.java","project://smallsql0.21_src/src/smallsql/database/Database.java","project://smallsql0.21_src/src/smallsql/database/Database.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 3,
        "mass": 4,
        "clones": 53,
        "snippet": "catch(Exception e){\n    \t\tthrow SmallSQLException.createFromException(e);\n    \t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/SSPreparedStatement.java","project://smallsql0.21_src/src/smallsql/database/SSPreparedStatement.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/ViewResult.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSStatement.java","project://smallsql0.21_src/src/smallsql/database/StorePage.java","project://smallsql0.21_src/src/smallsql/database/Database.java","project://smallsql0.21_src/src/smallsql/database/Database.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 3,
        "mass": 4,
        "clones": 53,
        "snippet": "catch(Exception e){\n    \t\tthrow SmallSQLException.createFromException(e);\n    \t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/SSPreparedStatement.java","project://smallsql0.21_src/src/smallsql/database/SSPreparedStatement.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/ViewResult.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSStatement.java","project://smallsql0.21_src/src/smallsql/database/StorePage.java","project://smallsql0.21_src/src/smallsql/database/Database.java","project://smallsql0.21_src/src/smallsql/database/Database.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 3,
        "mass": 4,
        "clones": 53,
        "snippet": "catch(Exception e){\n    \t\tthrow SmallSQLException.createFromException(e);\n    \t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/SSPreparedStatement.java","project://smallsql0.21_src/src/smallsql/database/SSPreparedStatement.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/ViewResult.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSStatement.java","project://smallsql0.21_src/src/smallsql/database/StorePage.java","project://smallsql0.21_src/src/smallsql/database/Database.java","project://smallsql0.21_src/src/smallsql/database/Database.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 3,
        "mass": 4,
        "clones": 53,
        "snippet": "catch(Exception e){\n    \t\tthrow SmallSQLException.createFromException(e);\n    \t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/SSPreparedStatement.java","project://smallsql0.21_src/src/smallsql/database/SSPreparedStatement.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/ViewResult.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSStatement.java","project://smallsql0.21_src/src/smallsql/database/StorePage.java","project://smallsql0.21_src/src/smallsql/database/Database.java","project://smallsql0.21_src/src/smallsql/database/Database.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 3,
        "mass": 4,
        "clones": 53,
        "snippet": "catch(Exception e){\n    \t\tthrow SmallSQLException.createFromException(e);\n    \t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/SSPreparedStatement.java","project://smallsql0.21_src/src/smallsql/database/SSPreparedStatement.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/ViewResult.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSStatement.java","project://smallsql0.21_src/src/smallsql/database/StorePage.java","project://smallsql0.21_src/src/smallsql/database/Database.java","project://smallsql0.21_src/src/smallsql/database/Database.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 3,
        "mass": 4,
        "clones": 53,
        "snippet": "catch(Exception e){\n    \t\tthrow SmallSQLException.createFromException(e);\n    \t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/SSPreparedStatement.java","project://smallsql0.21_src/src/smallsql/database/SSPreparedStatement.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/ViewResult.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSStatement.java","project://smallsql0.21_src/src/smallsql/database/StorePage.java","project://smallsql0.21_src/src/smallsql/database/Database.java","project://smallsql0.21_src/src/smallsql/database/Database.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 3,
        "mass": 4,
        "clones": 53,
        "snippet": "catch(Exception e){\n    \t\tthrow SmallSQLException.createFromException(e);\n    \t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/SSPreparedStatement.java","project://smallsql0.21_src/src/smallsql/database/SSPreparedStatement.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/ViewResult.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSStatement.java","project://smallsql0.21_src/src/smallsql/database/StorePage.java","project://smallsql0.21_src/src/smallsql/database/Database.java","project://smallsql0.21_src/src/smallsql/database/Database.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 3,
        "mass": 4,
        "clones": 53,
        "snippet": "catch(Exception e){\n    \t\tthrow SmallSQLException.createFromException(e);\n    \t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/SSPreparedStatement.java","project://smallsql0.21_src/src/smallsql/database/SSPreparedStatement.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/ViewResult.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSStatement.java","project://smallsql0.21_src/src/smallsql/database/StorePage.java","project://smallsql0.21_src/src/smallsql/database/Database.java","project://smallsql0.21_src/src/smallsql/database/Database.java",]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 3,
        "mass": 3,
        "clones": 3,
        "snippet": "public SQLWarning getWarnings(){\n        return null;\n    }\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSConnection.java","project://smallsql0.21_src/src/smallsql/database/SSStatement.java",]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 3,
        "mass": 3,
        "clones": 2,
        "snippet": "public boolean wasNull(){\n        return wasNull;\n    }\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java",]
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
        "cloneClassesType1": 71
    },
    "results": {
        "type-1": [
            
{
    "metadata": {
        "cc": 2,
        "volume": 3,
        "mass": 4,
        "clones": 12,
        "snippet": "catch(Exception e){\n            System.out.println(\"  Failed:\"+e);\n        }\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 3,
        "mass": 4,
        "clones": 12,
        "snippet": "catch(Exception e){\n            System.out.println(\"  Failed:\"+e);\n        }\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 3,
        "mass": 4,
        "clones": 12,
        "snippet": "catch(Exception e){\n            System.out.println(\"  Failed:\"+e);\n        }\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 3,
        "mass": 4,
        "clones": 12,
        "snippet": "catch(Exception e){\n            System.out.println(\"  Failed:\"+e);\n        }\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 3,
        "mass": 4,
        "clones": 12,
        "snippet": "catch(Exception e){\n            System.out.println(\"  Failed:\"+e);\n        }\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 3,
        "mass": 4,
        "clones": 12,
        "snippet": "catch(Exception e){\n            System.out.println(\"  Failed:\"+e);\n        }\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 3,
        "mass": 4,
        "clones": 12,
        "snippet": "catch(Exception e){\n            System.out.println(\"  Failed:\"+e);\n        }\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 3,
        "mass": 4,
        "clones": 12,
        "snippet": "catch(Exception e){\n            System.out.println(\"  Failed:\"+e);\n        }\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 3,
        "mass": 4,
        "clones": 12,
        "snippet": "catch(Exception e){\n            System.out.println(\"  Failed:\"+e);\n        }\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 3,
        "mass": 4,
        "clones": 12,
        "snippet": "catch(Exception e){\n            System.out.println(\"  Failed:\"+e);\n        }\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 3,
        "mass": 4,
        "clones": 12,
        "snippet": "catch(Exception e){\n            System.out.println(\"  Failed:\"+e);\n        }\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 3,
        "mass": 4,
        "clones": 12,
        "snippet": "catch(Exception e){\n            System.out.println(\"  Failed:\"+e);\n        }\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 3,
        "mass": 3,
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
        "mass": 3,
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
        "mass": 4,
        "clones": 2,
        "snippet": "for(int i=0; i<rowCount; i++){\n                fos.write(bytes);\n            }\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 3,
        "mass": 4,
        "clones": 2,
        "snippet": "for(int i=0; i<rowCount; i++){\n                fos.write(bytes);\n            }\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 4,
        "mass": 3,
        "clones": 13,
        "snippet": "{\n            System.out.println();\n            System.out.println(\"===================================================================\");\n        }\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 4,
        "mass": 3,
        "clones": 13,
        "snippet": "{\n            System.out.println();\n            System.out.println(\"===================================================================\");\n        }\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 4,
        "mass": 3,
        "clones": 13,
        "snippet": "{\n            System.out.println();\n            System.out.println(\"===================================================================\");\n        }\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 4,
        "mass": 3,
        "clones": 13,
        "snippet": "{\n            System.out.println();\n            System.out.println(\"===================================================================\");\n        }\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 4,
        "mass": 3,
        "clones": 13,
        "snippet": "{\n            System.out.println();\n            System.out.println(\"===================================================================\");\n        }\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 4,
        "mass": 3,
        "clones": 13,
        "snippet": "{\n            System.out.println();\n            System.out.println(\"===================================================================\");\n        }\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 4,
        "mass": 3,
        "clones": 13,
        "snippet": "{\n            System.out.println();\n            System.out.println(\"===================================================================\");\n        }\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 4,
        "mass": 3,
        "clones": 13,
        "snippet": "{\n            System.out.println();\n            System.out.println(\"===================================================================\");\n        }\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 4,
        "mass": 3,
        "clones": 13,
        "snippet": "{\n            System.out.println();\n            System.out.println(\"===================================================================\");\n        }\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 4,
        "mass": 3,
        "clones": 13,
        "snippet": "{\n            System.out.println();\n            System.out.println(\"===================================================================\");\n        }\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 4,
        "mass": 3,
        "clones": 13,
        "snippet": "{\n            System.out.println();\n            System.out.println(\"===================================================================\");\n        }\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 4,
        "mass": 3,
        "clones": 13,
        "snippet": "{\n            System.out.println();\n            System.out.println(\"===================================================================\");\n        }\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 4,
        "mass": 3,
        "clones": 13,
        "snippet": "{\n            System.out.println();\n            System.out.println(\"===================================================================\");\n        }\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 1,
        "mass": 3,
        "clones": 51,
        "snippet": "catch (Exception e) {}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/database/Database.java","project://smallsql0.21_src/src/smallsql/database/ExpressionInSelect.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 1,
        "mass": 3,
        "clones": 51,
        "snippet": "catch (Exception e) {}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/database/Database.java","project://smallsql0.21_src/src/smallsql/database/ExpressionInSelect.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 1,
        "mass": 3,
        "clones": 51,
        "snippet": "catch (Exception e) {}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/database/Database.java","project://smallsql0.21_src/src/smallsql/database/ExpressionInSelect.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 1,
        "mass": 3,
        "clones": 51,
        "snippet": "catch (Exception e) {}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/database/Database.java","project://smallsql0.21_src/src/smallsql/database/ExpressionInSelect.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 1,
        "mass": 3,
        "clones": 51,
        "snippet": "catch (Exception e) {}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/database/Database.java","project://smallsql0.21_src/src/smallsql/database/ExpressionInSelect.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 1,
        "mass": 3,
        "clones": 51,
        "snippet": "catch (Exception e) {}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/database/Database.java","project://smallsql0.21_src/src/smallsql/database/ExpressionInSelect.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 1,
        "mass": 3,
        "clones": 51,
        "snippet": "catch (Exception e) {}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/database/Database.java","project://smallsql0.21_src/src/smallsql/database/ExpressionInSelect.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 1,
        "mass": 3,
        "clones": 51,
        "snippet": "catch (Exception e) {}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/database/Database.java","project://smallsql0.21_src/src/smallsql/database/ExpressionInSelect.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 1,
        "mass": 3,
        "clones": 51,
        "snippet": "catch (Exception e) {}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/database/Database.java","project://smallsql0.21_src/src/smallsql/database/ExpressionInSelect.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 1,
        "mass": 3,
        "clones": 51,
        "snippet": "catch (Exception e) {}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/database/Database.java","project://smallsql0.21_src/src/smallsql/database/ExpressionInSelect.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 1,
        "mass": 3,
        "clones": 51,
        "snippet": "catch (Exception e) {}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/database/Database.java","project://smallsql0.21_src/src/smallsql/database/ExpressionInSelect.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 1,
        "mass": 3,
        "clones": 51,
        "snippet": "catch (Exception e) {}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/database/Database.java","project://smallsql0.21_src/src/smallsql/database/ExpressionInSelect.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 1,
        "mass": 3,
        "clones": 51,
        "snippet": "catch (Exception e) {}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/database/Database.java","project://smallsql0.21_src/src/smallsql/database/ExpressionInSelect.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 1,
        "mass": 3,
        "clones": 51,
        "snippet": "catch (Exception e) {}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/database/Database.java","project://smallsql0.21_src/src/smallsql/database/ExpressionInSelect.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 1,
        "mass": 3,
        "clones": 51,
        "snippet": "catch (Exception e) {}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/database/Database.java","project://smallsql0.21_src/src/smallsql/database/ExpressionInSelect.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 1,
        "mass": 3,
        "clones": 51,
        "snippet": "catch (Exception e) {}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/database/Database.java","project://smallsql0.21_src/src/smallsql/database/ExpressionInSelect.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 1,
        "mass": 3,
        "clones": 51,
        "snippet": "catch (Exception e) {}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/database/Database.java","project://smallsql0.21_src/src/smallsql/database/ExpressionInSelect.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 1,
        "mass": 3,
        "clones": 51,
        "snippet": "catch (Exception e) {}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/database/Database.java","project://smallsql0.21_src/src/smallsql/database/ExpressionInSelect.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 1,
        "mass": 3,
        "clones": 51,
        "snippet": "catch (Exception e) {}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/database/Database.java","project://smallsql0.21_src/src/smallsql/database/ExpressionInSelect.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 1,
        "mass": 3,
        "clones": 51,
        "snippet": "catch (Exception e) {}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/database/Database.java","project://smallsql0.21_src/src/smallsql/database/ExpressionInSelect.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 1,
        "mass": 3,
        "clones": 51,
        "snippet": "catch (Exception e) {}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/database/Database.java","project://smallsql0.21_src/src/smallsql/database/ExpressionInSelect.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 1,
        "mass": 3,
        "clones": 51,
        "snippet": "catch (Exception e) {}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/database/Database.java","project://smallsql0.21_src/src/smallsql/database/ExpressionInSelect.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 1,
        "mass": 3,
        "clones": 51,
        "snippet": "catch (Exception e) {}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/database/Database.java","project://smallsql0.21_src/src/smallsql/database/ExpressionInSelect.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 1,
        "mass": 3,
        "clones": 51,
        "snippet": "catch (Exception e) {}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/database/Database.java","project://smallsql0.21_src/src/smallsql/database/ExpressionInSelect.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 1,
        "mass": 3,
        "clones": 51,
        "snippet": "catch (Exception e) {}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/database/Database.java","project://smallsql0.21_src/src/smallsql/database/ExpressionInSelect.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 1,
        "mass": 3,
        "clones": 51,
        "snippet": "catch (Exception e) {}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/database/Database.java","project://smallsql0.21_src/src/smallsql/database/ExpressionInSelect.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 1,
        "mass": 3,
        "clones": 51,
        "snippet": "catch (Exception e) {}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/database/Database.java","project://smallsql0.21_src/src/smallsql/database/ExpressionInSelect.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 1,
        "mass": 3,
        "clones": 51,
        "snippet": "catch (Exception e) {}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/database/Database.java","project://smallsql0.21_src/src/smallsql/database/ExpressionInSelect.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 1,
        "mass": 3,
        "clones": 51,
        "snippet": "catch (Exception e) {}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/database/Database.java","project://smallsql0.21_src/src/smallsql/database/ExpressionInSelect.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 1,
        "mass": 3,
        "clones": 51,
        "snippet": "catch (Exception e) {}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/database/Database.java","project://smallsql0.21_src/src/smallsql/database/ExpressionInSelect.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 1,
        "mass": 3,
        "clones": 51,
        "snippet": "catch (Exception e) {}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/database/Database.java","project://smallsql0.21_src/src/smallsql/database/ExpressionInSelect.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 1,
        "mass": 3,
        "clones": 51,
        "snippet": "catch (Exception e) {}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/database/Database.java","project://smallsql0.21_src/src/smallsql/database/ExpressionInSelect.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 1,
        "mass": 3,
        "clones": 51,
        "snippet": "catch (Exception e) {}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/database/Database.java","project://smallsql0.21_src/src/smallsql/database/ExpressionInSelect.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 1,
        "mass": 3,
        "clones": 51,
        "snippet": "catch (Exception e) {}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/database/Database.java","project://smallsql0.21_src/src/smallsql/database/ExpressionInSelect.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 1,
        "mass": 3,
        "clones": 51,
        "snippet": "catch (Exception e) {}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/database/Database.java","project://smallsql0.21_src/src/smallsql/database/ExpressionInSelect.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 1,
        "mass": 3,
        "clones": 51,
        "snippet": "catch (Exception e) {}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/database/Database.java","project://smallsql0.21_src/src/smallsql/database/ExpressionInSelect.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 4,
        "mass": 4,
        "clones": 2,
        "snippet": "if (updateCount != 1){\n                    System.out.println( \"  Failed: Update count should be 1 but it is \" + updateCount + \".\");\n                    return;\n                }\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 4,
        "mass": 4,
        "clones": 2,
        "snippet": "if (updateCount != 1){\n                    System.out.println( \"  Failed: Update count should be 1 but it is \" + updateCount + \".\");\n                    return;\n                }\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 5,
        "mass": 5,
        "clones": 2,
        "snippet": "{\n            Statement st = con.createStatement();\n            st.execute(\"DELETE FROM \" + tableName);\n            st.close();\n        }\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 5,
        "mass": 5,
        "clones": 2,
        "snippet": "{\n            Statement st = con.createStatement();\n            st.execute(\"DELETE FROM \" + tableName);\n            st.close();\n        }\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 7,
        "mass": 6,
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
        "mass": 6,
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
    "filename": "project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionDifference.java",
    "metadata": {
        "volume": 0,
        "cloneClassesType1": 1
    },
    "results": {
        "type-1": [
            
{
    "metadata": {
        "cc": 2,
        "volume": 3,
        "mass": 3,
        "clones": 11,
        "snippet": "boolean isNull() throws Exception {\n\t\treturn param1.isNull() || param2.isNull();\n\t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionTimestampAdd.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionATan2.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionTimestampDiff.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionTruncate.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionRound.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionDifference.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionMod.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionPower.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionRight.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionLocate.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionLeft.java",]
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
        "mass": 13,
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
    "filename": "project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionRTrim.java",
    "metadata": {
        "volume": 0,
        "cloneClassesType1": 1
    },
    "results": {
        "type-1": [
            
{
    "metadata": {
        "cc": 1,
        "volume": 3,
        "mass": 3,
        "clones": 13,
        "snippet": "final boolean isNull() throws Exception {\n\t\treturn param1.isNull();\n\t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionUCase.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionReturnFloat.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionOctetLen.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionRTrim.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionReturnString.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionBitLen.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionReturnP1.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionLCase.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionConvert.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionLTrim.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionReturnInt.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionSoundex.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionCharLen.java",]
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
        "mass": 4,
        "clones": 2,
        "snippet": "{\n                            keyColumnNames.add(column.getName());\n                            keys.add(valueExpress.getObject());\n                            break;\n                        }\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/CommandInsert.java","project://smallsql0.21_src/src/smallsql/database/CommandInsert.java",]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 5,
        "mass": 4,
        "clones": 2,
        "snippet": "{\n                            keyColumnNames.add(column.getName());\n                            keys.add(valueExpress.getObject());\n                            break;\n                        }\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/CommandInsert.java","project://smallsql0.21_src/src/smallsql/database/CommandInsert.java",]
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
        "cloneClassesType1": 4
    },
    "results": {
        "type-1": [
            
{
    "metadata": {
        "cc": 1,
        "volume": 3,
        "mass": 3,
        "clones": 3,
        "snippet": "int getPrecision() {\n        return SSResultSetMetaData.getDataTypePrecision( getDataType(), -1 );\n    }\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionReplace.java","project://smallsql0.21_src/src/smallsql/database/Expression.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionRepeat.java",]
}
,
{
    "metadata": {
        "cc": 3,
        "volume": 3,
        "mass": 3,
        "clones": 2,
        "snippet": "final boolean isNull() throws Exception {\n\t\treturn param1.isNull() || param2.isNull() || param3.isNull();\n\t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionSubstring.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionReplace.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 3,
        "mass": 3,
        "clones": 2,
        "snippet": "if(length == 0){\n            return str1;\n        }\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionReplace.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionReplace.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 3,
        "mass": 3,
        "clones": 2,
        "snippet": "if(length == 0){\n            return str1;\n        }\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionReplace.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionReplace.java",]
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
        "cloneClassesType1": 1
    },
    "results": {
        "type-1": [
            
{
    "metadata": {
        "cc": 1,
        "volume": 3,
        "mass": 3,
        "clones": 9,
        "snippet": "final int size(){\n\t\treturn size;\n\t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/IndexDescriptions.java","project://smallsql0.21_src/src/smallsql/database/Columns.java","project://smallsql0.21_src/src/smallsql/database/LongList.java","project://smallsql0.21_src/src/smallsql/database/Strings.java","project://smallsql0.21_src/src/smallsql/database/Expressions.java","project://smallsql0.21_src/src/smallsql/database/ForeignKeys.java","project://smallsql0.21_src/src/smallsql/database/LongLongList.java","project://smallsql0.21_src/src/smallsql/database/DataSources.java","project://smallsql0.21_src/src/smallsql/database/StorePageMap.java",]
}
,
        ],
        "type-2": [
            
        ]
    }
}
,
{
    "filename": "project://smallsql0.21_src/src/smallsql/database/StoreNoCurrentRow.java",
    "metadata": {
        "volume": 0,
        "cloneClassesType1": 2
    },
    "results": {
        "type-1": [
            
{
    "metadata": {
        "cc": 1,
        "volume": 3,
        "mass": 3,
        "clones": 2,
        "snippet": "final int getUsedSize() {\n\t\treturn 0;\n\t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/StoreNull.java","project://smallsql0.21_src/src/smallsql/database/StoreNoCurrentRow.java",]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 1,
        "mass": 4,
        "clones": 3,
        "snippet": ""
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/StoreNull.java","project://smallsql0.21_src/src/smallsql/database/StoreNull.java","project://smallsql0.21_src/src/smallsql/database/StoreNoCurrentRow.java",]
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
        "cloneClassesType1": 3
    },
    "results": {
        "type-1": [
            
{
    "metadata": {
        "cc": 1,
        "volume": 3,
        "mass": 3,
        "clones": 13,
        "snippet": "final boolean isNull() throws Exception {\n\t\treturn param1.isNull();\n\t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionUCase.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionReturnFloat.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionOctetLen.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionRTrim.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionReturnString.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionBitLen.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionReturnP1.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionLCase.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionConvert.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionLTrim.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionReturnInt.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionSoundex.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionCharLen.java",]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 5,
        "mass": 5,
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
        "mass": 5,
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
    "filename": "project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionRepeat.java",
    "metadata": {
        "volume": 0,
        "cloneClassesType1": 1
    },
    "results": {
        "type-1": [
            
{
    "metadata": {
        "cc": 1,
        "volume": 3,
        "mass": 3,
        "clones": 3,
        "snippet": "int getPrecision() {\n        return SSResultSetMetaData.getDataTypePrecision( getDataType(), -1 );\n    }\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionReplace.java","project://smallsql0.21_src/src/smallsql/database/Expression.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionRepeat.java",]
}
,
        ],
        "type-2": [
            
        ]
    }
}
,
{
    "filename": "project://smallsql0.21_src/src/smallsql/database/Join.java",
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
        "mass": 4,
        "clones": 3,
        "snippet": "final boolean first() throws Exception {\n\t\tbeforeFirst();\n\t\treturn next();\n\t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/Distinct.java","project://smallsql0.21_src/src/smallsql/database/SortedResult.java","project://smallsql0.21_src/src/smallsql/database/Join.java",]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 3,
        "mass": 3,
        "clones": 4,
        "snippet": "final boolean isScrollable() {\n\t\treturn false;\n\t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/Distinct.java","project://smallsql0.21_src/src/smallsql/database/TableViewResult.java","project://smallsql0.21_src/src/smallsql/database/UnionAll.java","project://smallsql0.21_src/src/smallsql/database/Join.java",]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 3,
        "mass": 3,
        "clones": 2,
        "snippet": "int getRow(){\n\t\treturn row;\n\t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/Join.java","project://smallsql0.21_src/src/smallsql/database/TableResult.java",]
}
,
        ],
        "type-2": [
            
        ]
    }
}
,
{
    "filename": "project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionReturnP1Number.java",
    "metadata": {
        "volume": 0,
        "cloneClassesType1": 4
    },
    "results": {
        "type-1": [
            
{
    "metadata": {
        "cc": 1,
        "volume": 3,
        "mass": 3,
        "clones": 3,
        "snippet": "final boolean getBoolean() throws Exception{\n        return getDouble() != 0;\n    }\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionReturnP1Number.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionAbs.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionReturnFloat.java",]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 3,
        "mass": 3,
        "clones": 2,
        "snippet": "long getMoney() throws Exception{\n        return Utils.doubleToMoney(getDouble());\n    }\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionReturnFloat.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionReturnP1Number.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 4,
        "mass": 4,
        "clones": 2,
        "snippet": "{\n        if(isNull()) return null;\n        return getObject().toString();\n    }\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/ExpressionArithmetic.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionReturnP1Number.java",]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 3,
        "mass": 3,
        "clones": 2,
        "snippet": "final float getFloat() throws Exception{\n        return (float)getDouble();\n    }\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionReturnFloat.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionReturnP1Number.java",]
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
        "cloneClassesType1": 3
    },
    "results": {
        "type-1": [
            
{
    "metadata": {
        "cc": 2,
        "volume": 5,
        "mass": 7,
        "clones": 3,
        "snippet": "final String getString() throws Exception{\n        Object obj = getObject();\n        if(obj == null) return null;\n        return obj.toString();\n    }\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionReturnFloat.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionAbs.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionFloor.java",]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 3,
        "mass": 3,
        "clones": 3,
        "snippet": "final boolean getBoolean() throws Exception{\n        return getDouble() != 0;\n    }\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionReturnP1Number.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionAbs.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionReturnFloat.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 5,
        "mass": 6,
        "clones": 3,
        "snippet": "{\n        Object obj = getObject();\n        if(obj == null) return null;\n        return obj.toString();\n    }\n"
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
    "filename": "project://smallsql0.21_src/src/smallsql/database/MutableLong.java",
    "metadata": {
        "volume": 0,
        "cloneClassesType1": 6
    },
    "results": {
        "type-1": [
            
{
    "metadata": {
        "cc": 1,
        "volume": 3,
        "mass": 3,
        "clones": 5,
        "snippet": "public double doubleValue() {\n\t\treturn value;\n\t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/MutableDouble.java","project://smallsql0.21_src/src/smallsql/database/MutableInteger.java","project://smallsql0.21_src/src/smallsql/database/MutableFloat.java","project://smallsql0.21_src/src/smallsql/database/MutableLong.java","project://smallsql0.21_src/src/smallsql/database/Identity.java",]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 3,
        "mass": 3,
        "clones": 5,
        "snippet": "public String toString(){\n\t\treturn String.valueOf(value);\n\t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/MutableDouble.java","project://smallsql0.21_src/src/smallsql/database/MutableInteger.java","project://smallsql0.21_src/src/smallsql/database/MutableFloat.java","project://smallsql0.21_src/src/smallsql/database/MutableLong.java","project://smallsql0.21_src/src/smallsql/database/Identity.java",]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 3,
        "mass": 3,
        "clones": 4,
        "snippet": "public float floatValue() {\n\t\treturn value;\n\t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/MutableInteger.java","project://smallsql0.21_src/src/smallsql/database/MutableFloat.java","project://smallsql0.21_src/src/smallsql/database/MutableLong.java","project://smallsql0.21_src/src/smallsql/database/Identity.java",]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 3,
        "mass": 3,
        "clones": 3,
        "snippet": "public long longValue() {\n\t\treturn value;\n\t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/MutableInteger.java","project://smallsql0.21_src/src/smallsql/database/MutableLong.java","project://smallsql0.21_src/src/smallsql/database/Identity.java",]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 3,
        "mass": 3,
        "clones": 2,
        "snippet": "public Object getImmutableObject(){\n\t\treturn new Long(value);\n\t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/MutableLong.java","project://smallsql0.21_src/src/smallsql/database/Identity.java",]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 3,
        "mass": 3,
        "clones": 4,
        "snippet": "public int intValue() {\n\t\treturn (int)value;\n\t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/MutableDouble.java","project://smallsql0.21_src/src/smallsql/database/MutableFloat.java","project://smallsql0.21_src/src/smallsql/database/MutableLong.java","project://smallsql0.21_src/src/smallsql/database/Identity.java",]
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
        "cc": 2,
        "volume": 3,
        "mass": 4,
        "clones": 53,
        "snippet": "catch(Exception e){\n    \t\tthrow SmallSQLException.createFromException(e);\n    \t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/SSPreparedStatement.java","project://smallsql0.21_src/src/smallsql/database/SSPreparedStatement.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/ViewResult.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSStatement.java","project://smallsql0.21_src/src/smallsql/database/StorePage.java","project://smallsql0.21_src/src/smallsql/database/Database.java","project://smallsql0.21_src/src/smallsql/database/Database.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 3,
        "mass": 4,
        "clones": 53,
        "snippet": "catch(Exception e){\n    \t\tthrow SmallSQLException.createFromException(e);\n    \t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/SSPreparedStatement.java","project://smallsql0.21_src/src/smallsql/database/SSPreparedStatement.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/ViewResult.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSStatement.java","project://smallsql0.21_src/src/smallsql/database/StorePage.java","project://smallsql0.21_src/src/smallsql/database/Database.java","project://smallsql0.21_src/src/smallsql/database/Database.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 3,
        "mass": 4,
        "clones": 53,
        "snippet": "catch(Exception e){\n    \t\tthrow SmallSQLException.createFromException(e);\n    \t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/SSPreparedStatement.java","project://smallsql0.21_src/src/smallsql/database/SSPreparedStatement.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/ViewResult.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSStatement.java","project://smallsql0.21_src/src/smallsql/database/StorePage.java","project://smallsql0.21_src/src/smallsql/database/Database.java","project://smallsql0.21_src/src/smallsql/database/Database.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 3,
        "mass": 4,
        "clones": 53,
        "snippet": "catch(Exception e){\n    \t\tthrow SmallSQLException.createFromException(e);\n    \t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/SSPreparedStatement.java","project://smallsql0.21_src/src/smallsql/database/SSPreparedStatement.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/ViewResult.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSStatement.java","project://smallsql0.21_src/src/smallsql/database/StorePage.java","project://smallsql0.21_src/src/smallsql/database/Database.java","project://smallsql0.21_src/src/smallsql/database/Database.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 3,
        "mass": 4,
        "clones": 53,
        "snippet": "catch(Exception e){\n    \t\tthrow SmallSQLException.createFromException(e);\n    \t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/SSPreparedStatement.java","project://smallsql0.21_src/src/smallsql/database/SSPreparedStatement.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/ViewResult.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSStatement.java","project://smallsql0.21_src/src/smallsql/database/StorePage.java","project://smallsql0.21_src/src/smallsql/database/Database.java","project://smallsql0.21_src/src/smallsql/database/Database.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 3,
        "mass": 4,
        "clones": 53,
        "snippet": "catch(Exception e){\n    \t\tthrow SmallSQLException.createFromException(e);\n    \t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/SSPreparedStatement.java","project://smallsql0.21_src/src/smallsql/database/SSPreparedStatement.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/ViewResult.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSStatement.java","project://smallsql0.21_src/src/smallsql/database/StorePage.java","project://smallsql0.21_src/src/smallsql/database/Database.java","project://smallsql0.21_src/src/smallsql/database/Database.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 1,
        "mass": 3,
        "clones": 51,
        "snippet": "catch (Exception e) {}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/database/Database.java","project://smallsql0.21_src/src/smallsql/database/ExpressionInSelect.java",]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 3,
        "mass": 3,
        "clones": 2,
        "snippet": "final public Connection getConnection(){\n        return con;\n    }\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/SSStatement.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java",]
}
,
        ],
        "type-2": [
            
        ]
    }
}
,
{
    "filename": "project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionATan2.java",
    "metadata": {
        "volume": 0,
        "cloneClassesType1": 1
    },
    "results": {
        "type-1": [
            
{
    "metadata": {
        "cc": 2,
        "volume": 3,
        "mass": 3,
        "clones": 11,
        "snippet": "boolean isNull() throws Exception {\n\t\treturn param1.isNull() || param2.isNull();\n\t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionTimestampAdd.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionATan2.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionTimestampDiff.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionTruncate.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionRound.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionDifference.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionMod.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionPower.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionRight.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionLocate.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionLeft.java",]
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
        "cloneClassesType1": 3
    },
    "results": {
        "type-1": [
            
{
    "metadata": {
        "cc": 2,
        "volume": 6,
        "mass": 4,
        "clones": 4,
        "snippet": "{\n\t\tif (idx >= size)\n\t\t\tthrow new IndexOutOfBoundsException(\"Column index: \"+idx+\", Size: \"+size);\n\t\treturn data[idx];\n\t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/IndexDescriptions.java","project://smallsql0.21_src/src/smallsql/database/Columns.java","project://smallsql0.21_src/src/smallsql/database/ForeignKeys.java","project://smallsql0.21_src/src/smallsql/database/Strings.java",]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 3,
        "mass": 3,
        "clones": 9,
        "snippet": "final int size(){\n\t\treturn size;\n\t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/IndexDescriptions.java","project://smallsql0.21_src/src/smallsql/database/Columns.java","project://smallsql0.21_src/src/smallsql/database/LongList.java","project://smallsql0.21_src/src/smallsql/database/Strings.java","project://smallsql0.21_src/src/smallsql/database/Expressions.java","project://smallsql0.21_src/src/smallsql/database/ForeignKeys.java","project://smallsql0.21_src/src/smallsql/database/LongLongList.java","project://smallsql0.21_src/src/smallsql/database/DataSources.java","project://smallsql0.21_src/src/smallsql/database/StorePageMap.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 3,
        "mass": 3,
        "clones": 7,
        "snippet": "if(size >= data.length ){\n\t\t\tresize(size << 1);\n\t\t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/IndexDescriptions.java","project://smallsql0.21_src/src/smallsql/database/Columns.java","project://smallsql0.21_src/src/smallsql/database/LongList.java","project://smallsql0.21_src/src/smallsql/database/Strings.java","project://smallsql0.21_src/src/smallsql/database/Expressions.java","project://smallsql0.21_src/src/smallsql/database/ForeignKeys.java","project://smallsql0.21_src/src/smallsql/database/Expressions.java",]
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
        "cloneClassesType1": 5
    },
    "results": {
        "type-1": [
            
{
    "metadata": {
        "cc": 2,
        "volume": 3,
        "mass": 3,
        "clones": 2,
        "snippet": "if( database.isReadOnly() ){\n\t        throw SmallSQLException.create(Language.DB_READONLY);\n\t    }\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/TableView.java","project://smallsql0.21_src/src/smallsql/database/IndexDescription.java",]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 3,
        "mass": 3,
        "clones": 5,
        "snippet": "final String getName(){\n\t\treturn name;\n\t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/IndexDescription.java","project://smallsql0.21_src/src/smallsql/database/Column.java","project://smallsql0.21_src/src/smallsql/database/Expression.java","project://smallsql0.21_src/src/smallsql/database/Database.java","project://smallsql0.21_src/src/smallsql/database/TableView.java",]
}
,
{
    "metadata": {
        "cc": 4,
        "volume": 9,
        "mass": 12,
        "clones": 2,
        "snippet": "catch(Throwable e){\n\t\t\tif(raFile != null)\n\t\t\t\ttry{\n\t\t\t\t\traFile.close();\n\t\t\t\t}catch(Exception e2){\n\t\t\t\t\tDriverManager.println(e2.toString());\n\t\t\t\t}\n\t\t\tthrow SmallSQLException.createFromException(e);\n\t\t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/TableView.java","project://smallsql0.21_src/src/smallsql/database/IndexDescription.java",]
}
,
{
    "metadata": {
        "cc": 3,
        "volume": 6,
        "mass": 8,
        "clones": 2,
        "snippet": "if(raFile != null)\n\t\t\t\ttry{\n\t\t\t\t\traFile.close();\n\t\t\t\t}catch(Exception e2){\n\t\t\t\t\tDriverManager.println(e2.toString());\n\t\t\t\t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/TableView.java","project://smallsql0.21_src/src/smallsql/database/IndexDescription.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 3,
        "mass": 4,
        "clones": 2,
        "snippet": "catch(Exception e2){\n\t\t\t\t\tDriverManager.println(e2.toString());\n\t\t\t\t}\n"
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
    "filename": "project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionSubstring.java",
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
        "mass": 3,
        "clones": 2,
        "snippet": "final boolean isNull() throws Exception {\n\t\treturn param1.isNull() || param2.isNull() || param3.isNull();\n\t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionSubstring.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionReplace.java",]
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
        "cloneClassesType1": 4
    },
    "results": {
        "type-1": [
            
{
    "metadata": {
        "cc": 2,
        "volume": 4,
        "mass": 4,
        "clones": 2,
        "snippet": "if(!wasWhiteSpace){\n                                   tokens.add( new SQLToken( value, tokenStart, i) );\n                                   value = 0;\n                                }\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/SQLTokenizer.java","project://smallsql0.21_src/src/smallsql/database/SQLTokenizer.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 4,
        "mass": 4,
        "clones": 2,
        "snippet": "if(!wasWhiteSpace){\n                                   tokens.add( new SQLToken( value, tokenStart, i) );\n                                   value = 0;\n                                }\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/SQLTokenizer.java","project://smallsql0.21_src/src/smallsql/database/SQLTokenizer.java",]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 4,
        "mass": 3,
        "clones": 2,
        "snippet": "{\n                                   tokens.add( new SQLToken( value, tokenStart, i) );\n                                   value = 0;\n                                }\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/SQLTokenizer.java","project://smallsql0.21_src/src/smallsql/database/SQLTokenizer.java",]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 4,
        "mass": 3,
        "clones": 2,
        "snippet": "{\n                                   tokens.add( new SQLToken( value, tokenStart, i) );\n                                   value = 0;\n                                }\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/SQLTokenizer.java","project://smallsql0.21_src/src/smallsql/database/SQLTokenizer.java",]
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
        "cloneClassesType1": 1
    },
    "results": {
        "type-1": [
            
{
    "metadata": {
        "cc": 2,
        "volume": 3,
        "mass": 4,
        "clones": 2,
        "snippet": "catch(Throwable th){\n            throw SmallSQLException.createFromException( th );\n        }\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/Database.java","project://smallsql0.21_src/src/smallsql/database/StoreImpl.java",]
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
        "cloneClassesType1": 3
    },
    "results": {
        "type-1": [
            
{
    "metadata": {
        "cc": 2,
        "volume": 3,
        "mass": 4,
        "clones": 8,
        "snippet": "catch(SQLException ex){\n            assertSQLException(\"01000\", 0, ex);\n        }\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/junit/TestStatement.java","project://smallsql0.21_src/src/smallsql/junit/TestStatement.java","project://smallsql0.21_src/src/smallsql/junit/TestStatement.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestAlterTable.java","project://smallsql0.21_src/src/smallsql/junit/TestAlterTable2.java","project://smallsql0.21_src/src/smallsql/junit/TestAlterTable.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 3,
        "mass": 4,
        "clones": 8,
        "snippet": "catch(SQLException ex){\n            assertSQLException(\"01000\", 0, ex);\n        }\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/junit/TestStatement.java","project://smallsql0.21_src/src/smallsql/junit/TestStatement.java","project://smallsql0.21_src/src/smallsql/junit/TestStatement.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestAlterTable.java","project://smallsql0.21_src/src/smallsql/junit/TestAlterTable2.java","project://smallsql0.21_src/src/smallsql/junit/TestAlterTable.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 3,
        "mass": 4,
        "clones": 8,
        "snippet": "catch(SQLException ex){\n            assertSQLException(\"01000\", 0, ex);\n        }\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/junit/TestStatement.java","project://smallsql0.21_src/src/smallsql/junit/TestStatement.java","project://smallsql0.21_src/src/smallsql/junit/TestStatement.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestAlterTable.java","project://smallsql0.21_src/src/smallsql/junit/TestAlterTable2.java","project://smallsql0.21_src/src/smallsql/junit/TestAlterTable.java",]
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
        "cloneClassesType1": 2
    },
    "results": {
        "type-1": [
            
{
    "metadata": {
        "cc": 1,
        "volume": 3,
        "mass": 3,
        "clones": 2,
        "snippet": "public void setUp(){\n        tearDown();\n    }\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/junit/TestAlterTable2.java","project://smallsql0.21_src/src/smallsql/junit/TestDataTypes.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 10,
        "mass": 13,
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
    "filename": "project://smallsql0.21_src/src/smallsql/database/SSDriver.java",
    "metadata": {
        "volume": 0,
        "cloneClassesType1": 1
    },
    "results": {
        "type-1": [
            
{
    "metadata": {
        "cc": 2,
        "volume": 1,
        "mass": 4,
        "clones": 37,
        "snippet": "catch(Throwable e){e.printStackTrace();}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestOperatoren.java","project://smallsql0.21_src/src/smallsql/junit/TestFunctions.java","project://smallsql0.21_src/src/smallsql/junit/TestOrderBy.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/AllTests.java","project://smallsql0.21_src/src/smallsql/junit/TestAlterTable.java","project://smallsql0.21_src/src/smallsql/database/SSDriver.java","project://smallsql0.21_src/src/smallsql/junit/TestGroupBy.java",]
}
,
        ],
        "type-2": [
            
        ]
    }
}
,
{
    "filename": "project://smallsql0.21_src/src/smallsql/database/NoFromResult.java",
    "metadata": {
        "volume": 0,
        "cloneClassesType1": 6
    },
    "results": {
        "type-1": [
            
{
    "metadata": {
        "cc": 1,
        "volume": 3,
        "mass": 3,
        "clones": 2,
        "snippet": "final boolean rowDeleted(){\n\t\treturn false;\n\t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/MemoryResult.java","project://smallsql0.21_src/src/smallsql/database/NoFromResult.java",]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 4,
        "mass": 3,
        "clones": 2,
        "snippet": "{\n\t\trowPos = 1;\n\t\treturn true;\n\t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/NoFromResult.java","project://smallsql0.21_src/src/smallsql/database/NoFromResult.java",]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 4,
        "mass": 3,
        "clones": 2,
        "snippet": "{\n\t\trowPos = 1;\n\t\treturn true;\n\t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/NoFromResult.java","project://smallsql0.21_src/src/smallsql/database/NoFromResult.java",]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 3,
        "mass": 3,
        "clones": 4,
        "snippet": "final boolean isScrollable(){\n\t\treturn true;\n\t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/NoFromResult.java","project://smallsql0.21_src/src/smallsql/database/Scrollable.java","project://smallsql0.21_src/src/smallsql/database/SortedResult.java","project://smallsql0.21_src/src/smallsql/database/MemoryResult.java",]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 3,
        "mass": 3,
        "clones": 2,
        "snippet": "void nullRow(){\n\t\tthrow new Error();\n\t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/MemoryResult.java","project://smallsql0.21_src/src/smallsql/database/NoFromResult.java",]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 3,
        "mass": 3,
        "clones": 2,
        "snippet": "final boolean rowInserted(){\n\t\treturn false;\n\t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/MemoryResult.java","project://smallsql0.21_src/src/smallsql/database/NoFromResult.java",]
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
        "cloneClassesType1": 3
    },
    "results": {
        "type-1": [
            
{
    "metadata": {
        "cc": 1,
        "volume": 5,
        "mass": 5,
        "clones": 2,
        "snippet": "{\n        Money money = new Money();\n        money.value = value;\n        return money;\n    }\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/Money.java","project://smallsql0.21_src/src/smallsql/database/Money.java",]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 5,
        "mass": 5,
        "clones": 2,
        "snippet": "{\n        Money money = new Money();\n        money.value = value;\n        return money;\n    }\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/Money.java","project://smallsql0.21_src/src/smallsql/database/Money.java",]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 3,
        "mass": 3,
        "clones": 2,
        "snippet": "public Object getImmutableObject(){\n\t\treturn toBigDecimal();\n\t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/Money.java","project://smallsql0.21_src/src/smallsql/database/MutableNumeric.java",]
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
        "cloneClassesType1": 6
    },
    "results": {
        "type-1": [
            
{
    "metadata": {
        "cc": 2,
        "volume": 3,
        "mass": 4,
        "clones": 8,
        "snippet": "catch(SQLException ex){\n            assertSQLException(\"01000\", 0, ex);\n        }\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/junit/TestStatement.java","project://smallsql0.21_src/src/smallsql/junit/TestStatement.java","project://smallsql0.21_src/src/smallsql/junit/TestStatement.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestAlterTable.java","project://smallsql0.21_src/src/smallsql/junit/TestAlterTable2.java","project://smallsql0.21_src/src/smallsql/junit/TestAlterTable.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 3,
        "mass": 4,
        "clones": 8,
        "snippet": "catch(SQLException ex){\n            assertSQLException(\"01000\", 0, ex);\n        }\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/junit/TestStatement.java","project://smallsql0.21_src/src/smallsql/junit/TestStatement.java","project://smallsql0.21_src/src/smallsql/junit/TestStatement.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestAlterTable.java","project://smallsql0.21_src/src/smallsql/junit/TestAlterTable2.java","project://smallsql0.21_src/src/smallsql/junit/TestAlterTable.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 1,
        "mass": 4,
        "clones": 37,
        "snippet": "catch(Throwable e){e.printStackTrace();}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestOperatoren.java","project://smallsql0.21_src/src/smallsql/junit/TestFunctions.java","project://smallsql0.21_src/src/smallsql/junit/TestOrderBy.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/AllTests.java","project://smallsql0.21_src/src/smallsql/junit/TestAlterTable.java","project://smallsql0.21_src/src/smallsql/database/SSDriver.java","project://smallsql0.21_src/src/smallsql/junit/TestGroupBy.java",]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 4,
        "mass": 3,
        "clones": 2,
        "snippet": "{\n            con.setTransactionIsolation(isolation);\n            con.setAutoCommit(true);\n        }\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/junit/TestAlterTable.java","project://smallsql0.21_src/src/smallsql/junit/TestAlterTable.java",]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 4,
        "mass": 3,
        "clones": 2,
        "snippet": "{\n            con.setTransactionIsolation(isolation);\n            con.setAutoCommit(true);\n        }\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/junit/TestAlterTable.java","project://smallsql0.21_src/src/smallsql/junit/TestAlterTable.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 7,
        "mass": 9,
        "clones": 2,
        "snippet": "public void tearDown(){\n        try {\n            dropTable( AllTests.getConnection(), table );\n        } catch (SQLException ex) {\n            ex.printStackTrace();\n        }\n    }\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/junit/TestAlterTable2.java","project://smallsql0.21_src/src/smallsql/junit/TestAlterTable.java",]
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
        "cloneClassesType1": 7
    },
    "results": {
        "type-1": [
            
{
    "metadata": {
        "cc": 1,
        "volume": 4,
        "mass": 3,
        "clones": 2,
        "snippet": "{\n            signum = 0;\n            value = EMPTY_INTS;\n        }\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/MutableNumeric.java","project://smallsql0.21_src/src/smallsql/database/MutableNumeric.java",]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 4,
        "mass": 3,
        "clones": 2,
        "snippet": "{\n            signum = 0;\n            value = EMPTY_INTS;\n        }\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/MutableNumeric.java","project://smallsql0.21_src/src/smallsql/database/MutableNumeric.java",]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 4,
        "mass": 3,
        "clones": 2,
        "snippet": "{\n        this( complement );\n        this.scale = scale;\n    }\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/MutableNumeric.java","project://smallsql0.21_src/src/smallsql/database/MutableNumeric.java",]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 4,
        "mass": 3,
        "clones": 2,
        "snippet": "{\n        this( complement );\n        this.scale = scale;\n    }\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/MutableNumeric.java","project://smallsql0.21_src/src/smallsql/database/MutableNumeric.java",]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 3,
        "mass": 3,
        "clones": 2,
        "snippet": "public Object getImmutableObject(){\n\t\treturn toBigDecimal();\n\t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/Money.java","project://smallsql0.21_src/src/smallsql/database/MutableNumeric.java",]
}
,
{
    "metadata": {
        "cc": 3,
        "volume": 6,
        "mass": 6,
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
        "mass": 6,
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
    "filename": "project://smallsql0.21_src/src/smallsql/database/Scrollable.java",
    "metadata": {
        "volume": 0,
        "cloneClassesType1": 11
    },
    "results": {
        "type-1": [
            
{
    "metadata": {
        "cc": 1,
        "volume": 3,
        "mass": 3,
        "clones": 4,
        "snippet": "final boolean rowInserted() {\n\t\treturn rowSource.rowInserted();\n\t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/Where.java","project://smallsql0.21_src/src/smallsql/database/Distinct.java","project://smallsql0.21_src/src/smallsql/database/SortedResult.java","project://smallsql0.21_src/src/smallsql/database/Scrollable.java",]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 6,
        "mass": 4,
        "clones": 4,
        "snippet": "    boolean isExpressionsFromThisRowSource(Expressions columns){\n        return rowSource.isExpressionsFromThisRowSource(columns);\n    }\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/Where.java","project://smallsql0.21_src/src/smallsql/database/Distinct.java","project://smallsql0.21_src/src/smallsql/database/SortedResult.java","project://smallsql0.21_src/src/smallsql/database/Scrollable.java",]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 3,
        "mass": 3,
        "clones": 4,
        "snippet": "final boolean rowDeleted() {\n\t\treturn rowSource.rowDeleted();\n\t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/Where.java","project://smallsql0.21_src/src/smallsql/database/Distinct.java","project://smallsql0.21_src/src/smallsql/database/SortedResult.java","project://smallsql0.21_src/src/smallsql/database/Scrollable.java",]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 4,
        "mass": 3,
        "clones": 2,
        "snippet": "{\n\t\t\tbeforeFirst();\n\t\t\treturn false;\n\t\t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/Scrollable.java","project://smallsql0.21_src/src/smallsql/database/Scrollable.java",]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 4,
        "mass": 3,
        "clones": 2,
        "snippet": "{\n\t\t\tbeforeFirst();\n\t\t\treturn false;\n\t\t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/Scrollable.java","project://smallsql0.21_src/src/smallsql/database/Scrollable.java",]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 3,
        "mass": 3,
        "clones": 4,
        "snippet": "final boolean isScrollable(){\n\t\treturn true;\n\t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/NoFromResult.java","project://smallsql0.21_src/src/smallsql/database/Scrollable.java","project://smallsql0.21_src/src/smallsql/database/SortedResult.java","project://smallsql0.21_src/src/smallsql/database/MemoryResult.java",]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 4,
        "mass": 4,
        "clones": 2,
        "snippet": "boolean last() throws Exception{\n\t\tafterLast();\n\t\treturn previous();\n\t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/SortedResult.java","project://smallsql0.21_src/src/smallsql/database/Scrollable.java",]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 4,
        "mass": 3,
        "clones": 3,
        "snippet": "{\n\t\t\t\trowSource.setRowPosition( rowList.get(rowIdx) );\n\t\t\t\treturn true;\n\t\t\t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/Scrollable.java","project://smallsql0.21_src/src/smallsql/database/Scrollable.java","project://smallsql0.21_src/src/smallsql/database/Scrollable.java",]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 4,
        "mass": 3,
        "clones": 3,
        "snippet": "{\n\t\t\t\trowSource.setRowPosition( rowList.get(rowIdx) );\n\t\t\t\treturn true;\n\t\t\t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/Scrollable.java","project://smallsql0.21_src/src/smallsql/database/Scrollable.java","project://smallsql0.21_src/src/smallsql/database/Scrollable.java",]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 4,
        "mass": 3,
        "clones": 3,
        "snippet": "{\n\t\t\t\trowSource.setRowPosition( rowList.get(rowIdx) );\n\t\t\t\treturn true;\n\t\t\t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/Scrollable.java","project://smallsql0.21_src/src/smallsql/database/Scrollable.java","project://smallsql0.21_src/src/smallsql/database/Scrollable.java",]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 3,
        "mass": 3,
        "clones": 2,
        "snippet": "final long getRowPosition(){\n\t\treturn rowIdx;\n\t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/MemoryResult.java","project://smallsql0.21_src/src/smallsql/database/Scrollable.java",]
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
        "cloneClassesType1": 20
    },
    "results": {
        "type-1": [
            
{
    "metadata": {
        "cc": 3,
        "volume": 4,
        "mass": 6,
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
        "mass": 6,
        "clones": 2,
        "snippet": "for (Iterator itr = diff.iterator(); itr.hasNext(); ) {\n                    msgBuf.append(itr.next());\n                    if (itr.hasNext()) msgBuf.append(',');\n                }\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java",]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 6,
        "mass": 4,
        "clones": 2,
        "snippet": "{\n\t\t\t\trecreateTestTab(stat);\n\t\t\t\tstat.execute(\"CREATE TABLE \" + TABLE_NAME + \" (id_test INT)\");\n\t\t\t\tfail();\n\t\t\t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java",]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 6,
        "mass": 4,
        "clones": 2,
        "snippet": "{\n\t\t\t\trecreateTestTab(stat);\n\t\t\t\tstat.execute(\"CREATE TABLE \" + TABLE_NAME + \" (id_test INT)\");\n\t\t\t\tfail();\n\t\t\t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 1,
        "mass": 3,
        "clones": 51,
        "snippet": "catch (Exception e) {}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/database/Database.java","project://smallsql0.21_src/src/smallsql/database/ExpressionInSelect.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 1,
        "mass": 3,
        "clones": 51,
        "snippet": "catch (Exception e) {}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/database/Database.java","project://smallsql0.21_src/src/smallsql/database/ExpressionInSelect.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 1,
        "mass": 3,
        "clones": 51,
        "snippet": "catch (Exception e) {}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/database/Database.java","project://smallsql0.21_src/src/smallsql/database/ExpressionInSelect.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 1,
        "mass": 3,
        "clones": 51,
        "snippet": "catch (Exception e) {}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/database/Database.java","project://smallsql0.21_src/src/smallsql/database/ExpressionInSelect.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 1,
        "mass": 3,
        "clones": 51,
        "snippet": "catch (Exception e) {}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/database/Database.java","project://smallsql0.21_src/src/smallsql/database/ExpressionInSelect.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 1,
        "mass": 3,
        "clones": 51,
        "snippet": "catch (Exception e) {}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/database/Database.java","project://smallsql0.21_src/src/smallsql/database/ExpressionInSelect.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 1,
        "mass": 3,
        "clones": 51,
        "snippet": "catch (Exception e) {}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/database/Database.java","project://smallsql0.21_src/src/smallsql/database/ExpressionInSelect.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 1,
        "mass": 3,
        "clones": 51,
        "snippet": "catch (Exception e) {}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/database/Database.java","project://smallsql0.21_src/src/smallsql/database/ExpressionInSelect.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 1,
        "mass": 3,
        "clones": 51,
        "snippet": "catch (Exception e) {}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/database/Database.java","project://smallsql0.21_src/src/smallsql/database/ExpressionInSelect.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 1,
        "mass": 3,
        "clones": 51,
        "snippet": "catch (Exception e) {}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/database/Database.java","project://smallsql0.21_src/src/smallsql/database/ExpressionInSelect.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 1,
        "mass": 3,
        "clones": 51,
        "snippet": "catch (Exception e) {}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/database/Database.java","project://smallsql0.21_src/src/smallsql/database/ExpressionInSelect.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 1,
        "mass": 3,
        "clones": 51,
        "snippet": "catch (Exception e) {}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/database/Database.java","project://smallsql0.21_src/src/smallsql/database/ExpressionInSelect.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 4,
        "mass": 4,
        "clones": 2,
        "snippet": "{\n                    msgBuf.append(itr.next());\n                    if (itr.hasNext()) msgBuf.append(',');\n                }\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 4,
        "mass": 4,
        "clones": 2,
        "snippet": "{\n                    msgBuf.append(itr.next());\n                    if (itr.hasNext()) msgBuf.append(',');\n                }\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 3,
        "mass": 4,
        "clones": 2,
        "snippet": "catch(SQLException e) {\n\t\t\t\tassertMessage(e, \"La tabella\/vista '\" + TABLE_NAME + \"' è già esistente.\");\n\t\t\t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 3,
        "mass": 4,
        "clones": 2,
        "snippet": "catch(SQLException e) {\n\t\t\t\tassertMessage(e, \"La tabella\/vista '\" + TABLE_NAME + \"' è già esistente.\");\n\t\t\t}\n"
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
    "filename": "project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionLTrim.java",
    "metadata": {
        "volume": 0,
        "cloneClassesType1": 1
    },
    "results": {
        "type-1": [
            
{
    "metadata": {
        "cc": 1,
        "volume": 3,
        "mass": 3,
        "clones": 13,
        "snippet": "final boolean isNull() throws Exception {\n\t\treturn param1.isNull();\n\t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionUCase.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionReturnFloat.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionOctetLen.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionRTrim.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionReturnString.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionBitLen.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionReturnP1.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionLCase.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionConvert.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionLTrim.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionReturnInt.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionSoundex.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionCharLen.java",]
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
        "cloneClassesType1": 7
    },
    "results": {
        "type-1": [
            
{
    "metadata": {
        "cc": 2,
        "volume": 3,
        "mass": 3,
        "clones": 11,
        "snippet": "boolean isNull() throws Exception {\n\t\treturn param1.isNull() || param2.isNull();\n\t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionTimestampAdd.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionATan2.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionTimestampDiff.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionTruncate.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionRound.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionDifference.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionMod.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionPower.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionRight.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionLocate.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionLeft.java",]
}
,
{
    "metadata": {
        "cc": 4,
        "volume": 11,
        "mass": 13,
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
        "mass": 6,
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
        "mass": 6,
        "clones": 2,
        "snippet": "{\n\t\t\tfor(int i=0; i<places; i++){\n\t\t\t}\n\t\t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionRound.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionTruncate.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 5,
        "mass": 5,
        "clones": 2,
        "snippet": "if(places > 0){\n\t\t\tvalue \/= factor;\n\t\t}else{\n\t\t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionRound.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionTruncate.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 3,
        "mass": 4,
        "clones": 2,
        "snippet": "for(int i=0; i>places; i--){\n\t\t\t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionRound.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionTruncate.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 3,
        "mass": 4,
        "clones": 2,
        "snippet": "for(int i=0; i<places; i++){\n\t\t\t}\n"
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
        "mass": 7,
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
        "mass": 7,
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
        "cloneClassesType1": 43
    },
    "results": {
        "type-1": [
            
{
    "metadata": {
        "cc": 2,
        "volume": 3,
        "mass": 4,
        "clones": 8,
        "snippet": "catch(SQLException ex){\n            assertSQLException(\"01000\", 0, ex);\n        }\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/junit/TestStatement.java","project://smallsql0.21_src/src/smallsql/junit/TestStatement.java","project://smallsql0.21_src/src/smallsql/junit/TestStatement.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestAlterTable.java","project://smallsql0.21_src/src/smallsql/junit/TestAlterTable2.java","project://smallsql0.21_src/src/smallsql/junit/TestAlterTable.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 3,
        "mass": 4,
        "clones": 8,
        "snippet": "catch(SQLException ex){\n            assertSQLException(\"01000\", 0, ex);\n        }\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/junit/TestStatement.java","project://smallsql0.21_src/src/smallsql/junit/TestStatement.java","project://smallsql0.21_src/src/smallsql/junit/TestStatement.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestAlterTable.java","project://smallsql0.21_src/src/smallsql/junit/TestAlterTable2.java","project://smallsql0.21_src/src/smallsql/junit/TestAlterTable.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 3,
        "mass": 7,
        "clones": 1,
        "snippet": "try{\n\t\t\t\tcon.createStatement().execute(\"Drop Table transactions\");\n\t\t\t}catch(Throwable e){e.printStackTrace();}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 1,
        "mass": 4,
        "clones": 37,
        "snippet": "catch(Throwable e){e.printStackTrace();}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestOperatoren.java","project://smallsql0.21_src/src/smallsql/junit/TestFunctions.java","project://smallsql0.21_src/src/smallsql/junit/TestOrderBy.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/AllTests.java","project://smallsql0.21_src/src/smallsql/junit/TestAlterTable.java","project://smallsql0.21_src/src/smallsql/database/SSDriver.java","project://smallsql0.21_src/src/smallsql/junit/TestGroupBy.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 1,
        "mass": 4,
        "clones": 37,
        "snippet": "catch(Throwable e){e.printStackTrace();}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestOperatoren.java","project://smallsql0.21_src/src/smallsql/junit/TestFunctions.java","project://smallsql0.21_src/src/smallsql/junit/TestOrderBy.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/AllTests.java","project://smallsql0.21_src/src/smallsql/junit/TestAlterTable.java","project://smallsql0.21_src/src/smallsql/database/SSDriver.java","project://smallsql0.21_src/src/smallsql/junit/TestGroupBy.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 1,
        "mass": 4,
        "clones": 37,
        "snippet": "catch(Throwable e){e.printStackTrace();}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestOperatoren.java","project://smallsql0.21_src/src/smallsql/junit/TestFunctions.java","project://smallsql0.21_src/src/smallsql/junit/TestOrderBy.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/AllTests.java","project://smallsql0.21_src/src/smallsql/junit/TestAlterTable.java","project://smallsql0.21_src/src/smallsql/database/SSDriver.java","project://smallsql0.21_src/src/smallsql/junit/TestGroupBy.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 1,
        "mass": 4,
        "clones": 37,
        "snippet": "catch(Throwable e){e.printStackTrace();}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestOperatoren.java","project://smallsql0.21_src/src/smallsql/junit/TestFunctions.java","project://smallsql0.21_src/src/smallsql/junit/TestOrderBy.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/AllTests.java","project://smallsql0.21_src/src/smallsql/junit/TestAlterTable.java","project://smallsql0.21_src/src/smallsql/database/SSDriver.java","project://smallsql0.21_src/src/smallsql/junit/TestGroupBy.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 1,
        "mass": 4,
        "clones": 37,
        "snippet": "catch(Throwable e){e.printStackTrace();}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestOperatoren.java","project://smallsql0.21_src/src/smallsql/junit/TestFunctions.java","project://smallsql0.21_src/src/smallsql/junit/TestOrderBy.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/AllTests.java","project://smallsql0.21_src/src/smallsql/junit/TestAlterTable.java","project://smallsql0.21_src/src/smallsql/database/SSDriver.java","project://smallsql0.21_src/src/smallsql/junit/TestGroupBy.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 1,
        "mass": 4,
        "clones": 37,
        "snippet": "catch(Throwable e){e.printStackTrace();}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestOperatoren.java","project://smallsql0.21_src/src/smallsql/junit/TestFunctions.java","project://smallsql0.21_src/src/smallsql/junit/TestOrderBy.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/AllTests.java","project://smallsql0.21_src/src/smallsql/junit/TestAlterTable.java","project://smallsql0.21_src/src/smallsql/database/SSDriver.java","project://smallsql0.21_src/src/smallsql/junit/TestGroupBy.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 1,
        "mass": 4,
        "clones": 37,
        "snippet": "catch(Throwable e){e.printStackTrace();}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestOperatoren.java","project://smallsql0.21_src/src/smallsql/junit/TestFunctions.java","project://smallsql0.21_src/src/smallsql/junit/TestOrderBy.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/AllTests.java","project://smallsql0.21_src/src/smallsql/junit/TestAlterTable.java","project://smallsql0.21_src/src/smallsql/database/SSDriver.java","project://smallsql0.21_src/src/smallsql/junit/TestGroupBy.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 1,
        "mass": 4,
        "clones": 37,
        "snippet": "catch(Throwable e){e.printStackTrace();}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestOperatoren.java","project://smallsql0.21_src/src/smallsql/junit/TestFunctions.java","project://smallsql0.21_src/src/smallsql/junit/TestOrderBy.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/AllTests.java","project://smallsql0.21_src/src/smallsql/junit/TestAlterTable.java","project://smallsql0.21_src/src/smallsql/database/SSDriver.java","project://smallsql0.21_src/src/smallsql/junit/TestGroupBy.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 1,
        "mass": 4,
        "clones": 37,
        "snippet": "catch(Throwable e){e.printStackTrace();}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestOperatoren.java","project://smallsql0.21_src/src/smallsql/junit/TestFunctions.java","project://smallsql0.21_src/src/smallsql/junit/TestOrderBy.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/AllTests.java","project://smallsql0.21_src/src/smallsql/junit/TestAlterTable.java","project://smallsql0.21_src/src/smallsql/database/SSDriver.java","project://smallsql0.21_src/src/smallsql/junit/TestGroupBy.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 1,
        "mass": 4,
        "clones": 37,
        "snippet": "catch(Throwable e){e.printStackTrace();}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestOperatoren.java","project://smallsql0.21_src/src/smallsql/junit/TestFunctions.java","project://smallsql0.21_src/src/smallsql/junit/TestOrderBy.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/AllTests.java","project://smallsql0.21_src/src/smallsql/junit/TestAlterTable.java","project://smallsql0.21_src/src/smallsql/database/SSDriver.java","project://smallsql0.21_src/src/smallsql/junit/TestGroupBy.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 1,
        "mass": 4,
        "clones": 37,
        "snippet": "catch(Throwable e){e.printStackTrace();}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestOperatoren.java","project://smallsql0.21_src/src/smallsql/junit/TestFunctions.java","project://smallsql0.21_src/src/smallsql/junit/TestOrderBy.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/AllTests.java","project://smallsql0.21_src/src/smallsql/junit/TestAlterTable.java","project://smallsql0.21_src/src/smallsql/database/SSDriver.java","project://smallsql0.21_src/src/smallsql/junit/TestGroupBy.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 1,
        "mass": 4,
        "clones": 37,
        "snippet": "catch(Throwable e){e.printStackTrace();}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestOperatoren.java","project://smallsql0.21_src/src/smallsql/junit/TestFunctions.java","project://smallsql0.21_src/src/smallsql/junit/TestOrderBy.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/AllTests.java","project://smallsql0.21_src/src/smallsql/junit/TestAlterTable.java","project://smallsql0.21_src/src/smallsql/database/SSDriver.java","project://smallsql0.21_src/src/smallsql/junit/TestGroupBy.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 1,
        "mass": 4,
        "clones": 37,
        "snippet": "catch(Throwable e){e.printStackTrace();}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestOperatoren.java","project://smallsql0.21_src/src/smallsql/junit/TestFunctions.java","project://smallsql0.21_src/src/smallsql/junit/TestOrderBy.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/AllTests.java","project://smallsql0.21_src/src/smallsql/junit/TestAlterTable.java","project://smallsql0.21_src/src/smallsql/database/SSDriver.java","project://smallsql0.21_src/src/smallsql/junit/TestGroupBy.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 1,
        "mass": 4,
        "clones": 37,
        "snippet": "catch(Throwable e){e.printStackTrace();}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestOperatoren.java","project://smallsql0.21_src/src/smallsql/junit/TestFunctions.java","project://smallsql0.21_src/src/smallsql/junit/TestOrderBy.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/AllTests.java","project://smallsql0.21_src/src/smallsql/junit/TestAlterTable.java","project://smallsql0.21_src/src/smallsql/database/SSDriver.java","project://smallsql0.21_src/src/smallsql/junit/TestGroupBy.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 1,
        "mass": 4,
        "clones": 37,
        "snippet": "catch(Throwable e){e.printStackTrace();}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestOperatoren.java","project://smallsql0.21_src/src/smallsql/junit/TestFunctions.java","project://smallsql0.21_src/src/smallsql/junit/TestOrderBy.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/AllTests.java","project://smallsql0.21_src/src/smallsql/junit/TestAlterTable.java","project://smallsql0.21_src/src/smallsql/database/SSDriver.java","project://smallsql0.21_src/src/smallsql/junit/TestGroupBy.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 1,
        "mass": 4,
        "clones": 37,
        "snippet": "catch(Throwable e){e.printStackTrace();}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestOperatoren.java","project://smallsql0.21_src/src/smallsql/junit/TestFunctions.java","project://smallsql0.21_src/src/smallsql/junit/TestOrderBy.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/AllTests.java","project://smallsql0.21_src/src/smallsql/junit/TestAlterTable.java","project://smallsql0.21_src/src/smallsql/database/SSDriver.java","project://smallsql0.21_src/src/smallsql/junit/TestGroupBy.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 1,
        "mass": 4,
        "clones": 37,
        "snippet": "catch(Throwable e){e.printStackTrace();}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestOperatoren.java","project://smallsql0.21_src/src/smallsql/junit/TestFunctions.java","project://smallsql0.21_src/src/smallsql/junit/TestOrderBy.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/AllTests.java","project://smallsql0.21_src/src/smallsql/junit/TestAlterTable.java","project://smallsql0.21_src/src/smallsql/database/SSDriver.java","project://smallsql0.21_src/src/smallsql/junit/TestGroupBy.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 1,
        "mass": 4,
        "clones": 37,
        "snippet": "catch(Throwable e){e.printStackTrace();}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestOperatoren.java","project://smallsql0.21_src/src/smallsql/junit/TestFunctions.java","project://smallsql0.21_src/src/smallsql/junit/TestOrderBy.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/AllTests.java","project://smallsql0.21_src/src/smallsql/junit/TestAlterTable.java","project://smallsql0.21_src/src/smallsql/database/SSDriver.java","project://smallsql0.21_src/src/smallsql/junit/TestGroupBy.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 1,
        "mass": 4,
        "clones": 37,
        "snippet": "catch(Throwable e){e.printStackTrace();}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestOperatoren.java","project://smallsql0.21_src/src/smallsql/junit/TestFunctions.java","project://smallsql0.21_src/src/smallsql/junit/TestOrderBy.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/AllTests.java","project://smallsql0.21_src/src/smallsql/junit/TestAlterTable.java","project://smallsql0.21_src/src/smallsql/database/SSDriver.java","project://smallsql0.21_src/src/smallsql/junit/TestGroupBy.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 1,
        "mass": 4,
        "clones": 37,
        "snippet": "catch(Throwable e){e.printStackTrace();}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestOperatoren.java","project://smallsql0.21_src/src/smallsql/junit/TestFunctions.java","project://smallsql0.21_src/src/smallsql/junit/TestOrderBy.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/AllTests.java","project://smallsql0.21_src/src/smallsql/junit/TestAlterTable.java","project://smallsql0.21_src/src/smallsql/database/SSDriver.java","project://smallsql0.21_src/src/smallsql/junit/TestGroupBy.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 1,
        "mass": 4,
        "clones": 37,
        "snippet": "catch(Throwable e){e.printStackTrace();}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestOperatoren.java","project://smallsql0.21_src/src/smallsql/junit/TestFunctions.java","project://smallsql0.21_src/src/smallsql/junit/TestOrderBy.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/AllTests.java","project://smallsql0.21_src/src/smallsql/junit/TestAlterTable.java","project://smallsql0.21_src/src/smallsql/database/SSDriver.java","project://smallsql0.21_src/src/smallsql/junit/TestGroupBy.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 1,
        "mass": 4,
        "clones": 37,
        "snippet": "catch(Throwable e){e.printStackTrace();}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestOperatoren.java","project://smallsql0.21_src/src/smallsql/junit/TestFunctions.java","project://smallsql0.21_src/src/smallsql/junit/TestOrderBy.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/AllTests.java","project://smallsql0.21_src/src/smallsql/junit/TestAlterTable.java","project://smallsql0.21_src/src/smallsql/database/SSDriver.java","project://smallsql0.21_src/src/smallsql/junit/TestGroupBy.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 1,
        "mass": 4,
        "clones": 37,
        "snippet": "catch(Throwable e){e.printStackTrace();}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestOperatoren.java","project://smallsql0.21_src/src/smallsql/junit/TestFunctions.java","project://smallsql0.21_src/src/smallsql/junit/TestOrderBy.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/AllTests.java","project://smallsql0.21_src/src/smallsql/junit/TestAlterTable.java","project://smallsql0.21_src/src/smallsql/database/SSDriver.java","project://smallsql0.21_src/src/smallsql/junit/TestGroupBy.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 1,
        "mass": 4,
        "clones": 37,
        "snippet": "catch(Throwable e){e.printStackTrace();}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestOperatoren.java","project://smallsql0.21_src/src/smallsql/junit/TestFunctions.java","project://smallsql0.21_src/src/smallsql/junit/TestOrderBy.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/AllTests.java","project://smallsql0.21_src/src/smallsql/junit/TestAlterTable.java","project://smallsql0.21_src/src/smallsql/database/SSDriver.java","project://smallsql0.21_src/src/smallsql/junit/TestGroupBy.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 1,
        "mass": 4,
        "clones": 37,
        "snippet": "catch(Throwable e){e.printStackTrace();}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestOperatoren.java","project://smallsql0.21_src/src/smallsql/junit/TestFunctions.java","project://smallsql0.21_src/src/smallsql/junit/TestOrderBy.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/AllTests.java","project://smallsql0.21_src/src/smallsql/junit/TestAlterTable.java","project://smallsql0.21_src/src/smallsql/database/SSDriver.java","project://smallsql0.21_src/src/smallsql/junit/TestGroupBy.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 1,
        "mass": 4,
        "clones": 37,
        "snippet": "catch(Throwable e){e.printStackTrace();}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestOperatoren.java","project://smallsql0.21_src/src/smallsql/junit/TestFunctions.java","project://smallsql0.21_src/src/smallsql/junit/TestOrderBy.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/AllTests.java","project://smallsql0.21_src/src/smallsql/junit/TestAlterTable.java","project://smallsql0.21_src/src/smallsql/database/SSDriver.java","project://smallsql0.21_src/src/smallsql/junit/TestGroupBy.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 1,
        "mass": 4,
        "clones": 37,
        "snippet": "catch(Throwable e){e.printStackTrace();}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestOperatoren.java","project://smallsql0.21_src/src/smallsql/junit/TestFunctions.java","project://smallsql0.21_src/src/smallsql/junit/TestOrderBy.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/AllTests.java","project://smallsql0.21_src/src/smallsql/junit/TestAlterTable.java","project://smallsql0.21_src/src/smallsql/database/SSDriver.java","project://smallsql0.21_src/src/smallsql/junit/TestGroupBy.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 1,
        "mass": 4,
        "clones": 37,
        "snippet": "catch(Throwable e){e.printStackTrace();}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestOperatoren.java","project://smallsql0.21_src/src/smallsql/junit/TestFunctions.java","project://smallsql0.21_src/src/smallsql/junit/TestOrderBy.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/AllTests.java","project://smallsql0.21_src/src/smallsql/junit/TestAlterTable.java","project://smallsql0.21_src/src/smallsql/database/SSDriver.java","project://smallsql0.21_src/src/smallsql/junit/TestGroupBy.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 1,
        "mass": 4,
        "clones": 37,
        "snippet": "catch(Throwable e){e.printStackTrace();}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestOperatoren.java","project://smallsql0.21_src/src/smallsql/junit/TestFunctions.java","project://smallsql0.21_src/src/smallsql/junit/TestOrderBy.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/AllTests.java","project://smallsql0.21_src/src/smallsql/junit/TestAlterTable.java","project://smallsql0.21_src/src/smallsql/database/SSDriver.java","project://smallsql0.21_src/src/smallsql/junit/TestGroupBy.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 1,
        "mass": 4,
        "clones": 37,
        "snippet": "catch(Throwable e){e.printStackTrace();}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestOperatoren.java","project://smallsql0.21_src/src/smallsql/junit/TestFunctions.java","project://smallsql0.21_src/src/smallsql/junit/TestOrderBy.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/AllTests.java","project://smallsql0.21_src/src/smallsql/junit/TestAlterTable.java","project://smallsql0.21_src/src/smallsql/database/SSDriver.java","project://smallsql0.21_src/src/smallsql/junit/TestGroupBy.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 5,
        "mass": 8,
        "clones": 2,
        "snippet": "{\n\t\t\ttry{\n\t\t\t\tcon.createStatement().execute(\"Drop Table transactions\");\n\t\t\t}catch(Throwable e){e.printStackTrace();}\n\t\t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 5,
        "mass": 8,
        "clones": 2,
        "snippet": "{\n\t\t\ttry{\n\t\t\t\tcon.createStatement().execute(\"Drop Table transactions\");\n\t\t\t}catch(Throwable e){e.printStackTrace();}\n\t\t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 6,
        "mass": 9,
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
        "mass": 9,
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
        "mass": 9,
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
        "mass": 9,
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
        "mass": 9,
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
        "mass": 9,
        "clones": 6,
        "snippet": "{\n\t\t\ttry{\n\t\t\t\tcon.createStatement().execute(\"Drop Table transactions\");\n\t\t\t}catch(Throwable e){e.printStackTrace();}\n\t\t\tcon.setAutoCommit(true);\n\t\t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java",]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 5,
        "mass": 4,
        "clones": 2,
        "snippet": "{\n            dropTable(con1, \"transactions\");\n\t\t\tcon1.setAutoCommit(true);\n\t\t\tcon2.close();\n\t\t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java",]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 5,
        "mass": 4,
        "clones": 2,
        "snippet": "{\n            dropTable(con1, \"transactions\");\n\t\t\tcon1.setAutoCommit(true);\n\t\t\tcon2.close();\n\t\t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java",]
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
        "cloneClassesType1": 6
    },
    "results": {
        "type-1": [
            
{
    "metadata": {
        "cc": 2,
        "volume": 5,
        "mass": 7,
        "clones": 3,
        "snippet": "final String getString() throws Exception{\n        Object obj = getObject();\n        if(obj == null) return null;\n        return obj.toString();\n    }\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionReturnFloat.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionAbs.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionFloor.java",]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 3,
        "mass": 3,
        "clones": 3,
        "snippet": "final boolean getBoolean() throws Exception{\n        return getDouble() != 0;\n    }\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionReturnP1Number.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionAbs.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionReturnFloat.java",]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 3,
        "mass": 3,
        "clones": 2,
        "snippet": "long getMoney() throws Exception{\n        return Utils.doubleToMoney(getDouble());\n    }\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionReturnFloat.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionReturnP1Number.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 5,
        "mass": 6,
        "clones": 3,
        "snippet": "{\n        Object obj = getObject();\n        if(obj == null) return null;\n        return obj.toString();\n    }\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionReturnFloat.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionAbs.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionFloor.java",]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 3,
        "mass": 3,
        "clones": 13,
        "snippet": "final boolean isNull() throws Exception {\n\t\treturn param1.isNull();\n\t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionUCase.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionReturnFloat.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionOctetLen.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionRTrim.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionReturnString.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionBitLen.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionReturnP1.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionLCase.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionConvert.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionLTrim.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionReturnInt.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionSoundex.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionCharLen.java",]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 3,
        "mass": 3,
        "clones": 2,
        "snippet": "final float getFloat() throws Exception{\n        return (float)getDouble();\n    }\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionReturnFloat.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionReturnP1Number.java",]
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
        "cloneClassesType1": 2
    },
    "results": {
        "type-1": [
            
{
    "metadata": {
        "cc": 2,
        "volume": 5,
        "mass": 7,
        "clones": 3,
        "snippet": "final String getString() throws Exception{\n        Object obj = getObject();\n        if(obj == null) return null;\n        return obj.toString();\n    }\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionReturnFloat.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionAbs.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionFloor.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 5,
        "mass": 6,
        "clones": 3,
        "snippet": "{\n        Object obj = getObject();\n        if(obj == null) return null;\n        return obj.toString();\n    }\n"
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
    "filename": "project://smallsql0.21_src/src/smallsql/database/CommandTable.java",
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
        "mass": 3,
        "clones": 4,
        "snippet": ""
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/CommandTable.java","project://smallsql0.21_src/src/smallsql/database/CommandTable.java","project://smallsql0.21_src/src/smallsql/database/CommandTable.java","project://smallsql0.21_src/src/smallsql/database/CommandTable.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 1,
        "mass": 3,
        "clones": 4,
        "snippet": ""
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/CommandTable.java","project://smallsql0.21_src/src/smallsql/database/CommandTable.java","project://smallsql0.21_src/src/smallsql/database/CommandTable.java","project://smallsql0.21_src/src/smallsql/database/CommandTable.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 1,
        "mass": 3,
        "clones": 4,
        "snippet": ""
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/CommandTable.java","project://smallsql0.21_src/src/smallsql/database/CommandTable.java","project://smallsql0.21_src/src/smallsql/database/CommandTable.java","project://smallsql0.21_src/src/smallsql/database/CommandTable.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 1,
        "mass": 3,
        "clones": 4,
        "snippet": ""
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/CommandTable.java","project://smallsql0.21_src/src/smallsql/database/CommandTable.java","project://smallsql0.21_src/src/smallsql/database/CommandTable.java","project://smallsql0.21_src/src/smallsql/database/CommandTable.java",]
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
        "cloneClassesType1": 5
    },
    "results": {
        "type-1": [
            
{
    "metadata": {
        "cc": 2,
        "volume": 5,
        "mass": 4,
        "clones": 3,
        "snippet": "{\n\t\tif (idx >= size)\n\t\t\tthrow new IndexOutOfBoundsException(\"Index: \"+idx+\", Size: \"+size);\n\t\treturn data[idx];\n\t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/LongList.java","project://smallsql0.21_src/src/smallsql/database/DataSources.java","project://smallsql0.21_src/src/smallsql/database/Expressions.java",]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 3,
        "mass": 3,
        "clones": 3,
        "snippet": "final void clear(){\n\t\tsize = 0;\n\t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/LongList.java","project://smallsql0.21_src/src/smallsql/database/LongLongList.java","project://smallsql0.21_src/src/smallsql/database/Expressions.java",]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 3,
        "mass": 3,
        "clones": 9,
        "snippet": "final int size(){\n\t\treturn size;\n\t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/IndexDescriptions.java","project://smallsql0.21_src/src/smallsql/database/Columns.java","project://smallsql0.21_src/src/smallsql/database/LongList.java","project://smallsql0.21_src/src/smallsql/database/Strings.java","project://smallsql0.21_src/src/smallsql/database/Expressions.java","project://smallsql0.21_src/src/smallsql/database/ForeignKeys.java","project://smallsql0.21_src/src/smallsql/database/LongLongList.java","project://smallsql0.21_src/src/smallsql/database/DataSources.java","project://smallsql0.21_src/src/smallsql/database/StorePageMap.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 3,
        "mass": 3,
        "clones": 7,
        "snippet": "if(size >= data.length ){\n\t\t\tresize(size << 1);\n\t\t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/IndexDescriptions.java","project://smallsql0.21_src/src/smallsql/database/Columns.java","project://smallsql0.21_src/src/smallsql/database/LongList.java","project://smallsql0.21_src/src/smallsql/database/Strings.java","project://smallsql0.21_src/src/smallsql/database/Expressions.java","project://smallsql0.21_src/src/smallsql/database/ForeignKeys.java","project://smallsql0.21_src/src/smallsql/database/Expressions.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 3,
        "mass": 3,
        "clones": 7,
        "snippet": "if(size >= data.length ){\n\t\t\tresize(size << 1);\n\t\t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/IndexDescriptions.java","project://smallsql0.21_src/src/smallsql/database/Columns.java","project://smallsql0.21_src/src/smallsql/database/LongList.java","project://smallsql0.21_src/src/smallsql/database/Strings.java","project://smallsql0.21_src/src/smallsql/database/Expressions.java","project://smallsql0.21_src/src/smallsql/database/ForeignKeys.java","project://smallsql0.21_src/src/smallsql/database/Expressions.java",]
}
,
        ],
        "type-2": [
            
        ]
    }
}
,
{
    "filename": "project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionLocate.java",
    "metadata": {
        "volume": 0,
        "cloneClassesType1": 1
    },
    "results": {
        "type-1": [
            
{
    "metadata": {
        "cc": 2,
        "volume": 3,
        "mass": 3,
        "clones": 11,
        "snippet": "boolean isNull() throws Exception {\n\t\treturn param1.isNull() || param2.isNull();\n\t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionTimestampAdd.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionATan2.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionTimestampDiff.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionTruncate.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionRound.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionDifference.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionMod.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionPower.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionRight.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionLocate.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionLeft.java",]
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
        "cloneClassesType1": 12
    },
    "results": {
        "type-1": [
            
{
    "metadata": {
        "cc": 2,
        "volume": 5,
        "mass": 6,
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
        "mass": 6,
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
        "mass": 6,
        "clones": 3,
        "snippet": "        for(int i = 0; i < threadList.size(); i++){\n            Thread thread = (Thread)threadList.get(i);\n            thread.join(5000);\n        }\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/junit/TestThreads.java","project://smallsql0.21_src/src/smallsql/junit/TestThreads.java","project://smallsql0.21_src/src/smallsql/junit/TestThreads.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 3,
        "mass": 4,
        "clones": 3,
        "snippet": "catch(Throwable ex){\n                        throwable = ex;\n                    }\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/junit/TestThreads.java","project://smallsql0.21_src/src/smallsql/junit/TestThreads.java","project://smallsql0.21_src/src/smallsql/junit/TestThreads.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 3,
        "mass": 4,
        "clones": 3,
        "snippet": "catch(Throwable ex){\n                        throwable = ex;\n                    }\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/junit/TestThreads.java","project://smallsql0.21_src/src/smallsql/junit/TestThreads.java","project://smallsql0.21_src/src/smallsql/junit/TestThreads.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 3,
        "mass": 4,
        "clones": 3,
        "snippet": "catch(Throwable ex){\n                        throwable = ex;\n                    }\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/junit/TestThreads.java","project://smallsql0.21_src/src/smallsql/junit/TestThreads.java","project://smallsql0.21_src/src/smallsql/junit/TestThreads.java",]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 4,
        "mass": 4,
        "clones": 3,
        "snippet": "{\n            Thread thread = (Thread)threadList.get(i);\n            thread.join(5000);\n        }\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/junit/TestThreads.java","project://smallsql0.21_src/src/smallsql/junit/TestThreads.java","project://smallsql0.21_src/src/smallsql/junit/TestThreads.java",]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 4,
        "mass": 4,
        "clones": 3,
        "snippet": "{\n            Thread thread = (Thread)threadList.get(i);\n            thread.join(5000);\n        }\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/junit/TestThreads.java","project://smallsql0.21_src/src/smallsql/junit/TestThreads.java","project://smallsql0.21_src/src/smallsql/junit/TestThreads.java",]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 4,
        "mass": 4,
        "clones": 3,
        "snippet": "{\n            Thread thread = (Thread)threadList.get(i);\n            thread.join(5000);\n        }\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/junit/TestThreads.java","project://smallsql0.21_src/src/smallsql/junit/TestThreads.java","project://smallsql0.21_src/src/smallsql/junit/TestThreads.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 4,
        "mass": 3,
        "clones": 3,
        "snippet": "        if(throwable != null){\n            throw throwable;\n        }\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/junit/TestThreads.java","project://smallsql0.21_src/src/smallsql/junit/TestThreads.java","project://smallsql0.21_src/src/smallsql/junit/TestThreads.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 4,
        "mass": 3,
        "clones": 3,
        "snippet": "        if(throwable != null){\n            throw throwable;\n        }\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/junit/TestThreads.java","project://smallsql0.21_src/src/smallsql/junit/TestThreads.java","project://smallsql0.21_src/src/smallsql/junit/TestThreads.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 4,
        "mass": 3,
        "clones": 3,
        "snippet": "        if(throwable != null){\n            throw throwable;\n        }\n"
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
    "filename": "project://smallsql0.21_src/src/smallsql/database/ViewResult.java",
    "metadata": {
        "volume": 0,
        "cloneClassesType1": 1
    },
    "results": {
        "type-1": [
            
{
    "metadata": {
        "cc": 2,
        "volume": 3,
        "mass": 4,
        "clones": 53,
        "snippet": "catch(Exception e){\n    \t\tthrow SmallSQLException.createFromException(e);\n    \t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/SSPreparedStatement.java","project://smallsql0.21_src/src/smallsql/database/SSPreparedStatement.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/ViewResult.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSStatement.java","project://smallsql0.21_src/src/smallsql/database/StorePage.java","project://smallsql0.21_src/src/smallsql/database/Database.java","project://smallsql0.21_src/src/smallsql/database/Database.java",]
}
,
        ],
        "type-2": [
            
        ]
    }
}
,
{
    "filename": "project://smallsql0.21_src/src/smallsql/database/ExpressionArithmetic.java",
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
        "mass": 4,
        "clones": 2,
        "snippet": "{\n        if(isNull()) return null;\n        return getObject().toString();\n    }\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/ExpressionArithmetic.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionReturnP1Number.java",]
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
        "volume": 4,
        "mass": 3,
        "clones": 2,
        "snippet": "{\n        super(testValue.dataType);\n        this.testValue = testValue;\n    }\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/junit/TestJoins.java","project://smallsql0.21_src/src/smallsql/junit/TestOperatoren.java",]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 5,
        "mass": 4,
        "clones": 2,
        "snippet": "private static class TestValue{\n        String dataType;\n        Object small;\n        Object large;\n    }\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/junit/TestJoins.java","project://smallsql0.21_src/src/smallsql/junit/TestOperatoren.java",]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 7,
        "mass": 11,
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
    "filename": "project://smallsql0.21_src/src/smallsql/database/ExpressionValue.java",
    "metadata": {
        "volume": 0,
        "cloneClassesType1": 4
    },
    "results": {
        "type-1": [
            
{
    "metadata": {
        "cc": 1,
        "volume": 3,
        "mass": 3,
        "clones": 3,
        "snippet": "int getDataType(){\n        return dataType;\n    }\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/Column.java","project://smallsql0.21_src/src/smallsql/database/ExpressionValue.java","project://smallsql0.21_src/src/smallsql/database/DateTime.java",]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 3,
        "mass": 3,
        "clones": 2,
        "snippet": "String getTableName(){\n\t\treturn null;\n\t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/ExpressionValue.java","project://smallsql0.21_src/src/smallsql/database/Expression.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 6,
        "mass": 4,
        "clones": 2,
        "snippet": "{\n\t\t\t\t\tif(expr.isNull())\n\t\t\t\t\t\tdataType = expr.getDataType();\n\t\t\t\t\telse\n\t\t\t\t\t\tinitValue( expr );\n\t\t\t\t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/ExpressionValue.java","project://smallsql0.21_src/src/smallsql/database/ExpressionValue.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 6,
        "mass": 4,
        "clones": 2,
        "snippet": "{\n\t\t\t\t\tif(expr.isNull())\n\t\t\t\t\t\tdataType = expr.getDataType();\n\t\t\t\t\telse\n\t\t\t\t\t\tinitValue( expr );\n\t\t\t\t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/ExpressionValue.java","project://smallsql0.21_src/src/smallsql/database/ExpressionValue.java",]
}
,
        ],
        "type-2": [
            
        ]
    }
}
,
{
    "filename": "project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionReturnP1.java",
    "metadata": {
        "volume": 0,
        "cloneClassesType1": 1
    },
    "results": {
        "type-1": [
            
{
    "metadata": {
        "cc": 1,
        "volume": 3,
        "mass": 3,
        "clones": 13,
        "snippet": "final boolean isNull() throws Exception {\n\t\treturn param1.isNull();\n\t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionUCase.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionReturnFloat.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionOctetLen.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionRTrim.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionReturnString.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionBitLen.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionReturnP1.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionLCase.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionConvert.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionLTrim.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionReturnInt.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionSoundex.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionCharLen.java",]
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
        "cloneClassesType1": 14
    },
    "results": {
        "type-1": [
            
{
    "metadata": {
        "cc": 2,
        "volume": 3,
        "mass": 4,
        "clones": 53,
        "snippet": "catch(Exception e){\n    \t\tthrow SmallSQLException.createFromException(e);\n    \t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/SSPreparedStatement.java","project://smallsql0.21_src/src/smallsql/database/SSPreparedStatement.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/ViewResult.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSStatement.java","project://smallsql0.21_src/src/smallsql/database/StorePage.java","project://smallsql0.21_src/src/smallsql/database/Database.java","project://smallsql0.21_src/src/smallsql/database/Database.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 3,
        "mass": 4,
        "clones": 53,
        "snippet": "catch(Exception e){\n    \t\tthrow SmallSQLException.createFromException(e);\n    \t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/SSPreparedStatement.java","project://smallsql0.21_src/src/smallsql/database/SSPreparedStatement.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/ViewResult.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSStatement.java","project://smallsql0.21_src/src/smallsql/database/StorePage.java","project://smallsql0.21_src/src/smallsql/database/Database.java","project://smallsql0.21_src/src/smallsql/database/Database.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 3,
        "mass": 4,
        "clones": 53,
        "snippet": "catch(Exception e){\n    \t\tthrow SmallSQLException.createFromException(e);\n    \t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/SSPreparedStatement.java","project://smallsql0.21_src/src/smallsql/database/SSPreparedStatement.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/ViewResult.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSStatement.java","project://smallsql0.21_src/src/smallsql/database/StorePage.java","project://smallsql0.21_src/src/smallsql/database/Database.java","project://smallsql0.21_src/src/smallsql/database/Database.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 3,
        "mass": 4,
        "clones": 53,
        "snippet": "catch(Exception e){\n    \t\tthrow SmallSQLException.createFromException(e);\n    \t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/SSPreparedStatement.java","project://smallsql0.21_src/src/smallsql/database/SSPreparedStatement.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/ViewResult.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSStatement.java","project://smallsql0.21_src/src/smallsql/database/StorePage.java","project://smallsql0.21_src/src/smallsql/database/Database.java","project://smallsql0.21_src/src/smallsql/database/Database.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 3,
        "mass": 4,
        "clones": 53,
        "snippet": "catch(Exception e){\n    \t\tthrow SmallSQLException.createFromException(e);\n    \t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/SSPreparedStatement.java","project://smallsql0.21_src/src/smallsql/database/SSPreparedStatement.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/ViewResult.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSStatement.java","project://smallsql0.21_src/src/smallsql/database/StorePage.java","project://smallsql0.21_src/src/smallsql/database/Database.java","project://smallsql0.21_src/src/smallsql/database/Database.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 3,
        "mass": 4,
        "clones": 53,
        "snippet": "catch(Exception e){\n    \t\tthrow SmallSQLException.createFromException(e);\n    \t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/SSPreparedStatement.java","project://smallsql0.21_src/src/smallsql/database/SSPreparedStatement.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/ViewResult.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSStatement.java","project://smallsql0.21_src/src/smallsql/database/StorePage.java","project://smallsql0.21_src/src/smallsql/database/Database.java","project://smallsql0.21_src/src/smallsql/database/Database.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 3,
        "mass": 4,
        "clones": 53,
        "snippet": "catch(Exception e){\n    \t\tthrow SmallSQLException.createFromException(e);\n    \t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/SSPreparedStatement.java","project://smallsql0.21_src/src/smallsql/database/SSPreparedStatement.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/ViewResult.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSStatement.java","project://smallsql0.21_src/src/smallsql/database/StorePage.java","project://smallsql0.21_src/src/smallsql/database/Database.java","project://smallsql0.21_src/src/smallsql/database/Database.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 3,
        "mass": 4,
        "clones": 53,
        "snippet": "catch(Exception e){\n    \t\tthrow SmallSQLException.createFromException(e);\n    \t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/SSPreparedStatement.java","project://smallsql0.21_src/src/smallsql/database/SSPreparedStatement.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/ViewResult.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSStatement.java","project://smallsql0.21_src/src/smallsql/database/StorePage.java","project://smallsql0.21_src/src/smallsql/database/Database.java","project://smallsql0.21_src/src/smallsql/database/Database.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 3,
        "mass": 4,
        "clones": 53,
        "snippet": "catch(Exception e){\n    \t\tthrow SmallSQLException.createFromException(e);\n    \t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/SSPreparedStatement.java","project://smallsql0.21_src/src/smallsql/database/SSPreparedStatement.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/ViewResult.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSStatement.java","project://smallsql0.21_src/src/smallsql/database/StorePage.java","project://smallsql0.21_src/src/smallsql/database/Database.java","project://smallsql0.21_src/src/smallsql/database/Database.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 3,
        "mass": 4,
        "clones": 53,
        "snippet": "catch(Exception e){\n    \t\tthrow SmallSQLException.createFromException(e);\n    \t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/SSPreparedStatement.java","project://smallsql0.21_src/src/smallsql/database/SSPreparedStatement.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/ViewResult.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSStatement.java","project://smallsql0.21_src/src/smallsql/database/StorePage.java","project://smallsql0.21_src/src/smallsql/database/Database.java","project://smallsql0.21_src/src/smallsql/database/Database.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 3,
        "mass": 4,
        "clones": 53,
        "snippet": "catch(Exception e){\n    \t\tthrow SmallSQLException.createFromException(e);\n    \t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/SSPreparedStatement.java","project://smallsql0.21_src/src/smallsql/database/SSPreparedStatement.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/ViewResult.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSStatement.java","project://smallsql0.21_src/src/smallsql/database/StorePage.java","project://smallsql0.21_src/src/smallsql/database/Database.java","project://smallsql0.21_src/src/smallsql/database/Database.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 9,
        "mass": 11,
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
        "mass": 11,
        "clones": 2,
        "snippet": "{\n        try{\n            Expression expr = getValue(i);\n            wasNull = expr.isNull();\n            return expr.getLong();\n        }catch(Exception e){\n            throw SmallSQLException.createFromException( e );\n        }\n    }\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java",]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 3,
        "mass": 3,
        "clones": 2,
        "snippet": "public boolean wasNull(){\n        return wasNull;\n    }\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java",]
}
,
        ],
        "type-2": [
            
        ]
    }
}
,
{
    "filename": "project://smallsql0.21_src/src/smallsql/database/MutableDouble.java",
    "metadata": {
        "volume": 0,
        "cloneClassesType1": 4
    },
    "results": {
        "type-1": [
            
{
    "metadata": {
        "cc": 1,
        "volume": 3,
        "mass": 3,
        "clones": 5,
        "snippet": "public double doubleValue() {\n\t\treturn value;\n\t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/MutableDouble.java","project://smallsql0.21_src/src/smallsql/database/MutableInteger.java","project://smallsql0.21_src/src/smallsql/database/MutableFloat.java","project://smallsql0.21_src/src/smallsql/database/MutableLong.java","project://smallsql0.21_src/src/smallsql/database/Identity.java",]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 3,
        "mass": 3,
        "clones": 5,
        "snippet": "public String toString(){\n\t\treturn String.valueOf(value);\n\t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/MutableDouble.java","project://smallsql0.21_src/src/smallsql/database/MutableInteger.java","project://smallsql0.21_src/src/smallsql/database/MutableFloat.java","project://smallsql0.21_src/src/smallsql/database/MutableLong.java","project://smallsql0.21_src/src/smallsql/database/Identity.java",]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 3,
        "mass": 3,
        "clones": 4,
        "snippet": "public int intValue() {\n\t\treturn (int)value;\n\t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/MutableDouble.java","project://smallsql0.21_src/src/smallsql/database/MutableFloat.java","project://smallsql0.21_src/src/smallsql/database/MutableLong.java","project://smallsql0.21_src/src/smallsql/database/Identity.java",]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 3,
        "mass": 3,
        "clones": 2,
        "snippet": "public long longValue() {\n\t\treturn (long)value;\n\t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/MutableFloat.java","project://smallsql0.21_src/src/smallsql/database/MutableDouble.java",]
}
,
        ],
        "type-2": [
            
        ]
    }
}
,
{
    "filename": "project://smallsql0.21_src/src/smallsql/database/SSConnection.java",
    "metadata": {
        "volume": 0,
        "cloneClassesType1": 2
    },
    "results": {
        "type-1": [
            
{
    "metadata": {
        "cc": 1,
        "volume": 3,
        "mass": 3,
        "clones": 3,
        "snippet": "public SQLWarning getWarnings(){\n        return null;\n    }\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSConnection.java","project://smallsql0.21_src/src/smallsql/database/SSStatement.java",]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 3,
        "mass": 3,
        "clones": 2,
        "snippet": "boolean isReadOnly(){\n\t    return readonly;\n\t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/Database.java","project://smallsql0.21_src/src/smallsql/database/SSConnection.java",]
}
,
        ],
        "type-2": [
            
        ]
    }
}
,
{
    "filename": "project://smallsql0.21_src/src/smallsql/database/MemoryResult.java",
    "metadata": {
        "volume": 0,
        "cloneClassesType1": 6
    },
    "results": {
        "type-1": [
            
{
    "metadata": {
        "cc": 1,
        "volume": 3,
        "mass": 3,
        "clones": 2,
        "snippet": "final boolean rowDeleted(){\n\t\treturn false;\n\t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/MemoryResult.java","project://smallsql0.21_src/src/smallsql/database/NoFromResult.java",]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 3,
        "mass": 3,
        "clones": 4,
        "snippet": "final boolean isScrollable(){\n\t\treturn true;\n\t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/NoFromResult.java","project://smallsql0.21_src/src/smallsql/database/Scrollable.java","project://smallsql0.21_src/src/smallsql/database/SortedResult.java","project://smallsql0.21_src/src/smallsql/database/MemoryResult.java",]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 3,
        "mass": 3,
        "clones": 2,
        "snippet": "void nullRow(){\n\t\tthrow new Error();\n\t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/MemoryResult.java","project://smallsql0.21_src/src/smallsql/database/NoFromResult.java",]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 7,
        "mass": 4,
        "clones": 2,
        "snippet": "    final void addColumn(Column column){\n        columns.add(column);\n    }\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/MemoryResult.java","project://smallsql0.21_src/src/smallsql/database/CommandCreateView.java",]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 3,
        "mass": 3,
        "clones": 2,
        "snippet": "final long getRowPosition(){\n\t\treturn rowIdx;\n\t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/MemoryResult.java","project://smallsql0.21_src/src/smallsql/database/Scrollable.java",]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 3,
        "mass": 3,
        "clones": 2,
        "snippet": "final boolean rowInserted(){\n\t\treturn false;\n\t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/MemoryResult.java","project://smallsql0.21_src/src/smallsql/database/NoFromResult.java",]
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
        "volume": 6,
        "mass": 7,
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
        "mass": 7,
        "clones": 2,
        "snippet": "while(rs.next()){\n\t\t\tString newValue = rs.getString(\"v\");\n\t\t\tassertTrue( oldValue.compareTo( newValue ) < 0 );\n\t\t\toldValue = newValue;\n\t\t\tcount++;\n\t\t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/junit/TestOrderBy.java","project://smallsql0.21_src/src/smallsql/junit/TestOrderBy.java",]
}
,
{
    "metadata": {
        "cc": 4,
        "volume": 8,
        "mass": 9,
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
        "mass": 9,
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
        "mass": 5,
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
        "mass": 5,
        "clones": 2,
        "snippet": "while(rs.next()){\n\t\t\tassertTrue( oldValue.compareTo( (Integer)rs.getObject(\"i\") ) < 0 );\n\t\t\toldValue = (Integer)rs.getObject(\"i\");\n\t\t\tcount++;\n\t\t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/junit/TestOrderBy.java","project://smallsql0.21_src/src/smallsql/junit/TestOrderBy.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 1,
        "mass": 4,
        "clones": 37,
        "snippet": "catch(Throwable e){e.printStackTrace();}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestOperatoren.java","project://smallsql0.21_src/src/smallsql/junit/TestFunctions.java","project://smallsql0.21_src/src/smallsql/junit/TestOrderBy.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/AllTests.java","project://smallsql0.21_src/src/smallsql/junit/TestAlterTable.java","project://smallsql0.21_src/src/smallsql/database/SSDriver.java","project://smallsql0.21_src/src/smallsql/junit/TestGroupBy.java",]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 5,
        "mass": 4,
        "clones": 2,
        "snippet": "{\n\t\t\toldValue = rs.getBoolean(\"b\");\n\t\t\tassertFalse(rs.wasNull());\n\t\t\tcount++;\n\t\t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/junit/TestOrderBy.java","project://smallsql0.21_src/src/smallsql/junit/TestOrderBy.java",]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 5,
        "mass": 4,
        "clones": 2,
        "snippet": "{\n\t\t\toldValue = rs.getBoolean(\"b\");\n\t\t\tassertFalse(rs.wasNull());\n\t\t\tcount++;\n\t\t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/junit/TestOrderBy.java","project://smallsql0.21_src/src/smallsql/junit/TestOrderBy.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 4,
        "mass": 4,
        "clones": 3,
        "snippet": "if(newValue != null){\n\t\t\t\tassertTrue( oldValue.compareTo( newValue ) > 0 );\n\t\t\t\tcount++;\n\t\t\t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/junit/TestOrderBy.java","project://smallsql0.21_src/src/smallsql/junit/TestOrderBy.java","project://smallsql0.21_src/src/smallsql/junit/TestOrderBy.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 4,
        "mass": 4,
        "clones": 3,
        "snippet": "if(newValue != null){\n\t\t\t\tassertTrue( oldValue.compareTo( newValue ) > 0 );\n\t\t\t\tcount++;\n\t\t\t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/junit/TestOrderBy.java","project://smallsql0.21_src/src/smallsql/junit/TestOrderBy.java","project://smallsql0.21_src/src/smallsql/junit/TestOrderBy.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 4,
        "mass": 4,
        "clones": 3,
        "snippet": "if(newValue != null){\n\t\t\t\tassertTrue( oldValue.compareTo( newValue ) > 0 );\n\t\t\t\tcount++;\n\t\t\t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/junit/TestOrderBy.java","project://smallsql0.21_src/src/smallsql/junit/TestOrderBy.java","project://smallsql0.21_src/src/smallsql/junit/TestOrderBy.java",]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 6,
        "mass": 6,
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
        "mass": 6,
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
    "filename": "project://smallsql0.21_src/src/smallsql/database/Identity.java",
    "metadata": {
        "volume": 0,
        "cloneClassesType1": 6
    },
    "results": {
        "type-1": [
            
{
    "metadata": {
        "cc": 1,
        "volume": 3,
        "mass": 3,
        "clones": 5,
        "snippet": "public double doubleValue() {\n\t\treturn value;\n\t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/MutableDouble.java","project://smallsql0.21_src/src/smallsql/database/MutableInteger.java","project://smallsql0.21_src/src/smallsql/database/MutableFloat.java","project://smallsql0.21_src/src/smallsql/database/MutableLong.java","project://smallsql0.21_src/src/smallsql/database/Identity.java",]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 3,
        "mass": 3,
        "clones": 5,
        "snippet": "public String toString(){\n\t\treturn String.valueOf(value);\n\t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/MutableDouble.java","project://smallsql0.21_src/src/smallsql/database/MutableInteger.java","project://smallsql0.21_src/src/smallsql/database/MutableFloat.java","project://smallsql0.21_src/src/smallsql/database/MutableLong.java","project://smallsql0.21_src/src/smallsql/database/Identity.java",]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 3,
        "mass": 3,
        "clones": 4,
        "snippet": "public float floatValue() {\n\t\treturn value;\n\t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/MutableInteger.java","project://smallsql0.21_src/src/smallsql/database/MutableFloat.java","project://smallsql0.21_src/src/smallsql/database/MutableLong.java","project://smallsql0.21_src/src/smallsql/database/Identity.java",]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 3,
        "mass": 3,
        "clones": 3,
        "snippet": "public long longValue() {\n\t\treturn value;\n\t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/MutableInteger.java","project://smallsql0.21_src/src/smallsql/database/MutableLong.java","project://smallsql0.21_src/src/smallsql/database/Identity.java",]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 3,
        "mass": 3,
        "clones": 2,
        "snippet": "public Object getImmutableObject(){\n\t\treturn new Long(value);\n\t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/MutableLong.java","project://smallsql0.21_src/src/smallsql/database/Identity.java",]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 3,
        "mass": 3,
        "clones": 4,
        "snippet": "public int intValue() {\n\t\treturn (int)value;\n\t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/MutableDouble.java","project://smallsql0.21_src/src/smallsql/database/MutableFloat.java","project://smallsql0.21_src/src/smallsql/database/MutableLong.java","project://smallsql0.21_src/src/smallsql/database/Identity.java",]
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
        "cloneClassesType1": 2
    },
    "results": {
        "type-1": [
            
{
    "metadata": {
        "cc": 1,
        "volume": 3,
        "mass": 3,
        "clones": 13,
        "snippet": "final boolean isNull() throws Exception {\n\t\treturn param1.isNull();\n\t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionUCase.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionReturnFloat.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionOctetLen.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionRTrim.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionReturnString.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionBitLen.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionReturnP1.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionLCase.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionConvert.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionLTrim.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionReturnInt.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionSoundex.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionCharLen.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 4,
        "mass": 5,
        "clones": 2,
        "snippet": "final byte[] getBytes() throws Exception{\n        if(isNull()) return null;\n        return getString().getBytes();\n\t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionLCase.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionUCase.java",]
}
,
        ],
        "type-2": [
            
        ]
    }
}
,
{
    "filename": "project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionPower.java",
    "metadata": {
        "volume": 0,
        "cloneClassesType1": 1
    },
    "results": {
        "type-1": [
            
{
    "metadata": {
        "cc": 2,
        "volume": 3,
        "mass": 3,
        "clones": 11,
        "snippet": "boolean isNull() throws Exception {\n\t\treturn param1.isNull() || param2.isNull();\n\t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionTimestampAdd.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionATan2.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionTimestampDiff.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionTruncate.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionRound.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionDifference.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionMod.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionPower.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionRight.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionLocate.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionLeft.java",]
}
,
        ],
        "type-2": [
            
        ]
    }
}
,
{
    "filename": "project://smallsql0.21_src/src/smallsql/junit/AllTests.java",
    "metadata": {
        "volume": 0,
        "cloneClassesType1": 1
    },
    "results": {
        "type-1": [
            
{
    "metadata": {
        "cc": 2,
        "volume": 1,
        "mass": 4,
        "clones": 37,
        "snippet": "catch(Throwable e){e.printStackTrace();}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestOperatoren.java","project://smallsql0.21_src/src/smallsql/junit/TestFunctions.java","project://smallsql0.21_src/src/smallsql/junit/TestOrderBy.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/AllTests.java","project://smallsql0.21_src/src/smallsql/junit/TestAlterTable.java","project://smallsql0.21_src/src/smallsql/database/SSDriver.java","project://smallsql0.21_src/src/smallsql/junit/TestGroupBy.java",]
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
        "cloneClassesType1": 2
    },
    "results": {
        "type-1": [
            
{
    "metadata": {
        "cc": 2,
        "volume": 1,
        "mass": 3,
        "clones": 4,
        "snippet": ""
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/junit/TestDBMetaData.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/TestDBMetaData.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 1,
        "mass": 3,
        "clones": 4,
        "snippet": ""
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/junit/TestDBMetaData.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/TestDBMetaData.java",]
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
        "cloneClassesType1": 5
    },
    "results": {
        "type-1": [
            
{
    "metadata": {
        "cc": 1,
        "volume": 4,
        "mass": 3,
        "clones": 2,
        "snippet": "{\n        super(testValue.dataType);\n        this.testValue = testValue;\n    }\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/junit/TestJoins.java","project://smallsql0.21_src/src/smallsql/junit/TestOperatoren.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 1,
        "mass": 4,
        "clones": 37,
        "snippet": "catch(Throwable e){e.printStackTrace();}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/TestOperatoren.java","project://smallsql0.21_src/src/smallsql/junit/TestFunctions.java","project://smallsql0.21_src/src/smallsql/junit/TestOrderBy.java","project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java","project://smallsql0.21_src/src/smallsql/junit/AllTests.java","project://smallsql0.21_src/src/smallsql/junit/TestAlterTable.java","project://smallsql0.21_src/src/smallsql/database/SSDriver.java","project://smallsql0.21_src/src/smallsql/junit/TestGroupBy.java",]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 5,
        "mass": 4,
        "clones": 2,
        "snippet": "private static class TestValue{\n        String dataType;\n        Object small;\n        Object large;\n    }\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/junit/TestJoins.java","project://smallsql0.21_src/src/smallsql/junit/TestOperatoren.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 10,
        "mass": 13,
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
        "mass": 11,
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
    "filename": "project://smallsql0.21_src/src/smallsql/database/Distinct.java",
    "metadata": {
        "volume": 0,
        "cloneClassesType1": 13
    },
    "results": {
        "type-1": [
            
{
    "metadata": {
        "cc": 1,
        "volume": 3,
        "mass": 3,
        "clones": 4,
        "snippet": "final boolean rowInserted() {\n\t\treturn rowSource.rowInserted();\n\t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/Where.java","project://smallsql0.21_src/src/smallsql/database/Distinct.java","project://smallsql0.21_src/src/smallsql/database/SortedResult.java","project://smallsql0.21_src/src/smallsql/database/Scrollable.java",]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 4,
        "mass": 4,
        "clones": 2,
        "snippet": "final void beforeFirst() throws Exception {\n\t\trowSource.beforeFirst();\n\t\trow = 0;\n\t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/Distinct.java","project://smallsql0.21_src/src/smallsql/database/Where.java",]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 3,
        "mass": 4,
        "clones": 2,
        "snippet": "final void setRowPosition(long rowPosition) throws Exception {\n\t\trowSource.setRowPosition(rowPosition);\n\t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/Distinct.java","project://smallsql0.21_src/src/smallsql/database/Where.java",]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 6,
        "mass": 4,
        "clones": 4,
        "snippet": "    boolean isExpressionsFromThisRowSource(Expressions columns){\n        return rowSource.isExpressionsFromThisRowSource(columns);\n    }\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/Where.java","project://smallsql0.21_src/src/smallsql/database/Distinct.java","project://smallsql0.21_src/src/smallsql/database/SortedResult.java","project://smallsql0.21_src/src/smallsql/database/Scrollable.java",]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 4,
        "mass": 4,
        "clones": 3,
        "snippet": "final void noRow() {\n\t\trowSource.noRow();\n\t\trow = 0;\n\t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/Where.java","project://smallsql0.21_src/src/smallsql/database/SortedResult.java","project://smallsql0.21_src/src/smallsql/database/Distinct.java",]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 4,
        "mass": 4,
        "clones": 3,
        "snippet": "final boolean first() throws Exception {\n\t\tbeforeFirst();\n\t\treturn next();\n\t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/Distinct.java","project://smallsql0.21_src/src/smallsql/database/SortedResult.java","project://smallsql0.21_src/src/smallsql/database/Join.java",]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 4,
        "mass": 3,
        "clones": 3,
        "snippet": "{\n\t\trowSource.noRow();\n\t\trow = 0;\n\t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/Where.java","project://smallsql0.21_src/src/smallsql/database/SortedResult.java","project://smallsql0.21_src/src/smallsql/database/Distinct.java",]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 3,
        "mass": 3,
        "clones": 4,
        "snippet": "final boolean isScrollable() {\n\t\treturn false;\n\t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/Distinct.java","project://smallsql0.21_src/src/smallsql/database/TableViewResult.java","project://smallsql0.21_src/src/smallsql/database/UnionAll.java","project://smallsql0.21_src/src/smallsql/database/Join.java",]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 3,
        "mass": 3,
        "clones": 4,
        "snippet": "final boolean rowDeleted() {\n\t\treturn rowSource.rowDeleted();\n\t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/Where.java","project://smallsql0.21_src/src/smallsql/database/Distinct.java","project://smallsql0.21_src/src/smallsql/database/SortedResult.java","project://smallsql0.21_src/src/smallsql/database/Scrollable.java",]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 3,
        "mass": 3,
        "clones": 3,
        "snippet": "final long getRowPosition() {\n\t\treturn rowSource.getRowPosition();\n\t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/Where.java","project://smallsql0.21_src/src/smallsql/database/SortedResult.java","project://smallsql0.21_src/src/smallsql/database/Distinct.java",]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 3,
        "mass": 3,
        "clones": 2,
        "snippet": "final int getRow() throws Exception {\n\t\treturn row;\n\t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/UnionAll.java","project://smallsql0.21_src/src/smallsql/database/Distinct.java",]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 4,
        "mass": 3,
        "clones": 2,
        "snippet": "{\n\t\trowSource.beforeFirst();\n\t\trow = 0;\n\t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/Distinct.java","project://smallsql0.21_src/src/smallsql/database/Where.java",]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 4,
        "mass": 4,
        "clones": 3,
        "snippet": "final void nullRow() {\n\t\trowSource.nullRow();\n\t\trow = 0;\n\t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/Where.java","project://smallsql0.21_src/src/smallsql/database/SortedResult.java","project://smallsql0.21_src/src/smallsql/database/Distinct.java",]
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
        "cloneClassesType1": 1
    },
    "results": {
        "type-1": [
            
{
    "metadata": {
        "cc": 2,
        "volume": 3,
        "mass": 3,
        "clones": 11,
        "snippet": "boolean isNull() throws Exception {\n\t\treturn param1.isNull() || param2.isNull();\n\t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionTimestampAdd.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionATan2.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionTimestampDiff.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionTruncate.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionRound.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionDifference.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionMod.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionPower.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionRight.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionLocate.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionLeft.java",]
}
,
        ],
        "type-2": [
            
        ]
    }
}
,
{
    "filename": "project://smallsql0.21_src/src/smallsql/database/Language/Language_it.java",
    "metadata": {
        "volume": 0,
        "cloneClassesType1": 7
    },
    "results": {
        "type-1": [
            
{
    "metadata": {
        "cc": 1,
        "volume": 3,
        "mass": 3,
        "clones": 2,
        "snippet": "public String[][] getEntries() {\n\t\treturn ENTRIES;\n\t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/Language/Language_de.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_it.java",]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 1,
        "mass": 3,
        "clones": 24,
        "snippet": "package smallsql.database.language;\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/Language/Language_it.java","project://smallsql0.21_src/src/smallsql/database/Language/Language.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_it.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_de.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_it.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_en.java","project://smallsql0.21_src/src/smallsql/database/Language/Language.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_it.java","project://smallsql0.21_src/src/smallsql/database/Language/Language.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_de.java","project://smallsql0.21_src/src/smallsql/database/Language/Language.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_en.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_de.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_it.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_de.java","project://smallsql0.21_src/src/smallsql/database/Language/Language.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_de.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_en.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_en.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_it.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_en.java","project://smallsql0.21_src/src/smallsql/database/Language/Language.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_en.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_de.java",]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 1,
        "mass": 3,
        "clones": 24,
        "snippet": "package smallsql.database.language;\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/Language/Language_it.java","project://smallsql0.21_src/src/smallsql/database/Language/Language.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_it.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_de.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_it.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_en.java","project://smallsql0.21_src/src/smallsql/database/Language/Language.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_it.java","project://smallsql0.21_src/src/smallsql/database/Language/Language.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_de.java","project://smallsql0.21_src/src/smallsql/database/Language/Language.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_en.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_de.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_it.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_de.java","project://smallsql0.21_src/src/smallsql/database/Language/Language.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_de.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_en.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_en.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_it.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_en.java","project://smallsql0.21_src/src/smallsql/database/Language/Language.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_en.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_de.java",]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 1,
        "mass": 3,
        "clones": 24,
        "snippet": "package smallsql.database.language;\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/Language/Language_it.java","project://smallsql0.21_src/src/smallsql/database/Language/Language.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_it.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_de.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_it.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_en.java","project://smallsql0.21_src/src/smallsql/database/Language/Language.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_it.java","project://smallsql0.21_src/src/smallsql/database/Language/Language.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_de.java","project://smallsql0.21_src/src/smallsql/database/Language/Language.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_en.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_de.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_it.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_de.java","project://smallsql0.21_src/src/smallsql/database/Language/Language.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_de.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_en.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_en.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_it.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_en.java","project://smallsql0.21_src/src/smallsql/database/Language/Language.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_en.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_de.java",]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 1,
        "mass": 3,
        "clones": 24,
        "snippet": "package smallsql.database.language;\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/Language/Language_it.java","project://smallsql0.21_src/src/smallsql/database/Language/Language.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_it.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_de.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_it.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_en.java","project://smallsql0.21_src/src/smallsql/database/Language/Language.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_it.java","project://smallsql0.21_src/src/smallsql/database/Language/Language.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_de.java","project://smallsql0.21_src/src/smallsql/database/Language/Language.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_en.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_de.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_it.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_de.java","project://smallsql0.21_src/src/smallsql/database/Language/Language.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_de.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_en.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_en.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_it.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_en.java","project://smallsql0.21_src/src/smallsql/database/Language/Language.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_en.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_de.java",]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 1,
        "mass": 3,
        "clones": 24,
        "snippet": "package smallsql.database.language;\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/Language/Language_it.java","project://smallsql0.21_src/src/smallsql/database/Language/Language.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_it.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_de.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_it.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_en.java","project://smallsql0.21_src/src/smallsql/database/Language/Language.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_it.java","project://smallsql0.21_src/src/smallsql/database/Language/Language.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_de.java","project://smallsql0.21_src/src/smallsql/database/Language/Language.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_en.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_de.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_it.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_de.java","project://smallsql0.21_src/src/smallsql/database/Language/Language.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_de.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_en.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_en.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_it.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_en.java","project://smallsql0.21_src/src/smallsql/database/Language/Language.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_en.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_de.java",]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 1,
        "mass": 3,
        "clones": 24,
        "snippet": "package smallsql.database.language;\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/Language/Language_it.java","project://smallsql0.21_src/src/smallsql/database/Language/Language.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_it.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_de.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_it.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_en.java","project://smallsql0.21_src/src/smallsql/database/Language/Language.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_it.java","project://smallsql0.21_src/src/smallsql/database/Language/Language.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_de.java","project://smallsql0.21_src/src/smallsql/database/Language/Language.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_en.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_de.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_it.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_de.java","project://smallsql0.21_src/src/smallsql/database/Language/Language.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_de.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_en.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_en.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_it.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_en.java","project://smallsql0.21_src/src/smallsql/database/Language/Language.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_en.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_de.java",]
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
        "cloneClassesType1": 5
    },
    "results": {
        "type-1": [
            
{
    "metadata": {
        "cc": 2,
        "volume": 3,
        "mass": 3,
        "clones": 2,
        "snippet": "if( database.isReadOnly() ){\n\t        throw SmallSQLException.create(Language.DB_READONLY);\n\t    }\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/TableView.java","project://smallsql0.21_src/src/smallsql/database/IndexDescription.java",]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 3,
        "mass": 3,
        "clones": 5,
        "snippet": "final String getName(){\n\t\treturn name;\n\t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/IndexDescription.java","project://smallsql0.21_src/src/smallsql/database/Column.java","project://smallsql0.21_src/src/smallsql/database/Expression.java","project://smallsql0.21_src/src/smallsql/database/Database.java","project://smallsql0.21_src/src/smallsql/database/TableView.java",]
}
,
{
    "metadata": {
        "cc": 4,
        "volume": 9,
        "mass": 12,
        "clones": 2,
        "snippet": "catch(Throwable e){\n\t\t\tif(raFile != null)\n\t\t\t\ttry{\n\t\t\t\t\traFile.close();\n\t\t\t\t}catch(Exception e2){\n\t\t\t\t\tDriverManager.println(e2.toString());\n\t\t\t\t}\n\t\t\tthrow SmallSQLException.createFromException(e);\n\t\t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/TableView.java","project://smallsql0.21_src/src/smallsql/database/IndexDescription.java",]
}
,
{
    "metadata": {
        "cc": 3,
        "volume": 6,
        "mass": 8,
        "clones": 2,
        "snippet": "if(raFile != null)\n\t\t\t\ttry{\n\t\t\t\t\traFile.close();\n\t\t\t\t}catch(Exception e2){\n\t\t\t\t\tDriverManager.println(e2.toString());\n\t\t\t\t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/TableView.java","project://smallsql0.21_src/src/smallsql/database/IndexDescription.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 3,
        "mass": 4,
        "clones": 2,
        "snippet": "catch(Exception e2){\n\t\t\t\t\tDriverManager.println(e2.toString());\n\t\t\t\t}\n"
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
    "filename": "project://smallsql0.21_src/src/smallsql/database/DateTime.java",
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
        "mass": 4,
        "clones": 2,
        "snippet": "if(t<0){\n\t\t\t\tt += 86400000;\n\t\t\t\td--;\n\t\t\t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/DateTime.java","project://smallsql0.21_src/src/smallsql/database/DateTime.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 5,
        "mass": 4,
        "clones": 2,
        "snippet": "if(t<0){\n\t\t\t\tt += 86400000;\n\t\t\t\td--;\n\t\t\t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/DateTime.java","project://smallsql0.21_src/src/smallsql/database/DateTime.java",]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 3,
        "mass": 3,
        "clones": 3,
        "snippet": "int getDataType(){\n        return dataType;\n    }\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/Column.java","project://smallsql0.21_src/src/smallsql/database/ExpressionValue.java","project://smallsql0.21_src/src/smallsql/database/DateTime.java",]
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
        "cloneClassesType1": 6
    },
    "results": {
        "type-1": [
            
{
    "metadata": {
        "cc": 2,
        "volume": 3,
        "mass": 4,
        "clones": 2,
        "snippet": "catch(Throwable th){\n            throw SmallSQLException.createFromException( th );\n        }\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/Database.java","project://smallsql0.21_src/src/smallsql/database/StoreImpl.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 3,
        "mass": 4,
        "clones": 53,
        "snippet": "catch(Exception e){\n    \t\tthrow SmallSQLException.createFromException(e);\n    \t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/SSPreparedStatement.java","project://smallsql0.21_src/src/smallsql/database/SSPreparedStatement.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/ViewResult.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSStatement.java","project://smallsql0.21_src/src/smallsql/database/StorePage.java","project://smallsql0.21_src/src/smallsql/database/Database.java","project://smallsql0.21_src/src/smallsql/database/Database.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 3,
        "mass": 4,
        "clones": 53,
        "snippet": "catch(Exception e){\n    \t\tthrow SmallSQLException.createFromException(e);\n    \t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/SSPreparedStatement.java","project://smallsql0.21_src/src/smallsql/database/SSPreparedStatement.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/ViewResult.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSStatement.java","project://smallsql0.21_src/src/smallsql/database/StorePage.java","project://smallsql0.21_src/src/smallsql/database/Database.java","project://smallsql0.21_src/src/smallsql/database/Database.java",]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 3,
        "mass": 3,
        "clones": 5,
        "snippet": "final String getName(){\n\t\treturn name;\n\t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/IndexDescription.java","project://smallsql0.21_src/src/smallsql/database/Column.java","project://smallsql0.21_src/src/smallsql/database/Expression.java","project://smallsql0.21_src/src/smallsql/database/Database.java","project://smallsql0.21_src/src/smallsql/database/TableView.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 1,
        "mass": 3,
        "clones": 51,
        "snippet": "catch (Exception e) {}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/database/Database.java","project://smallsql0.21_src/src/smallsql/database/ExpressionInSelect.java",]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 3,
        "mass": 3,
        "clones": 2,
        "snippet": "boolean isReadOnly(){\n\t    return readonly;\n\t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/Database.java","project://smallsql0.21_src/src/smallsql/database/SSConnection.java",]
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
        "cloneClassesType1": 36
    },
    "results": {
        "type-1": [
            
{
    "metadata": {
        "cc": 2,
        "volume": 1,
        "mass": 3,
        "clones": 24,
        "snippet": ""
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 1,
        "mass": 3,
        "clones": 24,
        "snippet": ""
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 1,
        "mass": 3,
        "clones": 24,
        "snippet": ""
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 1,
        "mass": 3,
        "clones": 24,
        "snippet": ""
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 1,
        "mass": 3,
        "clones": 24,
        "snippet": ""
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 1,
        "mass": 3,
        "clones": 24,
        "snippet": ""
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 1,
        "mass": 3,
        "clones": 24,
        "snippet": ""
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 1,
        "mass": 3,
        "clones": 24,
        "snippet": ""
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 1,
        "mass": 3,
        "clones": 24,
        "snippet": ""
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 1,
        "mass": 3,
        "clones": 24,
        "snippet": ""
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 1,
        "mass": 3,
        "clones": 24,
        "snippet": ""
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 1,
        "mass": 3,
        "clones": 24,
        "snippet": ""
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 1,
        "mass": 3,
        "clones": 24,
        "snippet": ""
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 1,
        "mass": 3,
        "clones": 24,
        "snippet": ""
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 1,
        "mass": 3,
        "clones": 24,
        "snippet": ""
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 1,
        "mass": 3,
        "clones": 24,
        "snippet": ""
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 1,
        "mass": 3,
        "clones": 24,
        "snippet": ""
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 1,
        "mass": 3,
        "clones": 24,
        "snippet": ""
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 1,
        "mass": 3,
        "clones": 24,
        "snippet": ""
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 1,
        "mass": 3,
        "clones": 24,
        "snippet": ""
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 1,
        "mass": 3,
        "clones": 24,
        "snippet": ""
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 1,
        "mass": 3,
        "clones": 24,
        "snippet": ""
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 1,
        "mass": 3,
        "clones": 24,
        "snippet": ""
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 1,
        "mass": 3,
        "clones": 24,
        "snippet": ""
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 3,
        "mass": 4,
        "clones": 16,
        "snippet": "catch(SQLException e){\n                assertSQLException(\"01000\", 0, e);\n            }\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/junit/TestExceptionMethods.java","project://smallsql0.21_src/src/smallsql/junit/TestExceptionMethods.java","project://smallsql0.21_src/src/smallsql/junit/TestExceptionMethods.java","project://smallsql0.21_src/src/smallsql/junit/TestExceptionMethods.java","project://smallsql0.21_src/src/smallsql/junit/TestExceptionMethods.java","project://smallsql0.21_src/src/smallsql/junit/TestExceptionMethods.java","project://smallsql0.21_src/src/smallsql/junit/TestExceptionMethods.java","project://smallsql0.21_src/src/smallsql/junit/TestExceptionMethods.java","project://smallsql0.21_src/src/smallsql/junit/TestExceptionMethods.java","project://smallsql0.21_src/src/smallsql/junit/TestExceptionMethods.java","project://smallsql0.21_src/src/smallsql/junit/TestExceptionMethods.java","project://smallsql0.21_src/src/smallsql/junit/TestExceptionMethods.java","project://smallsql0.21_src/src/smallsql/junit/TestExceptionMethods.java","project://smallsql0.21_src/src/smallsql/junit/TestExceptionMethods.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/TestExceptionMethods.java",]
}
,
{
    "metadata": {
        "cc": 4,
        "volume": 6,
        "mass": 10,
        "clones": 2,
        "snippet": "static boolean string2boolean( String val){\n        try{\n            return Double.parseDouble( val ) != 0;\n        return \"true\".equalsIgnoreCase( val ) || \"yes\".equalsIgnoreCase( val ) || \"t\".equalsIgnoreCase( val );\n    }\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/Utils.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java",]
}
,
{
    "metadata": {
        "cc": 3,
        "volume": 1,
        "mass": 3,
        "clones": 4,
        "snippet": "for(; k>= 0; k--) if(tmp[k] != 0) break;\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java",]
}
,
{
    "metadata": {
        "cc": 3,
        "volume": 1,
        "mass": 3,
        "clones": 4,
        "snippet": "for(; k>= 0; k--) if(tmp[k] != 0) break;\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java",]
}
,
{
    "metadata": {
        "cc": 3,
        "volume": 1,
        "mass": 3,
        "clones": 4,
        "snippet": "for(; k>= 0; k--) if(tmp[k] != 0) break;\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java",]
}
,
{
    "metadata": {
        "cc": 3,
        "volume": 1,
        "mass": 3,
        "clones": 4,
        "snippet": "for(; k>= 0; k--) if(tmp[k] != 0) break;\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 1,
        "mass": 3,
        "clones": 4,
        "snippet": ""
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/junit/TestDBMetaData.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/TestDBMetaData.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 1,
        "mass": 3,
        "clones": 4,
        "snippet": ""
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/junit/TestDBMetaData.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/junit/TestDBMetaData.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 1,
        "mass": 3,
        "clones": 4,
        "snippet": ""
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/database/Utils.java","project://smallsql0.21_src/src/smallsql/database/Utils.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 1,
        "mass": 3,
        "clones": 4,
        "snippet": ""
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/database/Utils.java","project://smallsql0.21_src/src/smallsql/database/Utils.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 8,
        "mass": 11,
        "clones": 2,
        "snippet": "static String bytes2hex( byte[] bytes ){\n        StringBuffer buf = new StringBuffer(bytes.length << 1);\n        for(int i=0; i<bytes.length; i++){\n            buf.append( digits[ (bytes[i] >> 4) & 0x0F ] );\n            buf.append( digits[ (bytes[i]     ) & 0x0F ] );\n        }\n        return buf.toString();\n    }\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/Utils.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 8,
        "mass": 9,
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
    "filename": "project://smallsql0.21_src/src/smallsql/database/LongList.java",
    "metadata": {
        "volume": 0,
        "cloneClassesType1": 4
    },
    "results": {
        "type-1": [
            
{
    "metadata": {
        "cc": 2,
        "volume": 5,
        "mass": 4,
        "clones": 3,
        "snippet": "{\n\t\tif (idx >= size)\n\t\t\tthrow new IndexOutOfBoundsException(\"Index: \"+idx+\", Size: \"+size);\n\t\treturn data[idx];\n\t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/LongList.java","project://smallsql0.21_src/src/smallsql/database/DataSources.java","project://smallsql0.21_src/src/smallsql/database/Expressions.java",]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 3,
        "mass": 3,
        "clones": 3,
        "snippet": "final void clear(){\n\t\tsize = 0;\n\t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/LongList.java","project://smallsql0.21_src/src/smallsql/database/LongLongList.java","project://smallsql0.21_src/src/smallsql/database/Expressions.java",]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 3,
        "mass": 3,
        "clones": 9,
        "snippet": "final int size(){\n\t\treturn size;\n\t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/IndexDescriptions.java","project://smallsql0.21_src/src/smallsql/database/Columns.java","project://smallsql0.21_src/src/smallsql/database/LongList.java","project://smallsql0.21_src/src/smallsql/database/Strings.java","project://smallsql0.21_src/src/smallsql/database/Expressions.java","project://smallsql0.21_src/src/smallsql/database/ForeignKeys.java","project://smallsql0.21_src/src/smallsql/database/LongLongList.java","project://smallsql0.21_src/src/smallsql/database/DataSources.java","project://smallsql0.21_src/src/smallsql/database/StorePageMap.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 3,
        "mass": 3,
        "clones": 7,
        "snippet": "if(size >= data.length ){\n\t\t\tresize(size << 1);\n\t\t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/IndexDescriptions.java","project://smallsql0.21_src/src/smallsql/database/Columns.java","project://smallsql0.21_src/src/smallsql/database/LongList.java","project://smallsql0.21_src/src/smallsql/database/Strings.java","project://smallsql0.21_src/src/smallsql/database/Expressions.java","project://smallsql0.21_src/src/smallsql/database/ForeignKeys.java","project://smallsql0.21_src/src/smallsql/database/Expressions.java",]
}
,
        ],
        "type-2": [
            
        ]
    }
}
,
{
    "filename": "project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionMod.java",
    "metadata": {
        "volume": 0,
        "cloneClassesType1": 1
    },
    "results": {
        "type-1": [
            
{
    "metadata": {
        "cc": 2,
        "volume": 3,
        "mass": 3,
        "clones": 11,
        "snippet": "boolean isNull() throws Exception {\n\t\treturn param1.isNull() || param2.isNull();\n\t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionTimestampAdd.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionATan2.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionTimestampDiff.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionTruncate.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionRound.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionDifference.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionMod.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionPower.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionRight.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionLocate.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionLeft.java",]
}
,
        ],
        "type-2": [
            
        ]
    }
}
,
{
    "filename": "project://smallsql0.21_src/src/smallsql/database/SortedResult.java",
    "metadata": {
        "volume": 0,
        "cloneClassesType1": 19
    },
    "results": {
        "type-1": [
            
{
    "metadata": {
        "cc": 1,
        "volume": 3,
        "mass": 3,
        "clones": 4,
        "snippet": "final boolean rowInserted() {\n\t\treturn rowSource.rowInserted();\n\t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/Where.java","project://smallsql0.21_src/src/smallsql/database/Distinct.java","project://smallsql0.21_src/src/smallsql/database/SortedResult.java","project://smallsql0.21_src/src/smallsql/database/Scrollable.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 5,
        "mass": 4,
        "clones": 2,
        "snippet": "{\n                if(!next()){\n                    return false;\n                }\n            }\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/SortedResult.java","project://smallsql0.21_src/src/smallsql/database/SortedResult.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 5,
        "mass": 4,
        "clones": 2,
        "snippet": "{\n                if(!next()){\n                    return false;\n                }\n            }\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/SortedResult.java","project://smallsql0.21_src/src/smallsql/database/SortedResult.java",]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 6,
        "mass": 4,
        "clones": 4,
        "snippet": "    boolean isExpressionsFromThisRowSource(Expressions columns){\n        return rowSource.isExpressionsFromThisRowSource(columns);\n    }\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/Where.java","project://smallsql0.21_src/src/smallsql/database/Distinct.java","project://smallsql0.21_src/src/smallsql/database/SortedResult.java","project://smallsql0.21_src/src/smallsql/database/Scrollable.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 5,
        "mass": 4,
        "clones": 2,
        "snippet": "{\n                if(!previous()){\n                    return false;\n                }\n            }\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/SortedResult.java","project://smallsql0.21_src/src/smallsql/database/SortedResult.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 5,
        "mass": 4,
        "clones": 2,
        "snippet": "{\n                if(!previous()){\n                    return false;\n                }\n            }\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/SortedResult.java","project://smallsql0.21_src/src/smallsql/database/SortedResult.java",]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 4,
        "mass": 4,
        "clones": 3,
        "snippet": "final void noRow() {\n\t\trowSource.noRow();\n\t\trow = 0;\n\t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/Where.java","project://smallsql0.21_src/src/smallsql/database/SortedResult.java","project://smallsql0.21_src/src/smallsql/database/Distinct.java",]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 3,
        "mass": 3,
        "clones": 2,
        "snippet": "final boolean isBeforeFirst(){\n        return row == 0;\n    }\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/SortedResult.java","project://smallsql0.21_src/src/smallsql/database/Where.java",]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 4,
        "mass": 4,
        "clones": 3,
        "snippet": "final boolean first() throws Exception {\n\t\tbeforeFirst();\n\t\treturn next();\n\t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/Distinct.java","project://smallsql0.21_src/src/smallsql/database/SortedResult.java","project://smallsql0.21_src/src/smallsql/database/Join.java",]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 4,
        "mass": 3,
        "clones": 3,
        "snippet": "{\n\t\trowSource.noRow();\n\t\trow = 0;\n\t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/Where.java","project://smallsql0.21_src/src/smallsql/database/SortedResult.java","project://smallsql0.21_src/src/smallsql/database/Distinct.java",]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 3,
        "mass": 3,
        "clones": 4,
        "snippet": "final boolean rowDeleted() {\n\t\treturn rowSource.rowDeleted();\n\t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/Where.java","project://smallsql0.21_src/src/smallsql/database/Distinct.java","project://smallsql0.21_src/src/smallsql/database/SortedResult.java","project://smallsql0.21_src/src/smallsql/database/Scrollable.java",]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 3,
        "mass": 3,
        "clones": 3,
        "snippet": "final long getRowPosition() {\n\t\treturn rowSource.getRowPosition();\n\t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/Where.java","project://smallsql0.21_src/src/smallsql/database/SortedResult.java","project://smallsql0.21_src/src/smallsql/database/Distinct.java",]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 3,
        "mass": 3,
        "clones": 4,
        "snippet": "final boolean isScrollable(){\n\t\treturn true;\n\t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/NoFromResult.java","project://smallsql0.21_src/src/smallsql/database/Scrollable.java","project://smallsql0.21_src/src/smallsql/database/SortedResult.java","project://smallsql0.21_src/src/smallsql/database/MemoryResult.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 3,
        "mass": 3,
        "clones": 2,
        "snippet": "if(!next()){\n                    return false;\n                }\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/SortedResult.java","project://smallsql0.21_src/src/smallsql/database/SortedResult.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 3,
        "mass": 3,
        "clones": 2,
        "snippet": "if(!next()){\n                    return false;\n                }\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/SortedResult.java","project://smallsql0.21_src/src/smallsql/database/SortedResult.java",]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 4,
        "mass": 4,
        "clones": 2,
        "snippet": "boolean last() throws Exception{\n\t\tafterLast();\n\t\treturn previous();\n\t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/SortedResult.java","project://smallsql0.21_src/src/smallsql/database/Scrollable.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 3,
        "mass": 3,
        "clones": 2,
        "snippet": "if(!previous()){\n                    return false;\n                }\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/SortedResult.java","project://smallsql0.21_src/src/smallsql/database/SortedResult.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 3,
        "mass": 3,
        "clones": 2,
        "snippet": "if(!previous()){\n                    return false;\n                }\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/SortedResult.java","project://smallsql0.21_src/src/smallsql/database/SortedResult.java",]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 4,
        "mass": 4,
        "clones": 3,
        "snippet": "final void nullRow() {\n\t\trowSource.nullRow();\n\t\trow = 0;\n\t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/Where.java","project://smallsql0.21_src/src/smallsql/database/SortedResult.java","project://smallsql0.21_src/src/smallsql/database/Distinct.java",]
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
        "cloneClassesType1": 10
    },
    "results": {
        "type-1": [
            
{
    "metadata": {
        "cc": 1,
        "volume": 4,
        "mass": 3,
        "clones": 2,
        "snippet": "{\n\t\t\t\t\tnode.addRemainderKey( rowOffset, key, i );\n\t\t\t\t\treturn null;\n\t\t\t\t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/Index.java","project://smallsql0.21_src/src/smallsql/database/Index.java",]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 4,
        "mass": 3,
        "clones": 2,
        "snippet": "{\n\t\t\t\t\tnode.addRemainderKey( rowOffset, key, i );\n\t\t\t\t\treturn null;\n\t\t\t\t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/Index.java","project://smallsql0.21_src/src/smallsql/database/Index.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 4,
        "mass": 3,
        "clones": 2,
        "snippet": "if(i + 1 == count)\n                return page.getValue();\n            else\n                page = (IndexNode)page.getValue();\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/Index.java","project://smallsql0.21_src/src/smallsql/database/Index.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 4,
        "mass": 3,
        "clones": 2,
        "snippet": "if(i + 1 == count)\n                return page.getValue();\n            else\n                page = (IndexNode)page.getValue();\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/Index.java","project://smallsql0.21_src/src/smallsql/database/Index.java",]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 4,
        "mass": 3,
        "clones": 2,
        "snippet": "{\n\t\t\t\t\tnode.addNode( digit, rowOffset );\n\t\t\t\t\treturn null;\n\t\t\t\t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/Index.java","project://smallsql0.21_src/src/smallsql/database/Index.java",]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 4,
        "mass": 3,
        "clones": 2,
        "snippet": "{\n\t\t\t\t\tnode.addNode( digit, rowOffset );\n\t\t\t\t\treturn null;\n\t\t\t\t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/Index.java","project://smallsql0.21_src/src/smallsql/database/Index.java",]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 4,
        "mass": 3,
        "clones": 2,
        "snippet": "{\n\t\t\t\t\tnode.saveValue(rowOffset);\n\t\t\t\t\treturn null;\n\t\t\t\t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/Index.java","project://smallsql0.21_src/src/smallsql/database/Index.java",]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 4,
        "mass": 3,
        "clones": 2,
        "snippet": "{\n\t\t\t\t\tnode.saveValue(rowOffset);\n\t\t\t\t\treturn null;\n\t\t\t\t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/Index.java","project://smallsql0.21_src/src/smallsql/database/Index.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 3,
        "mass": 3,
        "clones": 2,
        "snippet": "if(equals(node.getRemainderValue(), key, i)){\n\t\t\t\treturn node;\n\t\t\t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/Index.java","project://smallsql0.21_src/src/smallsql/database/Index.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 3,
        "mass": 3,
        "clones": 2,
        "snippet": "if(equals(node.getRemainderValue(), key, i)){\n\t\t\t\treturn node;\n\t\t\t}\n"
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
        "cloneClassesType1": 6
    },
    "results": {
        "type-1": [
            
{
    "metadata": {
        "cc": 2,
        "volume": 3,
        "mass": 4,
        "clones": 53,
        "snippet": "catch(Exception e){\n    \t\tthrow SmallSQLException.createFromException(e);\n    \t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/SSPreparedStatement.java","project://smallsql0.21_src/src/smallsql/database/SSPreparedStatement.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/ViewResult.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSStatement.java","project://smallsql0.21_src/src/smallsql/database/StorePage.java","project://smallsql0.21_src/src/smallsql/database/Database.java","project://smallsql0.21_src/src/smallsql/database/Database.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 3,
        "mass": 4,
        "clones": 53,
        "snippet": "catch(Exception e){\n    \t\tthrow SmallSQLException.createFromException(e);\n    \t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/SSPreparedStatement.java","project://smallsql0.21_src/src/smallsql/database/SSPreparedStatement.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/ViewResult.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSStatement.java","project://smallsql0.21_src/src/smallsql/database/StorePage.java","project://smallsql0.21_src/src/smallsql/database/Database.java","project://smallsql0.21_src/src/smallsql/database/Database.java",]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 5,
        "mass": 3,
        "clones": 3,
        "snippet": "{\n        checkStatement();\n\t\tcmd.setParamValue( parameterIndex, x, -1);\n    }\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/SSPreparedStatement.java","project://smallsql0.21_src/src/smallsql/database/SSPreparedStatement.java","project://smallsql0.21_src/src/smallsql/database/SSPreparedStatement.java",]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 5,
        "mass": 3,
        "clones": 3,
        "snippet": "{\n        checkStatement();\n\t\tcmd.setParamValue( parameterIndex, x, -1);\n    }\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/SSPreparedStatement.java","project://smallsql0.21_src/src/smallsql/database/SSPreparedStatement.java","project://smallsql0.21_src/src/smallsql/database/SSPreparedStatement.java",]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 5,
        "mass": 3,
        "clones": 3,
        "snippet": "{\n        checkStatement();\n\t\tcmd.setParamValue( parameterIndex, x, -1);\n    }\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/SSPreparedStatement.java","project://smallsql0.21_src/src/smallsql/database/SSPreparedStatement.java","project://smallsql0.21_src/src/smallsql/database/SSPreparedStatement.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 4,
        "mass": 4,
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
    "filename": "project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionSoundex.java",
    "metadata": {
        "volume": 0,
        "cloneClassesType1": 1
    },
    "results": {
        "type-1": [
            
{
    "metadata": {
        "cc": 1,
        "volume": 3,
        "mass": 3,
        "clones": 13,
        "snippet": "final boolean isNull() throws Exception {\n\t\treturn param1.isNull();\n\t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionUCase.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionReturnFloat.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionOctetLen.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionRTrim.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionReturnString.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionBitLen.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionReturnP1.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionLCase.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionConvert.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionLTrim.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionReturnInt.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionSoundex.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionCharLen.java",]
}
,
        ],
        "type-2": [
            
        ]
    }
}
,
{
    "filename": "project://smallsql0.21_src/src/smallsql/database/Language/Language_en.java",
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
        "mass": 3,
        "clones": 24,
        "snippet": "package smallsql.database.language;\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/Language/Language_it.java","project://smallsql0.21_src/src/smallsql/database/Language/Language.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_it.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_de.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_it.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_en.java","project://smallsql0.21_src/src/smallsql/database/Language/Language.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_it.java","project://smallsql0.21_src/src/smallsql/database/Language/Language.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_de.java","project://smallsql0.21_src/src/smallsql/database/Language/Language.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_en.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_de.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_it.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_de.java","project://smallsql0.21_src/src/smallsql/database/Language/Language.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_de.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_en.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_en.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_it.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_en.java","project://smallsql0.21_src/src/smallsql/database/Language/Language.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_en.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_de.java",]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 1,
        "mass": 3,
        "clones": 24,
        "snippet": "package smallsql.database.language;\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/Language/Language_it.java","project://smallsql0.21_src/src/smallsql/database/Language/Language.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_it.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_de.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_it.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_en.java","project://smallsql0.21_src/src/smallsql/database/Language/Language.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_it.java","project://smallsql0.21_src/src/smallsql/database/Language/Language.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_de.java","project://smallsql0.21_src/src/smallsql/database/Language/Language.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_en.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_de.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_it.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_de.java","project://smallsql0.21_src/src/smallsql/database/Language/Language.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_de.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_en.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_en.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_it.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_en.java","project://smallsql0.21_src/src/smallsql/database/Language/Language.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_en.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_de.java",]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 1,
        "mass": 3,
        "clones": 24,
        "snippet": "package smallsql.database.language;\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/Language/Language_it.java","project://smallsql0.21_src/src/smallsql/database/Language/Language.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_it.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_de.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_it.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_en.java","project://smallsql0.21_src/src/smallsql/database/Language/Language.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_it.java","project://smallsql0.21_src/src/smallsql/database/Language/Language.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_de.java","project://smallsql0.21_src/src/smallsql/database/Language/Language.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_en.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_de.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_it.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_de.java","project://smallsql0.21_src/src/smallsql/database/Language/Language.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_de.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_en.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_en.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_it.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_en.java","project://smallsql0.21_src/src/smallsql/database/Language/Language.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_en.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_de.java",]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 1,
        "mass": 3,
        "clones": 24,
        "snippet": "package smallsql.database.language;\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/Language/Language_it.java","project://smallsql0.21_src/src/smallsql/database/Language/Language.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_it.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_de.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_it.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_en.java","project://smallsql0.21_src/src/smallsql/database/Language/Language.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_it.java","project://smallsql0.21_src/src/smallsql/database/Language/Language.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_de.java","project://smallsql0.21_src/src/smallsql/database/Language/Language.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_en.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_de.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_it.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_de.java","project://smallsql0.21_src/src/smallsql/database/Language/Language.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_de.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_en.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_en.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_it.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_en.java","project://smallsql0.21_src/src/smallsql/database/Language/Language.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_en.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_de.java",]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 1,
        "mass": 3,
        "clones": 24,
        "snippet": "package smallsql.database.language;\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/Language/Language_it.java","project://smallsql0.21_src/src/smallsql/database/Language/Language.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_it.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_de.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_it.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_en.java","project://smallsql0.21_src/src/smallsql/database/Language/Language.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_it.java","project://smallsql0.21_src/src/smallsql/database/Language/Language.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_de.java","project://smallsql0.21_src/src/smallsql/database/Language/Language.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_en.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_de.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_it.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_de.java","project://smallsql0.21_src/src/smallsql/database/Language/Language.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_de.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_en.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_en.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_it.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_en.java","project://smallsql0.21_src/src/smallsql/database/Language/Language.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_en.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_de.java",]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 1,
        "mass": 3,
        "clones": 24,
        "snippet": "package smallsql.database.language;\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/Language/Language_it.java","project://smallsql0.21_src/src/smallsql/database/Language/Language.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_it.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_de.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_it.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_en.java","project://smallsql0.21_src/src/smallsql/database/Language/Language.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_it.java","project://smallsql0.21_src/src/smallsql/database/Language/Language.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_de.java","project://smallsql0.21_src/src/smallsql/database/Language/Language.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_en.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_de.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_it.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_de.java","project://smallsql0.21_src/src/smallsql/database/Language/Language.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_de.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_en.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_en.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_it.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_en.java","project://smallsql0.21_src/src/smallsql/database/Language/Language.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_en.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_de.java",]
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
        "cloneClassesType1": 8
    },
    "results": {
        "type-1": [
            
{
    "metadata": {
        "cc": 3,
        "volume": 12,
        "mass": 8,
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
        "mass": 8,
        "clones": 2,
        "snippet": "if(status.nodeValue != null){\n\t\t\t\t\t\tif(status.nodeValue instanceof IndexNode){\n\t\t\t\t\t\t\tlevel++;\n\t\t\t\t\t\t\tnodeStack.push(\n\t\t\t\t\t\t\t\tnew IndexNodeScrollStatus( \t(IndexNode)status.nodeValue, \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t(expressions.get(level).getAlias() != SQLTokenizer.DESC_STR), \n\t\t\t\t\t\t\t\t\t\t\t\t\t\tscroll, level));\n\t\t\t\t\t\t\tcontinue;\n\t\t\t\t\t\t}else\n\t\t\t\t\t\t\treturn getReturnValue(status.nodeValue);\n\t\t\t\t\t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/IndexScrollStatus.java","project://smallsql0.21_src/src/smallsql/database/IndexScrollStatus.java",]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 4,
        "mass": 3,
        "clones": 2,
        "snippet": "{\n\t\t\t\t\t\tnodeStack.pop();\n\t\t\t\t\t\tcontinue;\n\t\t\t\t\t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/IndexScrollStatus.java","project://smallsql0.21_src/src/smallsql/database/IndexScrollStatus.java",]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 4,
        "mass": 3,
        "clones": 2,
        "snippet": "{\n\t\t\t\t\t\tnodeStack.pop();\n\t\t\t\t\t\tcontinue;\n\t\t\t\t\t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/IndexScrollStatus.java","project://smallsql0.21_src/src/smallsql/database/IndexScrollStatus.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 12,
        "mass": 7,
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
        "mass": 7,
        "clones": 2,
        "snippet": "{\n\t\t\t\t\t\tif(status.nodeValue instanceof IndexNode){\n\t\t\t\t\t\t\tlevel++;\n\t\t\t\t\t\t\tnodeStack.push(\n\t\t\t\t\t\t\t\tnew IndexNodeScrollStatus( \t(IndexNode)status.nodeValue, \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t(expressions.get(level).getAlias() != SQLTokenizer.DESC_STR), \n\t\t\t\t\t\t\t\t\t\t\t\t\t\tscroll, level));\n\t\t\t\t\t\t\tcontinue;\n\t\t\t\t\t\t}else\n\t\t\t\t\t\t\treturn getReturnValue(status.nodeValue);\n\t\t\t\t\t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/IndexScrollStatus.java","project://smallsql0.21_src/src/smallsql/database/IndexScrollStatus.java",]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 8,
        "mass": 4,
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
        "mass": 4,
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
        "cc": 4,
        "volume": 6,
        "mass": 10,
        "clones": 2,
        "snippet": "static boolean string2boolean( String val){\n        try{\n            return Double.parseDouble( val ) != 0;\n        return \"true\".equalsIgnoreCase( val ) || \"yes\".equalsIgnoreCase( val ) || \"t\".equalsIgnoreCase( val );\n    }\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/Utils.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 1,
        "mass": 3,
        "clones": 4,
        "snippet": ""
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/database/Utils.java","project://smallsql0.21_src/src/smallsql/database/Utils.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 1,
        "mass": 3,
        "clones": 4,
        "snippet": ""
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java","project://smallsql0.21_src/src/smallsql/database/Utils.java","project://smallsql0.21_src/src/smallsql/database/Utils.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 8,
        "mass": 11,
        "clones": 2,
        "snippet": "static String bytes2hex( byte[] bytes ){\n        StringBuffer buf = new StringBuffer(bytes.length << 1);\n        for(int i=0; i<bytes.length; i++){\n            buf.append( digits[ (bytes[i] >> 4) & 0x0F ] );\n            buf.append( digits[ (bytes[i]     ) & 0x0F ] );\n        }\n        return buf.toString();\n    }\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/Utils.java","project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 3,
        "mass": 4,
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
        "mass": 4,
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
        "mass": 9,
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
    "filename": "project://smallsql0.21_src/src/smallsql/database/ExpressionInSelect.java",
    "metadata": {
        "volume": 0,
        "cloneClassesType1": 1
    },
    "results": {
        "type-1": [
            
{
    "metadata": {
        "cc": 2,
        "volume": 1,
        "mass": 3,
        "clones": 51,
        "snippet": "catch (Exception e) {}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/junit/BenchTest.java","project://smallsql0.21_src/src/smallsql/database/Database.java","project://smallsql0.21_src/src/smallsql/database/ExpressionInSelect.java",]
}
,
        ],
        "type-2": [
            
        ]
    }
}
,
{
    "filename": "project://smallsql0.21_src/src/smallsql/database/Expression.java",
    "metadata": {
        "volume": 0,
        "cloneClassesType1": 4
    },
    "results": {
        "type-1": [
            
{
    "metadata": {
        "cc": 1,
        "volume": 3,
        "mass": 3,
        "clones": 3,
        "snippet": "int getPrecision() {\n        return SSResultSetMetaData.getDataTypePrecision( getDataType(), -1 );\n    }\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionReplace.java","project://smallsql0.21_src/src/smallsql/database/Expression.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionRepeat.java",]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 3,
        "mass": 3,
        "clones": 5,
        "snippet": "final String getName(){\n\t\treturn name;\n\t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/IndexDescription.java","project://smallsql0.21_src/src/smallsql/database/Column.java","project://smallsql0.21_src/src/smallsql/database/Expression.java","project://smallsql0.21_src/src/smallsql/database/Database.java","project://smallsql0.21_src/src/smallsql/database/TableView.java",]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 3,
        "mass": 4,
        "clones": 2,
        "snippet": "final void setAlias(String alias){ \n\t\tthis.alias = alias; \n\t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/Expression.java","project://smallsql0.21_src/src/smallsql/database/TableViewResult.java",]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 3,
        "mass": 3,
        "clones": 2,
        "snippet": "String getTableName(){\n\t\treturn null;\n\t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/ExpressionValue.java","project://smallsql0.21_src/src/smallsql/database/Expression.java",]
}
,
        ],
        "type-2": [
            
        ]
    }
}
,
{
    "filename": "project://smallsql0.21_src/src/smallsql/database/StorePage.java",
    "metadata": {
        "volume": 0,
        "cloneClassesType1": 1
    },
    "results": {
        "type-1": [
            
{
    "metadata": {
        "cc": 2,
        "volume": 3,
        "mass": 4,
        "clones": 53,
        "snippet": "catch(Exception e){\n    \t\tthrow SmallSQLException.createFromException(e);\n    \t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/SSPreparedStatement.java","project://smallsql0.21_src/src/smallsql/database/SSPreparedStatement.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/ViewResult.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSStatement.java","project://smallsql0.21_src/src/smallsql/database/StorePage.java","project://smallsql0.21_src/src/smallsql/database/Database.java","project://smallsql0.21_src/src/smallsql/database/Database.java",]
}
,
        ],
        "type-2": [
            
        ]
    }
}
,
{
    "filename": "project://smallsql0.21_src/src/smallsql/database/TableViewResult.java",
    "metadata": {
        "volume": 0,
        "cloneClassesType1": 2
    },
    "results": {
        "type-1": [
            
{
    "metadata": {
        "cc": 1,
        "volume": 3,
        "mass": 3,
        "clones": 4,
        "snippet": "final boolean isScrollable() {\n\t\treturn false;\n\t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/Distinct.java","project://smallsql0.21_src/src/smallsql/database/TableViewResult.java","project://smallsql0.21_src/src/smallsql/database/UnionAll.java","project://smallsql0.21_src/src/smallsql/database/Join.java",]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 3,
        "mass": 4,
        "clones": 2,
        "snippet": "final void setAlias(String alias){ \n\t\tthis.alias = alias; \n\t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/Expression.java","project://smallsql0.21_src/src/smallsql/database/TableViewResult.java",]
}
,
        ],
        "type-2": [
            
        ]
    }
}
,
{
    "filename": "project://smallsql0.21_src/src/smallsql/database/MutableInteger.java",
    "metadata": {
        "volume": 0,
        "cloneClassesType1": 4
    },
    "results": {
        "type-1": [
            
{
    "metadata": {
        "cc": 1,
        "volume": 3,
        "mass": 3,
        "clones": 5,
        "snippet": "public double doubleValue() {\n\t\treturn value;\n\t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/MutableDouble.java","project://smallsql0.21_src/src/smallsql/database/MutableInteger.java","project://smallsql0.21_src/src/smallsql/database/MutableFloat.java","project://smallsql0.21_src/src/smallsql/database/MutableLong.java","project://smallsql0.21_src/src/smallsql/database/Identity.java",]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 3,
        "mass": 3,
        "clones": 5,
        "snippet": "public String toString(){\n\t\treturn String.valueOf(value);\n\t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/MutableDouble.java","project://smallsql0.21_src/src/smallsql/database/MutableInteger.java","project://smallsql0.21_src/src/smallsql/database/MutableFloat.java","project://smallsql0.21_src/src/smallsql/database/MutableLong.java","project://smallsql0.21_src/src/smallsql/database/Identity.java",]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 3,
        "mass": 3,
        "clones": 4,
        "snippet": "public float floatValue() {\n\t\treturn value;\n\t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/MutableInteger.java","project://smallsql0.21_src/src/smallsql/database/MutableFloat.java","project://smallsql0.21_src/src/smallsql/database/MutableLong.java","project://smallsql0.21_src/src/smallsql/database/Identity.java",]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 3,
        "mass": 3,
        "clones": 3,
        "snippet": "public long longValue() {\n\t\treturn value;\n\t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/MutableInteger.java","project://smallsql0.21_src/src/smallsql/database/MutableLong.java","project://smallsql0.21_src/src/smallsql/database/Identity.java",]
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
        "cloneClassesType1": 4
    },
    "results": {
        "type-1": [
            
{
    "metadata": {
        "cc": 1,
        "volume": 4,
        "mass": 3,
        "clones": 2,
        "snippet": "{\n\t\t\toffset = previousOffset;\n\t\t\treturn;\n\t\t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/LongTreeList.java","project://smallsql0.21_src/src/smallsql/database/LongTreeList.java",]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 4,
        "mass": 3,
        "clones": 2,
        "snippet": "{\n\t\t\toffset = previousOffset;\n\t\t\treturn;\n\t\t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/LongTreeList.java","project://smallsql0.21_src/src/smallsql/database/LongTreeList.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 4,
        "mass": 4,
        "clones": 2,
        "snippet": "if(listEnum.stack>=3){\n\t\t\t\t\tlistEnum.offsetStack[listEnum.stack] = offset;\n\t\t\t\t\treturn result;\n\t\t\t\t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/LongTreeList.java","project://smallsql0.21_src/src/smallsql/database/LongTreeList.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 4,
        "mass": 4,
        "clones": 2,
        "snippet": "if(listEnum.stack>=3){\n\t\t\t\t\tlistEnum.offsetStack[listEnum.stack] = offset;\n\t\t\t\t\treturn result;\n\t\t\t\t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/LongTreeList.java","project://smallsql0.21_src/src/smallsql/database/LongTreeList.java",]
}
,
        ],
        "type-2": [
            
        ]
    }
}
,
{
    "filename": "project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionBitLen.java",
    "metadata": {
        "volume": 0,
        "cloneClassesType1": 1
    },
    "results": {
        "type-1": [
            
{
    "metadata": {
        "cc": 1,
        "volume": 3,
        "mass": 3,
        "clones": 13,
        "snippet": "final boolean isNull() throws Exception {\n\t\treturn param1.isNull();\n\t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionUCase.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionReturnFloat.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionOctetLen.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionRTrim.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionReturnString.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionBitLen.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionReturnP1.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionLCase.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionConvert.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionLTrim.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionReturnInt.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionSoundex.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionCharLen.java",]
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
        "cloneClassesType1": 9
    },
    "results": {
        "type-1": [
            
{
    "metadata": {
        "cc": 1,
        "volume": 3,
        "mass": 3,
        "clones": 2,
        "snippet": "final boolean getBoolean() throws Exception {\n\t\treturn getInt() != 0;\n\t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionReturnInt.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionTimestampDiff.java",]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 3,
        "mass": 3,
        "clones": 2,
        "snippet": "final int getDataType() {\n\t\treturn SQLTokenizer.INT;\n\t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionReturnInt.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionTimestampDiff.java",]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 3,
        "mass": 3,
        "clones": 2,
        "snippet": "final float getFloat() throws Exception {\n\t\treturn getInt();\n\t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionReturnInt.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionTimestampDiff.java",]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 3,
        "mass": 3,
        "clones": 2,
        "snippet": "final double getDouble() throws Exception {\n\t\treturn getInt();\n\t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionReturnInt.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionTimestampDiff.java",]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 3,
        "mass": 3,
        "clones": 2,
        "snippet": "final long getLong() throws Exception {\n\t\treturn getInt();\n\t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionReturnInt.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionTimestampDiff.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 4,
        "mass": 5,
        "clones": 2,
        "snippet": "Object getObject() throws Exception {\n\t\tif(isNull()) return null;\n\t\treturn Utils.getInteger(getInt());\n\t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionReturnInt.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionTimestampDiff.java",]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 3,
        "mass": 3,
        "clones": 13,
        "snippet": "final boolean isNull() throws Exception {\n\t\treturn param1.isNull();\n\t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionUCase.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionReturnFloat.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionOctetLen.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionRTrim.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionReturnString.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionBitLen.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionReturnP1.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionLCase.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionConvert.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionLTrim.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionReturnInt.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionSoundex.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionCharLen.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 4,
        "mass": 5,
        "clones": 2,
        "snippet": "final MutableNumeric getNumeric() throws Exception {\n\t\tif(isNull()) return null;\n\t\treturn new MutableNumeric(getInt());\n\t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionReturnInt.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionTimestampDiff.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 4,
        "mass": 5,
        "clones": 2,
        "snippet": "final String getString() throws Exception {\n\t\tif(isNull()) return null;\n\t\treturn String.valueOf(getInt());\n\t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionReturnInt.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionTimestampDiff.java",]
}
,
        ],
        "type-2": [
            
        ]
    }
}
,
{
    "filename": "project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionCharLen.java",
    "metadata": {
        "volume": 0,
        "cloneClassesType1": 1
    },
    "results": {
        "type-1": [
            
{
    "metadata": {
        "cc": 1,
        "volume": 3,
        "mass": 3,
        "clones": 13,
        "snippet": "final boolean isNull() throws Exception {\n\t\treturn param1.isNull();\n\t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionUCase.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionReturnFloat.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionOctetLen.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionRTrim.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionReturnString.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionBitLen.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionReturnP1.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionLCase.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionConvert.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionLTrim.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionReturnInt.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionSoundex.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionCharLen.java",]
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
        "cloneClassesType1": 5
    },
    "results": {
        "type-1": [
            
{
    "metadata": {
        "cc": 2,
        "volume": 3,
        "mass": 4,
        "clones": 53,
        "snippet": "catch(Exception e){\n    \t\tthrow SmallSQLException.createFromException(e);\n    \t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/SSPreparedStatement.java","project://smallsql0.21_src/src/smallsql/database/SSPreparedStatement.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/ViewResult.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java","project://smallsql0.21_src/src/smallsql/database/SSStatement.java","project://smallsql0.21_src/src/smallsql/database/StorePage.java","project://smallsql0.21_src/src/smallsql/database/Database.java","project://smallsql0.21_src/src/smallsql/database/Database.java",]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 3,
        "mass": 3,
        "clones": 3,
        "snippet": "public SQLWarning getWarnings(){\n        return null;\n    }\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/SSResultSet.java","project://smallsql0.21_src/src/smallsql/database/SSConnection.java","project://smallsql0.21_src/src/smallsql/database/SSStatement.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 4,
        "mass": 4,
        "clones": 2,
        "snippet": "if(failed == null){\n                    failed = new BatchUpdateException(ex.getMessage(), ex.getSQLState(), ex.getErrorCode(), result);\n                    failed.initCause(ex);\n                }\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/SSStatement.java","project://smallsql0.21_src/src/smallsql/database/SSPreparedStatement.java",]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 3,
        "mass": 3,
        "clones": 2,
        "snippet": "final public int getMaxRows(){\n        return maxRows;\n    }\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/SSStatement.java","project://smallsql0.21_src/src/smallsql/database/CommandSelect.java",]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 3,
        "mass": 3,
        "clones": 2,
        "snippet": "final public Connection getConnection(){\n        return con;\n    }\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/SSStatement.java","project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java",]
}
,
        ],
        "type-2": [
            
        ]
    }
}
,
{
    "filename": "project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionLeft.java",
    "metadata": {
        "volume": 0,
        "cloneClassesType1": 1
    },
    "results": {
        "type-1": [
            
{
    "metadata": {
        "cc": 2,
        "volume": 3,
        "mass": 3,
        "clones": 11,
        "snippet": "boolean isNull() throws Exception {\n\t\treturn param1.isNull() || param2.isNull();\n\t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionTimestampAdd.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionATan2.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionTimestampDiff.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionTruncate.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionRound.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionDifference.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionMod.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionPower.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionRight.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionLocate.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionLeft.java",]
}
,
        ],
        "type-2": [
            
        ]
    }
}
,
{
    "filename": "project://smallsql0.21_src/src/smallsql/database/JoinScroll.java",
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
        "mass": 5,
        "clones": 2,
        "snippet": "{\n                    if(fullReturnCounter >= fullRowCount){\n                       return false; \n                    }\n                    right.next();\n                }\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/JoinScroll.java","project://smallsql0.21_src/src/smallsql/database/JoinScroll.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 6,
        "mass": 5,
        "clones": 2,
        "snippet": "{\n                    if(fullReturnCounter >= fullRowCount){\n                       return false; \n                    }\n                    right.next();\n                }\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/JoinScroll.java","project://smallsql0.21_src/src/smallsql/database/JoinScroll.java",]
}
,
        ],
        "type-2": [
            
        ]
    }
}
,
{
    "filename": "project://smallsql0.21_src/src/smallsql/database/Language/Language.java",
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
        "mass": 3,
        "clones": 24,
        "snippet": "package smallsql.database.language;\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/Language/Language_it.java","project://smallsql0.21_src/src/smallsql/database/Language/Language.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_it.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_de.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_it.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_en.java","project://smallsql0.21_src/src/smallsql/database/Language/Language.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_it.java","project://smallsql0.21_src/src/smallsql/database/Language/Language.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_de.java","project://smallsql0.21_src/src/smallsql/database/Language/Language.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_en.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_de.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_it.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_de.java","project://smallsql0.21_src/src/smallsql/database/Language/Language.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_de.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_en.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_en.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_it.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_en.java","project://smallsql0.21_src/src/smallsql/database/Language/Language.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_en.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_de.java",]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 1,
        "mass": 3,
        "clones": 24,
        "snippet": "package smallsql.database.language;\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/Language/Language_it.java","project://smallsql0.21_src/src/smallsql/database/Language/Language.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_it.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_de.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_it.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_en.java","project://smallsql0.21_src/src/smallsql/database/Language/Language.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_it.java","project://smallsql0.21_src/src/smallsql/database/Language/Language.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_de.java","project://smallsql0.21_src/src/smallsql/database/Language/Language.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_en.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_de.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_it.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_de.java","project://smallsql0.21_src/src/smallsql/database/Language/Language.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_de.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_en.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_en.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_it.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_en.java","project://smallsql0.21_src/src/smallsql/database/Language/Language.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_en.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_de.java",]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 1,
        "mass": 3,
        "clones": 24,
        "snippet": "package smallsql.database.language;\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/Language/Language_it.java","project://smallsql0.21_src/src/smallsql/database/Language/Language.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_it.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_de.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_it.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_en.java","project://smallsql0.21_src/src/smallsql/database/Language/Language.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_it.java","project://smallsql0.21_src/src/smallsql/database/Language/Language.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_de.java","project://smallsql0.21_src/src/smallsql/database/Language/Language.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_en.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_de.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_it.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_de.java","project://smallsql0.21_src/src/smallsql/database/Language/Language.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_de.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_en.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_en.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_it.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_en.java","project://smallsql0.21_src/src/smallsql/database/Language/Language.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_en.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_de.java",]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 1,
        "mass": 3,
        "clones": 24,
        "snippet": "package smallsql.database.language;\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/Language/Language_it.java","project://smallsql0.21_src/src/smallsql/database/Language/Language.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_it.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_de.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_it.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_en.java","project://smallsql0.21_src/src/smallsql/database/Language/Language.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_it.java","project://smallsql0.21_src/src/smallsql/database/Language/Language.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_de.java","project://smallsql0.21_src/src/smallsql/database/Language/Language.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_en.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_de.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_it.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_de.java","project://smallsql0.21_src/src/smallsql/database/Language/Language.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_de.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_en.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_en.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_it.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_en.java","project://smallsql0.21_src/src/smallsql/database/Language/Language.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_en.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_de.java",]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 1,
        "mass": 3,
        "clones": 24,
        "snippet": "package smallsql.database.language;\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/Language/Language_it.java","project://smallsql0.21_src/src/smallsql/database/Language/Language.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_it.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_de.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_it.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_en.java","project://smallsql0.21_src/src/smallsql/database/Language/Language.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_it.java","project://smallsql0.21_src/src/smallsql/database/Language/Language.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_de.java","project://smallsql0.21_src/src/smallsql/database/Language/Language.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_en.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_de.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_it.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_de.java","project://smallsql0.21_src/src/smallsql/database/Language/Language.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_de.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_en.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_en.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_it.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_en.java","project://smallsql0.21_src/src/smallsql/database/Language/Language.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_en.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_de.java",]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 1,
        "mass": 3,
        "clones": 24,
        "snippet": "package smallsql.database.language;\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/Language/Language_it.java","project://smallsql0.21_src/src/smallsql/database/Language/Language.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_it.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_de.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_it.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_en.java","project://smallsql0.21_src/src/smallsql/database/Language/Language.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_it.java","project://smallsql0.21_src/src/smallsql/database/Language/Language.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_de.java","project://smallsql0.21_src/src/smallsql/database/Language/Language.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_en.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_de.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_it.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_de.java","project://smallsql0.21_src/src/smallsql/database/Language/Language.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_de.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_en.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_en.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_it.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_en.java","project://smallsql0.21_src/src/smallsql/database/Language/Language.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_en.java","project://smallsql0.21_src/src/smallsql/database/Language/Language_de.java",]
}
,
        ],
        "type-2": [
            
        ]
    }
}
,
{
    "filename": "project://smallsql0.21_src/src/smallsql/database/Column.java",
    "metadata": {
        "volume": 0,
        "cloneClassesType1": 2
    },
    "results": {
        "type-1": [
            
{
    "metadata": {
        "cc": 1,
        "volume": 3,
        "mass": 3,
        "clones": 5,
        "snippet": "final String getName(){\n\t\treturn name;\n\t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/IndexDescription.java","project://smallsql0.21_src/src/smallsql/database/Column.java","project://smallsql0.21_src/src/smallsql/database/Expression.java","project://smallsql0.21_src/src/smallsql/database/Database.java","project://smallsql0.21_src/src/smallsql/database/TableView.java",]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 3,
        "mass": 3,
        "clones": 3,
        "snippet": "int getDataType(){\n        return dataType;\n    }\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/Column.java","project://smallsql0.21_src/src/smallsql/database/ExpressionValue.java","project://smallsql0.21_src/src/smallsql/database/DateTime.java",]
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
        "cloneClassesType1": 8
    },
    "results": {
        "type-1": [
            
{
    "metadata": {
        "cc": 4,
        "volume": 7,
        "mass": 10,
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
        "mass": 10,
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
        "mass": 9,
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
        "mass": 9,
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
        "mass": 9,
        "clones": 3,
        "snippet": "{\n\t\t\t\t\t\t\tIterator values = locks.values().iterator();\n\t\t\t\t\t\t\twhile(values.hasNext()){\n\t\t\t\t\t\t\t\tTableStorePage lock = (TableStorePage)values.next();\n\t\t\t\t\t\t\t\tif(lock.con != con) return null;\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/Table.java","project://smallsql0.21_src/src/smallsql/database/Table.java","project://smallsql0.21_src/src/smallsql/database/Table.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 4,
        "mass": 5,
        "clones": 3,
        "snippet": "{\n\t\t\t\t\t\t\t\tTableStorePage lock = (TableStorePage)values.next();\n\t\t\t\t\t\t\t\tif(lock.con != con) return null;\n\t\t\t\t\t\t\t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/Table.java","project://smallsql0.21_src/src/smallsql/database/Table.java","project://smallsql0.21_src/src/smallsql/database/Table.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 4,
        "mass": 5,
        "clones": 3,
        "snippet": "{\n\t\t\t\t\t\t\t\tTableStorePage lock = (TableStorePage)values.next();\n\t\t\t\t\t\t\t\tif(lock.con != con) return null;\n\t\t\t\t\t\t\t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/Table.java","project://smallsql0.21_src/src/smallsql/database/Table.java","project://smallsql0.21_src/src/smallsql/database/Table.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 4,
        "mass": 5,
        "clones": 3,
        "snippet": "{\n\t\t\t\t\t\t\t\tTableStorePage lock = (TableStorePage)values.next();\n\t\t\t\t\t\t\t\tif(lock.con != con) return null;\n\t\t\t\t\t\t\t}\n"
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
    "filename": "project://smallsql0.21_src/src/smallsql/database/LongLongList.java",
    "metadata": {
        "volume": 0,
        "cloneClassesType1": 2
    },
    "results": {
        "type-1": [
            
{
    "metadata": {
        "cc": 1,
        "volume": 3,
        "mass": 3,
        "clones": 3,
        "snippet": "final void clear(){\n\t\tsize = 0;\n\t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/LongList.java","project://smallsql0.21_src/src/smallsql/database/LongLongList.java","project://smallsql0.21_src/src/smallsql/database/Expressions.java",]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 3,
        "mass": 3,
        "clones": 9,
        "snippet": "final int size(){\n\t\treturn size;\n\t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/IndexDescriptions.java","project://smallsql0.21_src/src/smallsql/database/Columns.java","project://smallsql0.21_src/src/smallsql/database/LongList.java","project://smallsql0.21_src/src/smallsql/database/Strings.java","project://smallsql0.21_src/src/smallsql/database/Expressions.java","project://smallsql0.21_src/src/smallsql/database/ForeignKeys.java","project://smallsql0.21_src/src/smallsql/database/LongLongList.java","project://smallsql0.21_src/src/smallsql/database/DataSources.java","project://smallsql0.21_src/src/smallsql/database/StorePageMap.java",]
}
,
        ],
        "type-2": [
            
        ]
    }
}
,
{
    "filename": "project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionOctetLen.java",
    "metadata": {
        "volume": 0,
        "cloneClassesType1": 1
    },
    "results": {
        "type-1": [
            
{
    "metadata": {
        "cc": 1,
        "volume": 3,
        "mass": 3,
        "clones": 13,
        "snippet": "final boolean isNull() throws Exception {\n\t\treturn param1.isNull();\n\t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionUCase.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionReturnFloat.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionOctetLen.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionRTrim.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionReturnString.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionBitLen.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionReturnP1.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionLCase.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionConvert.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionLTrim.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionReturnInt.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionSoundex.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionCharLen.java",]
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
        "cloneClassesType1": 8
    },
    "results": {
        "type-1": [
            
{
    "metadata": {
        "cc": 2,
        "volume": 6,
        "mass": 8,
        "clones": 4,
        "snippet": "try{\n            rs.getString(\"v\");\n            fail(\"SQLException 'No current row' should be throw\");\n        }catch(SQLException ex){\n            assertSQLException( \"01000\", 0, ex );\n        }\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/junit/TestScrollable.java","project://smallsql0.21_src/src/smallsql/junit/TestScrollable.java","project://smallsql0.21_src/src/smallsql/junit/TestScrollable.java","project://smallsql0.21_src/src/smallsql/junit/TestScrollable.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 6,
        "mass": 8,
        "clones": 4,
        "snippet": "try{\n            rs.getString(\"v\");\n            fail(\"SQLException 'No current row' should be throw\");\n        }catch(SQLException ex){\n            assertSQLException( \"01000\", 0, ex );\n        }\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/junit/TestScrollable.java","project://smallsql0.21_src/src/smallsql/junit/TestScrollable.java","project://smallsql0.21_src/src/smallsql/junit/TestScrollable.java","project://smallsql0.21_src/src/smallsql/junit/TestScrollable.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 6,
        "mass": 8,
        "clones": 4,
        "snippet": "try{\n            rs.getString(\"v\");\n            fail(\"SQLException 'No current row' should be throw\");\n        }catch(SQLException ex){\n            assertSQLException( \"01000\", 0, ex );\n        }\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/junit/TestScrollable.java","project://smallsql0.21_src/src/smallsql/junit/TestScrollable.java","project://smallsql0.21_src/src/smallsql/junit/TestScrollable.java","project://smallsql0.21_src/src/smallsql/junit/TestScrollable.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 6,
        "mass": 8,
        "clones": 4,
        "snippet": "try{\n            rs.getString(\"v\");\n            fail(\"SQLException 'No current row' should be throw\");\n        }catch(SQLException ex){\n            assertSQLException( \"01000\", 0, ex );\n        }\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/junit/TestScrollable.java","project://smallsql0.21_src/src/smallsql/junit/TestScrollable.java","project://smallsql0.21_src/src/smallsql/junit/TestScrollable.java","project://smallsql0.21_src/src/smallsql/junit/TestScrollable.java",]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 4,
        "mass": 3,
        "clones": 4,
        "snippet": "{\n            rs.getString(\"v\");\n            fail(\"SQLException 'No current row' should be throw\");\n        }\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/junit/TestScrollable.java","project://smallsql0.21_src/src/smallsql/junit/TestScrollable.java","project://smallsql0.21_src/src/smallsql/junit/TestScrollable.java","project://smallsql0.21_src/src/smallsql/junit/TestScrollable.java",]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 4,
        "mass": 3,
        "clones": 4,
        "snippet": "{\n            rs.getString(\"v\");\n            fail(\"SQLException 'No current row' should be throw\");\n        }\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/junit/TestScrollable.java","project://smallsql0.21_src/src/smallsql/junit/TestScrollable.java","project://smallsql0.21_src/src/smallsql/junit/TestScrollable.java","project://smallsql0.21_src/src/smallsql/junit/TestScrollable.java",]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 4,
        "mass": 3,
        "clones": 4,
        "snippet": "{\n            rs.getString(\"v\");\n            fail(\"SQLException 'No current row' should be throw\");\n        }\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/junit/TestScrollable.java","project://smallsql0.21_src/src/smallsql/junit/TestScrollable.java","project://smallsql0.21_src/src/smallsql/junit/TestScrollable.java","project://smallsql0.21_src/src/smallsql/junit/TestScrollable.java",]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 4,
        "mass": 3,
        "clones": 4,
        "snippet": "{\n            rs.getString(\"v\");\n            fail(\"SQLException 'No current row' should be throw\");\n        }\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/junit/TestScrollable.java","project://smallsql0.21_src/src/smallsql/junit/TestScrollable.java","project://smallsql0.21_src/src/smallsql/junit/TestScrollable.java","project://smallsql0.21_src/src/smallsql/junit/TestScrollable.java",]
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
        "cloneClassesType1": 7
    },
    "results": {
        "type-1": [
            
{
    "metadata": {
        "cc": 2,
        "volume": 3,
        "mass": 3,
        "clones": 11,
        "snippet": "boolean isNull() throws Exception {\n\t\treturn param1.isNull() || param2.isNull();\n\t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionTimestampAdd.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionATan2.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionTimestampDiff.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionTruncate.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionRound.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionDifference.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionMod.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionPower.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionRight.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionLocate.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionLeft.java",]
}
,
{
    "metadata": {
        "cc": 4,
        "volume": 11,
        "mass": 13,
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
        "mass": 6,
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
        "mass": 6,
        "clones": 2,
        "snippet": "{\n\t\t\tfor(int i=0; i<places; i++){\n\t\t\t}\n\t\t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionRound.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionTruncate.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 5,
        "mass": 5,
        "clones": 2,
        "snippet": "if(places > 0){\n\t\t\tvalue \/= factor;\n\t\t}else{\n\t\t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionRound.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionTruncate.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 3,
        "mass": 4,
        "clones": 2,
        "snippet": "for(int i=0; i>places; i--){\n\t\t\t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionRound.java","project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionTruncate.java",]
}
,
{
    "metadata": {
        "cc": 2,
        "volume": 3,
        "mass": 4,
        "clones": 2,
        "snippet": "for(int i=0; i<places; i++){\n\t\t\t}\n"
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
    "filename": "project://smallsql0.21_src/src/smallsql/database/MutableFloat.java",
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
        "mass": 3,
        "clones": 5,
        "snippet": "public double doubleValue() {\n\t\treturn value;\n\t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/MutableDouble.java","project://smallsql0.21_src/src/smallsql/database/MutableInteger.java","project://smallsql0.21_src/src/smallsql/database/MutableFloat.java","project://smallsql0.21_src/src/smallsql/database/MutableLong.java","project://smallsql0.21_src/src/smallsql/database/Identity.java",]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 3,
        "mass": 3,
        "clones": 5,
        "snippet": "public String toString(){\n\t\treturn String.valueOf(value);\n\t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/MutableDouble.java","project://smallsql0.21_src/src/smallsql/database/MutableInteger.java","project://smallsql0.21_src/src/smallsql/database/MutableFloat.java","project://smallsql0.21_src/src/smallsql/database/MutableLong.java","project://smallsql0.21_src/src/smallsql/database/Identity.java",]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 3,
        "mass": 3,
        "clones": 4,
        "snippet": "public float floatValue() {\n\t\treturn value;\n\t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/MutableInteger.java","project://smallsql0.21_src/src/smallsql/database/MutableFloat.java","project://smallsql0.21_src/src/smallsql/database/MutableLong.java","project://smallsql0.21_src/src/smallsql/database/Identity.java",]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 3,
        "mass": 3,
        "clones": 4,
        "snippet": "public int intValue() {\n\t\treturn (int)value;\n\t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/MutableDouble.java","project://smallsql0.21_src/src/smallsql/database/MutableFloat.java","project://smallsql0.21_src/src/smallsql/database/MutableLong.java","project://smallsql0.21_src/src/smallsql/database/Identity.java",]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 3,
        "mass": 3,
        "clones": 2,
        "snippet": "public long longValue() {\n\t\treturn (long)value;\n\t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/MutableFloat.java","project://smallsql0.21_src/src/smallsql/database/MutableDouble.java",]
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
        "cloneClassesType1": 2
    },
    "results": {
        "type-1": [
            
{
    "metadata": {
        "cc": 2,
        "volume": 5,
        "mass": 4,
        "clones": 3,
        "snippet": "{\n\t\tif (idx >= size)\n\t\t\tthrow new IndexOutOfBoundsException(\"Index: \"+idx+\", Size: \"+size);\n\t\treturn data[idx];\n\t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/LongList.java","project://smallsql0.21_src/src/smallsql/database/DataSources.java","project://smallsql0.21_src/src/smallsql/database/Expressions.java",]
}
,
{
    "metadata": {
        "cc": 1,
        "volume": 3,
        "mass": 3,
        "clones": 9,
        "snippet": "final int size(){\n\t\treturn size;\n\t}\n"
    },
    "edges": ["project://smallsql0.21_src/src/smallsql/database/IndexDescriptions.java","project://smallsql0.21_src/src/smallsql/database/Columns.java","project://smallsql0.21_src/src/smallsql/database/LongList.java","project://smallsql0.21_src/src/smallsql/database/Strings.java","project://smallsql0.21_src/src/smallsql/database/Expressions.java","project://smallsql0.21_src/src/smallsql/database/ForeignKeys.java","project://smallsql0.21_src/src/smallsql/database/LongLongList.java","project://smallsql0.21_src/src/smallsql/database/DataSources.java","project://smallsql0.21_src/src/smallsql/database/StorePageMap.java",]
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