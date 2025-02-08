//index.js
require("dotenv").config();
const express = require("express");

const mongoose = require("mongoose");
const productRoutes = require("./routes/product.route.js");
const app = express();
const Product = require("./models/product.models");

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Routes
app.use("/api/products", productRoutes);

app.get("/", (req, res) => {
  res.send("Hello from node API ");
});

mongoose
  .connect(
 process.env.MONGO_URL
  )

  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })

  .catch(() => {
    console.log("Error connecting to MongoDB:");
  });
