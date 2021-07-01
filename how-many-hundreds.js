function howManyHundreds(num) {
  const result = num /100;
  if (result < 1) {
    return 0;
  } else {
    return Math.floor(result);
  }
}
console.log(howManyHundreds(1000));