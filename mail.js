const nodemailer = require("nodemailer");
const mailGun = require("nodemailer-mailgun-transport");
require('dotenv').config();

const auth = {
  auth: {
    api_key: process.env.API_KEY,
    domain: process.env.DOMAIN,
  },
};

const transporter = nodemailer.createTransport(mailGun(auth));

const sendMail = async (name, email, desc) => {
  try {
    const mailOptions = {
      sender: name,
      from: email,
      to: "jarihant701@gmail.com",
      subject: "Someone submitted the Contact Form",
      text: desc,
    };

    const res = await transporter.sendMail(mailOptions);
    return res;
  } catch (e) {
    console.log(e);
    return e;
  }
};
// Exporting the sendmail
module.exports = sendMail;
