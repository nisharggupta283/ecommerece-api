const mongoose = require("mongoose");

const PRODUCT_SCHEMA = new mongoose.Schema(
  {
    name:{
      type:String,
      require:true
    },
    quantity: {
      type:Number,
      require:true
    },
    description: String,
    price: String,
    brand: String,
    expiry: String,
    mfd: String,
  },
  {
    timestamps: true,
  }
);
module.exports.PRODUCTS = mongoose.model(
  "PRODUCT_SCHEMA",
  PRODUCT_SCHEMA
);
