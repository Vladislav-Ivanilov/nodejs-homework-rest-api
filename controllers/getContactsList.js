const { Contact } = require("../models/contactModel");

const getContactsList = async (req, res) => {
  const result = await Contact.find({});
  res.json(result);
};

module.exports = { getContactsList };
