// Given a non-empty string and an int n, return a new string where the char at index n has been removed. 
// The value of n will be a valid index of a char in the original string (i.e. n will be in the range 0..str.length()-1 inclusive).

// ex-missingChar("kitten", 1) → "ktten"
// missingChar("kitten", 0) → "itten"
// missingChar("kitten", 4) → "kittn"


const missingChar=(str,n)=>{
    let front=str.substring(0,n)
    let back=str.substring(n+1,str.length)
    return front+back
    
    
    
        
}

console.log(missingChar("kitten",3));
console.log(missingChar("kitten",0));

