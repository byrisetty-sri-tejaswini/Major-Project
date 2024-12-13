// Import necessary libraries
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate=useNavigate();

  const handleLoginLogout = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <div className="homepage-container">
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="logo">SER</div>
        <ul className="nav-links">
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li>
            {!isLoggedIn ? (
              <a href="#login" onClick={handleLoginLogout}>Login/Register</a>
            ) : (
              <a href="#logout" onClick={handleLoginLogout}>Logout</a>
            )}
          </li>
        </ul>
      </nav>

      {/* Hero Section */}
      <header className="hero-section">
        <h1>Welcome to Speech Emotion Recognition</h1>
        <p>Your gateway to amazing services and experiences</p>
        <button className="cta-button" onClick={() => navigate("/login")}>Get Started</button>

      </header>
    </div>
  );
};

export default HomePage;
