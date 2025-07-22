<<<<<<< HEAD
const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");

router.get("/", productController.getAllProducts);
router.post("/", productController.addProduct);
router.get("/:id", productController.getProductById);
=======
// routes/productRoutes.js
const express = require("express");
const router = express.Router();
const {
  getAllProducts,
  getProductById,
  addProduct,
} = require("../controllers/productController");

router.get("/", getAllProducts);
router.get("/:id", getProductById);
router.post("/", addProduct);
>>>>>>> 96078beb7c7e2131bd5bdde716df5b366d644b3d

module.exports = router;
