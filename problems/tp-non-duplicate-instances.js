/** 
 * Problem Statement
Given an array of sorted numbers, move all non-duplicate number instances at the beginning of the array in-place. The non-duplicate numbers should be sorted and you should not use any extra space so that the solution has constant space complexity i.e., .

Move all the unique number instances at the beginning of the array and after moving return the length of the subarray that has no duplicate in it.

Example 1:

Input: [2, 3, 3, 3, 6, 9, 9]
Output: 4
Explanation: The first four elements after moving element will be [2, 3, 6, 9].

 */

// Solution

export default function removeDuplicates(arr) {
    let nextNonDuplicate = 1;

    for(let i=1;i<arr.length;i++) {
        if(arr[nextNonDuplicate - 1] !== arr[i]) {
            arr[nextNonDuplicate] = arr[i];
            nextNonDuplicate++;
        }
    }

    return nextNonDuplicate;
}

// Time complexity: O(n)
// Space complexity: O(1)
// Where n is the length of the input


/** 
 * Problem Statement
 Given an unsorted array of numbers and a target ‘key’, remove all instances of ‘key’ in-place and return the new length of the array.

Example 1:

Input: [3, 2, 3, 6, 3, 10, 9, 3], Key=3
Output: 4
Explanation: The first four elements after removing every 'Key' will be [2, 6, 10, 9].

 */

// Solution

export default function removeKey(arr, key) {
    let nextElement = 0;

    for(let i=0;i<arr.length;i++) {
        if(arr[i] !== key) {
            arr[nextElement] = arr[i];
            nextElement++;
        }
    }

    return nextElement;
}

// Time complexity: O(n)
// Space complexity: O(1)
// Where n is the length of the input