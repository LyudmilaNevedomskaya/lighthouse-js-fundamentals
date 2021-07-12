const talkingCalendar = function(date) {
  
  let newDate = date.split('/');
  
  let year = newDate[0];
  let month = newDate[1];
  let day = newDate[2];
  
  switch (month) {
    case '01':
      month = "January";
      break;
    case '02':
      month = "February";
      break;
    case '03':
      month = "March";
      break;
    case '04':
      month = "April";
      break;
    case '05':
      month = "May";
      break;
    case '06':
      month = "June";
      break;
    case '07':
      month = "July";
      break;
    case '08':
      month = "August";
      break;
    case '09':
      month = "September";
      break;
    case '10':
      month = "October";
      break;
    case '11':
      month = "November";
      break;
    case '12':
      month = "December";
      break;
  }
  
  switch (day) {
    case '01':
      day = '1st';
      break;
    case '21':
    case '31':
      day = day + 'st';
      break;
    case '02':
      day = '2nd';
      break;
    case '22':
      day = day + 'nd';
      break;
    case '03':
      day = '3rd';
      break;
    case '23':
      day = day + 'rd';
      break;
    case '04':
    case '05':
    case '06':
    case '07':
    case '08':
    case '09':
      day = day[1] + 'th';
      break;
    default:
      day = day + 'th';
      break;
  }
  
  let theNewDate = month + ' ' + day + ',' + ' ' + year;
  return theNewDate;
};

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));