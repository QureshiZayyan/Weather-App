import { useContext, useEffect, useState } from "react";
import { StateContext } from "./StateContext";
import { MdLocationPin } from "react-icons/md";
import Image from "./Image";
import errorpng from '../assets/error.png';
import loader from '../assets/tube-spinner(1).svg';
// import cloudy from '../assets/clouds.png';
import rainy from '../assets/rainy-day.png';
import haze from '../assets/mist.png';
// import humidity from '../assets/humidity.png';
import clearsky from '../assets/clearsky.png';
import scattered from '../assets/scattered.png';
import { GiSmokeBomb } from "react-icons/gi";

const Card = () => {

    const { query, weatherdata, setWeatherdata, setCountry, country } = useContext(StateContext);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchWeatherData = async () => {
            setLoading(true);
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
                setLoading(false)
                console.log(data);

            } catch (error) {
                console.error(error);
                setError('Please enter a valid city name');
                setLoading(false);
                setWeatherdata(null);
                setCountry('');
            }
        };

        fetchWeatherData();
    }, [query]);

    const convertToCelsius = (kelvin) => {
        return Math.round(kelvin - 273.15);
    };

    //  smoke
    // haze
    // overcast clouds
    // scattered clouds
    // mist
    // clear sky
    // few clouds

    return (
        <>
            {/* adding: 89px 0 40px 0; */}
            <div id='container' className="mx-auto flex items-center justify-center rounded-[20px] w-[65vw] h-[380px] sm:bg-red-700">
                <div className="weather-image">
                    {
                        weatherdata && weatherdata.weather[0].description === 'haze' && 'mist'
                            ?
                            <Image imgsrc={haze} />
                            // <img src={haze} alt="" className="w-[120px]" />
                            :
                            weatherdata &&
                                ['overcast clouds', 'scattered clouds', 'broken clouds', 'smoke', 'light rain'].includes(weatherdata.weather[0].description)
                                ?
                                <Image imgsrc={rainy} />
                                // <img src={rainy} alt="" className="w-[120px]" />
                                :
                                <Image imgsrc={clearsky} />
                        // <img src={clearsky} alt="" className="w-[120px]" />
                    }
                </div>

                <div className="card ml-[50px]">
                    <>
                        {
                            loading ? (
                                <img src={loader} alt="" className='icon' />
                            )
                                : error ?
                                    (
                                        <>
                                            <p>{error}</p>
                                            <img src={errorpng} alt="" className='icon' />
                                        </>
                                    )
                                    : weatherdata ?
                                        (
                                            <>
                                                <h1 className="card-title text-[57px] font-black text-white text-center" id="degree">
                                                    {convertToCelsius(weatherdata.main.temp)}&deg;C
                                                </h1>

                                                {/* <p className="text-center text-white ">{weatherdata.weather[0].description}</p> */}

                                                <div className="card-header">
                                                    <h3 className="font-extrabold text-white flex items-center justify-center text-lg" id="city-name">
                                                        <MdLocationPin className='location' size={40} />
                                                        {query} {country ? `, ${country}` : ''}
                                                    </h3>
                                                </div>


                                                <ul className="mt-[20px] flex w-[800px] gap-5">
                                                    <li id="humidity" className="all text-white text-center font-">Humidity <br /> {weatherdata.main.humidity}%</li>
                                                    <li id="feelslike" className="all text-white text-center font-">Feels Like <br /> {convertToCelsius(weatherdata.main.feels_like)}&deg;C</li>
                                                    <li id="raininfo" className="all text-white text-center font-">OverAll Weather <br /> {weatherdata.weather[0].description}</li>
                                                </ul>
                                            </>
                                        )
                                        :
                                        null
                        }

                    </>
                </div>
            </div>
        </>
    )
}

export default Card;