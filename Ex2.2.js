function OneAndZeroBinary(params) {
    let indexOfBinary = 1;
    let sum = 0;
    for (let i = params.length-1; i >= 0; i--) {
        debugger;
        const element = params[i];
        sum+=element*indexOfBinary;
        indexOfBinary*=2;
    }
    return sum;
}

// console.log( "1",OneAndZeroBinary([0, 0, 0, 1]));
// console.log( "2",OneAndZeroBinary([0, 0, 1, 0]));
console.log( "5",OneAndZeroBinary([0, 1, 0, 1]));
console.log( "9",OneAndZeroBinary([1, 0, 0, 1]));
// console.log( "2",OneAndZeroBinary([0, 0, 1, 0]));
// console.log( "6",OneAndZeroBinary([0, 1, 1, 0]));