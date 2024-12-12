import React from "react";
import WeatherProvider from "./WeatherContext";
import WeatherDisplay from "./WeatherDisplay";
import SearchBar from "./Searchbar";

const App = () => {
  return (
    <WeatherProvider>
      <header style={{ textAlign: "center", padding: "10px", backgroundColor: "lightblue" }}>
        <h1>Weather App</h1>
      </header>
      <SearchBar />
      <WeatherDisplay />
    </WeatherProvider>
  );
};

export default App;
