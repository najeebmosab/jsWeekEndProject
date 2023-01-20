function FindTheNextPerfectSquare(params) {
    let sqrt = Math.sqrt(params);
    if (!Number.isInteger(sqrt)) {
        return -1 ;
    }
    return Math.pow((sqrt+1),2);
}

console.log(FindTheNextPerfectSquare(121));
console.log(FindTheNextPerfectSquare(625));
console.log(FindTheNextPerfectSquare(114));