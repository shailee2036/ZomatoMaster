import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  fullname: {type: String, required: true},
  email: {type: String, required: true},
  password: {type: String},
  address: [{deatail: {type: String}, for:{type: String}}],
  phoneNumber: [{type: String}]
});

export const UserModel = mongoose.model("Users", UserSchema);
