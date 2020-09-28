const express = require("express");
const router = express.Router();

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

module.exports = router;
