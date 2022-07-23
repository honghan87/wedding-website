const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const cors = require("cors");
const path = require("path");
const messageTemplateCopy = require("./clientmessage/models/clientMessage");

// Initializing express
const app = express();

dotenv.config();

// Connecting to mongoDB
mongoose.connect(process.env.DATABASE_ACCESS, () => {
  console.log("Database connected");
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.post("/", (req, res) => {
  const client = new messageTemplateCopy({
    name: req.body.name,
    mobile: req.body.mobile,
    email: req.body.email,
    message: req.body.message,
  });
  client
    .save()
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      res.json(error);
    });
});

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/client/build")));
  app.get("*", (req, res) => {
    res.sendFile(`${__dirname}/client/build/index.html`);
  });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
