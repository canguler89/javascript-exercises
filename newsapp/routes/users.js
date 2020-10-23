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
router.post("/delete-article", async (req, res) => {
  let articleId = req.body.articleId;
  await db.none("DELETE FROM articles WHERE articleid = $1", [articleId]);
  res.redirect("/users/articles");
});

// ///////////////////////
// ADD NEW ARTICLE ///////

router.get("/add-article", (req, res) => {
  res.render("add-article");
});

router.post("/add-article", async (req, res) => {
  let title = req.body.title;
  let description = req.body.description;
  let userId = req.session.user.userId;

  await db.none(
    "INSERT INTO articles(title,description,userId) VALUES($1,$2,$3)",
    [title, description, userId]
  );
  res.send("article sent to database");
});

// ////////////////////
//  UPDATE ARTICLE ///

router.post("/update-article", async (req, res) => {
  let title = req.body.title;
  let description = req.body.description;
  let articleid = req.body.articleid;

  await db.none(
    "UPDATE articles SET title = $1, description = $2 WHERE articleid = $3",
    [title, description, articleid]
  );
  res.redirect("/users/articles");
});

// /////////////////
// EDIT ARTICLES ///
router.get("/articles/edit/:articleid", async (req, res) => {
  let articleid = req.params.articleid;

  let article = await db.one(
    "SELECT articleid,title,description FROM articles WHERE articleid = $1",
    [articleid]
  );
  res.render("edit-article", article);
});

module.exports = router;
