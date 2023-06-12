import React from 'react';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import HomePage from './views/HomePage/HomePage';
import HouseForm from './views/HouseForm/HouseForm';
import HouseDetails from './views/HouseDetails/HouseDetails';
import HouseUpdate from './views/HouseUpdate/HouseUpdate';
import './App.css';
import {ReactComponent as HomePageIcon} from "./assets/house-icon.svg"

const App = () => {
  return (
    <Router>
      <div className='App'>
        <Link to="/" className='App-home-link'>< HomePageIcon className="App-logo" /></Link>
        {/* <Link to="/" className='App-home-link'>Home</Link> */}

        <Routes>
          <Route exact path="/" element={<HomePage/>} />
          <Route exact path="/houses/new" element={<HouseForm />} />
          <Route exact path="/houses/:id" element={<HouseDetails />} />
          <Route exact path="/houses/:id/edit" element={<HouseUpdate />} />
        </Routes>
      </div>
    </Router>
  );
};
export default App;
