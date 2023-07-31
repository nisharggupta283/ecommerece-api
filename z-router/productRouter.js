const express = require("express");
const productM = require("../z-controller/productC");

//start Router
const router = express.Router();

console.log(
  "Router  is called and loaded See Product Detail Called"
);

//get all products
router.get("/", productM.getAllProductDetails);

/*
POST------------>http://localhost:8080/products/create
{
"name": "mobile",
"quantity": 10,
"description": String,
"price": 1000,
"brand": String,
"expiry": String,
"mfd": String,
}

name,quantity required
*/
//create product
router.post("/create", productM.addProductDetails);

//http://localhost:8080/products/:id
//To Delete the product
router.delete("/:id", productM.deleteProduct);

/*
http://localhost:8080/products/:id/update_quantity/?number=10   ------------------->POST
{
"name": "mobile",
"quantity": 10,
"description": String,
"price": 1000,
"brand": String,
"expiry": String,
"mfd": String,
}
*/
//To update the product
router.post("/:id/update_quantity", productM.updateProductDetails);

module.exports = router;
