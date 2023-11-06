const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();

app.use(bodyParser.json());

const db = "mongodb://localhost:27017/myDbName";

app.use("/assets", express.static(path.join(__dirname, "assets")));

mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.log(err));

// Import the mock data
const mockData = require("./data/MockData");

// API endpoint to get the mock data
app.get("/api/mockdata", (req, res) => {
  res.json(mockData);
});

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
