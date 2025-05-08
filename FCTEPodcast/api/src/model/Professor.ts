import mongoose, { Schema } from "mongoose";

const ProfessorSchema = new Schema(
  {
    nome: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    senha: {
      type: String,
      required: true,
    },
    ativo: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true, collection: "professores" }
);

const Professor = mongoose.model("Professor", ProfessorSchema);

export default Professor;
