const express = require("express");
const app = express();
const port1 = 3000;
const port2 = 4000;
let calculatorRoute = require("./routes/calculatorRoute");

const swaggerUi = require('swagger-ui-express');
swaggerDocument = require('./swagger.json');
app.use(
'/api-docs',
swaggerUi.serve,
swaggerUi.setup(swaggerDocument)
);

app.use("/calculator", calculatorRoute);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port1, () => {
  console.log(`Web server running at localhost:${port1}`);
});

app.listen(port2, () => {
  console.log(`Web server running at localhost:${port2}`);
});

app.use("/", express.static("public"));

app.get("/test", (req, res) => {
  res.send("Hello World!");
});
