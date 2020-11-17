# Software Evolution 2020 - Universiteit van Amsterdam

## Series 1

Maintainability is one of the characteristics the ISO standard 9126 describes for software engineering. This repository intends to implement the SIG Software Maintainability Model from [Heitlager et at. (2007)](http://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.120.4996&rep=rep1&type=pdf).

### Execution
Configure the project in [main.rsc](https://github.com/FunkeMT/nl.uva.se/blob/main/series-1/src/main.rsc#L29) to either one of the following settings:

* `loc smallsqlProj = |project://smallsql0.21_src|;`
* `loc hsqldbProj = |project://hsqldb-2.3.1|;`

Start the program by using:

```
import main;
startAnalysis();
```

### Unit Tests
```
import tests::util::removeLeadingWhitespace;
import tests::util::cleanCodeLines;

:test
```

### Results

#### smallsql0.21
```
#####################################
Project: |project://smallsql0.21_src|
#####################################

#####################################
SIG Metrics
#####################################

§ Volume (++)
        §§ SLOC:                23717

§ Duplication (-)
        §§ Analyzed Lines:      38423
        §§ Dupl. Blocks:        4304
        §§ Duplication:         11.2016240300%

§ Unit Size (o)
        §§ Low Risk:            60.3997132900%
        §§ Moderate Risk:       6.51009824200%
        §§ High Risk:           11.3800227700%
        §§ Very High Risk:      10.2668971600%

§ Complexity (--)
        §§ Low Risk:            60.3027364300%
        §§ Moderate Risk:       7.27748028800%
        §§ High Risk:           10.7559978100%
        §§ Very High Risk:      5.26626470500%

§ Unit Interfacing (+)
        §§ Low Risk:            77.5266686300%
        §§ Moderate Risk:       0.%
        §§ High Risk:           6.53961293600%
        §§ Very High Risk:      2.93882025600%

#####################################


#####################################
SIG Maintainability Model
#####################################

Analysability:          o
Changeability:          --
Testability:            -
Reusability:            o

Maintainability:        -

#####################################
```

#### hsqldb-2.3.1
```
#####################################
Project: |project://hsqldb-2.3.1|
#####################################

#####################################
SIG Metrics
#####################################

§ Volume (+)
        §§ SLOC:                169495

§ Duplication (-)
        §§ Analyzed Lines:      299728
        §§ Dupl. Blocks:        30788
        §§ Duplication:         10.2719799300%

§ Unit Size (--)
        §§ Low Risk:            44.3535207500%
        §§ Moderate Risk:       9.80736894900%
        §§ High Risk:           12.4044957100%
        §§ Very High Risk:      23.8951001500%

§ Complexity (--)
        §§ Low Risk:            53.0115932600%
        §§ Moderate Risk:       12.6546505800%
        §§ High Risk:           10.2840791800%
        §§ Very High Risk:      8.78727986100%

§ Unit Interfacing (--)
        §§ Low Risk:            73.4475943200%
        §§ Moderate Risk:       0.%
        §§ High Risk:           8.46396648900%
        §§ Very High Risk:      7.25980117400%

#####################################


#####################################
SIG Maintainability Model
#####################################

Analysability:          -
Changeability:          --
Testability:            --
Reusability:            --

Maintainability:        --

#####################################
```



