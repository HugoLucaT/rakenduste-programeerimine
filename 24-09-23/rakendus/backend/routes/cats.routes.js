const express = require("express");
const { query } = require("express-validator");
const router = express.Router();
const catsController = require("../controllers/cats.controller");
const {
  catsRouteMiddleware,
  catsGetRouteMiddleware,
} = require("../middlewares/cats.middlewares");

router.use(catsRouteMiddleware);

// /cats/ Get endpoint level middleware
router.get("/", catsGetRouteMiddleware, catsController.read);
router.post("/", query("req.body").notEmpty(), catsController.create);
router.put("/:id", query("req.body").notEmpty(), catsController.update);
router.delete("/:id", catsController.delete);

module.exports = router;
