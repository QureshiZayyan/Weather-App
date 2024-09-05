import { useState, createContext } from "react";
const StateContext = createContext();

function StateProvider({ children }) {
    const [query, setQuery] = useState('Mumbai');
    const [weatherdata, setWeatherdata] = useState(null);
    const [country, setCountry] = useState('');

    return (
        <StateContext.Provider value={{ weatherdata, setWeatherdata, query, setQuery, country, setCountry }}>
            {children}
        </StateContext.Provider>
    );
}

export { StateContext, StateProvider };