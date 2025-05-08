import mongoose, { Schema } from "mongoose";

const AlunoSchema = new Schema({
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
    monitor: {
        type: Boolean,
        default: false,
    },
    turma: {
        type: String,
    },
    ativo: {
        type: Boolean,
        default: false,
    }
}, {
    collection: "alunos",
    timestamps: true,
});

const Aluno = mongoose.model("Aluno", AlunoSchema);

export default Aluno;