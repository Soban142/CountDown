var annoucementDate = document.querySelector('.annoucement-date')
var endingDate = new Date('Wed May 12 2023 10:00:00');
var buttons = document.querySelector('.buttons-container')


// console.log(endingDate)

// console.log(endingDate.getTime())

var months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

var days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

annoucementDate.innerHTML = `Giveaway Ends On ${days[endingDate.getDay()]}, ${endingDate.getDate()} ${months[endingDate.getMonth()]}  ${endingDate.getFullYear()} ${endingDate.getHours()}:0${endingDate.getMinutes()}am`

function currentTime () {
    let currentDate = new Date();
    
    let timeGap = endingDate.getTime() - currentDate.getTime();
    // console.log(timeGap)
  if(timeGap > 0){
    let remainingDays = Math.floor(timeGap / (1000 * 60 * 60 * 24)) ;
    // console.log(remainingDays)
    let remainingHours = Math.floor(timeGap / (1000 * 60 * 60) - (Math.floor(timeGap / (1000 * 60 * 60 * 24)) * 24));
    let remainingMins = Math.floor(timeGap / (1000 * 60) - (Math.floor(timeGap / (1000 * 60 * 60)) * 60));
    let remainingSecs = Math.floor(timeGap / (1000)) - ((Math.floor(timeGap / (1000 * 60)) * 60));

    var days = document.querySelector('.days-timer');
    var hours = document.querySelector('.hours-timer');
    var minutes = document.querySelector('.mins-timer');
    var seconds = document.querySelector('.secs-timer');

    days.innerHTML = `${remainingDays}`
    hours.innerHTML = `${remainingHours}`
    minutes.innerHTML = `${remainingMins}`
    seconds.innerHTML = `${remainingSecs}`
  }
  else{
    annoucementDate.innerHTML = 'Event has ended. Stay tuned for upcoming Giveaways.'
  }
}

currentTime()

setInterval(currentTime, 1000)