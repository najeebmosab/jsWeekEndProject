function  Mask(mask) {
    let newStr="";
    if(mask.length <= 4)
    {
        return mask;
    }
    let i = 0
    for (i = 0; i < mask.length-4; i++) {
        const element = mask[i];
        newStr+="#"
    }
    for ( i ; i < mask.length; i++) {
        const element = mask[i];
        newStr+=element;
    }
    return newStr;
}

console.log(Mask("4556364607935616"));
console.log(Mask("64607935616"));
console.log(Mask("1"));
console.log(Mask("Skippy"));
console.log(Mask("Nananananananananananananananana Batman!"));