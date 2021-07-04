const instructorWithLongestName = function(instructors) {
  let name = "";
  let lengthOfName = [];
  for ( let i = 0; i < instructors.length; i++) {
    name = instructors[i]["name"];
    	lengthOfName[i] = name.length;
  }
  
  let maxLengthOfName = 0;
  for (let i =0; i < lengthOfName.length; i++) {
    if (maxLengthOfName < lengthOfName[i]) {
      maxLengthOfName = lengthOfName[i];
    }
  }
	
  for (let i = 0; i < lengthOfName.length; i++) {
    if ( maxLengthOfName === lengthOfName[i]) {
      return instructors[i];
    }   
  }
  
};

console.log(instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
]));