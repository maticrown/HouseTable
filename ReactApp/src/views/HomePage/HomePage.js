import React from 'react';
import "./HomePage.css";
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className='homepage'>
      <h2>Welcome to the Home Page</h2>
      <Link to="/houses/new" className="home-link">Create a New House</Link>
    </div>
  );
};

export default HomePage;
