const db = require("./db");
const express = require("express");
const router = express.Router();

router.post("/contact", (req, res) => {
  const { name, email, message } = req.body;

  const sql = "INSERT INTO contacts (name, email, message) VALUES (?, ?, ?)";

  db.query(sql, [name, email, message], (err, result) => {
    if (err) {
      console.error("Insert error:", err);
      return res.send("Error saving data ❌");
    }

    res.send("Message saved to database ✅");
  });
});

module.exports = router;