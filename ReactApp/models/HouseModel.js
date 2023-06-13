/**
 * This file defines the main house model and creates the database entry using Sequelize
 */

// Import necessary Sequelize modules
const { Sequelize , DataTypes} = require('sequelize');
const config = require('../config/config.json');

// Choose the environment based on your needs, e.g., 'development' or 'production'
const env = process.env.NODE_ENV || 'development';
const configOptions = config[env];

// connect to the mysql database with the credentials in the config file
const sequelize = new Sequelize(
    configOptions.database,
    configOptions.username,
    configOptions.password,
    {
      host: configOptions.host,
      dialect: configOptions.dialect
    }
  );

  module.exports = sequelize;

// Define the House model
const House = sequelize.define('House', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  currentValue: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  loanAmount: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  risk: {
    type: DataTypes.FLOAT,
    allowNull: false,
    defaultValue: 0
  },
}, {
  hooks: {
    beforeSave: (house) => {
      // Calculate the risk based on loanAmount and currentValue
      const { loanAmount, currentValue } = house;
      house.risk = loanAmount / currentValue;

      // Increase the risk by 10% if loanAmount is more than 50% of currentValue
      if (loanAmount > (currentValue * 0.5)) {
        house.risk *= 1.1;
      }

      // Ensure the risk is between 0 and 1
      house.risk = Math.min(Math.max(house.risk, 0), 1);    
    },
  },
});

// Sync the model with the database (create the table if it doesn't exist)
House.sync()
  .then(() => {
    console.log('House table created');
  })
  .catch((error) => {
    console.error('Error creating House table:', error);
  });

  console.log("configOptions.database " + configOptions.database);
  console.log("configOptions.username " + configOptions.username);
  console.log("configOptions.password " + configOptions.password);  

// Export the House model
module.exports = House;

