const { Schema, model } = require("mongoose");
const PLM = require("passport-local-mongoose");

const userSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: { type: String, required: true },
  role: {
    type: String,
    enum: [parent, government, owner]
  }
});

userSchema.plugin(PLM, { usernameField: "email" });

module.exports = model("User", userSchema);
