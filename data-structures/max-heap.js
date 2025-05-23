// Max Heap Template
// Applications:
// 1. Priority queues (max)
// 2. Heap sort
// 3. Finding K largest elements

class MaxHeap {
    constructor() {
        this.heap = [];
    }

    // Insert a value into the heap
    insert(val) {
        this.heap.push(val);
        this._heapifyUp();
    }

    // Remove and return the maximum element
    extractMax() {
        if (this.size() === 0) throw new Error("Heap is empty");
        if (this.size() === 1) return this.heap.pop();
        const max = this.heap[0];
        this.heap[0] = this.heap.pop();
        this._heapifyDown();
        return max;
    }

    // Get the maximum element without removing
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
            if (this.heap[parent] < this.heap[idx]) {
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
            let largest = idx;

            if (left < length && this.heap[left] > this.heap[largest]) largest = left;
            if (right < length && this.heap[right] > this.heap[largest]) largest = right;
            if (largest !== idx) {
                [this.heap[largest], this.heap[idx]] = [this.heap[idx], this.heap[largest]];
                idx = largest;
            } else break;
        }
    }
}

export default MaxHeap;

// Example Usage
// import MaxHeap from './max-heap.js';
// const heap = new MaxHeap();
// heap.insert(5);
// heap.insert(10);
// heap.insert(3);
// console.log(heap.peek());      // Output: 10
// console.log(heap.extractMax());// Output: 10
// console.log(heap.size());      // Output: 2