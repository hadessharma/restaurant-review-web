const express = require("express");
const connectDb = require("./Config/dbConnect");
require("dotenv").config();

const app = express();
connectDb();
const PORT = process.env.PORT || 3000;
app.get("/", (req, res) => {
  res.send("Hello, world!");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
