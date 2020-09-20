const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("ROOT");
});

app.listen(3000, () => {
  console.log("Server is up and running!!!1");
});
