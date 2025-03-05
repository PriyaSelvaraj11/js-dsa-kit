/**
 * Problem: Triplet Sum
 * Given an array of unsorted numbers, find all unique triplets in it that add up to zero.

Example 1:

Input: [-3, 0, 1, 2, -1, 1, -2]
Output: [[-3, 1, 2], [-2, 0, 2], [-2, 1, 1], [-1, 0, 1]]
Explanation: There are four unique triplets whose sum is equal to zero.
 */

// Solution

export default function searchTriplets(arr) {
    arr.sort((a, b) => a - b); // IMPORTANT NOTE: sort the array with explicit condition because JS sort is lexicographical
    console.log(arr);
    const triplets = [];
    
    for (let i=0; i< arr.length-2; i++ ) {
        if(i>0 && arr[i] === arr[i-1]) continue; // CC1: avoid duplicate
        this.searchPairs(arr, -arr[i], i+1, triplets);
    }

    return triplets;
  }

searchPairs(arr, targetSum, left, triplets) {
    let right = arr.length - 1;
    while(left < right) {
        const currSum = arr[left] + arr[right];
        if(currSum == targetSum) {
            triplets.push([-targetSum, arr[left], arr[right]]);
            left++;right--;
            while(left< right && arr[left] === arr[left-1]) left++; // CC1: avoid duplicate
            while(right > left && arr[right] === arr[right+1]) right--; // CC1: avoid duplicate
        } else if (currSum < targetSum)  left++; 
        else right--;
    }
  }

// Time complexity: O(n^2)
// Space complexity: O(n)
// Where n is the length of the input