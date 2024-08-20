// Given an int n, return true if it is within 10 of 100 or 200. Note: Math.abs(num) computes the absolute value of a number.

// ex -nearHundred(93) → true
//     nearHundred(90) → true
//     nearHundred(89) → false


const nearHundred=(n)=>{
    return ((Math.abs(100 - n) <= 10) ||
    (Math.abs(200 - n) <= 10));
}


console.log(nearHundred(93));
console.log(nearHundred(90));
console.log(nearHundred(89));


