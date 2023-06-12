// Import necessary Sequelize modules
const { Sequelize , DataTypes} = require('sequelize');
// const sequelize = require('../database/connection'); // Assuming you have a Sequelize connection configured

// connect to the mysql database
const sequelize = new Sequelize('HouseTable', 'root', '!Mc123456!', { // TODO: password shouldn't be hard coded
    host: 'localhost',
    dialect: 'mysql'
  });

  module.exports = sequelize;

// authenticate connection to the database
  // try {
  //   await sequelize.authenticate();
  //   console.log('Connection has been established successfully.');
  // } catch (error) {
  //   console.error('Unable to connect to the database:', error);
  // }

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

// Export the House model
module.exports = House;

