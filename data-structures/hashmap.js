// Hash Map Template
// Applications:
// 1. Caching and memoization
// 2. Counting frequencies
// 3. Lookup tables
// 4. Implementing sets and dictionaries

class HashMap {
    constructor() {
        this.map = new Map();
    }

    // Set a key-value pair
    set(key, value) {
        this.map.set(key, value);
    }

    // Get value by key
    get(key) {
        return this.map.get(key);
    }

    // Check if key exists
    has(key) {
        return this.map.has(key);
    }

    // Delete a key-value pair
    delete(key) {
        return this.map.delete(key);
    }

    // Get number of key-value pairs
    size() {
        return this.map.size;
    }
}

export default HashMap;

// Example Usage

// import HashMap from './hashmap.js';
// const hm = new HashMap();
// hm.set('a', 1);
// hm.set('b', 2);
// console.log(hm.get('a')); // Output: 1
// console.log(hm.has('b')); // Output: true
// hm.delete('a');
// console.log(hm.size());   // Output: 1