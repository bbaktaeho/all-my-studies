const express = require("express");
const app = express();
const { getConn } = require("./config/database/pool");

app.get("/", async (req, res, next) => {
  try {
    const conn = await getConn();
    const [row] = await conn.query("select * from test_table");
    res.status(200).json(row);
    conn.release();
  } catch (err) {
    next(err);
  }
});

app.listen(9000, () => {
  console.log("server start");
});
