const { User } = require("../../models");
const { Unauthorized } = require("http-errors");

const logout = async (req, res) => {
  const { _id } = req.user;
  const user = await User.findById(_id);
  if (!user) {
    throw Unauthorized("Not authorized");
  }
  await User.findByIdAndUpdate(_id, { token: null });

  res.status(204).json({
    massage: "Success logout",
  });
};

module.exports = logout;
