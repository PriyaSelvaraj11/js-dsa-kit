// Priority Queue Template (Min-Heap based)
// Applications:
// 1. Task scheduling
// 2. Dijkstra's shortest path
// 3. Merging sorted streams

class PriorityQueue {
    constructor(compareFn) {
        this.heap = [];
        this.compare = compareFn || ((a, b) => a - b); // Default: min-heap
    }

    // Insert an element with priority
    enqueue(value) {
        this.heap.push(value);
        this._heapifyUp();
    }

    // Remove and return the element with highest priority
    dequeue() {
        if (this.size() === 0) throw new Error("Queue is empty");
        if (this.size() === 1) return this.heap.pop();
        const top = this.heap[0];
        this.heap[0] = this.heap.pop();
        this._heapifyDown();
        return top;
    }

    // Peek at the element with highest priority
    peek() {
        if (this.size() === 0) throw new Error("Queue is empty");
        return this.heap[0];
    }

    size() {
        return this.heap.length;
    }

    _heapifyUp() {
        let idx = this.heap.length - 1;
        while (idx > 0) {
            let parent = Math.floor((idx - 1) / 2);
            if (this.compare(this.heap[idx], this.heap[parent]) < 0) {
                [this.heap[parent], this.heap[idx]] = [this.heap[idx], this.heap[parent]];
                idx = parent;
            } else break;
        }
    }

    _heapifyDown() {
        let idx = 0;
        const length = this.heap.length;
        while (true) {
            let left = 2 * idx + 1;
            let right = 2 * idx + 2;
            let smallest = idx;

            if (left < length && this.compare(this.heap[left], this.heap[smallest]) < 0) smallest = left;
            if (right < length && this.compare(this.heap[right], this.heap[smallest]) < 0) smallest = right;
            if (smallest !== idx) {
                [this.heap[smallest], this.heap[idx]] = [this.heap[idx], this.heap[smallest]];
                idx = smallest;
            } else break;
        }
    }
}

export default PriorityQueue;

// Example Usage
// import PriorityQueue from './priority-queue.js';
// const pq = new PriorityQueue(); // Min-heap by default
// pq.enqueue(5);
// pq.enqueue(1);
// pq.enqueue(3);
// console.log(pq.peek());    // Output: 1
// console.log(pq.dequeue()); // Output: 1
// console.log(pq.size());    // Output: 2
//
// // For max-heap:
// // const maxPQ = new PriorityQueue((a, b) => b - a);