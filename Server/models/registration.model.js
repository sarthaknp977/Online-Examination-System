import mongoose from "mongoose";
const registrationSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
    maxlength: 20,
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
  verificationCode: {
    type: String,
  },
  userRole: {
    type: String,
    required: true,
    enum: ["admin", "user","teacher"],
    default: "user",
  },
});
export const registrationModel = mongoose.model(
  "registration_detail",
  registrationSchema
);
