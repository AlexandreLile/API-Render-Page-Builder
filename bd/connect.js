
const mongoose = require("mongoose");
require("dotenv").config();

function connectDB() {
  mongoose
    .connect(
      `${process.env.DB_HOST}/${process.env.DB_NAME}?retryWrites=true&w=majority`,
      {
        user: process.env.DB_USER,
        pass: process.env.DB_PASS,
      }
    )
    .then(() => console.log("Connecté à MongoDB"))
    .catch((error) => console.log("Erreur de connexion à MongoDB:", error));
}

module.exports = connectDB;
