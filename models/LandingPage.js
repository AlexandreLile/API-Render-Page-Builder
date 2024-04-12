const mongoose = require("mongoose");

// Définir le schéma pour les propriétés des composants.
// Utiliser un schéma plus flexible si les propriétés peuvent varier grandement.
const propsSchema = new mongoose.Schema(
  {
    // Exemple de structure pour des propriétés clé-valeur simples.
    // Vous pouvez ajuster cela selon vos besoins spécifiques.
  },
  { strict: false, _id: false }
); // Désactiver le mode strict pour permettre des champs dynamiques.

const componentSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: false,
  },
  title: { type: String }, // Ajout comme champ de premier niveau
  subTitle: { type: String },
  paddingTop: { type: String }, // Ajout comme champ de premier niveau
  titleColor: { type: String },
  height: { type: String },
  bgColor: { type: String },
  titleFontSize: { type: String },
  // Autres champs...
  // Utiliser le schéma défini pour les props pour une meilleure validation et flexibilité.
  props: {
    type: propsSchema,
    default: () => ({}), // Fournir un objet vide par défaut
  },
});

const pageSchema = new mongoose.Schema(
  {
    components: [componentSchema], // Un tableau de composants selon le schéma défini
  },
  {
    timestamps: true,
  }
);

const Page = mongoose.model("Page", pageSchema);

module.exports = Page;
