function depthFirstSearch(graph, startNode, targetNode) {
    if(startNode == targetNode){
        return [startNode];
    } else if(graph[startNode] == [] || graph[startNode][graph[startNode].length - 1] == -1) {
        return [];
    } else {
        graph[startNode][graph[startNode].length] = -1 // This is how I have opted to mark vertices as visited.
        found = false;
        arr = new Array();
        for(i = 0; i < graph[startNode].length - 1 && found == false; i++){
            arr = depthFirstSearch(graph, graph[startNode][i], targetNode);
            if(arr.length > 0)
                found = true;
        }
        return [startNode, arr].flat();
    }
}
