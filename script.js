const InputValue = document.getElementById('input');

const data = (cityName) => {
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

const ConvertToCelsius = (response) => {
    return Math.round(response - 273.15);
}

const FillDataInCard = async (cityName) => {

    try {
        const response = await data(cityName);
        const responseData = await response.json();

        degree.innerHTML = `${ConvertToCelsius(responseData.main.temp)}&deg;C`;
        humidity.innerHTML = `Humidity: ${(responseData.main.humidity) / 100 * 100}%`;
        feelslike.innerHTML = `Feels like: ${ConvertToCelsius(responseData.main.feels_like)}&deg;C`;
        maxtemp.innerHTML = `Maximum Temperature: ${ConvertToCelsius(responseData.main.temp_max)}&deg;C`;
        mintemp.innerHTML = `Minimum Temperature: ${ConvertToCelsius(responseData.main.temp_min)}&deg;C`;
        windspeed.innerHTML = `Wind Speed: ${Math.round(responseData.wind.speed * 3.6)} km/h`;
        DataError.innerHTML = '';

    } catch (error) {
        console.error(error);
        document.querySelectorAll('.all').forEach((e) => e.innerHTML = '');
        DataError.innerHTML = 'Please Enter valid City Name';
    }
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