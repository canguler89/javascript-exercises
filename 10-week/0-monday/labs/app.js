const express = require("express");
const mongoose = require("mongoose");

const app = express();

// ROUTES
app.get("/", (req, res) => {
  res.send("we are home");
});

const postsRoute = require("./routes/posts");

app.use("/posts", postsRoute);

// connect to db
mongoose.connect(`process.env.DB_CONNECTION`, { useNewUrlParser: true }, () =>
  console.log("connected mongodb")
);

app.listen(3000);
