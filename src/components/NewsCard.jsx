import React from 'react';

export const NewsCard = ({ news }) => {
  return (
<div>   
<a href={news.url} rel='noreferrer' target="_blank" className='hover:transform scale-105'>
  <div className='p-4 flex items-center group rounded-lg overflow-hidden'>
    <div className='bg-gray-100 rounded-lg hover:bg-white hover:shadow-lg transform transition-all duration-100 overflow-hidden' style={{ width: '530px', height: '350px' }}>
      <div className='flex'>
        <a className='p-2 font-bold hover:underline text-lg' href={news.url} rel='noreferrer' target="_blank">{news.title}</a>
        <img className='p-3 rounded-lg' src={news.thumbnail} alt="news_thumbnail" style={{ width: '150px', height: '120px' }} />
      </div>
      <div className='p-3  overflow-hidden'>
        <p>{news.description}</p>
      </div>
      <div className='p-3 overflow-hidden'>
        <p>{news.createdAt}</p>
      </div>
      <div className='absolute bottom-0 left-0 bg-gray-800 text-white p-2 w-full text-center opacity-0 group-hover:opacity-100 transition-opacity duration-100 rounded-lg'>
        Click here to read the full article
      </div>
    </div>
  </div>
</a>
</div> 

  );
};
