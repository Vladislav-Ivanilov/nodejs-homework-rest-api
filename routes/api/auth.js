const express = require("express");
const { validation, control, verify } = require("../../middlewares/");
const {
  auth: { register, login, logout },
} = require("../../controllers/");
const { registerSchema, loginSchema } = require("../../schemas/joiSchema");

const router = express.Router();

router.post("/register", validation(registerSchema), control(register));
router.post("/login", validation(loginSchema), control(login));
router.get("/logout", verify, control(logout));

module.exports = router;
