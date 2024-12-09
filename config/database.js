// written by: Piseth San 
// edited by: Nilin Lay, Ndeye Anta Mbaye
// tested by: Angel Cervantes-Ramos, Nilin Lay, Ndeye Anta Mbaye

// config/database.js
const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: process.env.DB_DIALECT,
  dialectOptions: {
    charset: 'utf8mb4'
  }
});

module.exports = sequelize;