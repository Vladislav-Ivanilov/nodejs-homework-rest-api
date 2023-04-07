const bcrypt = require("bcryptjs");
const gravatar = require("gravatar");
const { Conflict } = require("http-errors");
const { User } = require("../../models");

const register = async (req, res) => {
  const { name, email, password } = req.body;
  const user = await User.findOne({ email });

  if (user) {
    throw new Conflict("Email in use");
  }
  const avatarURL = gravatar.url(email);
  const hashPassword = await bcrypt.hash(password, bcrypt.genSaltSync(10));
  const result = await User.create({
    name,
    email,
    password: hashPassword,
    avatarURL,
  });

  res.status(201).json({
    user: {
      name: result.name,
      email: result.email,
      avatarURL,
    },
  });
};

module.exports = register;
