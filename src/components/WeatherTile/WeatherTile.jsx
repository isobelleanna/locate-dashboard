import React from "react";
import "./WeatherTile.scss";

const WeatherTile = ({ weather }) => {
  return (
    <div className="weather-tile">
      <h1 className="weather-tile__city">{weather.name}</h1>
      <div className="weather-tile__content">
        <img
          className="weather-tile__icon"
          src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
          alt={weather.weather[0].description}
        />
        <h2 className="weather-tile__temp">{Math.floor(weather.main.temp)}℃</h2>
      </div>
      <p className="weather-tile__feels">
        Feels like: {Math.floor(weather.main.feels_like)}℃
      </p>
      <p className="weather-tile__wind">Wind: {weather.wind.speed}km/h</p>
      <p className="weather-tile__humidity">
        Humidity: {weather.main.humidity}%
      </p>
    </div>
  );
};

export default WeatherTile;
