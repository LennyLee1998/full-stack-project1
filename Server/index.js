const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");

// 创建应用
const app = express();

// 允许跨域
app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json());

// 接口测试
app.get("/article/list", (req, res) => {
  res.json({
    code: 200,
    data: "Hello world",
    message: "获取数据成功",
  });
});
const config = require("./config.json");
// 连接数据库
mongoose.connect(config.connectionString);

// creator
const Article = require("./model/article.model");
// get-articles
app.get("/get-articles", async (req, res) => {
  try {
    const articles = await Article.find().sort({ createdAt: -1 });
    return res.json({
      code: 200,
      data: articles,
      message: "articles retrived successfully",
    });
  } catch (err) {
    return res.status(500).json({
      code: 500,
      message: "Internal Server Error",
    });
  }
});
// delete-article
app.delete("/delete-article/:articleId", async (req, res) => {
  const { articleId } = req.params;
  try {
    const article = await Article.find({ _id: articleId });
    if (!article)
      return res.status(400).json({
        code: 400,
        message: "Bad Request",
      });
    await Article.deleteOne({ _id: articleId });
    return res.status(200).json({
      code: 200,
      message: "article deleted successfully",
    });
  } catch (error) {
    return res.status(500).json({
      code: 500,
      message: "Internal Server Error",
    });
  }
});
// add-article
app.post("/add-article", async (req, res) => {
  console.log(req.body);
  const { title, articleData, content, isFavorite } = req.body;
  // if ()
  const article = new Article({ title, articleData, content, isFavorite });
  try {
    const artRes = await article.save();
    return res.json({
      code: 200,
      data: artRes,
      message: "add successfully",
    });
  } catch (err) {
    return res.status(500).json({
      code: 500,
      message: "Internal Server Error",
    });
  }
});

app.listen(5000, () => {
  console.log("server is running");
});

module.exports = app;
