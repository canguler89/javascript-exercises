const express = require("express");
const app = express();
const mustacheExpress = require("mustache-express");
const bodyParser = require("body-parser");
const pgp = require("pg-promise")();
const bcrypt = require("bcrypt");
const session = require("express-session");
const path = require("path");

const PORT = 3000;
const CONNECTION_STRING = "postgres://localhost:5432/newsdb";
const SALT_ROUNDS = 10;

const VIEWS_PATH = path.join(__dirname, "./views");
// engine
app.engine("mustache", mustacheExpress(VIEWS_PATH + "/partials", ".mustache"));
app.set("views", VIEWS_PATH);
app.set("view engine", "mustache");

app.use(
  session({
    secret: "adasdasd",
    resave: false,
    saveUninitialized: false,
  })
);

app.use(bodyParser.urlencoded({ extended: false }));

const db = pgp(CONNECTION_STRING);

app.get("/users/add-article", (req, res) => {
  res.render("add-article");
});
app.post("/users/add-article", (req, res) => {
  let title = req.body.title;
  let description = req.body.description;
  let userId = req.session.user.userId;

  db.none("INSERT INTO articles(title,description,userId) VALUES($1,$2,$3)", [
    title,
    description,
    userId,
  ]).then(() => {
    res.send("article sent to database");
  });
});

app.get("/users/articles/edit/:articleid", (req, res) => {
  let articleid = req.params.articleid;

  db.one(
    "SELECT articleid,title,description FROM articles WHERE articleid = $1",
    [articleid]
  )
    .then((article) => {
      res.render("edit-article", article);
    })
    .catch((error) => {
      console.log(error);
    });
});

app.get("/users/articles", (req, res) => {
  // let userId = req.session.user.userId;

  let userId = 4;

  db.any("SELECT articleid,title,description FROM articles WHERE userid = $1", [
    userId,
  ]).then((articles) => {
    res.render("articles", { articles: articles });
  });

  // userid: req.session.user.userId,
});

app.get("/login", (req, res) => {
  res.render("login");
});

app.post("/login", (req, res) => {
  let username = req.body.username;
  let password = req.body.password;

  db.oneOrNone(
    "SELECT userid,username,password FROM  users WHERE username = $1",
    [username]
  ).then((user) => {
    if (user) {
      bcrypt.compare(password, user.password, function (error, result) {
        if (result) {
          // username and userId in the session
          if (req.session) {
            req.session.user = { userId: user.userid, username: user.username };
          }

          res.redirect("/users/articles");
        } else {
          res.render("login", { message: "Invalid username or password!" });
        }
      });
    } else {
      res.render("login", { message: "Invalid username or password!" });
    }
  });
});

app.post("/register", (req, res) => {
  let username = req.body.username;
  let password = req.body.password;

  db.oneOrNone("SELECT userid FROM users WHERE username = $1", [username]).then(
    (user) => {
      if (user) {
        res.render("register", { message: "USERNAME already exists!" });
      } else {
        bcrypt.hash(password, SALT_ROUNDS, function (error, hash) {
          if (error == null) {
            db.none("INSERT INTO users(username,password) VALUES($1,$2)", [
              username,
              hash,
            ]).then(() => {
              res.send("SUCCESS");
            });
          }
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
