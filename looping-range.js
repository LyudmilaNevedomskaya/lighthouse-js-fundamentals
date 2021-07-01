//
//The function takes 3 integer parameters: start, end, and step.
//The function should return an array of numbers from start to end counting by step.
//The function should return an empty array [] if given incorrect parameters, such as:

    //start, end, or step being undefined
    //start being greater than end
    //step being 0, or negative
//



function range(start, end, step){

  let num = [];

  if (start > end || step <= 0 || start === undefined || end === undefined || step === undefined){
    return num;
  } 

  for (let i = start; i <= end; i += step){
    num.push(i);
  }  
  
  return num; 
}
