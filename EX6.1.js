function Mumbling(str){
    let newStr = "";
    for (let i = 0; i < str.length; i++) {
        let el = str[i];
        for (let j = 0; j < i+1; j++) {
              if (j==0) {
                newStr+=el.toUpperCase();
              }
              else{
                newStr+=el;
              }      
        }
        newStr+="-";
    }
    console.log(newStr);
}

Mumbling("abcd");
Mumbling("RqaEzty");
Mumbling("cwAt");