const express = require("express");
const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const contactsRoute = require("./routes/contacts.routes");

app.get("/", (req, res) => {
  res.send("Welcome to the yellowpages api");
});

app.use("/", contactsRoute);

module.exports = app;
