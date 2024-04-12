const express = require("express");
const router = express.Router();
const Page = require("../models/LandingPage");

router.get("/home", async (req, res) => {
  try {
    const pages = await Page.find(); // Récupérer toutes les pages
    // Assumer que vous voulez afficher la première page pour l'exemple
    if (pages.length > 0) {
      const page = pages[0]; // Prendre la première page
      res.render("home", { page: page });
    } else {
      res.status(404).send("Aucune page trouvée.");
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Erreur serveur.");
  }
});

module.exports = router;
