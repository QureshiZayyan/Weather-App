
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

function checkWeather(cityName) {
    data(cityName)
        .then(response => response.json())
        .then(response => {
            document.getElementById('degree').innerHTML = `${addInfo(response.main.temp)}&deg;C`;
            document.getElementById('humidity').innerHTML = `<strong>Humidity: ${addInfo(response.main.humidity)}</strong>`;
            document.getElementById('feels-like').innerHTML = `<strong>Feels like: ${addInfo(response.main.feels_like)}</strong>`;
            document.getElementById('max-temp').innerHTML = `<strong>Maximum Temperature: ${addInfo(response.main.temp_max)}</strong>`;
            document.getElementById('min-temp').innerHTML = `<strong>Minumum Temperature: ${addInfo(response.main.temp_min)}</strong>`;
            document.getElementById('sea-level').innerHTML = `<strong>sea level: ${addInfo(response.main.feels_like)}</strong>`;
        })
        .catch(error => console.log(error));
}


const Reload = () => {
    document.getElementById('reload').addEventListener('click', () => {
        window.location.reload();
        document.getElementById('input').value = '';
    })
}

const SearchWeather = () => {
    document.getElementById('btn').addEventListener('click', (e) => {
        e.preventDefault();
        const names = document.getElementById('input');
        checkWeather(names.value);
        document.getElementById('city-name').innerHTML = `Weather for ${names.value}`;
    })
}

checkWeather('mumbai');
Reload();
SearchWeather();