const Sequelize = require('sequelize');

const sequelize = new Sequelize('DATABASE_URL', 'postgres', '1234', {
  host: 'localhost',
  dialect: 'postgres' 
});

module.exports = sequelize;
