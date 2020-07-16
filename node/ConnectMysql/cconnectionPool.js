const dotenv = require("dotenv");
dotenv.config();
const mysql = require("mysql2/promise");

(async function () {
  try {
    const pool = mysql.createPool({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: "test",
      connectionLimit: 4,
    });

    // let conn = await pool.getConnection(async (conn, err) => conn);
    // const result = await conn.query("select * from test_table");
    // console.log(result);

    const connArr = await Promise.all([
      pool.getConnection(async (conn) => conn),
      pool.getConnection(async (conn) => conn),
      pool.getConnection(async (conn) => conn),
      pool.getConnection(async (conn) => conn),
      pool.getConnection(async (conn) => conn),
    ]);
    console.log(connArr[0]);
  } catch (err) {
    console.error(err.message);
  }
})();
