/** Problem: Happy Number
 * Any number will be called a happy number if, after repeatedly replacing it with a number equal to the sum of the square of all of its digits, leads us to the number 1. All other (not-happy) numbers will never reach 1. Instead, they will be stuck in a cycle of numbers that does not include 1.

Given a positive number n, return true if it is a happy number otherwise return false.

Example 1:

Input: 23
Output: true (23 is a happy number)
Explanations: Here are the steps to find out that 23 is a happy number:

 = 4 + 9 = 13
 = 1 + 9 = 10
 = 1 + 0 = 1
 */

import { sumOfSquareOfDigits } from '../utils/number-utils';

// Solution 1: Using Floyd's Cycle Detection Algorithm
export function isHappyNumber(n) {
    let slow = n;
    let fast = n;

    while (true) {
        slow = sumOfSquareOfDigits(slow); // TEMPLATE: Move slow pointer by 1 step
        fast = sumOfSquareOfDigits(sumOfSquareOfDigits(fast)); // TEMPLATE: Move fast pointer by 2 steps

        if (slow === fast) break; // TEMPLATE: Cycle detected
    }
    return slow === 1;
}

// Time Complexity: O(log n)
// Space Complexity: O(1)


// Solution 2: Using Hash Set

export function isHappyNumberViaSet(n) {
    const seen = new Set();
    while (n !== 1 && !seen.has(n)) {
        seen.add(n);
        n = sumOfSquareOfDigits(n);
    }
    return n === 1;
}

// Time Complexity: O(log n)
// Space Complexity: O(log n)