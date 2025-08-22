import { ceasarShift } from "./caesar"
it("Change letter a into letter d", () => {
    expect(ceasarShift("a", 4)).toBe("d")
})
it("Should be case-sensitive in input", () =>{
    expect(ceasarShift("aBCa", 4)).toBe("dEFd")
})
it("Punctuation, spaces and other non-alphabetic characters should remain unchanged", () => {
    expect(ceasarShift("Hello, World!", 3)).toBe('Khoor, Zruog!')
})
