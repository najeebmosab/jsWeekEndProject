function smallWord(params) {
    const arr = params.split(" ");
    let min = arr[0].length;
    console.log(min);
    for (let i = 0; i < arr.length; i++) {
        min = Math.min(min,arr[i].length);
    }
    return min
}


console.log(smallWord("mousab abo najeeb"));