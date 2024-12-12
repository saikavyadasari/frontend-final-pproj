import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import CounterComponent from './components/CounterComponents';
import Navbar from './components/nav';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import ReduxExample from './components/ReduxExample';
import WeatherApp from './components/WeatherApp';
import Team from './components/about/Team';
import Mission from './components/about/Mission';
import "./App.css";
import { ThemeProvider } from "./components/ThemeContext";

const App = () => (
  <Router>
    <nav>
      <Link to="/">Home</Link> | 
      <div className="dropdown">
        <span>About</span>
        <div className="dropdown-content">
          <Link to="/about/team">Team</Link>
          <Link to="/about/mission">Mission</Link>
        </div>
      </div> |  
      <Link to="/contact">Contact</Link> | 
      <Link to="/redux-example">Redux Example</Link> | 
      <Link to="/weather-app">Weather App</Link>
    </nav>
    <Routes>
      {/* Wrap only the Home component with ThemeProvider */}
      <Route 
        path="/" 
        element={
          <ThemeProvider>
            <Home />
          </ThemeProvider>
        } 
      />
      <Route path="/about" element={<About />}>
        <Route path="team" element={<Team />} />
        <Route path="mission" element={<Mission />} />
      </Route>
      <Route path="/contact" element={<Contact />} />
      <Route path="/redux-example" element={<CounterComponent />} />
      <Route path="/weather-app" element={<WeatherApp />} />
    </Routes>
  </Router>
);

export default App;
