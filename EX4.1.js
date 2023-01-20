function Fibonacci(params) {
    let start = 0;
    let next = 1;
    let temp = start;
    for (let i = 0; i < params; i++) {
        console.log(next);
        temp = next;
        next = start + next;
        start = temp;
    }
}


Fibonacci(10);