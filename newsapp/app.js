const express = require("express");
const app = express();
const mustacheExpress = require("mustache-express");
const bodyParser = require("body-parser");
const pgp = require("pg-promise")();
const PORT = 3000;
const CONNECTION_STRING = "postgres://localhost:5432/newsdb";

// engine
app.engine("mustache", mustacheExpress());
app.set("views", "./views");
app.set("view engine", "mustache");

app.use(bodyParser.urlencoded({ extended: false }));

const db = pgp(CONNECTION_STRING);

app.post("/register", (req, res) => {
  let username = req.body.username;
  let password = req.body.password;

  db.oneOrNone("SELECT userid FROM users WHERE username = $1", [username]).then(
    (user) => {
      if (user) {
        res.render("register", { message: "USERNAME already exists!" });
      } else {
        db.none("INSERT INTO users(username,password) VALUES($1,$2)", [
          username,
          password,
        ])
          .then(() => {
            res.send("success");
          })
          .catch((error) => {
            console.log(error);
          });
      }
    }
  );

  console.log(username);
  console.log(password);
});

app.get("/register", (req, res) => {
  res.render("register");
});

app.listen(PORT, () => {
  console.log(`server is running at ${PORT}`);
});
