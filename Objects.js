//
// BREAKFAST object
//

let breakfast = {
  name: "The Lumberjack",
  price: "$9.95",
  ingredients: ["eggs", "sausage", "toast", "hashbrowns", "pancakes"]
};

console.log(breakfast);

/////////////////////////////////////////


//
// SAVINGS ACCOUNT
//

var savingsAccount = {
  balance: 1000,
  interestRatePercent: 1,
  deposit: function addMoney(amount) {
      if (amount > 0) {
          savingsAccount.balance += amount;
      }
  },
  withdraw: function removeMoney(amount) {
      var verifyBalance = savingsAccount.balance - amount;
      if (amount > 0 && verifyBalance >= 0) {
          savingsAccount.balance -= amount;
      }
  },
  // your code goes here
  printAccountSummary: function printAccountSummary() {
      return "Welcome!\nYour balance is currently $" + savingsAccount.balance + " and your interest rate is " + savingsAccount.interestRatePercent + "%.";
  }
};

console.log(savingsAccount.printAccountSummary());

/////////////////////////////////////////////////////////

//
// FACEBOOK PROFILE
//

var facebookProfile = {
  name: "Lyudmila",
  friends: 50,
  messages: ["Message 1", "Message 2", "Message 3", "Message 4"],
  postMessage: function(message){
      facebookProfile.messages.push(message);
  },
  deleteMessage: function(index){
      // In the following splice() method call,
      // - argument 1 = index from where the element has to be deleted
      // - argument 2 = count of elements to be deleted
      facebookProfile.messages.splice(index, 1);
  },
  addFriend: function(){
      facebookProfile.friends = facebookProfile.friends + 1;
      //friends += 1; // this statement is equivalent to the above
  },
  removeFriend: function(){
      if(facebookProfile.friends>0)
          facebookProfile.friends = facebookProfile.friends - 1;
  }
};

///////////////////////////////////////////////////////////

// 
// DONUTS ARRAY
var donuts = [
  { type: "Jelly", cost: 1.22 },
  { type: "Chocolate", cost: 2.45 },
  { type: "Cider", cost: 1.59 },
  { type: "Boston Cream", cost: 5.99 }
];

// your code goes here
donuts.forEach(function (donut) {
  console.log(donut.type + " donuts cost $" + donut.cost + " each");
});

////////////////////////////////////////////////////////////