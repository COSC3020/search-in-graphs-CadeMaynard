[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-718a45dd9cf7e7f842a935f5ebbe5719a5e09af4491e668f4dbf3b35d5cca122.svg)](https://classroom.github.com/online_ide?assignment_repo_id=12516223&assignment_repo_type=AssignmentRepo)
# Search in Graphs

Recall the pseudocode for Depth-First Search:

Given a graph, a start node, and a node we're looking for:
- starting at the start node, while unvisited nodes remain
    - if current vertex $v$ is the node we're looking for, return it
    - mark $v$ as visited
    - for each edge $(v,w)$
        - recursively process $w$ unless marked visited

Implement the algorithm. You can choose any of the data structures we covered
(adjacency matrix or adjacency list) for the implementation. Your function
should return the list of nodes on the path from the source to the target (not
the list of nodes that you looked at during the search). Start with the template
I provided in `code.js` and test your new function. I have not provided any test
code, but you can base yours on test code from other exercises.

## Runtime Analysis

What is the worst-case big $\Theta$ complexity of your implementation? Add your
answer, including your reasoning, to this markdown file.

## Bonus

Implement and analyze breadth-first search.

## Runtime:

The worst case for this algorithm, it being a search algorithm, is that the item we are searching for is not in the graph. The main iterator from the pseudocode is "While unvisited nodes remain," and while it is not explicitly in the code, in order to get to nodes, edges must be traversed. So in the process of searching for this item that is not in the graph, we will look at every single vertice and edge exactly one time. (Technically we might check them more than once but it will go no further than checking if it has been visited, a constant-time operation.) So our runtime complexity for the worst-case scenario comes out to $\Theta(|V| + |E|)$ where $|V|$ is the number of vertices and $|E|$ is the number of edges.

### Sources:
https://www.w3schools.com/jsref/jsref_array_flat.asp
https://unitjs.com/guide/quickstart.html
