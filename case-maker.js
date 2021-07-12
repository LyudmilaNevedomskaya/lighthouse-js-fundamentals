const camelCase = function(input) {
  let newString = "";
      for (let i = 0; i < input.length; i++){
          if (input[i] !== " "){
              newString += input[i];
          } else if (input[i] === " "){
              let firstLetterAfterSpace = input[i+1].toUpperCase();
              newString += firstLetterAfterSpace;
              i++;
          }
      } return newString
  };
  
  console.log(camelCase("this is a string"));
  console.log(camelCase("loopy lighthouse"));
  console.log(camelCase("supercalifragalisticexpialidocious"));;