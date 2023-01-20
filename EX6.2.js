function Duplicates(params) {
    const obj = {};
    for (let i = 0; i < params.length; i++) {
        const element = params[i].toLowerCase();

        if (obj[element]) {
            obj[element] = obj[element] + 1;
        }
        else {
            obj[element] = 1;
        }
    }
    debugger;
    const newObj = {};
    for (const ob in obj) {
        if (obj[ob] > 1) {
            newObj[ob] = obj[ob];
        }
    }
    if(newObj == {})
    {
        console.log("no character repeats more",newObj);
    }
    else{
        console.log(newObj);

    }
}

Duplicates("abcd")
Duplicates("aabBcd")