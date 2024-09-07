import { useContext, useEffect, useState } from "react";
import { StateContext } from "./StateContext";
import { MdLocationPin } from "react-icons/md";
import errorpng from '../assets/error.png';
import loader from '../assets/tube-spinner(1).svg';

const Card = () => {

    const { query, weatherdata, setWeatherdata, setCountry, country } = useContext(StateContext);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchWeatherData = async () => {
            setError('');
            try {
                const url = `https://weather-api138.p.rapidapi.com/weather?city_name=${query}`;
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
                setWeatherdata(data);
                setCountry(data.sys.country);
                console.log(data);

            } catch (error) {
                console.error(error);
                setError('Please enter a valid city name');
                setWeatherdata(null);
                setCountry('');
            }
        };

        fetchWeatherData();
    }, [query]);

    const convertToCelsius = (kelvin) => {
        return Math.round(kelvin - 273.15);
    };

    return (

        <div className="card rounded-5 m-auto position-relative">
            <div className="card-header text-white bg-black rounded-5 d-flex align-items-center justify-content-center text-center">
                <h3 className="fw-bold" id="city-name">
                    <MdLocationPin className='location' size={40} />
                    {query} {country ? `, ${country}` : ''}
                </h3>
            </div>
            <div className="card-body px-2 text-bold">
                {error ?
                    (<>
                        <p>{error}</p>
                        <img src={errorpng} alt="" className='icon' />
                    </>)
                    :
                    !weatherdata ? (
                        <img src={loader} alt="" className='icon' />
                    )
                        :
                        (
                            <>
                                <h1 className="card-title" id="degree">
                                    {convertToCelsius(weatherdata.main.temp)}&deg;C
                                </h1>
                                <ul className="list-unstyled mt-3 mb-4">
                                    <li id="humidity" className="all">Humidity : {weatherdata.main.humidity}%</li>
                                    <li id="feelslike" className="all">Feels Like : {convertToCelsius(weatherdata.main.feels_like)}&deg;C</li>
                                    <li id="maxtemp" className="all">Max Temp : {convertToCelsius(weatherdata.main.temp_max)}&deg;C</li>
                                    <li id="mintemp" className="all">Min Temp : {convertToCelsius(weatherdata.main.temp_min)}&deg;C </li>
                                    <li id="raininfo" className="all">Rain Info : {weatherdata.weather[0].description}</li>
                                </ul>
                            </>
                        )}
            </div>
        </div>
    )
}

export default Card
