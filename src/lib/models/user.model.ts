import mongoose, { Schema, model, models } from "mongoose";

const UserSchema = new Schema(
  {
    fullname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["student", "recruiter"],
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    bio: {
      type: String,
    },
    skills: [{ type: String }],
    resume: {
      type: String, // URL to resume
    },
    resumeOriginalName: {
      type: String,
    },
    company: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Company",
    },
    profilePhoto: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

export const User = models.User || model("User", UserSchema);
