import React from "react";
import { useState } from "react";
import "./Dashboard.scss";
import WeatherTile from "../../components/WeatherTile/WeatherTile";
import Nav from "../../components/Nav/Nav";

const Dashboard = () => {
  const [message, setMessage] = useState("");
  const [lat, setLat] = useState(51.509865);
  const [lon, setLon] = useState(-0.118092);

  const getLocation = () => {
    if (!navigator.geolocation) {
      setMessage("Geolocation is not supported by your browser");
    } else {
      setMessage("Locating...");
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setMessage(null);
          setLat(position.coords.latitude);
          setLon(position.coords.longitude);
        },
        () => {
          setMessage("Unable to retrieve your location");
        }
      );
    }
  };
  return (
    <div>
      <Nav />
      <WeatherTile message={message} lon={lon} lat={lat} />
    </div>
  );
};

export default Dashboard;
