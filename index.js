const express = require("express");
const cors = require("cors");
const main = require("./app");

const app = express();
app.use(cors());

main();

app.use(express.static("Public"));

app.listen(4001, () => {
  console.log("Servidor Montado");
});
