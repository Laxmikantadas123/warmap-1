// Given two temperatures, return true if one is less than 0 and the other is greater than 100.


// icyHot(120, -1) → true
// icyHot(-1, 120) → true
// icyHot(2, 120) → false

const icyHot=(temp1,temp2)=>{
    if((temp1<0&&temp2>100)||(temp1>100&&temp2<0)){
        return true
    }
    return false
}

console.log(icyHot(120, -1) );
console.log(icyHot(-1, 120));
console.log(icyHot(2, 120));


