const express = require("express");
const app = express();
const PORT = 3000;

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
app.get("/movies", (req, res) => {
  let movies = [
    { title: "Lord of the rings", year: 2011 },
    { title: "Spider Man", year: 2018 },
    { title: "The Girl next door", year: 2009 },
  ];
  res.json(movies);
});

app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
});
