//  Utility functions for number operations

/**
 * Example: 45 → (4² + 5²) = 16 + 25 = 41
 * @param {number} num 
 * @returns {number}
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
 * Example: 123 → (1 + 2 + 3) = 6
 * @param {number} num
 * @returns {number}
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

export const decimalToBinary = (num) => num.toString(2);
export const binaryToDecimal = (num) => parseInt(num, 2);
export const decimalToOctal = (num) => num.toString(8);
export const octalToDecimal = (num) => parseInt(num, 8);
export const decimalToHex = (num) => num.toString(16);
export const hexToDecimal = (num) => parseInt(num, 16);

/**
 * Example: decimalToBase(10, 2) → "1010"
 * @param {number} num
 * @param {number} base
 * @returns {string}
 */
export const decimalToBase = (num, base) => num.toString(base);

/**
 * Example: baseToDecimal("1010", 2) → 10
 * @param {string}
 * @param {number}
 * @returns {number}
 */
export const baseToDecimal = (num, base) => parseInt(num, base);

/**
 * Example: decimalToRoman(29) → "XXIX"
 * @param {number} num
 * @returns {string}
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
