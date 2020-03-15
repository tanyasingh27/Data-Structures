function BubbleSort(arr){
    let swapped = true;
    let n = arr.length-1;
    do{
        swapped = false;
        for(let i=0; i<n ; i++)
        {             
           if(arr[i] > arr[i+1])
           {
             [arr[i], arr[i+1]] = [arr[i+1], arr[i]];
             swapped = true;
           }           
        }
       n--;
    }while(swapped)
    return arr;
  }
  
  console.log(BubbleSort([7,8,1,-5,3,0,9,4]));