export function reverseString(string){
    if(typeof string !== "string"){
        return false;
    }
    const trimmed = [...string.trimStart().trimEnd()];
    return trimmed.reverse().join("");
}

