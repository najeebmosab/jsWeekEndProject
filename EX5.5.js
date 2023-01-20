function AbbreviateTwowords(str){
    let newStr="";
    str = str.split(" ");
    console.log(str);
    if (str.length > 1) {
        for (let i = 0; i < str.length; i++) {
            const element = str[i];
            newStr+=element[0];
        }
        return newStr;
    }
    return str[0][0]
}

console.log(AbbreviateTwowords("Sam Harris"));
console.log(AbbreviateTwowords("Patrick Feeney"));
console.log(AbbreviateTwowords("Patrick"));
console.log(AbbreviateTwowords("Patrick Feeney Patrick"));
