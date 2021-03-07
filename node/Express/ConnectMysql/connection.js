const mysql = require('mysql2/promise');
const db = require('mysql2');
const dotenv = require('dotenv').config();
dotenv.config();

(async function () {
  try {
    let conn = await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: 'test',
    });

    let result = await conn.query('SELECT * FROM test_table').then();
    console.log(result[0]);
    conn.end();
  } catch (err) {
    console.error(err.message);
  }
})();
