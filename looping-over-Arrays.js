/*

const amounts = [61.00, 52.25, 112.99, 5.00]; 

let total = 0;
for (let i = 0; i < amounts.length; i++) {
  total += amounts[i];
}
console.log('Order total is: ', total);

*/


//
//for..of Loop
//

const amounts = [61.00, 52.25, 112.99, 5.00];

const total = 0;
for (let amount of amounts) {
  total += amount;
}
console.log('Order total is: ', total);


// for..of Loop ARRAY

let nums = [8,5,6,8,9,4,2];
for (let n of nums) {
  console.log(n);
}

//for . . of loop STRING
let name = 'lyudmila';

for (let letter of name) {
  console.log(letter);
}