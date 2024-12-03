const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Bike = sequelize.define('Bike', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  stationId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  isAvailable: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
  },
});

module.exports = Bike;