import mongoose from "mongoose";
import { Schema } from "mongoose";

const ORTProfessorSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      expires: 300, // 5 minutes
    },
    otp: {
      type: String,
      required: true,
    },
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Aluno",
      required: true,
    },
  },
  {
    collection: "otp",
    timestamps: true,
  }
);

const OTPProfessor = mongoose.model("OTPProfessor", ORTProfessorSchema);

export default OTPProfessor;
