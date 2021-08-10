require('dotenv').config();

const express = require("express");
const app = express();
const port = process.env.PORT;

app.get("/", (req, res) => {
  res.send("Olá Pessoal!");
});

app.listen(port, () => {
  console.log(`Aplicação sendo executada na porta: ${port}`);
});
