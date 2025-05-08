import express from "express";
import { register_aluno } from "../../services/aluno/auth/register/register_aluno";
import { validar_otp } from "../../services/aluno/auth/validat_otp/validar_otp";

const aluno_router = express.Router();

aluno_router.get("/", (req, res) => {
  res.send("Rota de Aluno");
});

// AUTH
aluno_router.post("/register", register_aluno);
aluno_router.post("/validar-otp/:otp", validar_otp);

export default aluno_router;
