function linearSearch(arr,val){
    for(let a=0; a<arr.length; a++){
        if(arr[a]==val)
         return a;
    }
    return -1;
}
console.log(linearSearch([1,2,3,4,5],6));
console.log(linearSearch([2,52,8,15,69],15));