const express = require("express");
const router = express.Router();

router.post("/contact", (req, res) => {
  const { name, email, message } = req.body;

  console.log("Received:", name, email, message);

  res.send("Message received successfully!");
});

module.exports = router