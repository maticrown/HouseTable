import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const HouseDetails = () => {
  const { id } = useParams();
  const [house, setHouse] = useState(null);

  useEffect(() => {
    const fetchHouseDetails = async () => {
      try {
        const response = await axios.get(`/api/houses/${id}`);
        setHouse(response.data);
      } catch (error) {
        console.error('Error fetching house details:', error);
      }
    };

    fetchHouseDetails();
  }, [id]);

  return (
    <div>
      {house ? (
        <div className='house_detail'>
          <h2>House Details</h2>
          <p>ID: {house.id}</p>
          <p>Address: {house.address}</p>
          <p>Current Value: {house.currentValue}</p>
          <p>Loan Amount: {house.loanAmount}</p>
          <p>Risk: {house.risk}</p>
          <p>
            <a href={`/houses/${house.id}/edit`} className='edit_link'>Edit</a>
          </p>
        </div>
      ) : (
        <p>Loading house details...</p>
      )}
    </div>
  );
};

export default HouseDetails;
