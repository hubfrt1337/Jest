export function capitalize(string){
    if(typeof string !== "string"){
        return false;
    }
    const trimmed = string.trimStart();
    if(!isNaN(trimmed.charAt(0))){
        return false;
    }
    const firstChar = trimmed.charAt(0).toUpperCase()
    return firstChar + trimmed.slice(1);
}