# Usage
## Running the analyzer (Rascal)

Open the project in Eclipse. Make sure the HSQL and SmallSQL projects are loaded in too.
In main.rsc, there are a few variables to make sure to point to the right location, and the right project is selected:

```
// Project locations.
loc smallsqlProj = |project://smallsql0.21_src|;
loc hsqldbProj = |project://hsqldb-2.3.1|;

// Project selection.
//loc project = smallsqlProj;
loc project = hsqldbProj;
```

After this press the Rascal icon to open the terminal. And run the following commands, and wait a while:

```
>import main;
>main();
```

After this the results will be generated, both for the visualization as, for the console representation.

## Starting the visualization (HTML/JS)

Python 3 is a prerequisite for the visualization to run. To start the visualization open a console in the root of our git repository. And run the following command (Linux/OSX compatible):
```
sh ./startvis.sh
```
After this a web browser can be opened and pointed at _http://localhost:8000/_ to look at the visualization. Every rerun of the analyzer project will at the end overwrite the datafiles for the visualization.
