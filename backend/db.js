const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "your-password",
  database: "portfolio_db"
});

module.exports = connection;