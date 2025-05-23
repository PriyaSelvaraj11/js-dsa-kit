class Queue {
    constructor() {
        this.items = [];
    }

    enqueue(value) {
        this.items.push(value);
    }

    dequeue() {
        if (this.isEmpty()) {
            throw new Error("Queue is empty");
        }
        return this.items.shift();
    }

    // Get the element at the front without removing it
    front() {
        if (this.isEmpty()) {
            throw new Error("Queue is empty");
        }
        return this.items[0];
    }

    isEmpty() {
        return this.items.length === 0;
    }

    size() {
        return this.items.length;
    }

    
    // Print all elements in the queue
    print() {
        console.log(this.items.join(' <- '));
    }
}

export default Queue;

// Example Usage

// import Queue from './queue.js';

// const queue = new Queue();
// queue.enqueue(10);
// queue.enqueue(20);
// queue.enqueue(30);

// console.log(queue.front());   // Output: 10
// console.log(queue.dequeue()); // Output: 10
// console.log(queue.size());    // Output: 2
// console.log(queue.isEmpty()); // Output: false
// queue.print();                // Output: 20 <- 30