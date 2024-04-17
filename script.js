const url = `https://weather-api138.p.rapidapi.com/weather?city_name=punjab`;
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Host': 'weather-api138.p.rapidapi.com'
    }
}

// function check() {
//     fetch(url, options)
//         .then((response => response.json()))
//         .then((response => console.log(Math.round(response.main.temp - 273.15))))
//         .catch((error => console.log(error)))
//     document.querySelector('.weather').innerHTML = Math.round(response.main.temp - 273.15);
// }
// 'X-RapidAPI-Key': '577c8f1abemsha8e89a4c8d67695p17cfcdjsn0556ea36e1a7',

// check()

// function check() {
//     fetch(url, options)
//         .then(response => response.json())
//         .then(response => {
//             const temperature = Math.round(response.main.temp - 273.15);
//             document.querySelector('.weather').innerHTML = temperature;
//             console.log(temperature);
//         })
//         .catch(error => console.log(error));
// }

// check();

document.getElementById('reload').addEventListener('click', () => {
    window.location.reload();
    document.getElementById('input').value = '';
})