const express = require("express");
const router = express.Router();
const path = require("path");
const multer = require("multer");
const {
  getAllPlanes,
  createPlane,
  getPlane,
} = require("../controllers/planes");
// показываем где хранить загружаемые файлы
const storage = multer.diskStorage({
  destination: "./assets/",
  filename: (req, file, callback) => {
    callback(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});
const upload = multer({ storage });
// @route GET /api/planes
// @desc Получить все самолёты
router.get("/", getAllPlanes);
// @route GET /api/planes/:id
// @desc Получить самолёт по id
router.get("/:id", getPlane);
// @route POST /api/planes
// @desc Создать самолёт
router.post("/", upload.single("planeImage"), createPlane);
//
module.exports = router;
