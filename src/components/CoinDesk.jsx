import React from 'react';
import { useNewsContext } from '../context/NewsContextProvider'; // Import the context hook
import {NewsCard} from './NewsCard'

export const CoinDesk = () => {
  // Use the context hook to access the data and isLoading state from the context
  const { data, isLoading } = useNewsContext();

  // Check if data is loading or if there's an error
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!data || data.length === 0) {
    return <div>No data available.</div>;
  }

  const dataArray = data[0];
  return (
    <div>
      <div className='bg-black text-lg p-5 hover:underline rounded-lg mt-3' style={{width:'98%', height:'40%', display:'flex', alignItems:'center', justifyContent:'center', color:'white'}}>
      <h1>CoinDesk</h1>
      </div>
      <div className='mt-5' style={{ display: 'flex', flexWrap: 'wrap', gap:'35px' }}>
        {dataArray?.map((newsItem) => (
          <NewsCard key={newsItem.id} news={newsItem} style={{ flex: '1' }} />
        ))}
      </div>
    </div>
  );
};