class QueueNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.rear = null;
    this.length = 0;
  }

  // Add an element to the rear of the queue
  enqueue(value) {
    const newNode = new QueueNode(value);
    if (!this.rear) {
      this.front = this.rear = newNode;
    } else {
      this.rear.next = newNode;
      this.rear = newNode;
    }
    this.length++;
  }

  // Remove and return the front element
  dequeue() {
    if (!this.front) return null;
    const removedValue = this.front.value;
    this.front = this.front.next;
    if (!this.front) this.rear = null; // If queue becomes empty
    this.length--;
    return removedValue;
  }

  // Return the front element without removing it
  peek() {
    return this.front ? this.front.value : null;
  }

  // Check if the queue is empty
  isEmpty() {
    return this.length === 0;
  }

  // Return the size of the queue
  size() {
    return this.length;
  }

  // Print the queue elements (for debugging)
  print() {
    let current = this.front;
    let result = [];
    while (current) {
      result.push(current.value);
      current = current.next;
    }
    console.log(result.join(" -> "));
  }
}


export default Queue;


// Example usage:
// import Queue from './queue.js';
//   const queue = new Queue();
//   queue.enqueue(10);
//   queue.enqueue(20);
//   queue.enqueue(30);
//   console.log(queue.dequeue()); // 10
//   console.log(queue.peek());    // 20
//   console.log(queue.size());    // 2
//   console.log(queue.isEmpty()); // false
//   queue.print(); // 20 -> 30
