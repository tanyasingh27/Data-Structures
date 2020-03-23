function MergeSort(arr,left=0,right=arr.length-1){
    if(left < right){
        let mid = Math.trunc((left + right)/2);
        MergeSort(arr,left,mid);
        MergeSort(arr,mid+1,right);
        Merge(arr,left,mid,right);
    }
}

function Merge(arr,left,mid,right){
    let leftArrLength = mid - left + 1;
    let rightArrLength = right - mid;
    let leftArray = new Array(leftArrLength);
    let rightArray = new Array(rightArrLength);
    for(let i=0 ; i < leftArrLength; i++){
        leftArray[i] = arr[left+i];
    }
    for(let j=0 ; j < rightArrLength; j++){
        rightArray[j] = arr[mid+1+j];
    }
    let i = 0, j = 0, k = left;
    while(i < leftArrLength && j < rightArrLength){
        if(leftArray[i] <= rightArray[j]){
            arr[k] = leftArray[i];
            i++;
        }
        else{
            arr[k] = rightArray[j];
            j++; 
        }
        k++;
    }
    while(i < leftArrLength){
        arr[k] = leftArray[i];
        i++;
        k++;
    }
    while(j < rightArrLength){
        arr[k] = rightArray[j];
        j++;
        k++;
    }
}
let arr = [38,27,43,3,2,9,3,82,10];
MergeSort(arr);
console.log(arr);
