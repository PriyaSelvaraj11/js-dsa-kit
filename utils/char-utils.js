/**
 * Returns the ASCII value of a character.
 * @param {string} char - A single character.
 * @returns {number|null} ASCII value or null if input is invalid.
 */
export function getAscii(char) {
    return char.length === 1 ? char.charCodeAt(0) : null;
}

/**
 * Returns the ASCII value of the lowercase version of a character.
 * @param {string} char - A single character.
 * @returns {number|null} ASCII value of lowercase character or null if input is invalid.
 */
export function getAsciiLower(char) {
    if (char.length !== 1) return null;
    return char.toLowerCase().charCodeAt(0);
}

/**
 * Returns the ASCII value of the uppercase version of a character.
 * @param {string} char - A single character.
 * @returns {number|null} ASCII value of uppercase character or null if input is invalid.
 */
export function getAsciiUpper(char) {
    if (char.length !== 1) return null;
    return char.toUpperCase().charCodeAt(0);
}
