const express = require("express");
const router = express.Router();
const asyncHandler = require("express-async-handler");
const Product = require("../model/productModel");
const {
  getProducts,
  getProductById,
  deleteProduct,
  updateProduct,
  createProduct,
} = require("../controller/productController.js");

const { protect, admin } = require("../middleware/authMiddleware");

// router.get(
//   "/",
//   asyncHandler(async (req, res) => {
//     const products = await Product.find({});
//     res.json(products);
//   })
// );

router.route("/").get(getProducts).post(protect, admin, createProduct);

router
  .route("/:id")
  .get(getProductById)
  .delete(protect, admin, deleteProduct)
  .put(protect, admin, updateProduct);

// router.get(
//   "/:id",
//   asyncHandler(async (req, res) => {
//     const product = await Product.findById(req.params.id);
//     if (product) {
//       res.send(product);
//     } else {
//       res.status(404);
//       throw new Error("Product Not Found!");
//     }
//   })
// );

module.exports = router;
