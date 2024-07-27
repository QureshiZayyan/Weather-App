import React, { useState, useEffect } from 'react';
import './App.css';
import Button from './Button';

const App = () => {
  // const [cityName, setCityName] = useState('Mumbai');
  // const [weatherData, setWeatherData] = useState(null);
  // const [error, setError] = useState('');

  // useEffect(() => {
  //   const DataFetched = async () => {
  //     try {
  //       const response = await fetchWeatherData();
  //       if (!response.ok) throw new Error;
  //       const data = await response.json();
  //       setWeatherData(data);
  //     }
  //     catch {
  //       setWeatherData('data error')
  //     }
  //   }
  //   fetchWeatherData();
  // }, [cityName]);

  // const fetchWeatherData = (city) => {
  //   const url = `https://weather-api138.p.rapidapi.com/weather?city_name=${city}`;
  //   const options = {
  //     method: 'GET',
  //     headers: {
  //       'X-RapidAPI-Host': 'weather-api138.p.rapidapi.com',
  //       'X-RapidAPI-Key': '577c8f1abemsha8e89a4c8d67695p17cfcdjsn0556ea36e1a7',
  //     }
  //   };
  //   return fetch(url, options);
  // };

  // const convertToCelsius = (kelvin) => {
  //   return Math.round(kelvin - 273.15);
  // };

  // const submit = (e) => {
  //   e.preventDefault();
  // }

  // const change = (e) => {

  //   setCityName(e.target.value);
  // }

  return (
    <>
      <Button />
      <nav className="navbar navbar-expand-lg bg-black">
        <div className="container-fluid">
          <a className="navbar-brand text-white fw-bolder" href="#" id="reload">Get Weather</a>
          <form className="d-flex justify-content-end form" role="search">
            <input className="form-control me-1 w-50" type="search" placeholder="Search" aria-label="Search" id="input" />
            <button className="btn text-white btn-outline-light bg-black" id="btn" type="submit">Search</button>
          </form>
        </div>
      </nav>

      <main className="main">
        <div className="row row-cols-1 row-cols-md-3 text-center align-items-center justify-content-center">
          <div className="col m-auto">

            <div className="card rounded-3 m-auto">
              <div className="card-header text-white bg-black">
                <h3 className="fw-bold text-center" id="city-name">Weather for Mumbai</h3>
              </div>
              <div className="card-body px-2 text-bold">
                <h1 className="card-title pricing-card-title all" id="degree"><img src="tube-spinner(1).svg" alt=""
                  width="90px" /></h1>
                <h5 id="DataError"></h5>
                <ul className="list-unstyled mt-3 mb-4">
                  <li id="humidity" className="all"></li>
                  <li id="feelslike" className="all"></li>
                  <li id="maxtemp" className="all"></li>
                  <li id="mintemp" className="all"></li>
                  <li id="raininfo" className="all"></li>
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
