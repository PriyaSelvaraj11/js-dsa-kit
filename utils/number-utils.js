/**
 * Returns the sum of square of digits of a number
 * @param {number} n 
 * @returns {number} Sum of square of digits
 */
export const sumOfSquareOfDigits = (num) => {
    let sum=0;
    while(num>0) {
        const digit = num%10;
        sum += digit*digit;
        num = Math.floor(num/10);
    }
    return sum;
}

/**
 * Returns the sum of digits of a number
 * @param {number} num 
 * @returns 
 */
export const sumOfDigits = (num) => {
    let sum=0;
    while(num>0) {
        const digit = num%10;
        sum += digit;
        num = Math.floor(num/10);
    }
    return sum;
}