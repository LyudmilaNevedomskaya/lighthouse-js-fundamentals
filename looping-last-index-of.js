/* doesn't work
function lastIndexOf(array, value) {
  array = [];

  for(let i = 0; i < array.length; i++) 
  {
    if (array[i] === value) {
      console.log(array[i])
    }

  }
}
*/


/*doesn't work
const lastIndexOf = function(array, value) {
  for (let i = array.length-1; i >= 0; i--) {
    if(value !== array[i]) {
      return -1;
    } if (value === array[i]){
      return i;
    }
  }
}*/


/* doesn't work
function lastIndexOf (array, value){
  
  
  for (let i = array.length-1; i >= 0; i--){
  
    if (array === undefined || value === undefined || i <= 0){
      return -1;
    }
  
    if (value === array[i]){
      return i;
    }
  }
} */



// it works
function lastIndexOf(array, value) {
  let foundMatch = false;
  let result = 0;

  for (var i = 0; i < array.length; i++) {
    if(array[i] === value){
      result = i;
      foundMatch = true;
    }
  }
  
  if (foundMatch) {
    return result;
  } else {
  return -1;
  }
}