// Styles
import "./WeatherCard.css";

// Asset Icons
import sunny_icon from "../images/icons/sunny.png";
import cloudy_icon from "../images/icons/cloudy.png";
import rainy_icon from "../images/icons/rainy.png";

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
  return (
    <div className="weather-card">
      <p>{new Date(time).toLocaleDateString()}</p>
      <div className="temperature">
        <img
          src={
            precipitation <= 25
              ? sunny_icon
              : precipitation <= 70
              ? cloudy_icon
              : rainy_icon
          }
          alt=""
        />
        <div>
          <h2>
            {max_temperature}
            <sup>{units.temp}</sup>
          </h2>
          <h3>
            {min_temperature}
            <sup>{units.temp}</sup>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
