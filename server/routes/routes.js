const router = require("express").Router();
const nodemailer = require("nodemailer");
const xoauth2 = require("xoauth2");

router.post("/sendMessage", async (req, res) => {
  let { email, firstName, lastName, phone, websiteType, message } = req.body;
  if (!email || !firstName || !lastName || !phone || !websiteType || !message) {
    return res.status(400).json({ msg: "Not all fields have been entered" });
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      xoauth2: xoauth2.createXOAuth2Generator({
        user: "thewardbunch@gmail.com",
        clientId: process.env.GMAIL_CLIENT_ID,
        clientSecret: process.env.GMAIL_CLIENT_SECRET,
        refreshToken: "",
      }),
    },
  });
  const mailOptions = {
    from: req.body.email,
    to: "thewardbunch@gmail.com",
    subject: `Message from ${req.body.email}: ${req.body.websiteType}`,
    text: req.body.message,
  };
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
