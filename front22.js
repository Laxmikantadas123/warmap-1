
// Given a string, take the first 2 chars and return the string with the 2 chars added at both the front and back, so 
// "kitten" yields"kikittenki". If the string length is less than 2, use whatever chars are there.


// ex-front22("kitten") → "kikittenki"
// front22("Ha") → "HaHaHa"
// front22("abc") → "ababcab"

const front22=(str)=>{
    let data;
    if(str.length>=2){
      data=str.substring(0,2);
    }else{
      data=str;
    }
    return data+str+data;
}

console.log(front22("kitten"));
console.log(front22("Ha"));
console.log(front22("abc"));

