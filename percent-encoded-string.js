const urlEncode = function(text) {
  let newText;
  for ( let i = 0; i < text.length; i++) {
    if(text[0] === ' '){
      text = text.slice(1);
    }
  else if(text[text.length-1] === ' '){
    text = text.substring(0,text.length-1)
  }
    newText = text.split(' ').join('%20');
    }
    return newText;
}; 

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));