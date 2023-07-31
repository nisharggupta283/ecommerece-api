const { PRODUCTS } = require("../z-models/productM");
const db = require("../z-config/mongoose-config.js");

//function to get details of all the INTERVIEW details
module.exports.getAllProductDetails = function (req, res) {
  PRODUCTS.find()
    .then((result) => {
      console.log(result);
      res.send(result);
    })
    .catch((err) => {
      res.send(err);
    });
};

//function to add the INTERVIEW details
module.exports.addProductDetails = function (req, res) {
  console.log("request data-------------------------------------->");
  console.log(req.body);
  console.log("request data end-------------------------------------->");
  PRODUCTS.create(req.body)
    .then((result) => {
      console.log(result);
      res.json({ data: result });
    })
    .catch((err) => {
      res.send(err);
    });
};

//function to terminate the INTERVIEW
module.exports.deleteProduct = function (req, res) {
  console.log("delete request data-------------------------------------->");
  console.log(req.params.id);
  console.log("delete request data end-------------------------------------->");
  PRODUCTS.findByIdAndDelete({ _id: req.params.id })
    .then((result) => {
      console.log(result);
      res.json({
        data: {
          message: "product deleted",
        },
      });
    })
    .catch((err) => {
      res.send(err);
    });
};

//function to update the single INTERVIEW
module.exports.updateProductDetails = function (req, res) {
  console.log("update request data-------------------------------------->");
  console.log(`user want to update ${req.params.id} ${req.query.number}`);

  console.log("update request data end-------------------------------------->");

  PRODUCTS.findOneAndUpdate(
    { _id: req.params.id },
    {
      $inc: {
        quantity: parseInt(req.query.number),
      },
    }
  )
    .then((result) => {
      console.log(result);
      res.json({
        data: { result },
        message: "updated successfully",
      });
    })
    .catch((err) => {
      res.send(err);
    });
};
