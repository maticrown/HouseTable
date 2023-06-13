/**
 * This file defines the apis to get and post the house details
 */

const express = require('express');
const router = express.Router();
const House = require('../models/HouseModel');
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();

// post method to submit a new house
router.post('/', jsonParser, async (req, res) => {
    try {
      const { address, currentValue, loanAmount, risk } = req.body;
      const house = await House.create({
        address,
        currentValue,
        loanAmount,
        risk,
      });
      res.status(201).json(house.dataValues.id);

    } catch (error) {
      console.error('Error creating house:', error);
      res.status(500).json({ error: 'An error occurred while creating the house' });
    }
  });

  // get method to fetch a house record by id
  router.get('/:id', async (req, res) => {
    try {
      const houseId = req.params.id;
      const house = await House.findByPk(houseId);
      
      if (house) {
        res.json(house);
      } else {
        res.status(404).json({ error: 'House not found' });
      }
    } catch (error) {
      console.error('Error fetching house:', error);
      res.status(500).json({ error: 'An error occurred while fetching the house' });
    }
  });

  // put method for updating house record by id
  router.put('/:id',jsonParser, async (req, res) => {
    try {
      const houseId = req.params.id;
      const { address, currentValue } = req.body;
      
      const house = await House.findByPk(houseId);
      if (!house) {
        return res.status(404).json({ error: 'House not found' });
      }
      
      // Update the house record with the new values 
      await house.update({
        currentValue,
        loanAmount
      });
      
      res.json(house);
    } catch (error) {
      console.error('Error updating house:', error);
      res.status(500).json({ error: 'An error occurred while updating the house' });
    }
  });
  
  
  module.exports = router;