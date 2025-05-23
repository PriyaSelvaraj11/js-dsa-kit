// Min Heap Template
// Applications:
// 1. Priority queues
// 2. Heap sort
// 3. Dijkstra's shortest path algorithm
// 4. Scheduling tasks

class MinHeap {
    constructor() {
        this.heap = [];
    }

    // Insert a value into the heap
    insert(val) {
        this.heap.push(val);
        this._heapifyUp();
    }

    // Remove and return the minimum element
    extractMin() {
        if (this.size() === 0) throw new Error("Heap is empty");
        if (this.size() === 1) return this.heap.pop();
        const min = this.heap[0];
        this.heap[0] = this.heap.pop();
        this._heapifyDown();
        return min;
    }

    // Get the minimum element without removing
    peek() {
        if (this.size() === 0) throw new Error("Heap is empty");
        return this.heap[0];
    }

    size() {
        return this.heap.length;
    }

    _heapifyUp() {
        let idx = this.heap.length - 1;
        while (idx > 0) {
            let parent = Math.floor((idx - 1) / 2);
            if (this.heap[parent] > this.heap[idx]) {
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

            if (left < length && this.heap[left] < this.heap[smallest]) smallest = left;
            if (right < length && this.heap[right] < this.heap[smallest]) smallest = right;
            if (smallest !== idx) {
                [this.heap[smallest], this.heap[idx]] = [this.heap[idx], this.heap[smallest]];
                idx = smallest;
            } else break;
        }
    }
}

export default MinHeap;

// Example Usage

// import MinHeap from './minheap.js';
// const heap = new MinHeap();
// heap.insert(5);
// heap.insert(2);
// heap.insert(8);
// console.log(heap.peek());      // Output: 2
// console.log(heap.extractMin());// Output: 2
// console.log(heap.size());      // Output: 2