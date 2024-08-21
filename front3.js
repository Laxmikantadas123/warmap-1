// Given a string, we'll say that the front is the first 3 chars of the string. If the string length 
// is less than 3, the front is whatever is there. Return a new string which is 3 copies of the front.

// ex-front3("Java") → "JavJavJav"
// front3("Chocolate") → "ChoChoCho"
// front3("abc") → "abcabcabc"

const front3=(str)=>{
    let data
    if(str.length>=3){
        data=str.substring(0,3)
    }else{
        data=str
    }
    return data+data+data
}


console.log(front3("Java"));
console.log(front3("Chocolate"));
console.log(front3("C"));

