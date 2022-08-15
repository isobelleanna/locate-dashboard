import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import "./Dashboard.scss";
import WeatherTile from "../../components/WeatherTile/WeatherTile";
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

  const getWeather = async () => {
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}&units=metric`;
    const res = await fetch(url);
    const data = await res.json();
    setWeather(data);
    console.log(data);
  };

  useEffect(() => {
    getWeather();
  }, []);

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
    <div>
      <Nav setLonLat={setLonLat} />
      <WeatherTile weather={weather} />
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
