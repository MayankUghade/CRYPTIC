import React from 'react';
import {Link } from 'react-router-dom';

export const Navbar = ( { setSelectedSource }) => {
  const handleSourceClick = (source) => {
    setSelectedSource(source);
  };
  return (
    <div className="fixed left-0 h-full flex p-5 justify bg-blue-800 text-white flex-col" style={{width:'20%', height:'100%'}}>
      <div className="mt-3 relative flex flex-col items-center">
        <div className="w-24 h-24 rounded-full bg-white flex items-center justify-center">
          <img src="icons8-crypto-64.png" alt="cryptic logo" className="w-16 h-16" />
        </div>
        <h1 className="ml-3 mt-3 text-3xl font-bold">Cryptic</h1>
        <h2 className="ml-3 mt-3 text-base">Crypto News, From Best Sources</h2>
      </div>
      <div className="mt-40 flex flex-col items-center text-xl font-bold space-y-10">
        <Link onClick={() => handleSourceClick('coindesk')} to="/" className="hover:text-blue-500">CoinDesk</Link>
        <Link onClick={() => handleSourceClick('theguardian')} to="/The_Guardian" className="hover:text-blue-500">The Guardian</Link>
        <Link onClick={() => handleSourceClick('bsc')} to="/BSC_News" className="hover:text-blue-500">BSC News</Link>
        <Link onClick={() => handleSourceClick('cointelegraph')} to="/CoinTelegraph" className="hover:text-blue-500">CoinTelegraph</Link>
        <Link onClick={() => handleSourceClick('bitcoinist')} to="/Bitcoinist" className="hover:text-blue-500">Bitcoinist</Link>
      </div>
    </div>
  );
};
