const express = require("express");
const router = express.Router();

const roomsController = require("../controllers/roomsController");

router.get("/", roomsController.index);

router.post("/create", roomsController.create_post);

router.get("/:id", roomsController.detail);

router.delete("/:id", roomsController.delete);

module.exports = router;
