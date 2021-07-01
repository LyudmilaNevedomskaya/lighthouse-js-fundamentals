var test = [12, 929, 11, 3, 199, 1000, 7, 1, 24, 37, 4,
  19, 300, 3775, 299, 36, 209, 148, 169, 299,
  6, 109, 20, 58, 139, 59, 3, 1, 139
];

// Write your code here
test.forEach(function(number){
  if (number % 3 === 0) {
      console.log(number += 100);
  } else {
      console.log(number);
  }
});

/* ??????
test.forEach(function(item, index){
  if(item%3===0){
      // The commented statements below would not be able to change the value of item
      // because the `item` is a COPY of actual element, while actual is test[index]
      // item = item + 100;
      // console.log("The updated element is "+item+" and actual is "+test[index]);
      test[index]=test[index]+100;
  }
  //else 
  //    console.log("Element "+item+" is not divisible by 3");
});
console.log(test);

????????????????*/