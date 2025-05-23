// Monotonic Stack Template
// Applications:
// 1. Next Greater/Smaller Element
// 2. Stock span problem
// 3. Histogram largest rectangle

class MonotonicStack {
    constructor(compareFn) {
        this.stack = [];
        this.compare = compareFn || ((a, b) => a < b); // Default: increasing stack
    }

    // Push an element while maintaining monotonicity
    push(value) {
        while (this.stack.length && !this.compare(this.stack[this.stack.length - 1], value)) {
            this.stack.pop();
        }
        this.stack.push(value);
    }

    // Get the top element
    top() {
        return this.stack[this.stack.length - 1];
    }

    // Remove the top element
    pop() {
        return this.stack.pop();
    }

    // Check if the stack is empty
    isEmpty() {
        return this.stack.length === 0;
    }

    // Get the size of the stack
    size() {
        return this.stack.length;
    }
}

export default MonotonicStack;

// Example Usage
// import MonotonicStack from './monotonic-stack.js';
// // For increasing stack (next greater element)
// const ms = new MonotonicStack((a, b) => a < b);
// ms.push(2);
// ms.push(1);
// ms.push(3);
// console.log(ms.top()); // Output: 3