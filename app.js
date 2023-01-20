const express = require("express");
const chalk = require("chalk");
const debug = require("debug")("app");
const morgan = require("morgan");

const app = express();
const port = 3001;

app.use(morgan("combined"));

app.get("/", (req, res) => {
  res.send(
    "Hello World! Eula When? I hope 80 roll is enough for me to get her."
  );
});

app.listen(port, () => {
  debug("Example app listening at http://localhost:%s", chalk.green(port));
});
