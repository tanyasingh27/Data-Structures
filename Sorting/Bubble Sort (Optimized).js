function BubbleSort(arr){
    let isSwapped = true;
    let n = arr.length-1;
    do{
        isSwapped = false;
        for(let i=0; i<n ; i++)
        {             
           if(arr[i] > arr[i+1])
           {
             [arr[i], arr[i+1]] = [arr[i+1], arr[i]];
             isSwapped = true;
           }           
        }
       n--;
    }while(isSwapped)
    return arr;
  }
  
  console.log(BubbleSort([7,8,1,-5,3,0,9,4]));