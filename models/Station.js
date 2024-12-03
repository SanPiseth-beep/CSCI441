// models/Station.js
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Station = sequelize.define('Stations', {
  stationID: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  stationName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  location: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  tableName: 'stations', // Ensure the table name matches the actual table name in the database
  timestamps: false, // Disable the timestamps option
});

module.exports = Station;