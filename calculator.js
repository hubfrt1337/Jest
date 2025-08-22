export const calculator = {
    add: function(a, b){
        if(!checkType(a,b)){
            return false;
        }
        return a + b;
    },
    subtract(a, b) {
        if(!checkType(a,b)){
            return false;
        }
        return a - b;
    },
    divide(a, b) {
        if(!checkType(a,b)){
            return false;
        }
        return a / b;
    },
    multiply(a, b) {
        if(!checkType(a,b)){
            return false;
        }
        return a * b;
    }
}

function checkType(a,b){
    if(typeof a !== "number" || typeof b !== "number"){
        console.log("halo")
        return false;
    }
    return true;
}


