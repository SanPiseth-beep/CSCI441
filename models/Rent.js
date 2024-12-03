// models/Rent.js
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Rent = sequelize.define('Rent', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  bikeId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  status: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  startTime: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  endTime: {
    type: DataTypes.DATE,
  },
  cost: {
    type: DataTypes.FLOAT,
  },
});

module.exports = Rent;