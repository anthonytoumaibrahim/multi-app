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
  return <div className="weather-card">WeatherCard</div>;
};

export default WeatherCard;
