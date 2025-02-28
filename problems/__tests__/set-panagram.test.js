import isPangram from "../set-panagram";

describe("isPangram function", () => {
    test("should return true for a valid pangram", () => {
        expect(isPangram("The quick brown fox jumps over the lazy dog"))
            .toBe(true);
    });

    test("should return false for a string missing some letters", () => {
        expect(isPangram("The quick brown fox jumps over the dog"))
            .toBe(false);
    });

    test("should be case insensitive", () => {
        expect(isPangram("THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG"))
            .toBe(true);
    });

    test("should ignore non-alphabetic characters", () => {
        expect(isPangram("The quick brown fox jumps over the lazy dog!@#$%^&*()"))
            .toBe(true);
    });

    test("should return false for an empty string", () => {
        expect(isPangram(""))
            .toBe(false);
    });
});
