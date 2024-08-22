// Return true if the given string begins with "mix", except the 'm' can be anything, so "pix", "9ix" .. all count.


// mixStart("mix snacks") → true
// mixStart("pix snacks") → true
// mixStart("piz snacks") → false

const mixStart=(str)=>{
    if(str.length<3){
      return false
    }else if(str.substring(1,3)=="ix"){
          return true
    }else{
        return false
    }
   
}

console.log( mixStart("mix snacks"));
console.log(mixStart("pix snacks") );
console.log(mixStart("piz snacks") );

