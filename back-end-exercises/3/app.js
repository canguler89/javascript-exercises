const pgp = require("pg-promise")();
const connectionString = "postgres://localhost:5432/garden";
const db = pgp(connectionString);

// get the items from database
db.any("SELECT name,course,price,imageURL FROM dishes WHERE price > 5;")
  .then((dishes) => {
    console.log(dishes);
  })
  .catch((error) => console.error(error));

// db.none("INSERT INTO dishes(name,course,price,imageURL) VALUES($1,$2,$3,$4)", [
//   "Chicked Salad",
//   "Entrees",
//   7.5,
//   "chickedsalad.png",
// ])
//   .then(() => {
//     console.log("SUCCESS");
//   })
//   .catch((error) => console.log(error));

// db.one(
//   "INSERT INTO dishes(name,course,price,imageURL) VALUES($1,$2,$3,$4) RETURNING dishid",
//   ["Soup", "Starters", 5.5, "soup.png"]
// )
//   .then((data) => {
//     console.log(data.dishid);
//   })
//   .catch((error) => console.log(error));
