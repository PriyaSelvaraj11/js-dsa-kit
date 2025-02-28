export default function(words, word1, word2) {
    let minDistance = words.length;
    let index1 = -1;
    let index2 = -1;

    for(let i=0;i<words.length;i++) {
        if(words[i] === word1) index1 = i;
        if(words[i] === word2) index2 = i;

        if(index1 !== -1 && index2 !== -1) {
            minDistance = Math.min(minDistance, Math.abs(index1 - index2));
        }
    }
    return minDistance;
}

// Time complexity: O(n)
// Space complexity: O(1)
// Where n is the length of the input