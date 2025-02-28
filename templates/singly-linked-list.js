class ListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    // Insert at the end (O(1))
    append(value) {
        const newNode = new ListNode(value);
        if (!this.head) {
            this.head = this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
    }

    // Insert at the beginning (O(1))
    prepend(value) {
        const newNode = new ListNode(value);
        if (!this.head) {
            this.head = this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
    }

    // Delete a node by value (O(n))
    delete(value) {
        if (!this.head) return null;

        if (this.head.value === value) {
            this.head = this.head.next;
            if (!this.head) this.tail = null;
            this.length--;
            return;
        }

        let current = this.head;
        while (current.next && current.next.value !== value) {
            current = current.next;
        }

        if (current.next) {
            if (current.next === this.tail) this.tail = current;
            current.next = current.next.next;
            this.length--;
        }
    }

    // Delete a node at a specific position (O(n))
    deleteAtPosition(index) {
        if (index < 0 || index >= this.length) return null;

        if (index === 0) {
            this.head = this.head.next;
            if (!this.head) this.tail = null;
            this.length--;
            return;
        }

        let current = this.head;
        for (let i = 0; i < index - 1; i++) {
            current = current.next;
        }

        if (current.next === this.tail) this.tail = current;
        current.next = current.next.next;
        this.length--;
    }

    // Search for a node (O(n))
    find(value) {
        let current = this.head;
        while (current) {
            if (current.value === value) return current;
            current = current.next;
        }
        return null;
    }

    // Reverse the linked list (O(n))
    reverse() {
        let prev = null, current = this.head, next = null;
        this.tail = this.head;

        while (current) {
            next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }
        this.head = prev;
    }

    // Check if list is empty
    isEmpty() {
        return this.length === 0;
    }

    // Get the size of the list
    size() {
        return this.length;
    }

    // Print the linked list
    print() {
        let current = this.head, result = [];
        while (current) {
            result.push(current.value);
            current = current.next;
        }
        console.log(result.join(" -> "));
    }
}


export default LinkedList;

// Example usage:
// import LinkedList from './singly-linked-list.js';
//   const list = new LinkedList();
//   list.append(10);
//   list.append(20);
//   list.append(30);
//   list.prepend(5);
//   list.print();      // 5 -> 10 -> 20 -> 30
//   list.delete(20);
//   list.print();      // 5 -> 10 -> 30
//   list.reverse();
//   list.print();      // 30 -> 10 -> 5
//   console.log(list.find(10));  // ListNode { value: 10, next: ListNode { value: 5, next: null } }
//   console.log(list.size());    // 3
