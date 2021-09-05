const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

// initialize server
const app = express();

// declare server
const PORT = process.env.PORT || 5000;

// middleware
app.use(express.json());
app.use(cors());
app.use(morgan(":method :url :response-time"));

// establish message route
app.use("/api", require("./routes/routes"));

// show server is listening
app.listen(PORT, () => {
  console.log(`the server has started on port : ${PORT}`);
});
