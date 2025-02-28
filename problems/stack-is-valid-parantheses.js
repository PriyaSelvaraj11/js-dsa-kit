import Stack from '../templates/stack.js';

export default function(inputStr) {
    const stack = new Stack();
    const pairs = {
        '(': ')',
        '{': '}',
        '[': ']'
    };      
    for(let i=0;i<inputStr.length;i++) {
        const curr = inputStr[i];
        if(pairs[curr]) {
            stack.push(curr)
        } else {
            const top = stack.isEmpty() ? -1 : stack.peek();
            if(pairs[top] === curr) {
                stack.pop();
            } else {
                return false;
            }
        }
    }
    return stack.isEmpty();
};

// Time complexity: O(n)
// Space complexity: O(n)
// Where n is the length of the input