const express = require("express");
const app = express();
const mustacheExpress = require("mustache-express");
const bodyParser = require("body-parser");
const pgp = require("pg-promise")();
const session = require("express-session");
const path = require("path");

const userRoutes = require("./routes/users");
const indexRoutes = require("./routes/index");

const PORT = 3000;
const CONNECTION_STRING = "postgres://localhost:5432/newsdb";

const VIEWS_PATH = path.join(__dirname, "./views");
// engine
app.engine("mustache", mustacheExpress(VIEWS_PATH + "/partials", ".mustache"));
app.set("views", VIEWS_PATH);
app.set("view engine", "mustache");

// static file
app.use("/css", express.static("css"));

// middleware
app.use("/", indexRoutes);
app.use("/users", userRoutes);

// express-session
app.use(
  session({
    secret: "adasdasd",
    resave: false,
    saveUninitialized: false,
  })
);

app.use(bodyParser.urlencoded({ extended: false }));

db = pgp(CONNECTION_STRING);

// homepage layout
// ///////////////
app.get("/", (req, res) => {
  db.any("SELECT articleid,title,description FROM articles").then(
    (articles) => {
      res.render("index", { articles: articles });
    }
  );
});

// ////////////////////
// DISPLAYING ARTICLES

app.get("/users/articles", (req, res) => {
  let userId = req.session.user.userId;

  // let userId = 4;

  db.any("SELECT articleid,title,description FROM articles WHERE userid = $1", [
    userId,
  ]).then((articles) => {
    res.render("articles", { articles: articles });
  });

  // userid: req.session.user.userId,
});

app.listen(PORT, () => {
  console.log(`server is running at ${PORT}`);
});
