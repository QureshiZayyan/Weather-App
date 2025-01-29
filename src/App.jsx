import './App.css';
import Card from './components/Card';
import Navbar from './components/Navbar';
import { StateProvider, StateContext } from './states/StateContext';
import { useContext } from 'react';

const App = () => {
  return (
    <StateProvider>
      <AppContent />
    </StateProvider>
  );
};

const AppContent = () => {
  const { weatherdata } = useContext(StateContext);

  return (
    <div id='container' className="h-[350px] pt-[21px] pb-[8px] tracking-[1.5px] mt-[80px] flex items-center justify-center rounded-[24px] flex-col w-[30vw]">
      {weatherdata ? <Navbar /> : null}
      <Card />
    </div>
  );
};

export default App;
