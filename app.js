const express = require("express");
const chalk = require("chalk");
const debug = require("debug")("app");
const morgan = require("morgan");
const path = require("path");
const products = require("./data/products.json");
const productRouter = express.Router();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(morgan("combined"));
app.use(express.static(path.join(__dirname, "/public/")));

app.set("views", "./src/views");
app.set("view engine", "ejs");

productRouter.route("/").get((req, res) => {
  res.render("products", {
    products: [
      {
        productName: "product 1",
        productPrice: 100,
        productDescription: "product 1 description",
      },
      {
        productName: "product 2",
        productPrice: 200,
        productDescription: "product 2 description",
      },
      {
        productName: "product 3",
        productPrice: 300,
        productDescription: "product 3 description",
      },
      {
        productName: "product 4",
        productPrice: 400,
        productDescription: "product 4 description",
      },
    ],
  });
});

productRouter.route("/1").get((req, res) => {
  res.send("Product page product 1");
});

app.use("/products", productRouter);

app.get("/", (req, res) => {
  res.render("index", {
    username: "John Doe",
    customers: ["john doe", "jane doe", "Jonh doe"],
  });
});

app.listen(PORT, () => {
  debug("Example app listening at http://localhost:%s", chalk.green(PORT));
});
