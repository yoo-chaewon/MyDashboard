const clockContainer = document.querySelector(".js-clock"),
    clockTitle = clockContainer.querySelector("h1");
const title = document.querySelector("title");

function setTime() {
    const date = new Date();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();

    clockTitle.innerText = `${
        hours < 10 ? `0${hours}` : hours}:${
        minutes < 10 ? `0${minutes}` : minutes}:${
        seconds < 10 ? `0${seconds}` : seconds
        }`
    title.innerHTML = `${setTitle(hours)}`
}

function setTitle(hours) {
    let titleText = "🌙Good Night🌙";
    if (hours >= 6 && hours < 12) titleText = "☀️Good Morning☀️";
    else if (hours >= 12 && hours < 17) titleText = "🌈Good Afternoon🌈";
    else if (hours >= 17 && hours < 21) titleText = "✨Good Evening✨";
    return titleText;
}

function init() {
    setTime();
    setInterval(setTime, 1000);
}

init();