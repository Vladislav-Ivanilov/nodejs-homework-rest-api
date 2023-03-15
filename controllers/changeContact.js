const { updateContact } = require("../models/contacts");
const { schema } = require("../schemas/joiSchema");

const changeContact = async (req, res, next) => {
  try {
    const { error } = schema.validate(req.body);
    if (error) {
      return res.status(500).json({ message: "Missing fields" });
    }

    const { contactId } = req.params;
    const { name, email, phone } = req.body;

    const update = await updateContact(contactId, { name, email, phone });

    !update
      ? res.status(404).json({ message: `Contact ${contactId} not found` })
      : res.status(200).json(update);
  } catch (error) {
    next(error);
  }
};
module.exports = { changeContact };
