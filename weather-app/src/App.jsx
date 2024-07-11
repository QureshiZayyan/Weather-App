import './App.css';
import { Card } from "./Components/Card"
import { Navbar } from './Components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

export const App = () => {
  return (
    <>
      <Navbar />
      <Card />
    </>
  )
}