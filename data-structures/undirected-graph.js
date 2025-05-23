// Graph Template (Undirected, Adjacency List)
// Applications:
// 1. Social networks
// 2. Pathfinding algorithms (BFS, DFS)
// 3. Network routing
// 4. Topological sorting

class UndirectedGraph {
    constructor() {
        this.adjList = new Map();
    }

    // Add a vertex to the graph
    addVertex(vertex) {
        if (!this.adjList.has(vertex)) {
            this.adjList.set(vertex, []);
        }
    }

    // Add an undirected edge
    addEdge(v1, v2) {
        this.addVertex(v1);
        this.addVertex(v2);
        this.adjList.get(v1).push(v2);
        this.adjList.get(v2).push(v1);
    }

    // Remove an edge
    removeEdge(v1, v2) {
        this.adjList.set(v1, this.adjList.get(v1).filter(v => v !== v2));
        this.adjList.set(v2, this.adjList.get(v2).filter(v => v !== v1));
    }

    // Remove a vertex and all connected edges
    removeVertex(vertex) {
        if (!this.adjList.has(vertex)) return;
        for (let neighbor of this.adjList.get(vertex)) {
            this.removeEdge(vertex, neighbor);
        }
        this.adjList.delete(vertex);
    }

    // Get neighbors of a vertex
    getNeighbors(vertex) {
        return this.adjList.get(vertex) || [];
    }
}

export default UndirectedGraph;

// Example Usage

// import UndirectedGraph from './undirected-graph.js';
// const graph = new UndirectedGraph();
// graph.addEdge('A', 'B');
// graph.addEdge('A', 'C');
// console.log(graph.getNeighbors('A')); // Output: ['B', 'C']
// graph.removeEdge('A', 'B');
// console.log(graph.getNeighbors('A')); // Output: ['C']