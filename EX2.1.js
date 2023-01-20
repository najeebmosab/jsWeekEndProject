function SumOfLowestNumbers(params) {
    if (params != null) {
        params.sort((a,b)=>a-b);
        console.log(params);
        return params[0]+params[1];
    }
    return null;
}

console.log(SumOfLowestNumbers([19, 5, 42, 2, 77]));