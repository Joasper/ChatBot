const express = require("express");
const cors = require("cors");
const serveStatic = require("serve-static");
const main = require("./app");
const path = require("path");

const app = express();

app.use(serveStatic(path.join(__dirname, "public")));
app.use(cors());

main();

app.listen(4001, () => {
  console.log("Servidor Montado");
});
