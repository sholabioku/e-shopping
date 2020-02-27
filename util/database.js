const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-complete', 'root', '5346', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = sequelize;
