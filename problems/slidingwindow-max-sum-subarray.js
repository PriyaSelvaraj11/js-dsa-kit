
// Solution
export default function smallestSubarray(arr, maxWindowSize) {
    let windowStart = 0, windowSum = 0; // TEMPLATE: initialize window start
    let maxSum = 0;
    let length = arr.length;

    for(let windowEnd = 0; windowEnd <length; windowEnd++) { // TEMPLATE: loop through the window end
        windowSum += arr[windowEnd]; 

        if(windowEnd >= maxWindowSize - 1) { // TEMPLATE: skip first window slide
            maxSum = Math.max(maxSum, windowSum);
            windowSum -= arr[windowStart];
            windowStart++; // TEMPLATE: shrink/increase the window
        }
    }
    return maxSum;
}