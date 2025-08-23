import { analyzeArray } from "./analyzeArray.js";


test("Array [1,2,3,4] should return average number 5", () => {
    const obj = analyzeArray([1,2,3,4])
    expect(obj).toEqual(expect.objectContaining({average: 1.5}))
})
test("Array [5,9,12] should return average = 8.6, min = 5, max = 12, and length = 3", () => {
    const obj = analyzeArray([5,9,12])
    expect(obj).toEqual(expect.objectContaining({average: 8.6, min: 5, max: 12, length: 3 }))
})
test("It doesn't work with strings", () => {
    expect(() => analyzeArray("1", "2")).toThrow();
})
test("It doesn't work with non-array inputs", () =>{
    expect(() => analyzeArray(1,2,3,5)).toThrow()
})
