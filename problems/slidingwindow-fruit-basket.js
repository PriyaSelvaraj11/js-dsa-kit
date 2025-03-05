/** Problem Statement
You are visiting a farm to collect fruits. The farm has a single row of fruit trees. You will be given two baskets, and your goal is to pick as many fruits as possible to be placed in the given baskets.

You will be given an fruitsay of characters where each character represents a fruit tree. The farm has following restrictions:

Each basket can have only one type of fruit. There is no limit to how many fruit a basket can hold.
You can start with any tree, but you can’t skip a tree once you have started.
You will pick exactly one fruit from every tree until you cannot, i.e., you will stop when you have to pick from a third fruit type.
Write a function to return the maximum number of fruits in both baskets.

Example 1:

Input: fruits=['A', 'B', 'C', 'A', 'C']  
Output: 3  
Explanation: We can put 2 'C' in one basket and one 'A' in the other from the subfruitsay ['C', 'A', 'C']
**/

// Solution

export default function fruitBasket(fruits) {
    let windowStart = 0; // TEMPLATE: initialize window start
    let windowFruitFrequency = {};
    let maxFruits = 0;
    let length = fruits.length;

    for (let windowEnd = 0; windowEnd < length; windowEnd++) { // TEMPLATE: loop through the window end
        const rightFruit = fruits[windowEnd];
        if(!(rightFruit in windowFruitFrequency)) {
            windowFruitFrequency[rightFruit] = 0;
        }
        windowFruitFrequency[rightFruit]++;

        // shrink the sliding window, until we are left with '2' fruits in the fruit 
        while(Object.keys(windowFruitFrequency).length > 2) {
            const leftFruit = fruits[windowStart];
            windowFruitFrequency[leftFruit]--; 
            if(windowFruitFrequency[leftFruit] === 0) {
                delete windowFruitFrequency[leftFruit];
            }
            windowStart++; // TEMPLATE: shrink/increase the window
        }
        maxFruits = Math.max(maxFruits, windowEnd - windowStart + 1);
    }
    return maxFruits;
}

// Time complexity: O(n)
// Space complexity: O(1)
// Where n is the length of the input
