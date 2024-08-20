// Given a string, return a new string where "not " has been added to the front. However, if the string already begins with
//  "not", return the string unchanged. Note: use .equals() to compare 2 strings.

// ex- notString("candy") → "not candy"
// notString("x") → "not x"
// notString("not bad") → "not bad"

const notString=(str)=>{
  if(str.length>=3&&str.substring(0, 3)=="not"){
    return str
  }
  return "not "+str 


}


console.log(notString("not hello"));
console.log(notString("hello"));

