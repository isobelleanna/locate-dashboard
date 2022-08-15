import React from "react";
import "./WeatherTile.scss";

const WeatherTile = ({
  weather,
  city,
  temp,
  icon,
  description,
  feelsLike,
  wind,
  humidity,
}) => {
  return (
    <div className="weather-tile">
      <h1 className="weather-tile__city">{city}</h1>
      <div className="weather-tile__content">
        <img
          className="weather-tile__icon"
          src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
          alt={description}
        />
        <h2 className="weather-tile__temp">{temp}℃</h2>
      </div>
      <p className="weather-tile__feels">Feels like: {feelsLike}℃</p>
      <p className="weather-tile__wind">Wind: {wind}km/h</p>
      <p className="weather-tile__humidity">Humidity: {humidity}%</p>
    </div>
  );
};

export default WeatherTile;
