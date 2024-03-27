// Styles
import "./WeatherCard.css";

// Asset Icons
import sunny_icon from "../images/icons/sunny.png";
import cloudy_icon from "../images/icons/cloudy.png";
import rainy_icon from "../images/icons/rainy.png";
import mildly_cloudy_icon from "../images/icons/mildly-cloudy.png";

// Icons
import { FaWind, FaCloudRain } from "react-icons/fa";

const WeatherCard = ({
  time = "",
  temperature = 0.0,
  min_temperature = 0.0,
  max_temperature = 0.0,
  precipitation = 0.0,
  rain = 0.0,
  wind_speed = 0.0,
  sunrise = "",
  sunset = "",
  units = {
    temp: "",
    precipitation: "",
    rain: "",
    wind: "",
  },
}) => {
  const week_days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  // Thanks to: https://stackoverflow.com/a/8215631
  const isToday = new Date().toDateString() === new Date(time).toDateString();
  return (
    <div className="weather-card">
      <h3>{isToday ? "Today" : week_days[new Date(time).getDay()]}</h3>
      <div className="temperature">
        <img
          src={
            precipitation <= 10
              ? sunny_icon
              : precipitation <= 30
              ? mildly_cloudy_icon
              : precipitation <= 70
              ? cloudy_icon
              : rainy_icon
          }
          alt=""
        />
        <div className="text-end">
          <h2>
            {max_temperature}
            {units.temp}
          </h2>
          <h3>
            {min_temperature}
            {units.temp}
          </h3>
        </div>
      </div>
      <div className="statistics">
        <div className="statistic">
          <FaWind size={16} />
          <span>
            {wind_speed}
            {units.wind}
          </span>
        </div>
        <div className="statistic">
          <FaCloudRain size={16} />
          <span>
            {precipitation}
            {units.precipitation}
          </span>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
