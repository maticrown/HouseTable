import React, { useState } from 'react';
import axios from 'axios';
import Modal from 'react-modal';
import { Link } from 'react-router-dom';
import "./HouseForm.css";
const HouseForm = () => {
  const [address, setAddress] = useState('');
  const [currentValue, setCurrentValue] = useState('');
  const [loan, setLoan] = useState('');
  const [risk, setRisk] = useState('');
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [houseId, setHouseId] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/api/houses', { "address": address, "currentValue": currentValue, "loanAmount": loan, "risk": risk }); //TODO: Add base url to env file
      setHouseId(response.data);
      setAddress('');
      setCurrentValue('');
      setLoan('');
      setRisk('');
      setModalIsOpen(true);
    } catch (error) {
      console.error('Error creating house:', error);
    }
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className='container'>
      <h2>Create a New House</h2>
      <form onSubmit={handleSubmit} className='form'>
        <input
          type="text"
          placeholder="Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <input
          type="number"
          placeholder="Current Value"
          value={currentValue}
          onChange={(e) => setCurrentValue(e.target.value)}
        />
        <input
          type="number"
          placeholder="Loan"
          value={loan}
          onChange={(e) => setLoan(e.target.value)}
        />
        <button type="submit" className='button'>Submit</button>
      </form>
     { modalIsOpen &&
      <div className="modal">
        <button className="close-button" onClick={closeModal}>
          X
        </button>
        <h2>Your house details were submitted successfully!</h2>
        <h2>Your house id is {houseId}</h2>
        <Link to={`/houses/${houseId}`} className='modal-link'>House details</Link>
      </div>}
    </div>
  );
};

export default HouseForm;
