import './App.css';
import Card from './components/Card';
import Navbar from './components/Navbar';
import { StateProvider } from './components/StateContext';

const App = () => {

  return (
    <StateProvider>
      <Navbar />
      <main className="main">
        <div className="row row-cols-1 row-cols-md-3 text-center align-items-center justify-content-center">
          <div className="col m-auto">
            <Card />
          </div>
        </div>
      </main>
    </StateProvider>
  );
};

export default App;
