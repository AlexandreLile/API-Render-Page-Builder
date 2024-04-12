const express = require("express");
const router = express.Router();
const Page = require("../models/LandingPage");
const cors = require("cors");

router.post("/Page", cors(), async (req, res) => {
  try {
    if (!req.body.components || !Array.isArray(req.body.components)) {
      return res.status(400).json({
        message: "Les données de composants sont manquantes ou invalides",
      });
    }

    // Tentez de trouver la page existante
    let page = await Page.findOne(); // Pas besoin de critères car vous n'avez qu'une page

    if (page) {
      // Si une page existe, mettez à jour cette page
      page.components = req.body.components; // Mettre à jour les composants
      // Mettre à jour d'autres champs si nécessaire
      await page.save(); // Sauvegardez les changements
      res.json(page); // Retournez la page mise à jour
    } else {
      // S'il n'y a pas de page existante, créez-en une nouvelle
      page = new Page({
        components: req.body.components,
        // Ajoutez ici d'autres champs si nécessaire
      });
      await page.save(); // Sauvegardez la nouvelle page
      res.status(201).json(page); // Retournez la nouvelle page créée
    }
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
