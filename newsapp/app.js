const express = require("express");
const app = express();
const mustacheExpress = require("mustache-express");
const bodyParser = require("body-parser");
const pgp = require("pg-promise")();
const session = require("express-session");
const path = require("path");

const userRoutes = require("./routes/users");
const indexRoutes = require("./routes/index");
const checkAuth = require("./utils/checkAuth");

const PORT = 3000;
const CONNECTION_STRING = "postgres://localhost:5432/newsdb";

const VIEWS_PATH = path.join(__dirname, "./views");
// engine
app.engine("mustache", mustacheExpress(VIEWS_PATH + "/partials", ".mustache"));
app.set("views", VIEWS_PATH);
app.set("view engine", "mustache");

// static file
app.use("/css", express.static("css"));

// express-session
app.use(
  session({
    secret: "adasdasd",
    resave: false,
    saveUninitialized: false,
  })
);

app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.locals.checkAuth = req.session.user == null ? false : true;
  next();
});

// middleware
app.use("/", indexRoutes);
app.use("/users", checkAuth, userRoutes);

db = pgp(CONNECTION_STRING);

app.listen(PORT, () => {
  console.log(`server is running at ${PORT}`);
});
