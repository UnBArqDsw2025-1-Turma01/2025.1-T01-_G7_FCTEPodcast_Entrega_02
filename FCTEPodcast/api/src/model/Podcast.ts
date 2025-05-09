import mongoose, { Schema } from "mongoose";

const TagSchema = new Schema({
  nome: {
    type: String,
    required: true,
  },
  codigo: {
    type: String,
    required: true,
  },
});

const PodcastSchema = new Schema({
  nome: {
    type: String,
    required: true,
  },
  imagem: {
    type: String,
    required: true,
  },
  descricao: {
    type: String,
    required: true,
  },
  tags: [
    {
      type: TagSchema,
      required: true,
    },
  ],
  autores: [
    {
      type: Schema.Types.ObjectId,
      ref: "Professor",
    },
  ],
  episodios: [
    {
      type: Schema.Types.ObjectId,
      ref: "Episodio",
      default: [],
    },
  ],
  monitores: [
    {
      type: Schema.Types.ObjectId,
      ref: "Aluno",
      default: [],
    },
  ],
  convidados: [
    {
      type: String,
      default: [],
    },
  ],
});

const Podcast = mongoose.model("Podcast", PodcastSchema);

export default Podcast;
