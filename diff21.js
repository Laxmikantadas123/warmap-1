// Given an int n, return the absolute difference between n and 21, except return double the absolute difference if n is over 21.

// ex-diff21(19) → 2
// diff21(10) → 11
// diff21(21) → 0

// ------code------

const diff21=(n)=>{
    if(n<=21){
        return 21-n;
      }
      return (n-21)*2;
}

// ------Test case----

console.log(diff21(19));
console.log(diff21(10));
console.log(diff21(22));


