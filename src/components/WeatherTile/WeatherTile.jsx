import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "./WeatherTile.scss";

const WeatherTile = () => {
  const [lat, setLat] = useState(51.509865);
  const [lon, setLon] = useState(-0.118092);
  const key = "5f472b7acba333cd8a035ea85a0d4d4c";
  const [weather, setWeather] = useState([]);

  const getWeather = async () => {
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}&units=metric`;
    const res = await fetch(url);
    const data = await res.json();
    setWeather(data);
  };

  useEffect(() => {
    getWeather();
  }, []);

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
