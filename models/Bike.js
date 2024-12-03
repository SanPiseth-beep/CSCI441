const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Bike = sequelize.define('Bikes', {
  bikeId: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  stationId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  status: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  isAvailable: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
  },
}, {
    tableName: 'bikes', // Ensure the table name matches the actual table name in the database
});
module.exports = Bike;