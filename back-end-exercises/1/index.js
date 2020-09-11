const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Hello Express!");
});
app.get("/movies", (req, res) => {
  res.send("List of movies");
});
app.get("/movies/comedy", (req, res) => {
  res.send("List of Comedy movies");
});
app.get("/movies/horror", (req, res) => {
  res.send("List of Horror movies");
});
app.get("/movies/action", (req, res) => {
  res.send("List of Action movies");
});

app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
});
