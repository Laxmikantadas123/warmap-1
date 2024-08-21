// Given a string, return true if the string starts with "hi" and false otherwise.


// ex-startHi("hi there") → true
// startHi("hi") → true
// startHi("hello hi") → false

const startHi=(str)=>{
    if(str.length>=2){
        return str.substring(0,2)=="hi"
    }
    return false
}


console.log(startHi("hi there"));
console.log(startHi("hi"));
console.log(startHi("hello hi"));
console.log(startHi("h"));

