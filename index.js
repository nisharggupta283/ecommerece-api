//App required imports
const express = require("express");
const bodyParser = require("body-parser");

//My imports
const productRouter = require("./z-router/productRouter");
//Start of Express
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.raw());


app.use("/products", productRouter);

//Start of server
app.listen(8080, function (err) {
  if (err) {
    console.log(
      "Error Occured----------------------------------------------------------------"
    );
    console.log(err);
    console.log(
      "Error Ocuured End-----------------------------------------------------------------"
    );
    return;
  }
  console.log("Server running at port 8080");
});
