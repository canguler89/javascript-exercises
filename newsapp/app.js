const express = require("express");
const mustacheExpress = require("mustache-express");
const app = express();
const bodyParser = require("body-parser");
const PORT = 3000;

// engine
app.engine("mustache", mustacheExpress());
app.set("views", "./views");
app.set("view engine", "mustache");

app.use(bodyParser.urlencoded({ extended: false }));

app.post("/register", (req, res) => {
  let username = req.body.username;
  let password = req.body.password;
  console.log(username);
  console.log(password);
  res.send("success");
});

app.get("/register", (req, res) => {
  res.render("register");
});

app.listen(PORT, () => {
  console.log(`server is running at ${PORT}`);
});
