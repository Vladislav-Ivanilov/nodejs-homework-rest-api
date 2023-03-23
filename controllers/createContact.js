const { Contact } = require("../models/contactModel");

const createContact = async (req, res) => {
  const result = await Contact.create(req.body);
  res.status(201).json(result);
};

module.exports = { createContact };
