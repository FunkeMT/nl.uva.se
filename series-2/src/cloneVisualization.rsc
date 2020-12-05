module cloneVisualization

import IO;
import String;

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
    \"lines\": [XXX, XXX],
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
	
	
	json = "var results = {
		<intro>,
		<TMPL_OPTIONS>,
		\"files\": [
			<cloneClasses>
		]
	}";
	
	writeFile(JSON_FILE, json); 
}