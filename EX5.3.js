function toCamelCase(str){
    let newStr="";
    for (let i = 0; i < str.length; i++) {
        const element = str[i];
        if(element !='-' && element !='_')
        {
            if(str[i-1] == "-" || str[i-1] == "_")
            {
                newStr+=element.toUpperCase();
            }
            else{
                newStr+=element;
            }
        }
    }
    return newStr;
}

console.log(toCamelCase("the-stealth-warrior"));
console.log(toCamelCase("The_Stealth_Warrior"));


