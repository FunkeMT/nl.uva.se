module cloneVisualization

import IO;
import String;
import Map;
import List;

import utils::utils;

/**
 *	###########
 *	CONFIG
 *	###########
 */
loc JSON_FILE = |project://series-2/visualization/graph/data.js|;
loc JSON_FILE_D3 = |project://series-2/visualization/circle/data_d3.json|;


/**
 *	###########
 *	TEMPLATES
 *	###########
 */
str TMPL_INTRO = "
	\"Project-Name\": \"###PROJECT_NAME###\",
	\"metadata\": {
        \"Volume\": ###PROJECT_VOLUME###,
        \"%-Duplicated-Lines\": ###PROJECT_PERCENTAGE_DUP_LINES###,
        \"Number-Duplicated-Lines\": ###PROJECT_NUM_DUP_LINES###,
        \"Number-Clones\": ###PROJECT_NUM_CLONES###,
        \"Number-Clone-Classes\": ###PROJECT_NUM_CLONE_CLASSES###,
        \"Biggest-Clone-Lines\": ###PROJECT_BIGGEST_CLONE_LINES###,
        \"Biggest-Clone-Class\": ###PROJECT_BIGGEST_CLONE_CLASS###
    }
";

str TMPL_OPTIONS = "
	\"options\": {
    \"metadata\": [
      \"cc\",
      \"volume\",
      \"mass\"
    ],
    \"types\": [
      \"1\",
      \"2\"
    ]
  }
";

str TMPL_FILES = "
{
    \"filename\": \"###FILE_NAME###\",
    \"metadata\": {
        \"volume\": ###FILE_VOLUME###,
        \"cloneClassesType1\": ###FILE_CLONECLASSES_TYPE_1###
    },
    \"results\": {
        \"type-1\": [
            ###CLONE_CLASS_TYPE_1###
        ],
        \"type-2\": [
            ###CLONE_CLASS_TYPE_2###
        ]
    }
}
";

str TMPL_CLONECLASS = "
{
    \"metadata\": {
        \"cc\": ###CLONE_CC###,
        \"volume\": ###CLONE_VOLUME###,
        \"mass\": ###CLONE_MASS###,
        \"clones\": ###CLONE_CLONES###,
        \"snippet\": \"###CLONE_SNIPPET###\"
    },
    \"edges\": [###CLONE_EDGES###]
}
";

str TMPL_EDGE = "
{
	\"loc\": \"###EDGE_LOC###\",
    \"fromLine\": ###EDGE_FROM_LINE###,
    \"toLine\": ###EDGE_TO_LINE###
}
";

/**
 *	###########
 *	PUBLIC
 *	###########
 */
@doc{
	Implementation for 'Graph' visualization.
	Writes the given clone classes into a JSON file.
}
public void clonesToJson(map[str, list[tuple[node, loc]]] clones, str project, map[str, int] stats) {
	str json = "";
	
	str intro = TMPL_INTRO;
	intro = replaceFirst(intro, "###PROJECT_NAME###", project);
	intro = replaceFirst(intro, "###PROJECT_VOLUME###", "<stats["volume"]>");
	intro = replaceFirst(intro, "###PROJECT_PERCENTAGE_DUP_LINES###", "<stats["percentageDuplicatedLines"]>");
	intro = replaceFirst(intro, "###PROJECT_NUM_DUP_LINES###", "<stats["numberOfDuplicatedLines"]>");
	intro = replaceFirst(intro, "###PROJECT_NUM_CLONES###", "<stats["numberOfClones"]>");
	intro = replaceFirst(intro, "###PROJECT_NUM_CLONE_CLASSES###", "<stats["numberOfCloneClasses"]>");
	intro = replaceFirst(intro, "###PROJECT_BIGGEST_CLONE_LINES###", "<stats["biggestClonesLines"]>");
	intro = replaceFirst(intro, "###PROJECT_BIGGEST_CLONE_CLASS###", "<stats["biggestCloneClass"]>");

	
	map[str, list[str]] fileClasses = ();
	for (class <- clones) {
		for (clone <- clones[class]) {
			if (fileClasses[clone[1].uri]?) {
				fileClasses[clone[1].uri] += class;
			} else {
				fileClasses[clone[1].uri] = [class];
			}
		}
	}
	
	str files = "";
	for (file <- fileClasses) {
		//println("file: <file>");
		str filestr = TMPL_FILES;
		filestr = replaceFirst(filestr, "###FILE_NAME###", "<file>");
		filestr = replaceFirst(filestr, "###FILE_VOLUME###", "0");
		filestr = replaceFirst(filestr, "###FILE_CLONECLASSES_TYPE_1###", "<size(fileClasses[file])>");
		
		
		str type1 = "";
		for (hash <- fileClasses[file]) {
			
			loc cloneLoc = clones[hash][0][1];
			list[str] cloneLines = readFileLines(cloneLoc);
			str snippet = "";
			for (line <- cleanCodeLines(cloneLines)) snippet += "<line>\n";
			
			//println(escapeSourceCode(snippet));
			
			str clonestr = TMPL_CLONECLASS;
			clonestr = replaceFirst(clonestr, "###CLONE_CC###", "<getCyclomaticComplexity(clones[hash][0][0])>");
			clonestr = replaceFirst(clonestr, "###CLONE_VOLUME###", "<size(cloneLines)>");
			clonestr = replaceFirst(clonestr, "###CLONE_MASS###", "<mass(clones[hash][0][0])>");
			clonestr = replaceFirst(clonestr, "###CLONE_CLONES###", "<size(clones[hash])>");
			clonestr = replaceFirst(clonestr, "###CLONE_SNIPPET###", escapeCode(snippet));
			
			str edges = "";
			for (clone <- clones[hash]) {
				str edge = TMPL_EDGE;
				edge = replaceFirst(edge, "###EDGE_LOC###", clone[1].uri);
				edge = replaceFirst(edge, "###EDGE_FROM_LINE###", "<clone[1].begin.line>");
				edge = replaceFirst(edge, "###EDGE_TO_LINE###", "<clone[1].end.line>");
				edges += "<edge>,";
			}
			clonestr = replaceFirst(clonestr, "###CLONE_EDGES###", edges);
			
			type1 += "<clonestr>,";
		}
		
		filestr = replaceFirst(filestr, "###CLONE_CLASS_TYPE_1###", type1);
		filestr = replaceFirst(filestr, "###CLONE_CLASS_TYPE_2###", "");
		files += "<filestr>,";
	}
	
	
	json = "var results = {
		<intro>,
		<TMPL_OPTIONS>,
		\"files\": [
			<files>
		]
	}";
	
	writeFile(JSON_FILE, json); 
}





@doc{
	Implementation for 'Circle' visualization.
	Writes the given clone classes into a JSON file.
}
public void clonesToJsonD3(map[str, list[tuple[node, loc]]] clones) {
	str CLONE_TMPL = "{\"name\":\"###NAME###\",\"size\":1,\"imports\":[###EDGES###],\"snippet\":\"###SNIPPET###\"}";
	
	str clonesStr = "";
	for (hash <- clones) {
		for (cloneI <- clones[hash]) {
			str cloneTmpl = CLONE_TMPL;
			
			str nameI = substring(cloneI[1].path, 1) + "/" + "L-<cloneI[1].begin.line>";
			cloneTmpl = replaceFirst(cloneTmpl, "###NAME###", nameI);
			
			str edges = "";
			for (cloneJ <- clones[hash]) {
				str nameJ = substring(cloneJ[1].path, 1) + "/" + "L-<cloneJ[1].begin.line>";
				
				if (nameI == nameJ) continue;
				
				edges += "\"<nameJ>\",";
			}
			edges = replaceLast(edges, ",", "");
			cloneTmpl = replaceFirst(cloneTmpl, "###EDGES###", edges);
			
			
			list[str] cloneLines = readFileLines(cloneI[1]);
			str snippet = "";
			for (line <- cleanCodeLines(cloneLines)) snippet += "<line>\n";
			cloneTmpl = replaceFirst(cloneTmpl, "###SNIPPET###", escapeCode(snippet));
			
			clonesStr += "<cloneTmpl>,\n";
		}
		
	}
	clonesStr = replaceLast(clonesStr, ",", "");
	

	json = "[
		<clonesStr>
	]";
	
	writeFile(JSON_FILE_D3, json); 
}





