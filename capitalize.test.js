import { capitalize } from "./capitalize";

test("Return string with first letter Capitalized", () => {
    expect(capitalize("cat")).toBe("Cat")
});

test("Work with letter already Capitalized", () => {
    expect(capitalize("Cat")).toBe("Cat")
})

test("Work with spacing", () => {
    expect(capitalize("  Cat")).toBe("Cat")
})

test("Doesn't work with numbers", () => {
    expect(capitalize(123)).toBeFalsy()
});

test("Doesn't work with number strings", () => {
    expect(capitalize("123abs")).toBeFalsy()
});

test("Doesn't work with empty string", () => {
    expect(capitalize("")).toBeFalsy()
})
test("Throws on null input", () => {
    expect(capitalize(null)).toBeFalsy()
})
