/**
 * Problem:
 * Given an array of positive integers and a number ‘S,’ find the length of the smallest contiguous subarray whose sum is greater than or equal to 'S'. Return 0 if no such subarray exists.

Example 1:

Input: arr = [2, 1, 5, 2, 3, 2], S=7
Output: 2
Explanation: The smallest subarray with a sum greater than or equal to '7' is [5, 2].
 */

// Solution
export default function smallestSubarray(arr, targetSum) {
    let windowStart = 0; // TEMPLATE: initialize window start
    let windowSum = 0;
    let minLength = Infinity;

    for(let windowEnd = 0; windowEnd < arr.length; windowEnd++) { // TEMPLATE: loop through the window end
        windowSum += arr[windowEnd]; // TEMPLATE: expand the window

        // shrink the window as small as possible until the 'windowSum' is smaller than 'targetSum'
        while(windowSum >= targetSum) {
            minLength = Math.min(minLength, windowEnd - windowStart + 1);
            windowSum -= arr[windowStart];
            windowStart++; // TEMPLATE: shrink the window
        }
    }

    return minLength === Infinity ? 0 : minLength;

}

// Time complexity: O(n)
// Space complexity: O(1)
// Where n is the length of the input
