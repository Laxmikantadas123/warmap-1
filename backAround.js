// Given a string, take the last char and return a new string with the last char added at the front and back, so "cat" yields "tcatt".
//  The original string will be length 1 or more.

// ex-backAround("cat") → "tcatt"
// backAround("Hello") → "oHelloo"
// backAround("a") → "aaa"

const backAround=(str)=>{
    let data=str.substring(str.length-1,str.length)
      return data+str+data
    
}

console.log(backAround("cat"));
console.log(backAround("Hello"));
console.log(backAround("a"));


