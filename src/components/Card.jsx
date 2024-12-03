import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddData } from "../slices/data";

const Card = () => {
    const weatherData = useSelector((state) => state.data.data);
    const dispatch = useDispatch();

    const fetchWeatherData = async () => {
        try {
            const url = `https://weather-api138.p.rapidapi.com/weather?city_name=bhiwandi`;
            const options = {
                method: "GET",
                headers: {
                    "X-RapidAPI-Host": "weather-api138.p.rapidapi.com",
                    "X-RapidAPI-Key": import.meta.env.VITE_API_KEY,
                },
            };

            const response = await fetch(url, options);
            if (!response.ok) {
                throw new Error("Error fetching data");
            }

            const datas = await response.json();
            console.log(datas.name);

            dispatch(AddData(datas));
        } catch (error) {
            console.error("Error fetching weather data:", error);
        }
    };

    useEffect(() => {
        fetchWeatherData();
    }, []);

    return (
        <>
            <div className="card ">
                {loading ? (
                    <RiLoader3Fill color="white" size={50} id="icon" />
                ) : error ? (
                    <div className="error flex items-center justify-center flex-col">
                        <p className="text-white">{error}</p>
                        <MdErrorOutline size={100} color="white" />
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
                )
                    :
                    null}
            </div>
        </>
    );
};

export default Card;
