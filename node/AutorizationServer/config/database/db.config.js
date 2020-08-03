require('dotenv').config();

module.exports = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: 'authServer',
  waitForConnections: true,
  connectionLimit: 5,
};
