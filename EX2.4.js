function  Unique(arr){
    let index = 0;
    for (let i = 0; i < arr.length -1; i++) {
        const element = arr[i];
        if(element != arr[i+1])
        {
            index = i;
        }
    }

    return arr[index];
}


console.log(Unique([ 1, 1, 1, 2, 1, 1 ]));
console.log(Unique([ 0, 0, 0.55, 0, 0 ]));