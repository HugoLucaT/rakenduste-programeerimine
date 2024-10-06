const express = require("express");
const cors = require("cors");
const catsRoutes = require("./routes/cats.routes");
const todoRoutes = require("./routes/todo.routes");
const jwtRoutes = require("./routes/jwt.routes");
//const exampleRoutes = require("./routes/examples.routes");
const app = express();
const port = 8080;
app.use(cors());

app.use(express.json());

app.use("/cats", catsRoutes);
//app.use("/examples", exampleRoutes);

app.use("/todo", todoRoutes);

app.use("/jwt", jwtRoutes);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
