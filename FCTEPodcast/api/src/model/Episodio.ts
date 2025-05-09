import mongoose, { Schema } from "mongoose";

const EpisodioSChema = new Schema(
  {
    titulo: {
      type: String,
      required: true,
    },
    descricao: {
      type: String,
      required: true,
    },
    audio_path: {
      type: String,
      required: true,
    },
    comentarios: [
      {
        type: Schema.Types.ObjectId,
        ref: "Comentario",
        default: [],
      },
    ],
    comentarios_qtd: {
      type: Number,
      default: 0,
    },
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
  }
);

const Episodio = mongoose.model("Episodio", EpisodioSChema);

export default Episodio;
