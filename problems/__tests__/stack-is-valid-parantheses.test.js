import isValidParantheses from '../stack-is-valid-parantheses';

describe('isValidParantheses', () => {

    it('should return true for correctly paired brackets', () => {
        expect(isValidParantheses('()')).toBe(true);
        expect(isValidParantheses('{}')).toBe(true);
        expect(isValidParantheses('[]')).toBe(true);
        expect(isValidParantheses('({[]})')).toBe(true);
    });

    it('should return false for incorrectly paired brackets', () => {
        expect(isValidParantheses('(')).toBe(false);
        expect(isValidParantheses(')')).toBe(false);
        expect(isValidParantheses('([)]')).toBe(false);
        expect(isValidParantheses('{[})')).toBe(false);
    });

    it('should return true for an empty string', () => {
        expect(isValidParantheses('')).toBe(true);
    });

    it('should return false for unmatched closing bracket', () => {
        expect(isValidParantheses('([})')).toBe(false);
        expect(isValidParantheses('[(])')).toBe(false);
    });

    it('should return true for multiple valid pairs in a string', () => {
        expect(isValidParantheses('()[]{}')).toBe(true);
        expect(isValidParantheses('({[(){}]})')).toBe(true);
    });

    it('should return false for invalid pairs', () => {
        expect(isValidParantheses('([}}]')).toBe(false);
    });

});
