//  Utility functions for number operations

/**
 * Computes the sum of the squares of the digits of a given number.
 * Example: 45 → (4² + 5²) = 16 + 25 = 41
 * @param {number} num - The input number
 * @returns {number} The sum of squares of its digits
 */
export const sumOfSquareOfDigits = (num) => {
    let sum = 0;
    while (num > 0) {
        const digit = num % 10;
        sum += digit * digit;
        num = Math.floor(num / 10);
    }
    return sum;
};

/**
 * Computes the sum of digits of a given number.
 * Example: 123 → (1 + 2 + 3) = 6
 * @param {number} num - The input number
 * @returns {number} The sum of its digits
 */
export const sumOfDigits = (num) => {
    let sum = 0;
    while (num > 0) {
        const digit = num % 10;
        sum += digit;
        num = Math.floor(num / 10);
    }
    return sum;
};

//  Utility functions for number conversion

// Convert decimal to binary as a string
export const decimalToBinary = (num) => num.toString(2);

// Convert binary string to decimal
export const binaryToDecimal = (num) => parseInt(num, 2);

// Convert decimal to octal
export const decimalToOctal = (num) => num.toString(8);

// Convert octal string to decimal
export const octalToDecimal = (num) => parseInt(num, 8);

// Convert decimal to hexadecimal
export const decimalToHex = (num) => num.toString(16);

// Convert hexadecimal string to decimal
export const hexToDecimal = (num) => parseInt(num, 16);

/**
 * Converts a decimal number to a given base.
 * Example: decimalToBase(10, 2) → "1010"
 * @param {number} num - The decimal number
 * @param {number} base - The base to convert to (2 for binary, 8 for octal, etc.)
 * @returns {string} Representation of the number in the given base
 */
export const decimalToBase = (num, base) => num.toString(base);

/**
 * Converts a number from a given base to decimal.
 * Example: baseToDecimal("1010", 2) → 10
 * @param {string} num - The number in the given base
 * @param {number} base - The base of the input number
 * @returns {number} Decimal representation of the number
 */
export const baseToDecimal = (num, base) => parseInt(num, base);

/**
 * Converts a decimal number to Roman numerals.
 * Example: decimalToRoman(29) → "XXIX"
 * @param {number} num - The decimal number
 * @returns {string} Roman numeral representation
 */
export const decimalToRoman = (num) => {
    const romanNumerals = {
        1000: 'M', 900: 'CM', 500: 'D', 400: 'CD',
        100: 'C', 90: 'XC', 50: 'L', 40: 'XL',
        10: 'X', 9: 'IX', 5: 'V', 4: 'IV', 1: 'I'
    };

    let roman = '';
    for (let value of Object.keys(romanNumerals).reverse()) {
        while (num >= value) {
            roman += romanNumerals[value];
            num -= value;
        }
    }
    return roman;
};
