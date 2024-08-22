// Given 2 int values, return whichever value is nearest to the value 10, or return 0 in the event of a tie. 
// Note that Math.abs(n) returns the absolute value of a number.


// close10(8, 13) → 8
// close10(13, 8) → 8
//close10(13, 8)→ 0

const close10=(a,b)=>{ 
    if(Math.abs(10-a)==Math.abs(10-b)){
        return 0;
      }else if(Math.abs(10-a)>Math.abs(10-b)){
        return b;
      }else{
        return a;
      }
}
console.log(close10(8, 13));
console.log(close10(13, 8));
console.log(close10(13, 8));

