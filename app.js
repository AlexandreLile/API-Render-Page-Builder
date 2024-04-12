const express = require("express");
const mongoose = require("mongoose");
const app = express();
require("dotenv").config();
const homeRoutes = require("./routes/homeRoute");
const connectDB = require("./bd/connect");
const pageApi = require("./routes/pageApi");
const cors = require("cors");

app.use(express.static("public"));
app.set("view engine", "pug");
app.set("views", "./views");
app.use(express.json());
app.use(cors());
app.use(homeRoutes);
app.use(pageApi);

app.get("/", (req, res) => {
  res.send("Hello World");
});

const hostname = "127.0.0.1";
const port = process.env.PORT || 3000;

// Appel de la fonction de connexion à la base de données
connectDB();

app.listen(port, hostname, () => {
  console.log(`Serveur démarré sur http://${hostname}:${port}`);
});
