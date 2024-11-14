import { useState, useContext } from "react";
import { StateContext } from "./StateContext";
import { FaSearch } from "react-icons/fa";

const Navbar = () => {
    const { setQuery, setWeatherdata } = useContext(StateContext);
    const [input, setInput] = useState('');

    const submit = (e) => {
        e.preventDefault();
        if (!input) return;
        setQuery(input.charAt(0).toUpperCase() + input.slice(1));
        setWeatherdata(null);
        setInput('');
    };

    const change = (e) => {
        setInput(e.target.value);
    };

    return (
        <nav className="navbar relative top-[150px]">
            <div className="parent">
                {/* <a className="navbar" href="#" id="reload" onClick={() => setQuery('Mumbai')}>Get Weather</a> */}
                <form onSubmit={submit} className="flex items-center justify-center" role="search">
                    <input id='input' className="font-bold w-[25vw] py-[5px] px-3 rounded-2xl flex items-center justify-center focus:outline-none" type="search" placeholder="Enter City" aria-label="Search" id="input" value={input} onChange={change} />
                    {/* <button className="btn text-white ml-[9px]" id="btn" type="submit">Search</button> */}
                    <button type="submit"><FaSearch color="white" size={20} className="ml-[10px]" /></button>

                </form>
            </div>
        </nav>
    )
}

export default Navbar
