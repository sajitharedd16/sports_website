const Sequelize = require('sequelize');

const sequelize = new Sequelize('DATABASE_URL', 'postgres', '1234', {
  host: '127.0.0.1',
  dialect: 'postgres' 
});

module.exports = sequelize;
