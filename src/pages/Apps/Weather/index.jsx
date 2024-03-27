// Styles
import "./styles.css";

// Apps
import AppTitle from "../components/AppTitle";
import { apps } from "../../../data/apps";

// Components
import WeatherCard from "./components/WeatherCard";

const Weather = () => {
  const app = apps.filter((app) => app.path === "weather")[0];

  const API_URL =
    "https://api.open-meteo.com/v1/forecast?latitude=33.8933&longitude=35.5016&current=temperature_2m,relative_humidity_2m,apparent_temperature,precipitation,rain,weather_code,cloud_cover,wind_speed_10m&daily=weather_code,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,sunrise,sunset,precipitation_sum,rain_sum,precipitation_probability_max,wind_speed_10m_max&forecast_days=4";

  return (
    <>
      <AppTitle icon={app.icon} color={app.colors.main} title={app.name}>
        {app.description}
      </AppTitle>

      <section className="weather-cards">
        <WeatherCard />
      </section>
    </>
  );
};

export default Weather;
