module cloneVisualization

import IO;
import String;
import Map;
import List;

import utils;

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
        \"cc\": ###PROJECT_CC###,
        \"volume\": ###PROJECT_VOLUME###,
        \"mass\": ###PROJECT_MASS###
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
        \"cc\": ###FILE_CC###,
        \"volume\": ###FILE_VOLUME###,
        \"mass\": ###FILE_MASS###
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
    \"lines\": [1, 1],
    \"metadata\": {
        \"cc\": ###CLONE_CC###,
        \"volume\": ###CLONE_VOLUME###,
        \"mass\": ###CLONE_MASS###
    },
    \"snippet\": \"###CLONE_SNIPPET###\",
    \"edges\": [###CLONE_EDGES###]
}
";

/**
 *	###########
 *	PUBLIC
 *	###########
 */

public void clonesToJson(map[str, list[tuple[node, loc]]] clones) {
	str json = "";
	
	str intro = TMPL_INTRO;
	intro = replaceFirst(intro, "###PROJECT_NAME###", "foo");
	intro = replaceFirst(intro, "###PROJECT_CC###", "19.2");
	intro = replaceFirst(intro, "###PROJECT_VOLUME###", "16154");
	intro = replaceFirst(intro, "###PROJECT_MASS###", "5365");
	
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
		filestr = replaceFirst(filestr, "###FILE_CC###", "100");
		filestr = replaceFirst(filestr, "###FILE_VOLUME###", "100");
		filestr = replaceFirst(filestr, "###FILE_MASS###", "100");
		
		str type1 = "";
		for (hash <- fileClasses[file]) {
			//println("hash: <hash>");
			str clonestr = TMPL_CLONECLASS;
			clonestr = replaceFirst(clonestr, "###CLONE_CC###", "100");
			clonestr = replaceFirst(clonestr, "###CLONE_VOLUME###", "100");
			clonestr = replaceFirst(clonestr, "###CLONE_MASS###", "100");
			
			loc cloneLoc = clones[hash][0][1];
			str snippet = "";
			for (line <- cleanCodeLines(readFileLines(cloneLoc))) snippet += "<line>\n";
			clonestr = replaceFirst(clonestr, "###CLONE_SNIPPET###", "");
			
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
	
	/*
	str cloneClasses = "";
	for (class <- clones) {
		str clonestr = TMPL_CLONECLASS;
		clonestr = replaceFirst(clonestr, "###CLONE_CC###", "100");
		clonestr = replaceFirst(clonestr, "###CLONE_VOLUME###", "100");
		clonestr = replaceFirst(clonestr, "###CLONE_MASS###", "100");
		clonestr = replaceFirst(clonestr, "###CLONE_SNIPPET###", "100");
		
		str edges = "";
		for (clone <- clones[class]) {
			edges += "\"<clone[1].path>\",";
		}
		clonestr = replaceFirst(clonestr, "###CLONE_EDGES###", edges);
		
		cloneClasses += "<clonestr>,";
	}
	*/
	
	
	json = "var results = {
		<intro>,
		<TMPL_OPTIONS>,
		\"files\": [
			<files>
		]
	}";
	
	writeFile(JSON_FILE, json); 
}