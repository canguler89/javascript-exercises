function check(req, res, next) {
  if (req.session) {
    if (req.session.user) {
      res.locals.checkAuth = true;
      next();
    } else {
      res.redirect("/login");
    }
  } else {
    res.redirect("/login");
  }
}

module.exports = check;
