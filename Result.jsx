import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Result = ({ prediction, audioFile }) => {
  return (
    <>
      <div className="about-container">
        {/* Navigation Bar */}
        <nav className="navbar">
          <div className="logo">SER</div>
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/main">Preview</Link></li>
            <li><Link to="/login">Log out</Link></li>
          </ul>
        </nav>
      </div>
      <div className="result-container">
        <div className="heading">
          <h1>Speech Emotion Recognition</h1>
        </div>
        <div className="output-section">
          <h2>Emotion of Speech is:</h2>
          <p className="prediction-text">{prediction || "No prediction available."}</p>
        </div>
      </div>
    </>
  );
}

export default Result;
