// Directed Graph Template (Adjacency List)
// Applications:
// 1. Course scheduling
// 2. Topological sorting
// 3. Pathfinding in one-way networks

class DirectedGraph {
    constructor() {
        this.adjList = new Map();
    }

    // Add a vertex
    addVertex(vertex) {
        if (!this.adjList.has(vertex)) {
            this.adjList.set(vertex, []);
        }
    }

    // Add a directed edge
    addEdge(from, to) {
        this.addVertex(from);
        this.addVertex(to);
        this.adjList.get(from).push(to);
    }

    // Remove a directed edge
    removeEdge(from, to) {
        if (this.adjList.has(from)) {
            this.adjList.set(from, this.adjList.get(from).filter(v => v !== to));
        }
    }

    // Remove a vertex and all outgoing edges
    removeVertex(vertex) {
        this.adjList.delete(vertex);
        for (let [v, neighbors] of this.adjList) {
            this.adjList.set(v, neighbors.filter(n => n !== vertex));
        }
    }

    // Get neighbors of a vertex
    getNeighbors(vertex) {
        return this.adjList.get(vertex) || [];
    }
}

export default DirectedGraph;

// Example Usage
// import DirectedGraph from './directed-graph.js';
// const graph = new DirectedGraph();
// graph.addEdge('A', 'B');
// graph.addEdge('A', 'C');
// console.log(graph.getNeighbors('A')); // Output: ['B', 'C']
// graph.removeEdge('A', 'B');
// console.log(graph.getNeighbors('A')); // Output: ['C']