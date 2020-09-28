const express = require("express");
const router = express.Router();

// ////////////////////
// DISPLAYING ARTICLES

router.get("/articles", (req, res) => {
  let userId = req.session.user.userId;

  // let userId = 4;

  db.any("SELECT articleid,title,description FROM articles WHERE userid = $1", [
    userId,
  ]).then((articles) => {
    res.render("articles", { articles: articles });
  });
});

// ////////////////////
// DELETE ARTICLE /////
router.post("/delete-article", (req, res) => {
  let articleId = req.body.articleId;

  db.none("DELETE FROM articles WHERE articleid = $1", [articleId]).then(() => {
    res.redirect("/users/articles");
  });
});

// ///////////////////////
// ADD NEW ARTICLE ///////

router.get("/add-article", (req, res) => {
  res.render("add-article");
});

router.post("/add-article", (req, res) => {
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

// ////////////////////
//  UPDATE ARTICLE ///

router.post("/update-article", (req, res) => {
  let title = req.body.title;
  let description = req.body.description;
  let articleid = req.body.articleid;

  db.none(
    "UPDATE articles SET title = $1, description = $2 WHERE articleid = $3",
    [title, description, articleid]
  ).then(() => {
    res.redirect("/users/articles");
  });
});

// /////////////////
// EDIT ARTICLES ///
router.get("/articles/edit/:articleid", (req, res) => {
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

module.exports = router;
