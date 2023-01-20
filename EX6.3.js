function londistStr(str1, str2) {
    let arr = [];
    for (let i = 0; i < str1.length; i++) {
        if (arr.includes(str1[i]) == false) {
            arr.push(str1[i]);
        }
    }

    for (let i = 0; i < str2.length; i++) {
        if (arr.includes(str2[i]) == false) {
            arr.push(str2[i]);
        }
    }
    
    const newArr = arr.sort();
    let newStr = "";
    for (let i = 0; i < newArr.length; i++) {
        newStr += newArr[i];
    }
    return newStr;
}

console.log(londistStr("xyaabbbccccdefww", "xxxxyyyyabklmopq"));