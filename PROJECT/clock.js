const clockContainer = document.querySelector(".js-clock"),
    clockTitle = clockContainer.querySelector("h1");

const title = document.querySelector("title");

function getTime(){
    const date = new Date();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();

    clockTitle.innerText = `${
        hours < 10 ? `0${hours}` : hours}:${
        minutes < 10 ? `0${minutes}` : minutes}:${
        seconds < 10 ? `0${seconds}` : seconds
    }`
    setTitle(hours);
}

function setTitle(hours){
    let titleText = "Good Night🌙";
    if(hours > 5 && hours < 11) titleText = "Good Morning";
    else if(hours >= 11 && hours < 15) titleText = "Good Afternoon";
    else if(hours >= 15 && hours < 19) titleText = "Good Evening";
    title.innerHTML = `${titleText}`;
}

function init(){
    getTime();
    setInterval(getTime, 1000);
}

init();