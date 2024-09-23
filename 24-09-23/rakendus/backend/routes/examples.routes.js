const express = require("express");
const app = express();

app.get("/ab+cd", (req, res) => {
  res.send("Tekst");
});

app.get("/users/:userId/books/:bookId", (req, res) => {
  res.send(req.params);
});

app.get("/flights/:from-:to", (req, res) => {
  res.send(req.params);
});
