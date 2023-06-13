/**
 * This file defines the home page of the project
 */

import React from 'react';
import "./HomePage.css";
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className='homepage'>
      <h2>Welcome to House Table</h2>
      <span className="buttons">
        <Link to="/houses/new" className="home-link">Create House</Link>
        <Link to="/houses/-1/edit" className="home-link">Edit House</Link>
      </span>
    </div>
  );
};

export default HomePage;
