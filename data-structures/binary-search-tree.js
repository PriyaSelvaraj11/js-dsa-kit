class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new TreeNode(value);
        if (!this.root) {
            this.root = newNode;
            return;
        }
        let current = this.root;
        while (true) {
            if (value < current.value) {
                if (!current.left) {
                    current.left = newNode;
                    return;
                }
                current = current.left;
            } else {
                if (!current.right) {
                    current.right = newNode;
                    return;
                }
                current = current.right;
            }
        }
    }

    contains(value) {
        let current = this.root;
        while (current) {
            if (value === current.value) return true;
            current = value < current.value ? current.left : current.right;
        }
        return false;
    }

    // In-order traversal
    inOrderTraversal(node = this.root, result = []) {
        if (node) {
            this.inOrderTraversal(node.left, result);
            result.push(node.value);
            this.inOrderTraversal(node.right, result);
        }
        return result;
    }
}

export default BinarySearchTree;

// Example Usage

// import BinarySearchTree from './binary-search-tree.js';

// const bst = new BinarySearchTree();
// bst.insert(15);
// bst.insert(10);
// bst.insert(20);
// bst.insert(8);
// bst.insert(12);

// console.log(bst.contains(10)); // Output: true
// console.log(bst.contains(25)); // Output: false

// console.log(bst.inOrderTraversal()); // Output: [8, 10, 12, 15, 20]