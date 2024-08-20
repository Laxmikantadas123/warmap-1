// The parameter weekday is true if it is a weekday, and the parameter vacation is true if we are on vacation.
// We sleep in if it is not a weekday or we're on vacation. Return true if we sleep in.

// ex - sleepIn(false, false) → true
//      sleepIn(true, false) → false
//      sleepIn(false, true) → true


// ------code---- 

let sleep=(weekday,vacation)=>{
    if(!weekday||vacation){
        return true
    }else{
        return false
    }
}

// -----Test case-----

console.log(sleep(false, false) );
console.log(sleep(true, false));
console.log(sleep(false, true) );
console.log(sleep(true, true) );
