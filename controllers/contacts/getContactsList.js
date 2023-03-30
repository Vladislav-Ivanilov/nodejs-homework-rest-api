const { Contact } = require("../../models");

const getContactsList = async (req, res) => {
  const { _id } = req.params;
  const { page = 1, limit = 10 } = req.query;
  const skip = (page - 1) * limit;
  const result = await Contact.find({ owner: _id }, "", {
    skip,
    limit: Number(limit),
  }).populate("owner", "_id name email phone favorite");
  res.json(result);
};

module.exports = { getContactsList };
