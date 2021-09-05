const router = require("express").Router();
const nodemailer = require("nodemailer");
require("dotenv").config();

router.post("/sendMessage", async (req, res) => {
  let { email, firstName, lastName, phone, websiteType, message } = req.body;
  if (!email || !firstName || !lastName || !phone || !websiteType || !message) {
    return res.status(400).json({ msg: "Not all fields have been entered" });
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      type: "OAuth2",
      user: "thewardbunch@gmail.com",
      clientId: process.env.GMAIL_CLIENT_ID,
      clientSecret: process.env.GMAIL_CLIENT_SECRET,
      refreshToken: process.env.GMAIL_REFRESH_TOKEN,
      accessToken: process.env.GMAIL_ACCESS_TOKEN,
    },
  });
  const mailOptions = {
    from: req.body.email,
    to: "thewardbunch@gmail.com",
    subject: `Message from ${req.body.email}: ${req.body.websiteType}`,
    text: req.body.message,
  };
  console.log(mailOptions, process.env.GMAIL_REFRESH_TOKEN);
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.send("error");
    } else {
      console.log(`Email sent: ` + info.response);
      res.status(200).send();
    }
  });
});

module.exports = router;
