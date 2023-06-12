import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const HouseUpdate = () => {
  const { id } = useParams();
  const [address, setAddress] = useState('');
  const [currentValue, setCurrentValue] = useState('');
  const [loanAmount, setLoanAmount] = useState('');
  const [risk, setRisk] = useState('');

  useEffect(() => {
    const fetchHouseDetails = async () => {
      try {
        const response = await axios.get(`/api/houses/${id}`);
        const { address, currentValue, loanAmount, risk } = response.data;
        setAddress(address);
        setCurrentValue(currentValue);
        setLoanAmount(loanAmount);
        setRisk(risk);
      } catch (error) {
        console.error('Error fetching house details:', error);
      }
    };

    fetchHouseDetails();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`/api/houses/${id}`, { address, currentValue, loanAmount, risk });
    } catch (error) {
      console.error('Error updating house details:', error);
    }
  };

  return (
    <div>
      <h2>Edit House Details</h2>
      <form onSubmit={handleSubmit}>
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
          placeholder="Loan Amount"
          value={loanAmount}
          onChange={(e) => setLoanAmount(e.target.value)}
        />  
         <input
          type="number"
          placeholder="Risk"
          value={risk}
          onChange={(e) => setRisk(e.target.value)}
        />               
        <button type="submit">Update</button>
        <h2>Your house details were updated successfully!</h2>
      </form>
    </div>
  );
};

export default HouseUpdate;
