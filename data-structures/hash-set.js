// Hash Set Template
// Applications:
// 1. Fast existence checks
// 2. Removing duplicates
// 3. Set operations (union, intersection)

class HashSet {
    constructor() {
        this.set = new Set();
    }

    add(value) {
        this.set.add(value);
    }

    delete(value) {
        return this.set.delete(value);
    }

    has(value) {
        return this.set.has(value);
    }

    size() {
        return this.set.size;
    }

    // Iterate over values in insertion order
    values() {
        return this.set.values();
    }
}

export default HashSet;

// Example Usage
// import HashSet from './hash-set.js';
// const hs = new HashSet();
// hs.add(1);
// hs.add(2);
// hs.add(2);
// console.log(hs.has(2)); // Output: true
// hs.delete(1);
// console.log(hs.size()); // Output: 1