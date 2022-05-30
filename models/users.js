const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
});
// mongoose.model(modelName, Schema)
const User = mongoose.model("users", userSchema);

module.exports = User;
