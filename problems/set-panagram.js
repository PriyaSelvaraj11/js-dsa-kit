import { ALPHABET_SIZE, ASCII_A_LOWER, ASCII_Z_LOWER } from "../constants";
import { getAsciiLower } from "../utils/char-utils";

export default function(sentence) {
    const charSet = new Set();
    for(let i=0;i<sentence.length;i++) {
        const char = sentence[i];
        const ascii = getAsciiLower(char);
        if(ascii >= ASCII_A_LOWER && ascii <= ASCII_Z_LOWER) {
            charSet.add(ascii);
        }
    }
    return charSet.size === ALPHABET_SIZE;
}

// Time complexity: O(n)
// Space complexity: O(1)
// Where n is the length of the input