//! API by open weather map 
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";
const API_Key = "9c5d73c90e450fb8b9fb3f0752c7f4e5";

const form = document.querySelector("form");

async function getWeather() {
    const city = document.querySelector("#city");
    const cityName = document.querySelector(".city-name");
    const img = document.querySelector("#weather-icon");
    const temperature = document.querySelector(".temperature");
    const description = document.querySelector(".description");
    const windSpeed = document.querySelector(".wind-speed");

    // making an api call for selected city
    const API_CALL = `${BASE_URL}?q=${city.value}&units=metric&APPID=${API_Key}`;
    // using fetch get method
    let response = await fetch(API_CALL);
    let data = await response.json(); // converting data into readable form

    let icon = data.weather[0].icon;
    let imgSrc = `https://openweathermap.org/img/wn/${icon}.png`;

    cityName.innerText = `${data["name"]}`;  // setting searched city name
    img.src = imgSrc;  // setting weather icon
    temperature.innerHTML = `${data.main["temp"]}&deg;C`; // setting temperature of search placed
    description.innerText = `${data.weather[0].description}`; // showing short description about weather
    windSpeed.innerText = `Wind Speed: ${data.wind["speed"]}km/hr`;
    city.value = "";   // resetting from value
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    getWeather();
});

window.addEventListener("load", () => {
    getWeather();
});