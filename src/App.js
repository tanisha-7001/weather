
import React, { useState } from 'react';
import './App.css';
import SearchForm from './SearchForm';
import WeatherCard from './WeatherCard';
import axios from 'axios';

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const API_KEY = 'b6bb3ea9c1ff48ae4d4e40765eea01ae';
  const fetchWeatherData = async (city) => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      setWeatherData(response.data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  
  };

  const getWeatherClass = () => {
    if (!weatherData) return '';

    const weatherDescription = weatherData.weather[0].description.toLowerCase();
    if (weatherDescription.includes('rain')) 
    {
      document.body.style.backgroundImage =' url(./rain.jpg)';
      document.body.style.backgroundRepeat= 'no-repeat';
      document.body.style.backgroundSize= 'cover';
      document.body.style.backgroundAttachment= 'fixed';
      document.body.style.transition='0.5s ease';
    } 
    else if (weatherDescription.includes('cloud')) 
    {
      
      document.body.style.backgroundImage = 'url(./cloud.jpg)';
      document.body.style.backgroundRepeat= 'no-repeat';
      document.body.style.backgroundSize= 'cover';
      document.body.style.backgroundAttachment= 'fixed';
      document.body.style.transition='0.5s eases';
    } else 
    {
      document.body.style.backgroundImage ='url(./sun.jpg)';
      document.body.style.backgroundRepeat= 'no-repeat';
      document.body.style.backgroundSize= 'cover';
      document.body.style.backgroundAttachment= 'fixed';
      document.body.style.transition='0.5s ease';
     
    }
  };

  return (
    <div className={`App ${getWeatherClass()}`}>
      <h1>Weather Forecast using React</h1>
      <SearchForm onSearch={fetchWeatherData} />
      {weatherData && <WeatherCard weatherData={weatherData} />}
    </div>
  );
}

export default App;
