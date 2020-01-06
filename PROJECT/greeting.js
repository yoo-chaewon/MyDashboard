const form = document.querySelector(".js-form"),
    input = form.querySelector("input"),
    greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser",
    SHOWING_CN = "showing";

function saveName(text) {
    localStorage.setItem(USER_LS, text);
}

function paintGreeting(text) {
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);

    const date = new Date();
    const hours = date.getHours();
    greeting.innerText = `${getTime(hours)} ${text}!`;
}

function getTime(hours) {
    let greetingText = "🌙Good Night🌙";
    if (hours >= 6 && hours < 12) greetingText = "☀️Good Morning☀️";
    else if (hours >= 12 && hours < 17) greetingText = "🌈Good Afternoon🌈";
    else if (hours >= 17 && hours < 21) greetingText = "✨Good Evening✨";
    return greetingText;
}

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = input.value;
    paintGreeting(currentValue);
    saveName(currentValue);
    toDoForm.classList.add(SHOWING_CN);
}

function askForName() {
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit", handleSubmit);
}

function loadName() {
    const currentUser = localStorage.getItem(USER_LS);
    if (currentUser === null) {
        askForName();
    } else {
        paintGreeting(currentUser);
    }
}

function init() {
    loadName();
}
init();