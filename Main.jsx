import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Main = () => {
    const [audioFile, setAudioFile] = useState(null);
    const navigate=useNavigate();
  
    const handleFileChange = (e) => {
      setAudioFile(e.target.files[0]);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (audioFile) {
        console.log('Uploaded File:', audioFile);
        // Handle audio file processing logic here
        alert('Audio file submitted successfully!');
        navigate("/result")
      } else {
        alert('Please upload an audio file before submitting.');
      }
    };

  return (
    <>
    <div className="about-container">
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="logo">SER</div>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/login">Log out</Link></li>
        </ul>
      </nav>
      </div>
      <div className="main-container">
      <div className="heading">
        <h1>Speech Emotion Recognition</h1>
      </div>
      <form className="upload-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="audio-upload" className="upload-label">Upload Audio File</label>
          <input
            type="file"
            id="audio-upload"
            accept="audio/*"
            onChange={handleFileChange}
            className="file-input"
          />
        </div>
        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
    </>
  )
}

export default Main