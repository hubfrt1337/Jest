export function caesarShift(string, shiftNumber){
    const stringArray = [...string]; 
    let newString = "";
    stringArray.forEach(char => {
        const boolean = isCapitalized(char)
        const index = alphabet.findIndex(el => el === char.toLowerCase())
        console.log(index)
        if(index >= 0){
            const shifted = index + shiftNumber;
            if(shifted > alphabet.length -1){
                shifted = shifted - alphabet.length;
                if(boolean){
                    newString += alphabet[shifted].toUpperCase();
                } else{
                    newString += alphabet[shifted]
                }
            } else {
                if(boolean){
                    newString += alphabet[shifted].toUpperCase();
                } else {
                    newString += alphabet[shifted];
                }
            }
       } else {
        newString += char;
       }     
    })
    return newString;  
}

const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

function isCapitalized(char){
    if(typeof char !== "string"){
        return 0;
    }
    if(char.localeCompare(char.toUpperCase()) === 0){
        return true;
        //UpperCase
    }
    if(char.localeCompare(char.toLowerCase()) === 0){
        return false;
        // LowerCase
    } 
}
