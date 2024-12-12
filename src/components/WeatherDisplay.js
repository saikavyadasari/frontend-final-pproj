import React, { useContext } from "react";
import { WeatherContext } from "./WeatherContext";
import styles from "./WeatherDisplay.module.css";

const WeatherDisplay = () => {
  const { weatherData, loading, error } = useContext(WeatherContext);

  if (loading) return <p className={styles.container}>Loading...</p>;
  if (error) return <p className={styles.error}>{error}</p>;
  if (!weatherData) return null;

  return (
    <div className={styles.container}>
      <h2>Weather in {weatherData.name}</h2>
      <p className={styles.weather}>
        {weatherData.weather[0].description} | {weatherData.main.temp}°C
      </p>
    </div>
  );
};

export default WeatherDisplay;
