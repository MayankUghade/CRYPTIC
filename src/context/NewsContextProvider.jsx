import { useState, useContext, useEffect, createContext } from "react";

const newsContext = createContext();
const baseURL = 'https://cryptocurrency-news2.p.rapidapi.com/v1';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'process.env.REACT_APP_API_KEY',
		'X-RapidAPI-Host': 'cryptocurrency-news2.p.rapidapi.com'
	}
};

export const NewsContextProvider = ({ children, source }) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const Response = await fetch(`${baseURL}/${source}`, options);
      if (!Response.ok) {
        throw new Error(`Request failed with status: ${Response.status}`);
      }

      const result = await Response.json();
      const dataArray = Object.values(result);
      setData(dataArray)

    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, [source]);

  return (
    <newsContext.Provider value={{ data, isLoading }}>
      {children}
    </newsContext.Provider>
  );
};

export const useNewsContext = () => {
  return useContext(newsContext);
};
