const merge = function(arr1, arr2) {
  const newArray = arr1.concat(arr2);
  newArray.sort();
  return newArray;
}

console.log(merge([ 4, 5, 6 ], [ 1, 2, 3, 4 ]));
console.log(merge([ 4 ], [ 2, 5, 8 ]));
console.log(merge([ 1, 2, 6 ], []));