import express from "express";
import morgan from "morgan";
import cors from "cors";
import router from "express";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
import path from "path";
// initialize server
const app = express();

// declare server
const SERVER_PORT = process.env.PORT || 5000;

// middleware
app.use(express.json());
app.use(cors());
app.use(morgan(":method :url :response-time"));

// establish message route
app.use("/api", router);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    const _dirname = path.dirname(new URL(import.meta.url).pathname);
    res.sendFile(path.resolve(_dirname, "client", "build", "index.html"));
  });
} else {
  app.get("/api", (req, res) => {
    res.send("Hello");
  });
}

// show server is listening
app.listen(SERVER_PORT, () => {
  console.log(`the server has started on port : ${SERVER_PORT}`);
});

app.post("/sendMessage", async (req, res) => {
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
