import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="about-container">
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="logo">SER</div>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/login">Login/Register</Link></li>
        </ul>
      </nav>

      {/* About Section */}
      <header className="about-header">
        <h1>About Us</h1>
        <p>Learn more about our journey and mission.</p>
      </header>

      <section className="about-content">
        <div className="about-card">
          <h2>Our Mission</h2>
          <p>
            Our mission is to advance human-computer interaction by creating accurate and accessible speech emotion recognition systems. We aim to empower industries with tools that understand emotions, enhancing communication and fostering deeper connections.
          </p>
        </div>

        <div className="about-card">
          <h2>Our Vision</h2>
          <p>
            We envision a future where technology understands and responds to human emotions in real-time, making interactions more intuitive, empathetic, and impactful across healthcare, education, customer service, and beyond.
          </p>
        </div>

        <div className="about-card">
          <h2>Our Values</h2>
          <p>
            We value innovation, inclusivity, and integrity. Our commitment lies in building ethical, transparent, and user-centric solutions that respect privacy while delivering exceptional performance.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
