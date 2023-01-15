const mongoose = require("mongoose");

// Schéma de valdiation article

const articleSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      required: true,
    },
    categoryId: {
      type: mongoose.Types.ObjectId,
      ref: "Category",
      required: true,
    },
    authorId: {
      type: mongoose.Types.ObjectId,
      ref: "Author",
      required: true,
    },
    comments: [
      {
        text: {
          type: String,
          required: true,
        },
        authorId: {
          type: mongoose.Types.ObjectId,
          ref: "Author",
          required: true,
        },
        createdAt: {
          type: Date,
          required: true,
        },
      },
    ],
    tags: [
      {
        type: String,
      },
    ],
  },
  {
    timestamps: true,
  }
);
articleSchema.index({ title: 1 }, { unique: true });

const authorSchema = mongoose.Schema({
  author: {
    surname: { type: String, required: true },
    name: { type: String, required: true },
  },
});

const categorySchema = mongoose.Schema({
  category: {
    label: { type: String, required: true, unique: true },
  },
});

category.index({ label: 1 }, { unique: true });

module.exports = mongoose.model("Article", articleSchema);
module.exports = mongoose.model("Auteur", authorSchema);
module.exports = mongoose.model("Categorie", categorySchema);
