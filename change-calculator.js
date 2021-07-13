var calculateChange = function(total, cash) {
  var change = cash - total;
  var cashCount = {
    twentyDollar: 0, 
    tenDollar: 0, 
    fiveDollar: 0, 
    twoDollar: 0, 
    oneDollar: 0,
    quarter: 0, 
    dime: 0, 
    nickel: 0, 
    penny: 0,
  };
  
  var i = change;
  while (i > 0) {
    if (i - 2000 >= 0) {
      cashCount.twentyDollar += 1;
      i -= 2000;
    }
    if (i - 1000 >= 0) {
      cashCount.tenDollar += 1;
      i -= 1000;
    }
    else if (i - 500 >= 0) {
      cashCount.fiveDollar += 1;
      i -= 500;
    }
    else if (i - 200 >= 0) {
      cashCount.twoDollar += 1;
      i -= 200;
    }
    else if (i - 100 >= 0) {
      cashCount.oneDollar += 1;
      i -= 100;
    }
    else if (i - 25 >= 0) {
      cashCount.quarter += 1;
      i -= 25;
    }
    else if (i - 10 >= 0) {
      cashCount.dime += 1;
      i -= 10;
    }
    else if (i - 5 >= 0) {
      cashCount.nickel += 1;
      i -= 5;
    }
    else if (i - 1 >= 0) {
      cashCount.penny += 1;
      i -= 1;
    }
    else if (i - 0.9 >= 0) {
      cashCount.penny += 1;
      i -= 0.9;
    }
    else {
      break;
    }
  }
  if (cashCount.twentyDollar === 0){
    delete cashCount.twentyDollar;
  }
  if (cashCount.tenDollar === 0){
    delete cashCount.tenDollar;
  }
  if (cashCount.fiveDollar === 0){
    delete cashCount.fiveDollar;
  }
  if (cashCount.twoDollar === 0){
    delete cashCount.twoDollar;
  }
  if (cashCount.oneDollar === 0){
    delete cashCount.oneDollar;
  }
  if (cashCount.quarter === 0){
    delete cashCount.quarter;
  }
  if (cashCount.dime === 0){
    delete cashCount.dime;
  }
  if (cashCount.nickel === 0){
    delete cashCount.nickel;
  }
  if (cashCount.penny === 0){
    delete cashCount.penny;
  }
  return cashCount;
  }
  
  console.log(calculateChange(1787, 2000));
  console.log(calculateChange(2623, 4000));
  console.log(calculateChange(501, 1000));