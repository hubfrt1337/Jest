import { caesarShift } from "./caesar"
it("Change letter a into letter d", () => {
    expect(caesarShift("a", 4)).toBe("e")
})
it("Should be case-sensitive in input", () =>{
    expect(caesarShift("aBCa", 3)).toBe("dEFd")
})
it("Punctuation, spaces and other non-alphabetic characters should remain unchanged", () => {
    expect(caesarShift("Hello, World!", 3)).toBe('Khoor, Zruog!')
})
