const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();
const userRoute = require("./routes/users.js");

require("dotenv/config");

app.use(bodyParser.json());
app.use("/api/users", userRoute);

mongoose.connect(process.env.DB_LINK, { useCreateIndex: true }, () =>
  console.log("DB connected")
);

app.listen(process.env.PORT, console.log("Server is running"));
