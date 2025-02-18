const BASE_URL = "http://api.weatherapi.com/v1";
const API_Key = "1789204273654e23ad2114621251802";

const API_CALL = "http://api.weatherapi.com/v1/current.json?key=1789204273654e23ad2114621251802&q=abbottabad&aqi=no";  // call for abbottabad region



async function getWeather() {
    let response = await fetch(API_CALL);
    let data = await response.json();
    console.log(response);
    console.log(data);
}