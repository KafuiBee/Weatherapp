let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let now = new Date();

let currentDay = days[now.getDay()];

let currentTime = now.getHours();

let currentMinute = now.getMinutes();

if (currentMinute < 10) {
  Minutes = `0${Minutes}`;
}

if (currentTime < 10) {
  Hours = `0${Hours}`;
}

let h1 = document.querySelector("h1");

h1.innerHTML = `${currentDay} ${currentTime}:${currentMinute}`;

function yourCity(event) {
  event.preventDefault();

  let submitInput = document.querySelector("#citySearch");

  let h2 = document.querySelector("h2");
  h2.innerHTML = `Searching for the weather in ${submitInput.value}`;
}

let submitForm = document.querySelector("form");

submitForm.addEventListener("submit", yourCity);
