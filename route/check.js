const express = require("express");
const router = express.Router();
const checkController = require("../controller/check");

router.post("/check", checkController.check);
module.exports = router;