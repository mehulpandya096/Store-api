const express = require("express");
const router = express.Router();

const {
  getAllProductsStatic,
  getAllProducts,
} = require("../controllers/productController");
  
router.route('/').get(getAllProducts);
router.route('/static').get(getAllProductsStatic) 

module.exports = router;