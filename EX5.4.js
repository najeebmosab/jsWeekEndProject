function ToWeirdCase(str) {
    let newStr = "";
    for (let i = 0; i < str.length; i++) {
        const element = str[i];
        if (i % 2 == 0) {
            newStr+=element.toUpperCase();
        }
        else{
            newStr+=element;
        }
    }
    return newStr;
}

console.log(ToWeirdCase("String"));
console.log(ToWeirdCase("Weird string case"));