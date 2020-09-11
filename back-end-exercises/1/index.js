const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Hello Express!");
});
// dynamic routes
app.get("/movies/:genre/:year", function (req, res) {
  console.log(req.params.genre);
  console.log(req.params.year);
  res.send("Movies route with year and genre");
});

app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
});
