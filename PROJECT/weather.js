const weatherInfo = document.querySelector(".js-weather"),
    weather = weatherInfo.querySelector("h4"),
    curLocation = weatherInfo.querySelector("h5");
const API_KEY = "92d535574f86e3834d553e34e15e9dba";
const COORDS = "coords";

function getWeather(lat, lng) {
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
    )
        .then(function (response) {
            return response.json();
        })
        .then(function (json) {
            const temperature = json.main.temp;
            const place = json.name;
            const tweather = json.weather[0].description;
            const weatherIcon = setWeatherIcon(tweather);

            weather.innerText = `${weatherIcon} ${temperature}° \n`;
            curLocation.innerText = `📍${place}`
        });
}

function setWeatherIcon(tweather) {
    var curWeather = "";
    if (tweather.includes("clear sky")) {
        curWeather = "☀️";
    } else if (tweather.includes("scattered cloud") || tweather.includes("broken clouds")) {
        curWeather = "☁️";
    } else if (tweather.includes("clouds")) {
        curWeather = "🌤";
    } else if (tweather.includes("shower rain")) {
        curWeather = "🌧";
    } else if (tweather.includes("rain")) {
        curWeather = "🌦";
    } else if (tweather.includes("thunderstorm")) {
        curWeather = "🌩";
    } else if (tweather.includes("snow")) {
        curWeather = "☃️";
    } else if (tweather.includes("mist")) {
        curWeather = "🌫"
    } else {
        curWeather = "🌏";
    }
    return curWeather;
}


function saveCoords(coordsObj) {
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSucces(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude,
        longitude
    };

    saveCoords(coordsObj);
    getWeather(latitude, longitude);
}

function handleGeoError() {
    console.log("Cant access geo location");
}

function askForCoords() {
    navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError);
}

function loadCoords() {
    const loadedCoords = localStorage.getItem(COORDS);
    if (loadedCoords === null) {
        askForCoords();
    } else {
        const parseCoords = JSON.parse(loadedCoords);
        getWeather(parseCoords.latitude, parseCoords.longitude);
    }
}

function init() {
    loadCoords();
}

init();