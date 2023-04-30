
import './App.css';
import { MenuContext } from './components/Context';
import Navbar from './components/Navbar'
import Home from './pages/Home';
import { useState } from 'react';


function App() {
  const [mobNav, setMobNav] = useState(false);
  return (
    
    <MenuContext.Provider value={{
      mobNav, setMobNav
    }}>
    <>
      <Navbar />
      <Home />




    </>
    </MenuContext.Provider>
  );
}

export default App;
