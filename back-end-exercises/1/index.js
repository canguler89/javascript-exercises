const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const { json } = require("body-parser");
const PORT = 3000;

app.use(bodyParser.json());
// app.get("/movies", (req, res) => {
//   console.log(req.query.sort);
// output sort=asc or sort=des

//   res.send("[Movies]");
// });
// dynamic routes
// app.get("/movies/:genre/:year", function (req, res) {
//   console.log(req.params.genre);
//   console.log(req.params.year);
//   res.send("Movies route with year and genre");
// });

// /////////////////////
// sending json object
// app.get("/movies", (req, res) => {
//   let movie = { title: "Lord of the Rings", year: 2011 };
//   res.json(movie);
// });

app.get("/", (req, res) => {
  res.send("Homepage");
});

// app.get("/movies", (req, res) => {
//   let movies = [
//     { title: "Lord of the rings", year: 2011 },
//     { title: "Spider Man", year: 2018 },
//     { title: "The Girl next door", year: 2009 },
//   ];
//   res.json(movies);
// });
// //////////////////////
// POST request
app.get("/movies", (req, res) => {
  res.send("Movies");
});

app.post("/movies", (req, res) => {
  let title = req.body.title;
  let year = req.body.year;
  let revenue = req.body.revenue;
  console.log(title);
  console.log(year);
  console.log(revenue);
  res.send("OK");
});

app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
});
