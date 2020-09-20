const express = require("express");
const app = express();

app.use(log);

function log(req, res, next) {
  console.log("Logged");
  console.log("Logging code 1");
  console.log("Logging code 2");

  next();
}

app.get("/", (req, res) => {
  res.send("ROOT");
});
app.get("/login", (req, res) => {
  res.send("LOGGGINNN!!!!");
});

app.listen(3000, () => {
  console.log("Server is up and running!!!");
});
