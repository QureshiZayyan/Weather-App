import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [cityName, setCityName] = useState('Mumbai');
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchWeatherData(cityName);
        const responseData = await response.json();
        setWeatherData(responseData);
        setError('');
      } catch (error) {
        console.error(error);
        setWeatherData(null);
        setError('Please Enter valid City Name');
      }
    };

    fetchData();

    return () => {
    };
  }, [cityName]);

  const fetchWeatherData = (city) => {
    const url = `https://weather-api138.p.rapidapi.com/weather?city_name=${city}`;
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Host': 'weather-api138.p.rapidapi.com',
        'X-RapidAPI-Key': '577c8f1abemsha8e89a4c8d67695p17cfcdjsn0556ea36e1a7',
      }
    };
    return fetch(url, options);
  };

  const convertToCelsius = (kelvin) => {
    return Math.round(kelvin - 273.15);
  };

  const handleReload = () => {
    window.location.reload();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!cityName) return;
    setCityName(cityName);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-black overflow-hidden">
        <div className="container-fluid">
          <a className="navbar-brand text-white fw-bolder" href="#" onClick={handleReload}>Get Weather</a>
          <form className="d-flex justify-content-end form" onSubmit={handleSubmit} role="search">
            <input
              className="form-control me-1 w-50"
              type="search"
              placeholder="Search"
              aria-label="Search"
              id="input"
              value={cityName}
              onChange={(e) => setCityName(e.target.value)}
            />
            <button className="btn text-white btn-outline-light bg-black" id="btn" type="submit">Search</button>
          </form>
        </div>
      </nav>

      <main className="main overflow-hidden">
        <div className="row row-cols-1 row-cols-md-3 text-center align-items-center">
          <div className="col m-auto">
            <div className="card mb-4 rounded-3 m-auto">
              <div className="card-header text-white bg-black">
                <h3 className="fw-bold" id="city-name">Weather for {cityName}</h3>
              </div>
              <div className="card-body px-2 text-bold">
                <h1 className="card-title pricing-card-title all">
                  {weatherData ? `${convertToCelsius(weatherData.main.temp)}°C` : <img src="tube-spinner(1).svg" alt="" width="90px" />}
                </h1>
                <h5 id="DataError">{error}</h5>
                <ul className="list-unstyled mt-3 mb-4">
                  <li className="all" id="humidity">
                    {weatherData ? `Humidity: ${weatherData.main.humidity}%` : null}
                  </li>
                  <li className="all" id="feelslike">
                    {weatherData ? `Feels like: ${convertToCelsius(weatherData.main.feels_like)}°C` : null}
                  </li>
                  <li className="all" id="maxtemp">
                    {weatherData ? `Maximum Temperature: ${convertToCelsius(weatherData.main.temp_max)}°C` : null}
                  </li>
                  <li className="all" id="mintemp">
                    {weatherData ? `Minimum Temperature: ${convertToCelsius(weatherData.main.temp_min)}°C` : null}
                  </li>
                  <li className="all" id="raininfo">
                    {weatherData ? `Rain Info: ${weatherData.weather[0].description}` : null}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default App;
