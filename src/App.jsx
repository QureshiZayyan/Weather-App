import React, { useState, useEffect } from 'react';
import './App.css';

import loader from './assets/tube-spinner(1).svg';

const App = () => {
  const [cityName, setCityName] = useState('Mumbai');
  const [weatherData, setWeatherData] = useState(null);
  const [inputText, setInputText] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchWeatherData = async () => {
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
        setWeatherData(data);
        setError('');
      } catch (error) {
        setError('Error occurred while fetching weather data');
        setWeatherData(null);
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
    setCityName(inputText);
    setInputText('');
  };

  const change = (e) => {
    setInputText(e.target.value);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-black">
        <div className="container-fluid">
          <a className="navbar-brand text-white fw-bolder" href="#" id="reload">Get Weather</a>
          <form onSubmit={submit} className="d-flex justify-content-end form" role="search">
            <input className="form-control me-1 w-50" type="search" placeholder="Search" aria-label="Search" id="input" value={inputText} onChange={change} />
            <button className="btn text-white btn-outline-light bg-black" id="btn" type="submit">Search</button>
          </form>
        </div>
      </nav>

      <main className="main">
        <div className="row row-cols-1 row-cols-md-3 text-center align-items-center justify-content-center">
          <div className="col m-auto">
            <div className="card rounded-3 m-auto">
              <div className="card-header text-white bg-black">
                <h3 className="fw-bold text-center" id="city-name">Weather for {cityName}</h3>
              </div>
              <div className="card-body px-2 text-bold">
                {error ? (
                  <h5 id="DataError" className="text-danger">{error}</h5> // Display error message
                ) : weatherData ? (
                  <>
                    <h1 className="card-title" id="degree">
                      {convertToCelsius(weatherData.main.temp)}°C
                    </h1>
                    <ul className="list-unstyled mt-3 mb-4">
                      <li id="humidity" className="all">Humidity: {weatherData.main.humidity}%</li>
                      <li id="feelslike" className="all">Feels Like: {convertToCelsius(weatherData.main.feels_like)}°C</li>
                      <li id="maxtemp" className="all">Max Temp: {convertToCelsius(weatherData.main.temp_max)}°C</li>
                      <li id="mintemp" className="all">Min Temp: {convertToCelsius(weatherData.main.temp_min)}°C</li>
                      <li id="raininfo" className="all">Weather: {weatherData.weather[0].description}</li>
                    </ul>
                  </>
                ) : (
                  <img src={loader} alt="Loading..." width="90px" /> // Show loader while data is being fetched
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default App;
