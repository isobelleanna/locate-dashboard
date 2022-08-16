import React from "react";
import "./Nav.scss";

const Nav = ({ setLonLat }) => {
  return (
    <div className="nav">
      <button className="nav__button" onClick={setLonLat}>
        Set to Current Location
      </button>
    </div>
  );
};

export default Nav;
