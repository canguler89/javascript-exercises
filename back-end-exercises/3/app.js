const pgp = require("pg-promise")();
const connectionString = "postgres://localhost:5432/garden";
const db = pgp(connectionString);

db.none("INSERT INTO dishes(name,course,price,imageURL) VALUES($1,$2,$3,$4)", [
  "Chicked Salad",
  "Entrees",
  7.5,
  "chickedsalad.png",
])
  .then(() => {
    console.log("SUCCESS");
  })
  .catch((error) => console.log(error));
