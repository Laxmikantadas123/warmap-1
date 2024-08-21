// Return true if the given non-negative number is a multiple of 3 or a multiple of 5. Use the % "mod" operator --
//  see Introduction to Mod

//  ex-or35(3) → true
//  or35(10) → true
//  or35(8) → false

const or35=(n)=>{
    if(n%3==0||n%5==0){
        return true
      }
      return false
}

console.log(or35(3));
console.log(or35(10));
console.log(or35(8));

