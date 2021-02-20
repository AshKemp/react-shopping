const dotenv = require("dotenv");
const express = require("express");
const products = require("./data/products");
const connectDB = require("./config/db");
const colors = require("colors");
const productRoutes = require("./routes/productRoutes");

dotenv.config();

connectDB();

const app = express();

app.get("/", (req, res) => {
  res.send("API is running..");
});

app.use("/api/products", productRoutes);

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `Server is running in ${process.env.NODE_ENV} on port ${PORT}`.yellow.bold
  )
);
