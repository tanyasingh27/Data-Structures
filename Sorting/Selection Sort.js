function SelectionSort(arr){
    let indexOfMin;
    for(let i=0; i<arr.length-1 ; i++){
        indexOfMin = i;
        for(let j=i+1; j<arr.length; j++){
            if(arr[j]< arr[indexOfMin]){
                indexOfMin = j;
            }
        }
        if(indexOfMin != i){
            [arr[indexOfMin], arr[i]] =  [arr[i], arr[indexOfMin]];
        }
    }
    return arr;
}

console.log(SelectionSort([0,2,35,22,10,18,16]));