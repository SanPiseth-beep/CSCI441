const { Sequelize } = require('sequelize');

// Create a new Sequelize instance, adjust the values for your DB configuration
const sequelize = new Sequelize('your_database_name', 'your_username', 'your_password', {
  host: 'localhost',
  dialect: 'mysql',  // Use 'postgres', 'sqlite', or 'mssql' for other databases
});

module.exports = sequelize;
