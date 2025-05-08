import mongoose, { Schema } from "mongoose";

const OTPAlunoSchema = new Schema({
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
    user_id : {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Aluno",
        required: true,
    }
}, {
    collection: "otp",
    timestamps: true,
});

const OTPAluno = mongoose.model("OTP", OTPAlunoSchema);

export default OTPAluno;