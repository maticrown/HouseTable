import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const HouseUpdate = () => {
  const { id } = useParams();
  const [address, setAddress] = useState('');
  const [currentValue, setCurrentValue] = useState('');
  const [loanAmount, setLoanAmount] = useState('');
  const [risk, setRisk] = useState('');
  const [success, setSuccess] = useState(false); // State variable to track success

  useEffect(() => {
    const fetchHouseDetails = async () => {
      try {
        const response = await axios.get(`/api/houses/${id}`);
        console.log('response' + response);
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
      setSuccess(true); // Set success state to true after successful submit
    } catch (error) {
      console.error('Error updating house details:', error);
    }
  };


  const handleLoanAmountChange = (e) => {
    const newLoanAmount = e.target.value;
    setLoanAmount(newLoanAmount);
    setRisk(calculateRisk(currentValue, newLoanAmount));
  };

  const handleRiskChange = (e) => {
    const newRisk = e.target.value;
    setRisk(newRisk);
  };

  const calculateRisk = (currentValue, loanAmount) => {
    const loanToValueRatio = loanAmount / currentValue;
    let calculatedRisk = loanToValueRatio;

    if (loanToValueRatio > 0.5) {
      calculatedRisk += 0.1;
    }

    return calculatedRisk;
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
          onChange={handleLoanAmountChange}
        />  
         <input
          type="number"
          placeholder="Risk"
          value={risk}
          onChange={handleRiskChange}
        />               
        <button type="submit">Update</button>
       {success && <h2>Your house details were updated successfully!</h2>}
       {success && <h2>risk is: {risk}</h2>}
      </form>
    </div>
  );
};

export default HouseUpdate;
