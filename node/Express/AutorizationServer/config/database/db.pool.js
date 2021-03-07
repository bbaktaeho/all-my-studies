const mysql = require('mysql2/promise');
const config = require('./db.config');

const pool = mysql.createPool(config);

const getConn = () => pool.getConnection();

module.exports = {
  getConn,
};
