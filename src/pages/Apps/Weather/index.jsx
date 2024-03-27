// React
import { useEffect, useState } from "react";

// Styles
import "./styles.css";

// Apps
import AppTitle from "../components/AppTitle";
import { apps } from "../../../data/apps";

// Components
import WeatherCard from "./components/WeatherCard";

// Icons
import { FaWind, FaCloud } from "react-icons/fa";
import { WiHumidity } from "react-icons/wi";
import { TbSunrise, TbSunset2 } from "react-icons/tb";

// Asset Icons
import sunny_icon from "./images/icons/sunny.png";
import cloudy_icon from "./images/icons/cloudy.png";
import rainy_icon from "./images/icons/rainy.png";
import mildly_cloudly_icon from "./images/icons/mildly-cloudy.png";

// Backgrounds
import cloudy_bg from "./images/cloudy.jpg";
import mildly_cloudy_bg from "./images/midly-cloudy-bg.jpg";

const Weather = () => {
  const app = apps.filter((app) => app.path === "weather")[0];

  const [weatherData, setWeatherData] = useState({
    latitude: 33.875,
    longitude: 35.5,
    generationtime_ms: 0.18405914306640625,
    utc_offset_seconds: 0,
    timezone: "GMT",
    timezone_abbreviation: "GMT",
    elevation: 49.0,
    current_units: {
      time: "iso8601",
      interval: "seconds",
      temperature_2m: "°C",
      relative_humidity_2m: "%",
      apparent_temperature: "°C",
      precipitation: "mm",
      rain: "mm",
      weather_code: "wmo code",
      cloud_cover: "%",
      wind_speed_10m: "km/h",
    },
    current: {
      time: "2024-03-27T13:00",
      interval: 900,
      temperature_2m: 21.7,
      relative_humidity_2m: 50,
      apparent_temperature: 21.4,
      precipitation: 0.0,
      rain: 0.0,
      weather_code: 3,
      cloud_cover: 100,
      wind_speed_10m: 3.7,
    },
    daily_units: {
      time: "iso8601",
      weather_code: "wmo code",
      temperature_2m_max: "°C",
      temperature_2m_min: "°C",
      apparent_temperature_max: "°C",
      apparent_temperature_min: "°C",
      sunrise: "iso8601",
      sunset: "iso8601",
      precipitation_sum: "mm",
      rain_sum: "mm",
      precipitation_probability_max: "%",
      wind_speed_10m_max: "km/h",
    },
    daily: {
      time: ["2024-03-27", "2024-03-28", "2024-03-29", "2024-03-30"],
      weather_code: [3, 3, 3, 45],
      temperature_2m_max: [21.8, 23.6, 21.4, 22.2],
      temperature_2m_min: [16.9, 16.8, 17.8, 16.8],
      apparent_temperature_max: [22.3, 24.0, 22.2, 24.6],
      apparent_temperature_min: [16.4, 17.5, 18.6, 17.7],
      sunrise: [
        "2024-03-27T03:31",
        "2024-03-28T03:30",
        "2024-03-29T03:28",
        "2024-03-30T03:27",
      ],
      sunset: [
        "2024-03-27T15:54",
        "2024-03-28T15:55",
        "2024-03-29T15:56",
        "2024-03-30T15:57",
      ],
      precipitation_sum: [0.0, 0.0, 0.0, 0.0],
      rain_sum: [0.0, 0.0, 0.0, 0.0],
      precipitation_probability_max: [0, 0, 0, 0],
      wind_speed_10m_max: [15.8, 10.8, 13.5, 9.0],
    },
  });

  const API_URL =
    "https://api.open-meteo.com/v1/forecast?latitude=33.8933&longitude=35.5016&current=temperature_2m,relative_humidity_2m,apparent_temperature,precipitation,rain,weather_code,cloud_cover,wind_speed_10m&daily=weather_code,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,sunrise,sunset,precipitation_sum,rain_sum,precipitation_probability_max,wind_speed_10m_max&forecast_days=4&timezone=Asia%2FBeirut";

  useEffect(() => {
    // Fetch Weather API data on load
    const fetchWeatherData = async () => {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        setWeatherData(data);
      } catch (error) {
        console.error("An error has occurred: ", error);
      }
    };
    fetchWeatherData();
  }, []);

  return (
    <>
      <AppTitle icon={app.icon} color={app.colors.main} title={app.name}>
        {app.description}
      </AppTitle>

      <div
        className="today-weather-card margin-b"
        style={{
          backgroundImage: `url('${
            weatherData?.current.cloud_cover <= 50
              ? mildly_cloudy_bg
              : cloudy_bg
          }')`,
        }}
      >
        <div className="time">
          <strong>Current weather</strong>
          <span>
            {new Date(weatherData?.current.time).toLocaleTimeString()} (last
            update)
          </span>
        </div>
        <div className="temperature">
          <img
            src={
              weatherData?.current.cloud_cover <= 25
                ? sunny_icon
                : weatherData?.current.cloud_cover <= 70
                ? mildly_cloudly_icon
                : cloudy_icon
            }
            alt=""
            className="icon"
          />
          <div>
            <h1>
              {weatherData?.current.temperature_2m}{" "}
              <sup>{weatherData?.current_units.temperature_2m}</sup>
            </h1>
            <p>
              Feels like {weatherData?.current.apparent_temperature}
              <sup>{weatherData?.current_units.apparent_temperature}</sup>
            </p>
          </div>
        </div>
        <div className="statistics">
          <div className="statistic">
            <p>Wind</p>
            <div>
              <FaWind size={24} />
              {weatherData?.current.wind_speed_10m}
              {weatherData?.current_units.wind_speed_10m}
            </div>
          </div>
          <div className="statistic">
            <p>Humidity</p>
            <div>
              <WiHumidity size={24} />
              {weatherData?.current.relative_humidity_2m}
              {weatherData?.current_units.relative_humidity_2m}
            </div>
          </div>
          <div className="statistic">
            <p>Cloud Cover</p>
            <div>
              <FaCloud size={24} />
              {weatherData?.current.cloud_cover}
              {weatherData?.current_units.cloud_cover}
            </div>
          </div>
          <div className="statistic">
            <p>Sunrise</p>
            <div>
              <TbSunrise size={24} />
              {new Date(weatherData?.daily.sunrise?.[0]).toLocaleTimeString()}
            </div>
          </div>
          <div className="statistic">
            <p>Sunset</p>
            <div>
              <TbSunset2 size={24} />
              {new Date(weatherData?.daily.sunset?.[0]).toLocaleTimeString()}
            </div>
          </div>
        </div>
      </div>

      <section className="weather-cards">
        {weatherData?.daily.time.map((date, index) => {
          const [
            time,
            min_temperature,
            max_temperature,
            precipitation,
            rain,
            wind,
            sunrise,
            sunset,
          ] = [
            date,
            weatherData?.daily.temperature_2m_min[index],
            weatherData?.daily.temperature_2m_max[index],
            weatherData?.daily.precipitation_probability_max[index],
            weatherData?.daily.rain_sum[index],
            weatherData?.daily.wind_speed_10m_max[index],
            weatherData?.daily.sunrise[index],
            weatherData?.daily.sunset[index],
          ];
          return (
            <WeatherCard
              key={index}
              time={time}
              min_temperature={min_temperature}
              max_temperature={max_temperature}
              precipitation={precipitation}
              rain={rain}
              wind_speed={wind}
              sunrise={sunrise}
              sunset={sunset}
              units={{
                precipitation:
                  weatherData?.daily_units.precipitation_probability_max,
                temp: weatherData?.daily_units.temperature_2m_max,
                rain: weatherData?.daily_units.rain_sum,
                wind: weatherData?.daily_units.wind_speed_10m_max,
              }}
            />
          );
        })}
      </section>
    </>
  );
};

export default Weather;
