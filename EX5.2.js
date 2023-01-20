function  repeat_st(n,params) {
    let str = "";
    for (let i = 0; i < n; i++) {
             str+=params;
    }
    return str;
}

console.log(repeat_st(6,'|'));
console.log(repeat_st(6,'Hello'));