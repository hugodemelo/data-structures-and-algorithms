class Graph {
  constructor() {
    this.numberOfNodes = 0;
    this.adjacentList = {};
  }

  addVertex(node) {
    this.adjacentList[ node ] = [];
    this.numberOfNodes++;
  }

  addEdge(node1, node2) {
    this.adjacentList[ node1 ].push(node2);
    this.adjacentList[ node2 ].push(node1);
  }

  breadthFirstSearch() {
    const result = [];
    const queue = [ '0' ];
    const visited = new Set();
    while (queue.length) {
      const indexNode = queue.shift();
      if (!visited.has(indexNode)) {
        visited.add(indexNode);
        result.push(indexNode);
        queue.push(...this.adjacentList[ indexNode ]);
      }
    }
    return result;
  }
}

const myGraph = new Graph();

myGraph.addVertex('0');
myGraph.addVertex('1');
myGraph.addVertex('2');
myGraph.addVertex('3');
myGraph.addVertex('4');
myGraph.addVertex('5');
myGraph.addVertex('6');
myGraph.addVertex('7');
myGraph.addVertex('8');
myGraph.addVertex('9');

myGraph.addEdge('0', '1');
myGraph.addEdge('0', '2');
myGraph.addEdge('0', '4');
myGraph.addEdge('0', '5');
myGraph.addEdge('0', '6');

myGraph.addEdge('4', '3');
myGraph.addEdge('4', '7');

myGraph.addEdge('7', '8');

myGraph.addEdge('8', '9');

console.log(myGraph.breadthFirstSearch());
