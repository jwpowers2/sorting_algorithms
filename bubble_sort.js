// bubble sort --> O n^2

function bubbleSort(arr){

  new_arr = [];

  while(arr.length > 0){

    let min = arr[0];
    let min_index = 0;

    for(let i = 0; i < arr.length; i++){

      if (arr[i] < min){
        min = arr[i];
        min_index = i;
      }

    }

    new_arr.push(arr.slice(min_index,min_index+1));
    arr.splice(min_index,1);    

  }
  return new_arr;
}

console.log(bubbleSort([5,2,7,0]));
