const express = require("express");
const router = express.Router();
const eventData = require("../data/MockData");

router.get("/events", (req, res) => {
  res.json(eventData);
});

module.exports = router;
