const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
]

const metric = 'redness'


const judgeVegetable = function (vegetables, metric) {
  if(metric === Object.keys(vegetables[0])){
  let largest = 0;
    for (let i = 0; i < vegetables.length; i++){
    
      if(vegetables[i].redness > largest) {
          largest = vegetables[i].redness 
      }
    }
  
    for (let i = 0; i < vegetables.length; i++){
      if(largest === vegetables[i].redness){
        return vegetables[i].submitter;
      }
    }
  }
};





judgeVegetable(vegetables, metric)

