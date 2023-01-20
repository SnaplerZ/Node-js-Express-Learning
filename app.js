const express = require("express");
const chalk = require("chalk");
const debug = require("debug")("app");
const morgan = require("morgan");
const path = require("path");
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
        name: "product 1",
        price: 100,
        description: "product 1 description",
      },
      {
        name: "product 2",
        price: 200,
        description: "product 2 description",
      },
      {
        name: "product 3",
        price: 300,
        description: "product 3 description",
      },
      {
        name: "product 4",
        price: 400,
        description: "product 4 description",
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
