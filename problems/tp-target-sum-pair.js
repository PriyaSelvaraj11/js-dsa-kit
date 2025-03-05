/**
 * Problem:
 * Given an array of numbers sorted in ascending order and a target sum, find a pair in the array whose sum is equal to the given target. If no such pair exists return [-1, -1].

Write a function to return the indices of the two numbers (i.e. the pair) such that they add up to the given target.

Example 1:

Input: [1, 2, 3, 4, 6], target=6
Output: [1, 3]
Explanation: The numbers at index 1 and 3 add up to 6: 2+4=6
 */

// Solution 1 - Two pointer

export default function pairWithTargetSum(arr, targetSum) {
    let left = 0, right = arr.length - 1;

    while (left < right) {
        let sum = arr[left] + arr[right];

        if (sum === targetSum) {
            return [left, right]; // TEMPLATE: Found the target
        } else if (sum < targetSum) {
            left++; // TEMPLATE: Move left pointer forward
        } else {
            right--; // TEMPLATE: Move right pointer backward
        }
    }

    return [-1, -1]; // No valid pair found
}

// Time complexity: O(n)
// Space complexity: O(1)


// Solution 2 - Hash Map

export function pairWithTargetSumMap(arr, targetSum) {
    const numMap = {};

    for(let i=0;i<arr.length;i++) {
        const num = arr[i];
        if(targetSum - num in numMap) {
            return [numMap[targetSum - num], i];
        }
        numMap[num] = i;
    }
    return [-1,-1];
}

// Time complexity: O(n)
// Space complexity: O(n)