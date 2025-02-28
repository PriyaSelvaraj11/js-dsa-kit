import Stack from '../templates/stack.js';

function isValidParantheses(inputStr) {
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

export default isValidParantheses;

