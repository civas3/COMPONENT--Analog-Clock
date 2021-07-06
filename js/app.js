
// We gonna call SetClock function every 1000 miliseconds
setInterval(setClock, 1000);

//selecting the arrows from the DOM
const hourHand = document.querySelector('[data-hour-hand]');
const minuteHand = document.querySelector('[data-minute-hand]');
const secondHand = document.querySelector('[data-second-hand]');

// this function going to get current date
function setClock(){
    // new Date constructor will show exact current time that you are on now
    const currentDate = new Date()
    // selecting the seconds - because there is 60 seconds in the minute we gonna / by 60
    const secondsRatio = currentDate.getSeconds() / 60
    // selecting the minutes - because there is 60 minutes in the hour we gonna / by 60
    // to avoid minute arrow jump tought entire minute we make the arrow move graduatlly by using secondsRatio + 
    const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60
    // selecting the hours - because there is 12 hours we gonna / by 12
    const hoursRatio = (minutesRatio + currentDate.getHours()) / 12
    // to avoid arrow arrow jump tought entire arrow we make the arrow move graduatlly by using minutesRatio + 
    //CALLING the function
    setRotation(hourHand, hoursRatio)
    setRotation(minuteHand, minutesRatio)
    setRotation(secondHand, secondsRatio)
}

// this function will set the rotation for the arrows
function setRotation(element, rotationRatio){
    // selecting the element and seting value inside css -- 360deg complete ration inside of our clock
    element.style.setProperty('--rotation', rotationRatio * 360)
}

// calling set clock function as soon as the page load
setClock()