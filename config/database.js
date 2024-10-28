// current fils is not being used but it is a good practice to keep the database configuration in a separate file

const { Sequelize } = require('sequelize');

require('dotenv').config();

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
  host: process.env.DB_HOST,
  dialect: process.env.DB_DIALECT, // Ensure this is set in your .env file
});

module.exports = sequelize;

