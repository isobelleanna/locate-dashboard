import React from "react";
import Welcome from "../../assets/img/welcome.svg";
import "./WelcomeTile.scss";

const WelcomeTile = () => {
  const date = new Date();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  return (
    <div className="welcome">
      <h1>Welcome to Dashboard</h1>
      <p>
        Today is {day}/{month}/{year}
      </p>
      <p>
        Current Time {hours}:{minutes}
      </p>
      <img className="welcome__icon" src={Welcome} alt="welcome" />
    </div>
  );
};

export default WelcomeTile;
