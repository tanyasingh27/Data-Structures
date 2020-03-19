function InsertSort(arr){
    for(let i = 1 ; i < arr.length ; i++){
        let Current = arr[i];
        for(var j = i-1 ; j >= 0 && arr[j] > Current ; j--){
            arr[j+1] = arr[j];           
        }
        arr[j+1] = Current;
    }
    return arr;
}

console.log(InsertSort([0,2,35,22,10,18,16]));