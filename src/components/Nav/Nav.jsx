import React from "react";
import { useState } from "react";

const Nav = ({ setLonLat }) => {
  return (
    <div>
      <button onClick={setLonLat}>Set location</button>
    </div>
  );
};

export default Nav;
