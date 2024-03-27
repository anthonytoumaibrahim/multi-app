import React from "react";

// Icons
import { TiWeatherPartlySunny } from "react-icons/ti";

// Styles
import "./Loading.css";

const Loading = () => {
  return (
    <div className="loading">
      <TiWeatherPartlySunny size={72} className="icon" />
      <h2>Please wait, gathering weather data...</h2>
    </div>
  );
};

export default Loading;
