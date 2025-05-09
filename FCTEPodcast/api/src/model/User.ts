import mongoose, { Schema } from "mongoose";

const BaseUserSchema = new Schema(
  {
    nome: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    senha: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["PROFESSOR", "ALUNO"],
    },
    playlists: [
      {
        type: Schema.Types.ObjectId,
        ref: "Playlist",
      },
    ],
    curtidas: [
      {
        type: Schema.Types.ObjectId,
        ref: "Curtida",
      },
    ],
    podcasts_seg: [
      {
        type: Schema.Types.ObjectId,
        ref: "Podcast",
      },
    ],
    ativo: {
      type: Boolean,
      default: false,
    },
  },
  {
    collection: "Usuarios",
    timestamps: true,
  }
);

const User = mongoose.model("User", BaseUserSchema);

const Aluno = User.discriminator(
  "Aluno",
  new Schema({
    monitor_pod: [
      {
        type: Schema.Types.ObjectId,
        ref: "Monitor",
      },
    ],
  })
);

const Professor = User.discriminator(
  "Professor",
  new Schema({
    podcasts: [
      {
        type: Schema.Types.ObjectId,
        ref: "Podcast",
      },
    ],
  })
);

export { User, Aluno, Professor };
