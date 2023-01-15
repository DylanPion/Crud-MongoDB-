const express = require("express");

const router = express.Router();

const blogCtrl = require("../controllers/blog");

router.post("/", blogCtrl.createThing);

router.put("/:id", blogCtrl.modifyThing);

router.delete("/:id", blogCtrl.deleteThing);

router.get("/:id", blogCtrl.getOneThing);

router.get("/blog", blogCtrl.getAllThing);

module.exports = router;
