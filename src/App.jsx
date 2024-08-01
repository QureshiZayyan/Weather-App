import React, { useState, useEffect } from 'react';
import './App.css';
import { MdLocationPin } from "react-icons/md";
import errorpng from './assets/error.png';
import loader from './assets/tube-spinner(1).svg';
import sun from './assets/sun.png';
import haze from './assets/haze.png';
import rain from './assets/rain.png';
import location from './assets/location.png';
// import './demo.js'

const App = () => {
  const [cityName, setCityName] = useState('Mumbai');
  const [weatherData, setWeatherData] = useState(null);
  const [inputText, setInputText] = useState('');
  const [country, setCountry] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchWeatherData = async () => {
      setError('');
      try {
        const url = `https://weather-api138.p.rapidapi.com/weather?city_name=${cityName}`;
        const options = {
          method: 'GET',
          headers: {
            'X-RapidAPI-Host': 'weather-api138.p.rapidapi.com',
            'X-RapidAPI-Key': '577c8f1abemsha8e89a4c8d67695p17cfcdjsn0556ea36e1a7',
          }
        };

        const response = await fetch(url, options);
        if (!response.ok) {
          throw new Error('Error fetching data');
        }
        const data = await response.json();
        setCountry(data.sys.country);
        setWeatherData(data);
        console.log(data);

      } catch (error) {
        console.error(error);
        setError('Please enter a valid city name');
        setWeatherData(null);
        setCountry('');
      }
    };

    fetchWeatherData();
  }, [cityName]);

  const convertToCelsius = (kelvin) => {
    return Math.round(kelvin - 273.15);
  };

  const submit = (e) => {
    e.preventDefault();
    if (!inputText) return;

    setCityName(inputText.charAt(0).toUpperCase() + inputText.slice(1));
    setInputText('');
  };

  const change = (e) => {
    setInputText(e.target.value);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-black">
        <div className="container-fluid">
          <a className="navbar-brand text-white fw-bolder" href="#" id="reload" onClick={() => setCityName('Mumbai')}>Get Weather</a>
          <form onSubmit={submit} className="d-flex justify-content-end form" role="search">
            <input className="form-control me-1 w-50" type="search" placeholder="Search" aria-label="Search" id="input" value={inputText} onChange={change} />
            <button className="btn text-white btn-outline-light bg-black" id="btn" type="submit">Search</button>
          </form>
        </div>
      </nav>

      <main className="main">
        <div className="row row-cols-1 row-cols-md-3 text-center align-items-center justify-content-center">
          <div className="col m-auto">
            <div className="card rounded-5 m-auto position-relative">
              <div className="card-header text-white bg-black rounded-5 d-flex align-items-center justify-content-center text-center">
                <h3 className="fw-bold" id="city-name">
                  <MdLocationPin className='location' size={40} />
                  {cityName} , {country}
                </h3>
              </div>
              <div className="card-body px-2 text-bold">
                {error ?
                  (<>
                    <p>{error}</p>
                    <img src={errorpng} alt="" className='icon' />
                  </>)
                  :
                  !weatherData ? (
                    <img src={loader} alt="" className='icon' />
                  )
                    :
                    (
                      <>
                        <h1 className="card-title" id="degree">
                          {convertToCelsius(weatherData.main.temp)}&deg;C
                        </h1>
                        <ul className="list-unstyled mt-3 mb-4">
                          <li id="humidity" className="all">Humidity : {weatherData.main.humidity}%</li>
                          <li id="feelslike" className="all">Feels Like : {convertToCelsius(weatherData.main.feels_like)}&deg;C</li>
                          <li id="maxtemp" className="all">Max Temp : {convertToCelsius(weatherData.main.temp_max)}&deg;C</li>
                          <li id="mintemp" className="all">Min Temp : {convertToCelsius(weatherData.main.temp_min)}&deg;C </li>
                          <li id="raininfo" className="all">Rain Info : {weatherData.weather[0].description}</li>
                        </ul>
                      </>
                    )
                }
              </div>
            </div>
          </div>
        </div>
      </main >
    </>
  );
};

export default App;
