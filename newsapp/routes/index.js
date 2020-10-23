const express = require("express");
const bcrypt = require("bcrypt");
const router = express.Router();

const SALT_ROUNDS = 10;

// /////////////////
// LOG OUT FUNCTION
router.get("/logout", (req, res, next) => {
  if (req.session) {
    req.session.destroy((error) => {
      if (error) {
        next(error);
      } else {
        res.redirect("/");
      }
    });
  }
});

// homepage layout
// ///////////////

// router.get("/", (req, res) => {
//   db.any("SELECT articleid,title,description FROM articles").then(
//     (articles) => {
//       res.render("index", { articles: articles });
//     }
//   );
// });
// async function

router.get("/", async (req, res) => {
  let articles = await db.any(
    "SELECT articleid,title,description FROM articles"
  );
  res.render("index", { articles: articles });
});

// /////////////////////////
///// USERS DATABASE //////

router.get("/login", (req, res) => {
  res.render("login");
});

router.post("/login", (req, res) => {
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

router.get("/register", (req, res) => {
  res.render("register");
});

router.post("/register", (req, res) => {
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

module.exports = router;
