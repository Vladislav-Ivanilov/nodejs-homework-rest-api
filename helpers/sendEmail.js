/* eslint-disable no-useless-catch */
const sqMail = require("@sendgrid/mail");
require("dotenv").config();

const { SENDGRID_API_KEY } = process.env;

sqMail.setApiKey(SENDGRID_API_KEY);

const sendEmail = async (data) => {
  const email = { ...data, from: "vladbkt@gmail.com" };
  try {
    await sqMail.send(email);
    return true;
  } catch (error) {
    throw error;
  }
};

module.exports = { sendEmail };
