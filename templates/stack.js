// Applications
// 1. Function call stack (Memory Management)
// 2. Browser history
// 3. Undo functionality in text editors
// 4. Depth-First Search (DFS)
// 5. Backtracking Algorithms
// 6. Expression Evaluation and Syntax Parsing

class Stack {
    constructor() {
        this.items = [];
    }

    // Push an element onto the stack
    push(value) {
        this.items.push(value);
    }

    // Pop an element from the stack
    pop() {
        if (this.isEmpty()) {
            throw new Error("Stack is empty");
        }
        return this.items.pop();
    }

    // Get the top element without removing it
    peek() {
        if (this.isEmpty()) {
            throw new Error("Stack is empty");
        }
        return this.items[this.items.length - 1];
    }

    // Check if the stack is empty
    isEmpty() {
        return this.items.length === 0;
    }

    // Get the size of the stack
    size() {
        return this.items.length;
    }
}

export default Stack;

// Example Usage

// import Stack from './stack.js';
// const stack = new Stack();
// stack.push(5);
// stack.push(2);
// stack.push(8);
// console.log(stack.peek());   // Output: 8
// console.log(stack.pop());    // Output: 8
// console.log(stack.size());   // Output: 2
// console.log(stack.isEmpty());// Output: false
