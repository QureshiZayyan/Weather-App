import './App.css';
import Card from './components/Card';
import Navbar from './components/Navbar';
import { StateProvider } from './components/StateContext';

const App = () => {

  return (
    <StateProvider>
      <Navbar />
      <div className="card-container flex items-center justify-center">
        <Card />
      </div>
    </StateProvider>
  );
};

export default App;
