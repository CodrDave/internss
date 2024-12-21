import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css'; // Import the CSS file for styling

const LandingPage = () => {
  return (
    <div className='landing-container'>
      <div className='landing-content'>
        <h1>Welcome to RealTime colaborator</h1>
        <p>This website will showcase the use of real time collaborator tool with the help of MERN.</p>

        <div className='button-container'>
          <Link to="/login">
            <button className='landing-btn login-btn'>Login</button>
          </Link>
          <Link to="/register">
            <button className='landing-btn register-btn'>Register</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
