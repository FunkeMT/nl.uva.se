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
loc JSON_FILE_D3 = |project://series-2/visualization/circle/data_d3.js|;


/**
 *	###########
 *	TEMPLATES
 *	###########
 */
str TMPL_INTRO = "
	\"project-name\": \"###PROJECT_NAME###\",
	\"metadata\": {
        \"cloneClassesType1\": ###PROJECT_CLONECLASSES###
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

public void clonesToJson(map[str, list[tuple[node, loc]]] clones, str project) {
	str json = "";
	
	str intro = TMPL_INTRO;
	intro = replaceFirst(intro, "###PROJECT_NAME###", project);
	intro = replaceFirst(intro, "###PROJECT_CLONECLASSES###", "<size(clones)>");
	
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






public void clonesToJsonD3(map[str, list[tuple[node, loc]]] clones) {
	str CLONE_TMPL = "{\"name\":\"###NAME###\",\"size\":1,\"imports\":[###EDGES###]}";
	
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
			clonesStr += "<cloneTmpl>,\n";
		}
		
	}
	clonesStr = replaceLast(clonesStr, ",", "");
	
	
	

	json = "[
		<clonesStr>
	]";
	
	writeFile(JSON_FILE_D3, json); 
}





