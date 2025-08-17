import {calculator} from "./calculator"
test("Add 1.2 + 2 is equal to 3", () => {
    expect(calculator.add(1.2,2.4)).toBeCloseTo(3.6,5);
})
test("multiply 4 x 0.5 is equal to 2", () => {
    expect(calculator.multiply(4, 0.5)).toBeCloseTo(2)
})
test("return falsy if value is undefined", () => {
    expect(calculator.subtract(undefined, 2)).toBeFalsy()
})
test("Return falsy if input is not a number", () => {
    expect(calculator.add()).toBeFalsy();
})
