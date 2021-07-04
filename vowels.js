const numberOfVowels = function(data) {
  let counter = 0;
  for (let letter of data) {
    if (letter === "a"|| letter === "e" || letter === "i" || letter === "o" || letter === "u") {
      counter++;
    }
  } return counter;
};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));

///////////////////////////////////////////////////////
 
const numberOfVowels = function(data) {

  let vowels = ["a", "e", "i", "o", "u"];
  let counter = 0;
  for (let letter of data) {
    if (vowels.includes(letter)) {
      counter++;
    }
  } return counter;
};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));
