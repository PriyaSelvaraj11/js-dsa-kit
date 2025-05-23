// Trie (Prefix Tree) Template
// Applications:
// 1. Autocomplete
// 2. Spell checking
// 3. Prefix search

class TrieNode {
    constructor() {
        this.children = {};
        this.isEndOfWord = false;
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }

    // Insert a word
    insert(word) {
        let node = this.root;
        for (let char of word) {
            if (!node.children[char]) node.children[char] = new TrieNode();
            node = node.children[char];
        }
        node.isEndOfWord = true;
    }

    // Search for a word
    search(word) {
        let node = this.root;
        for (let char of word) {
            if (!node.children[char]) return false;
            node = node.children[char];
        }
        return node.isEndOfWord;
    }

    // Check if any word starts with the given prefix
    startsWith(prefix) {
        let node = this.root;
        for (let char of prefix) {
            if (!node.children[char]) return false;
            node = node.children[char];
        }
        return true;
    }
}

export default Trie;

// Example Usage
// import Trie from './trie.js';
// const trie = new Trie();
// trie.insert('apple');
// console.log(trie.search('apple'));   // Output: true
// console.log(trie.search('app'));     // Output: false
// console.log(trie.startsWith('app')); // Output: true