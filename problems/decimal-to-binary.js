/**
 * Problem Statement
Given a positive integer n, write a function that returns its binary equivalent as a string. The function should not use any in-built binary conversion function.

Examples
Example 1:

Input: 2
Output: "10"
Explanation: The binary equivalent of 2 is 10.
 */

// Solution

export default function decimalToBinary(n) {
    let binary = '';
    while(n > 0) {
        binary = n % 2 + binary;
        n = Math.floor(n / 2);
    }
    return binary;
}

// Time Complexity = O(log n)
// Space Complexity = O(1)
// n = number of digits in the binary number