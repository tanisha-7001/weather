// components/WeatherCard.js
import React from 'react';

const WeatherCard = ({ weatherData }) => {
  const { name, main, weather } = weatherData;

  return (
    <div className="weather-card">
      <h2>{name}</h2>
      <p>Temperature: {main.temp}°C</p>
      <p>Weather: {weather[0].description}</p>
    </div>
  );
};

export default WeatherCard;
