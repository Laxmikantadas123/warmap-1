// Given 2 ints, a and b, return true if one if them is 10 or if their sum is 10.

// ex-makes10(9, 10) → true
// makes10(9, 9) → false
// makes10(1, 9) → true

// ---code -----

const makes10=(a,b)=>{
    if(a==10||b==10||a+b==10){
        return true;
      }
      return false;
}
// ----or-----


const makes101=(a,b)=>{
    return (a == 10 || b == 10 || a+b == 10);
}
// --------Test case-----

console.log(makes10(9, 10));
console.log(makes10(9, 9));
console.log(makes10(1, 9));
console.log(makes101(9, 10));
console.log(makes101(9, 9));
console.log(makes101(1, 9));


