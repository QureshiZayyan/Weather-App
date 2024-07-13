import './App.css';
import { Card } from "./Components/Card"
import { Navbar } from './Components/Navbar';
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export const App = () => {
  const [city, setCity] = useState('');

  const handleSearch = (cityName) => {
    setCity(cityName);
  };

  return (
    <div className="App">
      <Navbar onSearch={handleSearch} />
      <Card city={city} />
    </div>
  );
};
