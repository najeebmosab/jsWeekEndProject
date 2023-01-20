function Tribonacci(n1, n2, n3, loop) {
    debugger;
    if (n1 < 0 || n2 < 0 || n3 < 0) {
        return null;
    }
    else {
        let start = n1;
        let next = n2;
        let after = n3;
        let temp = after
        console.log(start);
        console.log(next);
        console.log(after);
        for (let i = 0; i < loop; i++) {
           temp = after;
           after = after + next + start;
           start = next;
           next = temp;
           console.log(after);
        }
    }
}

Tribonacci(0, 0, 1, 10);
Tribonacci(1, 1, 1, 10);