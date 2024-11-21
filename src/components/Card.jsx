import { useContext, useEffect, useState } from "react";
import { StateContext } from "./StateContext";
import { MdLocationPin } from "react-icons/md";
import errorpng from "../assets/error.png";
import loader from "../assets/tube-spinner(1).svg";
import { RiLoader3Fill } from "react-icons/ri";

const Card = () => {
    const { query, weatherdata, setWeatherdata, setCountry, country } = useContext(StateContext);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const fetchWeatherData = async () => {
        setLoading(true);
        setError("");
        try {
            const url = `https://weather-api138.p.rapidapi.com/weather?city_name=${query}`;
            const options = {
                method: "GET",
                headers: {
                    "X-RapidAPI-Host": "weather-api138.p.rapidapi.com",
                    "X-RapidAPI-Key": "577c8f1abemsha8e89a4c8d67695p17cfcdjsn0556ea36e1a7",
                },
            };

            const response = await fetch(url, options);
            if (!response.ok) {
                throw new Error("Error fetching data");
            }

            const data = await response.json();
            setWeatherdata(data);
            setCountry(data.sys.country);
        } catch (error) {
            console.error(error);
            setError("Please enter a valid city name");
            setWeatherdata(null);
            setCountry("");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (query) {
            fetchWeatherData();
        }
    }, [query]);

    const convertToCelsius = (kelvin) => Math.round(kelvin - 273.15);

    return (
        <div className="card ">
            {loading ? (
                <RiLoader3Fill color="white" size={50} id="icon"/>
            ) : error ? (
                <div className="error">
                    <p>{error}</p>
                    <img src={errorpng} alt="Error" className="icon" />
                </div>
            ) : weatherdata ? (
                <>
                    <div className="card-header mt-[10px] mb-[15px]">
                        <h3 className="font-extrabold text-white flex items-center justify-center text-2xl" id="city-name">
                            <MdLocationPin className="location" size={40} />
                            {query} {country ? `, ${country}` : ""}
                        </h3>
                    </div>

                    <h1 className="card-title text-[50px] font-black text-white text-center" id="degree">
                        {convertToCelsius(weatherdata.main.temp)}&deg;C
                    </h1>

                    <ul className="mt-[20px] flex gap-5">
                        <li id="humidity" className="all text-white text-center font-semibold text-base">
                            Humidity <br /> {weatherdata.main.humidity}%
                        </li>
                        <li id="feelslike" className="all text-white text-center font-semibold text-base">
                            Feels Like <br /> {convertToCelsius(weatherdata.main.feels_like)}&deg;C
                        </li>
                        <li id="raininfo" className="all text-white text-center font-semibold text-base">
                            Overall Weather <br /> {weatherdata.weather[0].description}
                        </li>
                    </ul>
                </>
            ) : null}
        </div>
    );
};

export default Card;
