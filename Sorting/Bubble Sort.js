function BubbleSort(arr){
    let n = arr.length-1;
    while(n>=0){
        for(let i=0; i<n ; i++)
         {
             console.log(arr[i], arr[i+1]);
            if(arr[i] > arr[i+1])
            {
              [arr[i], arr[i+1]] = [arr[i+1], arr[i]];
            }           
          }                       
        n--;
      }
      return arr;
  }
  
  console.log(BubbleSort([7,8,1,5,3,0,9,4]));