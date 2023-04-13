const bcrypt = require("bcryptjs");
const gravatar = require("gravatar");
const { uuid } = require("uuid");
const { Conflict } = require("http-errors");
const { User } = require("../../models");
const { sendEmail } = require("../../helpers/");

const register = async (req, res) => {
  const { name, email, password } = req.body;
  const user = await User.findOne({ email });

  if (user) {
    throw new Conflict("Email in use");
  }
  const avatarURL = gravatar.url(email);
  const hashPassword = await bcrypt.hash(password, bcrypt.genSaltSync(10));
  const verificationToken = uuid();
  const result = await User.create({
    name,
    email,
    password: hashPassword,
    avatarURL,
    verificationToken,
  });

  const mail = {
    to: email,
    subject: "Підтвердження пошти",
    http: `<a target="_blank" href="http://localhost:3000/api/auth/verify/${verificationToken}">Підтвердити email</a>`,
  };
  await sendEmail(mail);

  res.status(201).json({
    user: {
      name: result.name,
      email: result.email,
      avatarURL,
      verificationToken,
    },
  });
};

module.exports = register;
