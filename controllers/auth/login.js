const { Unauthorized } = require("http-errors");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const { User } = require("../../models");

const { SECRET_KEY } = process.env;

const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  const passwordCompare = await bcrypt.compare(password, user.password);

  if (!user || !user.verify || !passwordCompare) {
    throw new Unauthorized(
      "Email is wrong or not verification or password is wrong"
    );
  }

  const payload = {
    id: user._id,
  };

  const token = jwt.sign(payload, SECRET_KEY, { expiresIn: "1h" });

  await User.findByIdAndUpdate(user._id, { token });
  res.status(200).json({
    token,
    user: {
      email,
      subscription: user.subscription,
    },
  });
};

module.exports = login;
