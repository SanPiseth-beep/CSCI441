// models/payment.js
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Payment = sequelize.define('Payment', {
  paymentID : {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  payDate: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  cardNumber: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  cardExpiry: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  cardCVC: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  amount: {
    type: DataTypes.FLOAT,
    allowNull: true,
  },
});

module.exports = Payment;