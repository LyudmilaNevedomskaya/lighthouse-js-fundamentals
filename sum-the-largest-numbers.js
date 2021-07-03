const sumLargestNumbers = function(data) {
  // Put your solution here
  let big1 = 0;
  let big2 = 0;
  for (let i = 0; i < data.length; i++) {
    if (data[i] > big1){
      big1 = data[i];
    } 
  } 
  for (let i = 0; i < data.length; i++) {
    if (data[i] > big2 && data[i] !== big1){
      big2 = data[i];
    } 
  } return big1 + big2;
};

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));