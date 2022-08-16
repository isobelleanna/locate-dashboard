import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import "./Dashboard.scss";
import WeatherTile from "../../components/WeatherTile/WeatherTile";
import WelcomeTile from "../../components/WelcomeTile/WelcomeTile";
import "./Dashboard.scss";
import Nav from "../../components/Nav/Nav";
import { useGeolocated } from "react-geolocated";

const Dashboard = () => {
  const [lat, setLat] = useState(51.509865);
  const [lon, setLon] = useState(-0.118092);
  const { coords, isGeolocationAvailable, isGeolocationEnabled } =
    useGeolocated({
      positionOptions: {
        enableHighAccuracy: false,
      },
      userDecisionTimeout: 5000,
    });
  const key = "5f472b7acba333cd8a035ea85a0d4d4c";
  const [weather, setWeather] = useState([]);
  const [city, setCity] = useState("London");
  const [temp, setTemp] = useState(32);
  const [icon, setIcon] = useState("01d");
  const [description, setDescription] = useState("clear");
  const [feelsLike, setFeelsLike] = useState(29);
  const [wind, setWind] = useState(12);
  const [humidity, setHumidity] = useState(52);

  const getWeather = async () => {
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}&units=metric`;
    const res = await fetch(url);
    const data = await res.json();
    setWeather(data);
    setWeatherInfo();
    console.log(data);
  };

  useEffect(() => {
    getWeather();
  }, []);

  const setWeatherInfo = () => {
    setCity(weather.name);
    setTemp(Math.floor(weather.main.temp));
    setIcon(weather.weather[0].icon);
    setDescription(weather.weather[0].description);
    setFeelsLike(Math.floor(weather.main.feels_like));
    setWind(Math.floor(weather.wind.speed));
    setHumidity(weather.main.humidity);
  };

  const setCoords = () => {
    console.log(coords.latitude);
    console.log(coords.longitude);
  };

  const setLonLat = () => {
    setLat(coords.latitude);
    setLon(coords.longitude);
    getWeather();
  };

  return (
    <div className="dashboard">
      <Nav setLonLat={setLonLat} />
      <div className="dashboard__content">
        <WelcomeTile />
        <WeatherTile
          weather={weather}
          city={city}
          temp={temp}
          icon={icon}
          description={description}
          feelsLike={feelsLike}
          wind={wind}
          humidity={humidity}
        />
      </div>
      {!isGeolocationAvailable ? (
        <div>Your browser does not support Geolocation</div>
      ) : !isGeolocationEnabled ? (
        <div>Geolocation is not enabled</div>
      ) : coords ? (
        setCoords()
      ) : (
        <div>Getting the location data&hellip; </div>
      )}
    </div>
  );
};

export default Dashboard;
