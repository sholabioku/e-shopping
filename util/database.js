const msql = require('mysql2');

const pool = msql.createPool({
  host: 'localhost',
  user: 'root',
  database: 'node-complete',
  password: '5346',
});

module.exports = pool.promise();
