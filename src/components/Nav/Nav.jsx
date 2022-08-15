import React from "react";
import { useState } from "react";

const Nav = () => {
  const [lat, setLat] = useState(51.509865);
  const [lon, setLon] = useState(-0.118092);
  return (
    <div>
      <button>Set location</button>
    </div>
  );
};

export default Nav;
