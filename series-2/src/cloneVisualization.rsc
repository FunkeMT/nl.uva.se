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
loc JSON_FILE = |project://series-2/visjs/clones.js|;


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
				edges += "\"<clone[1].uri>\",";
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
	Escape source-code snippet for JSON.
	Based on:
	https://www.json.org/json-en.html
}
private str escapeCode(str code) {
    return escape(code, (
        "\"": "\\\"",
        "\\": "\\\\",
        "/": "\\/",
        "\b": "\\b",
        "\f": "\\f",
        "\n": "\\n",
        "\r": "\\r",
        "\t": "\\t",
        "\\s": "\\\\s"
    ));
}




public void clonesToJson2(map[str, list[tuple[node, loc]]] clones) {
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
	
	//println(json);
	
	writeFile(JSON_FILE, json); 
}





