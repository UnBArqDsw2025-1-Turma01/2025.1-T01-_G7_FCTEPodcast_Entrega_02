import mongoose, { Schema } from "mongoose";

const ComentarioSchema = new Schema(
  {
    conteudo: {
      type: String,
      required: true,
    },
    autor: {
      type: Schema.Types.ObjectId,
      ref: "Aluno",
      required: true,
    },
    respostas: [
      {
        type: Schema.Types.ObjectId,
        ref: "Comentario",
        default: [],
      },
    ],
    likes: [
      {
        type: Schema.Types.ObjectId,
        ref: ["Aluno", "Professor"],
        default: [],
      },
    ],
    likes_qtd: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
    collection: "comentarios",
  }
);

const Comentario = mongoose.model("Comentario", ComentarioSchema);

export default Comentario;
