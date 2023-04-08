const express = require("express");
const { control, verify, upload } = require("../../middlewares/");
const {
  users: { getCurrent, updateAvatar },
} = require("../../controllers/");

const router = express.Router();

router.get("/current", verify, control(getCurrent));
router.patch(
  "/avatars",
  verify,
  upload.single("avatar"),
  control(updateAvatar)
);

module.exports = router;
