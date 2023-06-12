import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      <h2>Welcome to the Home Page</h2>
      <Link to="/houses/new">Create a New House</Link>
    </div>
  );
};

export default HomePage;
