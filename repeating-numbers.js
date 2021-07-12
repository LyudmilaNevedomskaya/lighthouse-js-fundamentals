const repeatNumbers = function(data) {
  let repeatedNumbers = "";
  for (let arr of data) {
    let oneString = "";
    for (x = 0; x < arr[1]; x++) {
      oneString += arr[0];
    }
    if (repeatedNumbers === "") {
      repeatedNumbers += oneString;
    } else { 
      repeatedNumbers += ", " + oneString;
    }
  }
  return repeatedNumbers;
};


console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));