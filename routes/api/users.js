const express = require("express");
const { control, verify, upload } = require("../../middlewares/");
const {
  users: { getCurrent, updateAvatar, verifyEmail, resendEmail },
} = require("../../controllers/");

const router = express.Router();

router.get("/current", verify, control(getCurrent));
router.patch(
  "/avatars",
  verify,
  upload.single("avatar"),
  control(updateAvatar)
);
router.get("/verify/:verificationToken", control(verifyEmail));
router.post("/verify", control(resendEmail));

module.exports = router;
