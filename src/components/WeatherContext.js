import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const WeatherContext = createContext();

const WeatherProvider = ({ children }) => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [location, setLocation] = useState("Oklahoma");

  const fetchWeatherData = async (query) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=908c64104addee5b646a27f0069039b4&units=metric`
      );
      setWeatherData(response.data);
    } catch (err) {
      setError("Failed to fetch weather data. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWeatherData(location);
  }, [location]);

  return (
    <WeatherContext.Provider
      value={{ weatherData, loading, error, setLocation }}
    >
      {children}
    </WeatherContext.Provider>
  );
};

export default WeatherProvider;
