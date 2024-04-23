
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

function addInfo(query) {
    return Math.round(query - 273.15);
}

function FillDataInCard(cityName) {
    data(cityName)
        .then(response => response.json())
        .then(response => {
            degree.innerHTML = `${addInfo(response.main.temp)}&deg;C`;
            humidity.innerHTML = `<strong>Humidity: ${(response.main.humidity) / 100 * 100}%</strong>`;
            feelslike.innerHTML = `<strong> Feels like: ${addInfo(response.main.feels_like)}</strong>`;
            maxtemp.innerHTML = `<strong> Maximum Temperature: ${addInfo(response.main.temp_max)}</strong>`;
            mintemp.innerHTML = `<strong> Minimum Temperature: ${addInfo(response.main.temp_min)}</strong>`;
            windspeed.innerHTML = `<strong> Wind Speed: ${Math.round(response.wind.speed * 3.6)} km/h</strong>`;
            console.log(response);
        })
        .catch(error => console.error(error));
}

const Reload = () => {
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
Reload();
SearchWeather();