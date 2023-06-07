const express = require("express");
const mongoose = require("mongoose");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 5000;
//
// Для парсинга application/json (мы шлем на сервер JSON и он обратно выдает формат JSON)
app.use(express.json());
// Для парсинга application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
// путь к папке с картинками
app.use("/static", express.static(__dirname + "/assets"));
//

app.get("/", (req, res) => {
  res.send("working");
});
// Роуты
app.use("/api/planes", require("./routes/planes"));
// подключение moongoose БД
mongoose
  // <123456 or 0000>
  // mongodb+srv://alexeishmidko:<password>@planes123456.xfm4lav.mongodb.net/?retryWrites=true&w=majority
  .connect(
    "mongodb+srv://alexeishmidko:0000@planes123456.xfm4lav.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("DB is active");
  })
  .catch((error) => {
    console.log(error, "DB error");
  });
// запуск приложения
app.listen(port, (error) => {
  if (error) console.log(error, "err");
  else {
    console.log(`${port}is running`);
  }
});
