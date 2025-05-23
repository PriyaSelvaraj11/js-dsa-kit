/**
 * @param {string} char 
 * @returns {number|null}
 */
export function getAscii(char) {
    return char.length === 1 ? char.charCodeAt(0) : null;
}

/**
 * @param {string} char
 * @returns {number|null} 
 * */
export function getAsciiLower(char) {
    if (char.length !== 1) return null;
    return char.toLowerCase().charCodeAt(0);
}

/**
 * @param {string} char 
 * @returns {number|null}
 *  */
export function getAsciiUpper(char) {
    if (char.length !== 1) return null;
    return char.toUpperCase().charCodeAt(0);
}
