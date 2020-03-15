function binarySearch(arr, val){
    let left=0;
    let right = arr.length-1;
    let mid;
    while(left<=right){
        mid = Math.floor((left+right)/2);
        if(val==arr[mid]) return mid;
        else if(val< arr[mid]) right = mid-1;
        else left= mid+1;
    }
    return -1;
}