function BasicMath(parOne,op,parTwo) {
    const str = parOne+op+parTwo;
    return eval(str);
}

console.log(BasicMath( 4,'+',7));
console.log(BasicMath( 15,'-',18));
console.log(BasicMath( 5,'*',5));
console.log(BasicMath( 49,'/',7));