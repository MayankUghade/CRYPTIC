import React, { useState, useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom'; // Import useNavigate
import { Navbar } from './components/Navbar';
import { CoinDesk } from './components/CoinDesk';
import { The_Guardian } from './components/The_Guardian';
import { BSC_News } from './components/BSC_News';
import { CoinTelegraph } from './components/Cointelegraph';
import { Bitcoinist } from './components/Bitcoinist';
import { NewsContextProvider } from './context/NewsContextProvider';
import { NewsCard } from './components/NewsCard';
import './App.css';

const App = () => {
  const [selectedSource, setSelectedSource] = useState('coindesk');
  const navigate = useNavigate(); 

  useEffect(() => {
    navigate('/'); 
  }, []);

  return (
    <NewsContextProvider source={selectedSource}>
      <div className="flex">
        {/* Navbar (Left Side) */}
        <div style={{ width: '20%', height: '100%' }}>
          <Navbar setSelectedSource={setSelectedSource} />
        </div>

        {/* Content (Right Side) */}
        <div className='ml-12' style={{ width: '80%', height: '100%', gap: '5px' }}>
          <Routes>
            <Route path="/" element={<CoinDesk />} />
            <Route path="/The_Guardian" element={<The_Guardian />} />
            <Route path="/BSC_News" element={<BSC_News />} />
            <Route path="/CoinTelegraph" element={<CoinTelegraph />} />
            <Route path="/Bitcoinist" element={<Bitcoinist />} />
          </Routes>
        </div>
      </div>
    </NewsContextProvider>
  );
};

export default App;
