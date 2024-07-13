// Card.js
import React, { useEffect, useState } from 'react';

export const Card = ({ city }) => {
  const [weatherData, setWeatherData] = useState(city);

  useEffect(() => {
    if (city) {
      fetchData(city);
    }
  }, [city]);

  const fetchData = async (cityName) => {
    const url = `https://weather-api138.p.rapidapi.com/weather?city_name=${cityName}`;
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Host': 'weather-api138.p.rapidapi.com',
        'X-RapidAPI-Key': '577c8f1abemsha8e89a4c8d67695p17cfcdjsn0556ea36e1a7',
      }
    };

    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const responseData = await response.json();
      setWeatherData(responseData); // Update state with fetched data
    } catch (error) {
      console.error('Error fetching data:', error);
      setWeatherData(null); // Clear weather data on error
    }
  };

  const ConvertToCelsius = (kelvin) => {
    return Math.round(kelvin - 273.15);
  };

  return (
    <main className="main overflow-hidden">
      <div className="row row-cols-1 row-cols-md-3 text-center">
        <div className="col m-auto">
          <div className="card mb-4 rounded-3 w-75 m-auto">
            <div className="card-header text-white bg-black">
              <h3 className="fw-bold" id="city-name">Weather for {city}</h3>
            </div>
            <div className="card-body px-2 text-bold">
              <h1 className="card-title pricing-card-title all" id="degree">
                {weatherData ? `${ConvertToCelsius(weatherData.main.temp)}°C` : ''}
              </h1>
              <h5 id="DataError"></h5>
              <ul className="list-unstyled mt-3 mb-4">
                <li id="humidity" className="all">
                  {weatherData ? `Humidity: ${weatherData.main.humidity}%` : ''}
                </li>
                <li id="feelslike" className="all">
                  {weatherData ? `Feels like: ${ConvertToCelsius(weatherData.main.feels_like)}°C` : ''}
                </li>
                <li id="maxtemp" className="all">
                  {weatherData ? `Maximum Temperature: ${ConvertToCelsius(weatherData.main.temp_max)}°C` : ''}
                </li>
                <li id="mintemp" className="all">
                  {weatherData ? `Minimum Temperature: ${ConvertToCelsius(weatherData.main.temp_min)}°C` : ''}
                </li>
                <li id="windspeed" className="all">
                  {weatherData ? `Wind Speed: ${weatherData.wind.speed} m/s` : ''}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

