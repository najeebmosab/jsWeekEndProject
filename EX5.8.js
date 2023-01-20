function longstWord(params) {
    const arr = params.split(" ");
    let maxWord = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if(arr[i].length > maxWord.length)
        {
            maxWord = arr[i];
        }
    }

    return maxWord;
    
}


console.log(longstWord("mousab abo najeebb"));