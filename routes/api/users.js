const express = require("express");
const { control, verify } = require("../../middlewares/");
const {
  users: { getCurrent },
} = require("../../controllers/");

const router = express.Router();

router.get("/current", verify, control(getCurrent));

module.exports = router;
