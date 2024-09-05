import { useState, useContext } from "react";
import { StateContext } from "./StateContext";

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
        <nav className="navbar navbar-expand-lg bg-black">
            <div className="container-fluid">
                <a className="navbar-brand text-white fw-bolder" href="#" id="reload" onClick={() => setQuery('Mumbai')}>Get Weather</a>
                <form onSubmit={submit} className="d-flex justify-content-end form" role="search">
                    <input className="form-control me-1 w-50" type="search" placeholder="Search" aria-label="Search" id="input" value={input} onChange={change} />
                    <button className="btn text-white btn-outline-light bg-black" id="btn" type="submit">Search</button>
                </form>
            </div>
        </nav>
    )
}

export default Navbar
