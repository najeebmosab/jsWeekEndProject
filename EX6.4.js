function isOgram(params) {
    let newStr = "";
    for (let i = 0; i < params.length; i++) {
        const element = params[i].toLowerCase();
        if (newStr.includes(element)) {
            return false
        }
        else{
            newStr+=element;
        }
    }
    return true;
}

console.log(isOgram("aba"));
console.log(isOgram("abc"));
console.log(isOgram("moOse"));