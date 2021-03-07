require("dotenv").config();

module.exports = {
  development: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: "test",
  },
  production: {},
};
