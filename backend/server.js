require("dotenv").config();

const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

// middleware
app.use(express.json());

// DB connection
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT
});

connection.connect((err) => {
  if (err) {
    console.error("DB connection failed ❌", err);
  } else {
    console.log("Connected to Railway MySQL ✅");
  }
});

// routes
const routes = require("./routes");
app.use("/api", routes);

// ✅ ADD PORT HERE
const PORT = process.env.PORT || 5000;

// ✅ START SERVER
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});