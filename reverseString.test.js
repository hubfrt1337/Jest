import {reverseString} from "./reverseString";

test("It reverses a string", () => {
    expect(reverseString("pizza")).toBe("azzip");
})

test("Return undefined when input is undefined", () => {
    expect(reverseString(undefined)).toBeFalsy();
})
test("return false when input is number", () => {
    expect(reverseString(123)).toBeFalsy();
})
test("works with empty string", () => {
    expect(reverseString("")).toBe("");
})