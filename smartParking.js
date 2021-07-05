const whereCanIPark = function (spots, vehicle) {
  let stopLooping = false;
  let availableSpot = [];
  for (let i = 0; i < spots[0].length; i++) {
    for (let j = 0; j < spots[1].length; j++) {
      if ( spots[i][j] === 'R' && vehicle === 'regular' ) {
        availableSpot[0] = j;
        availableSpot[1] = i;
        stopLooping = true;
        break;
      } else if ((spots[i][j] === 'S' || spots[i][j] === 'R')  && vehicle === 'small') {
        availableSpot[0] = j;
        availableSpot[1] = i;;
        stopLooping = true;
        break;
      } 
      else if ((spots[i][j] === 'M' || spots[i][j] === 'S' || spots[i][j] === 'R')  && vehicle === 'motorcycle') {
        availableSpot[0] = j;
        availableSpot[1] = i;
        stopLooping = true;
        break;
      } 
    }
    if (stopLooping === true) {
      break;
    }
  } 
  if (availableSpot.length === 0) {
    return false;
  } 
  	else {return availableSpot;
   }
};


console.log(whereCanIPark(
  [
    // COLUMNS ARE X
    // 0    1    2    3    4    5
    ['s', 's', 's', 'S', 'R', 'M'], // 0 ROWS ARE Y
    ['s', 'M', 's', 'S', 'r', 'M'], // 1
    ['s', 'M', 's', 'S', 'r', 'm'], // 2
    ['S', 'r', 's', 'm', 'r', 'M'], // 3
    ['S', 'r', 's', 'm', 'r', 'M'], // 4
    ['S', 'r', 'S', 'M', 'M', 'S']  // 5
  ],
  'regular'
));

console.log(whereCanIPark(
  [
    ['M', 'M', 'M', 'M'],
    ['M', 's', 'M', 'M'],
    ['M', 'M', 'M', 'M'],
    ['M', 'M', 'r', 'M']
  ],
  'small'
));

console.log(whereCanIPark(
  [
    ['s', 's', 's', 's', 's', 's'],
    ['s', 'm', 's', 'S', 'r', 's'],
    ['s', 'm', 's', 'S', 'r', 's'],
    ['S', 'r', 's', 'm', 'r', 's'],
    ['S', 'r', 's', 'm', 'R', 's'],
    ['S', 'r', 'S', 'M', 'm', 'S']
  ],
  'motorcycle'
));