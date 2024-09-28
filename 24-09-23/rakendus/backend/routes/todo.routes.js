const express = require("express");
const router = express.Router();
const todoController = require("../controllers/todo.controller");
const {
  todoRouteMiddleware,
  todoGetRouteMiddleware,
} = require("../middlewares/todo.middlewares");

router.use(todoRouteMiddleware);

// /cats/ Get endpoint level middleware
router.get("/", todoGetRouteMiddleware, todoController.read);
router.post("/", todoController.create);
router.put("/:index", todoController.update);
router.delete("/:index", todoController.delete);

module.exports = router;
