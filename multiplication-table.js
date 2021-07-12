const multiplicationTable = function(maxValue) {
  let multiply = [];
  for (let i = 1; i <= maxValue; i++) {
    for (let k = 1; k <= maxValue; k++) {
      multiply.push(i * k);
    }
  }
  
  let table = '';
  while (multiply.length) {
    table = table + multiply.splice(0,maxValue).join(' ') + '\n';
  }
  return table;
};


console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));