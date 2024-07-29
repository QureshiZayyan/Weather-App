import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [cityName, setCityName] = useState('Mumbai');
  const [inputText, setInputText] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchWeatherData = async (city) => {
      const url = `https://weather-api138.p.rapidapi.com/weather?city_name=${city}`;
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Host': 'weather-api138.p.rapidapi.com',
          'X-RapidAPI-Key': '577c8f1abemsha8e89a4c8d67695p17cfcdjsn0556ea36e1a7',
        }
      };
      try {
        const response = await fetch(url, options);
        if (!response.ok) throw new Error('Failed to fetch data');
        const data = await response.json();
        setWeatherData(data);
        console.log(data);
        setError('');
      } catch (error) {
        setWeatherData(null);
        setError('Error fetching data');
      }
    };

    fetchWeatherData(cityName);
  }, [cityName]);

  const convertToCelsius = (kelvin) => {
    return Math.round(kelvin - 273.15);
  };

  const btnClick = (e) => {
    e.preventDefault();
    setCityName(inputText);
    setInputText('');
  }

  const handleChange = (e) => {
    setInputText(e.target.value);
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-black">
        <div className="container-fluid">
          <a className="navbar-brand text-white fw-bolder" href="#" id="reload">Get Weather</a>
          <form className="d-flex justify-content-end form" role="search" onSubmit={btnClick}>
            <input className="form-control me-1 w-50" type="search" placeholder="Search" aria-label="Search" id="input" value={inputText} onChange={handleChange} />
            <button className="btn text-white btn-outline-light bg-black" id="btn" type="submit">Search</button>
          </form>
        </div>
      </nav>

      <main className="main">
        <div className="row row-cols-1 row-cols-md-3 text-center align-items-center justify-content-center">
          <div className="col m-auto">
            <div className="card rounded-3 m-auto">
              <div className="card-header text-white bg-black">
                <h4 className="fw-bold text-center" id="city-name">Weather for {cityName}</h4>
              </div>
              <div className="card-body px-2 text-bold">
                <h5 id="DataError" className="text-danger"></h5>


                {weatherData ? (
                  <>
                    <h1 className="card-title pricing-card-title all" id="degree">
                      {convertToCelsius(weatherData.main.temp)}&deg;C
                    </h1>
                    <ul className="list-unstyled mt-3 mb-4">
                      <li id="humidity" className="all">Humidity: {weatherData.main.humidity}%</li>
                      <li id="feelslike" className="all">Feels Like: {convertToCelsius(weatherData.main.feels_like)}&deg;C</li>
                      <li id="maxtemp" className="all">Max Temp: {convertToCelsius(weatherData.main.temp_max)}&deg;C</li>
                      <li id="mintemp" className="all">Min Temp: {convertToCelsius(weatherData.main.temp_min)}&deg;C</li>
                      <li id="raininfo" className="all">Rain info: {weatherData.weather[0].description}</li>
                    </ul>
                  </>
                ) : (
                  <img src="tube-spinner(1).svg" alt="Loading" width="90px" />
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
