const express = require("express");
const { validation, control, verify } = require("../../middlewares");
const {
  schema,
  schemaUpdate,
  updateFavoriteSchema,
} = require("../../schemas/joiSchema");

const {
  contacts: {
    getContactsList,
    getContact,
    createContact,
    deleteContact,
    changeContact,
    updateStatus,
  },
} = require("../../controllers");
const router = express.Router();

router.get("/", verify, control(getContactsList));

router.get("/:contactId", control(getContact));

router.post("/", verify, validation(schema), control(createContact));

router.delete("/:contactId", control(deleteContact));

router.put("/:contactId", validation(schemaUpdate), control(changeContact));

router.patch(
  "/:contactId/favorite",
  validation(updateFavoriteSchema),
  control(updateStatus)
);

module.exports = router;
