const mongoose = require("mongoose");

const articleSchema = new mongoose.Schema({
  title: String,
  createdAt: {
    type: Date,
    default: new Date().getTime(),
  },
  articleData: {
    showCount: Number,
    readCount: Number,
    greatCount: Number,
    commentCount: Number,
    favoriteCount: Number,
  },
  content: String,
  isFavorite: Boolean,
});

module.exports = mongoose.model("Article", articleSchema);
