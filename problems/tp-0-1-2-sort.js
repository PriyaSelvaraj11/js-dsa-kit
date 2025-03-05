/**
 * Problem Statement
Given an array containing 0s, 1s and 2s, sort the array in-place. You should treat numbers of the array as objects, hence, we can’t count 0s, 1s, and 2s to recreate the array.

The flag of the Netherlands consists of three colors: red, white and blue; and since our input array also consists of three different numbers that is why it is called Dutch National Flag problem.

Example 1:

Input: [1, 0, 2, 1, 0]
Output: [0 0 1 1 2]
 */

// Solution

export default function sort(arr) {
    let low = 0;
    let high = arr.length - 1;
    let i = 0;

    while(i <= high) {
        if(arr[i] === 0) { //  swap 0 to the beginning
            [arr[i], arr[low]] = [arr[low], arr[i]];
            i++; 
            low++;
        } else if(arr[i] === 1) {  // skip 1
            i++;
        } else { //  swap 2 to the end
            [arr[i], arr[high]] = [arr[high], arr[i]];
            high--;
        }
    }

    return arr;
}

// Time complexity: O(n)
// Space complexity: O(1)
