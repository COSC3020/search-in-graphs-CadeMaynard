const fs = require('fs');
var test = require('unit.js');

eval(fs.readFileSync('code.js')+'');

        var searchAdjList1 = [[1,2],
                            [3],
                            [1,4],
                            [],
                            [5],
                            []];
        var search1Result = [0,1,3];
        var search2Result = [0,2,4,5];
        var search3Result = [2];

        var searchAdjList2 = [[1,3],
                            [0,2],
                            [1,3],
                            [0,2]];
        var search4Result = [0,1,2];

        //General tests with a non-cyclical, directional graph
        test.array(depthFirstSearch(searchAdjList1, 0, 3)) == search1Result;
        test.value(depthFirstSearch(searchAdjList1, 0, 5)) == search2Result;
        test.value(depthFirstSearch(searchAdjList1, 2, 2)) == search3Result;

        //Tests with a non-directional graph to test that it does not loop infinitely
        test.value(depthFirstSearch(searchAdjList2, 0, 2)) == search3Result;
        
