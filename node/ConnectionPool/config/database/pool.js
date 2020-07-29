const config = require("./config");
const mysql = require("mysql2/promise");

const env = process.env.NODE_ENV === "production" ? process.env.NODE_ENV : "development";

const pool = mysql.createPool({
  ...config[env],
  waitForConnections: true,
  connectionLimit: 5,
});

const getConn = () => pool.getConnection();
module.exports = { getConn };
