const conditionalSum = function(values, condition) {
  // Your code here
  let x = 0;
  let array = [];
  let sum = 0;
  for (let x of values) {
    if (x % 2 === 0 && condition === "even") {
      array.push(x);
    } else if (x % 2 !== 0 && condition === "odd") {
      array.push(x);
    } 
  }
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
 return sum;
};

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));