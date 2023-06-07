const mongoose = require("mongoose");
// описал как выглядит элемент в БД (какие поля из каких типов данных, обязательно или нет)
const planeSchema = mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
  capacity: { type: String, required: true },
  planeImage: { type: String, required: true },
});
module.exports = mongoose.model("planeSchema", planeSchema);
