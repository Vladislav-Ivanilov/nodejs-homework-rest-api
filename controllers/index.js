const { getContactsList } = require("./getContactsList");
const { getContact } = require("././getContact");
const { deleteContact } = require("./deleteContact");
const { createContact } = require("./createContact");
const { changeContact } = require("./changeContact");
const { updateStatus } = require("./updateStatus");

module.exports = {
  getContactsList,
  getContact,
  deleteContact,
  createContact,
  changeContact,
  updateStatus,
};
