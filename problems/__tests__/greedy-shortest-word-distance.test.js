import minWordDistance from '../greedy-shortest-word-distance';

describe('minWordDistance', () => {
    test('should return correct minimum distance between two words', () => {
        const words = ['the', 'quick', 'brown', 'fox', 'quick'];
        expect(minWordDistance(words, 'the', 'fox')).toBe(3);
    });

    test('should return correct distance when words appear multiple times', () => {
        const words = ['a', 'c', 'd', 'b', 'a', 'b', 'c'];
        expect(minWordDistance(words, 'a', 'b')).toBe(1);
    });

    test('should return 0 when both words are the same and appear together', () => {
        const words = ['hello', 'world', 'hello'];
        expect(minWordDistance(words, 'hello', 'hello')).toBe(0);
    });

    test('should return max length when one word is missing', () => {
        const words = ['a', 'b', 'c', 'd'];
        expect(minWordDistance(words, 'a', 'z')).toBe(words.length);
    });

    test('should return correct distance when words are at start and end', () => {
        const words = ['word1', 'x', 'y', 'z', 'word2'];
        expect(minWordDistance(words, 'word1', 'word2')).toBe(4);
    });

    test('should return correct distance in case of adjacent words', () => {
        const words = ['one', 'two', 'three'];
        expect(minWordDistance(words, 'one', 'two')).toBe(1);
    });
});
