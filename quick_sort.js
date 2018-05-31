// quick sort in js

function quicksort(arr){

  // Base Case
  if(arr.length < 2){
    return arr;

  // recursive case
  } else {

    let pivot = arr[0];
    let less = [];
    let greater = [];

    for (let i of arr.slice(1,arr.length)){
      if (i < pivot){
        less.push(i);
      } else {
        greater.push(i);
      }
    }
    let pivot_array = [];
    pivot_array.push(pivot);
    let return_array = [];   
    return return_array.concat(quicksort(less),pivot_array,quicksort(greater));

  }

}


console.log(quicksort([1,4,2,40,5,600,39,2,48857]));
