
let InputValue = document.getElementById('input');

function data(cityName) {
    const url = `https://weather-api138.p.rapidapi.com/weather?city_name=${cityName}`
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Host': 'weather-api138.p.rapidapi.com',
            'X-RapidAPI-Key': '577c8f1abemsha8e89a4c8d67695p17cfcdjsn0556ea36e1a7',
        }
    }
    return fetch(url, options)
}

function ConvertToCelsius(response) {
    return Math.round(response - 273.15);
}

function DegreeSymbol() {
    return `&deg;C`
}

function FillDataInCard(cityName) {
    data(cityName)
        .then(response => response.json())
        .then(response => {
            degree.innerHTML = `${ConvertToCelsius(response.main.temp)}${DegreeSymbol()}`;
            humidity.innerHTML = `Humidity: ${(response.main.humidity) / 100 * 100}%`;
            feelslike.innerHTML = `Feels like: ${ConvertToCelsius(response.main.feels_like)}${DegreeSymbol()}`;
            maxtemp.innerHTML = `Maximum Temperature: ${ConvertToCelsius(response.main.temp_max)}${DegreeSymbol()}`;
            mintemp.innerHTML = `Minimum Temperature: ${ConvertToCelsius(response.main.temp_min)}${DegreeSymbol()}`;
            windspeed.innerHTML = `Wind Speed: ${Math.round(response.wind.speed * 3.6)} km/h`;
            console.log(response);
        })
        .catch(error => console.error(error));
}

const ReloadPage = () => {
    document.getElementById('reload').addEventListener('click', () => {
        window.location.reload();
        InputValue.value = '';
    })
}

const SearchWeather = () => {
    document.getElementById('btn').addEventListener('click', (e) => {
        e.preventDefault();
        if (!InputValue.value) return;
        FillDataInCard(InputValue.value);
        document.getElementById('city-name').innerHTML = `Weather for ${InputValue.value}`;
    })
}

window.addEventListener('DOMContentLoaded', FillDataInCard('Mumbai'));
ReloadPage();
SearchWeather();