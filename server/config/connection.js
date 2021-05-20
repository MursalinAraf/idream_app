const Sequelize = require('sequelize');

const sequelize = new Sequelize('demo', 'postgres', 'sabarnof', {
    host: 'localhost',
    dialect: 'postgres'
  });

module.exports = sequelize  