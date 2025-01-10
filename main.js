// Selecting all element from Html file
let dayBox = document.querySelector('.day')
let dateBox = document.querySelector('.date')
let monthBox = document.querySelector('.month')
let yearBox = document.querySelector('.year')
let hourBox = document.querySelector('.hour')
let minutesBox = document.querySelector('.minutes')
let secondBox = document.querySelector('.second')
let amPM = document.querySelector('.apb')
let sesson = 'AM'
//  Creating Array for months Name
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']



// Creating Array for Day Names
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

function dateAndTimeUpdater() {

    // storing Local time on this funtion
    let date = new Date();


    //geting currunt day - index from local or current dateTime()
    let day = date.getDay();
    // Setting in html
    dayBox.innerHTML = days[day];



    //geting currunt Date from local or current dateTime()
    let cdate = date.getDate();
    // Setting in html
    dateBox.innerHTML = cdate = cdate < 10 ? '0' + cdate : cdate;



    //geting currunt Month - index from local or current dateTime()
    let month = date.getMonth();
    // Setting in html
    monthBox.innerHTML = months[month];

    //geting currunt Month - index from local or current dateTime()
    let year = date.getFullYear();
    // Setting in html
    yearBox.innerHTML = year;


    //geting Latasr Hour from local or current dateTime()
    let hour = date.getHours();
    // Setting hour formate in 12 hour
    hour = hour > 13 ? hour - 12 : hour;
    // Setting in html
    hourBox.innerHTML = hour = hour < 10 ? '0' + hour : hour;



    //geting Latasr Minutes from local or current dateTime()
    let min = date.getMinutes();
    // Setting in html
    minutesBox.innerHTML = min = min < 10 ? '0' + min : min;


    //geting Second Hour from local or current dateTime()
    let sec = date.getSeconds();
    // Setting in html
    secondBox.innerHTML = sec = sec < 10 ? '0' + sec : sec;


    // setting AM or PM
    amPM.innerHTML = sesson = hour < 12 ? 'AM' : 'PM'

}
setInterval(dateAndTimeUpdater, 100)
