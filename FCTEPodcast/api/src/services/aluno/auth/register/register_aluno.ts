import { Request, Response } from "express";
import Aluno from "../../../../model/Aluno";
import bcrypt from "bcryptjs";
import OTPAluno from "../../../../model/OTP";
import { send_mail } from "../../../../utils/mail/send_mail";
import { FRONTEND_URL } from "../../../../utils/constants";

export const register_aluno = async (req: Request, res: Response) => {
  const { nome, email, senha } = req.body;

  if (!nome || !email || !senha) {
    res.status(400).json({ message: "Preencha todos os campos" });
    return;
  }

  const aluno = await Aluno.findOne({
    email: email,
  });
  if (aluno) {
    res.status(400).json({ message: "Email já cadastrado" });
    return;
  }
  const regex = /^[^@\s]+@(aluno\.)?unb\.br$/;
  if (!regex.test(email)) {
    res.status(400).json({
      message: "Email inválido. O email deve ser institucional.",
    });
    return;
  }

  const salt = await bcrypt.genSalt(10);
  const hashedSenha = await bcrypt.hash(senha, salt);

  const new_aluno = await Aluno.create({
    nome,
    email,
    senha: hashedSenha,
    monitor: false,
  });

  if (!new_aluno) {
    res.status(500).json({ message: "Erro ao criar aluno" });
    return;
  }

  const otp = Math.floor(100000 + Math.random() * 900000);
  const new_aluno_otp = await OTPAluno.create({
    email,
    otp,
    user_id: new_aluno._id,
  });

  if (!new_aluno_otp) {
    res.status(500).json({ message: "Erro ao criar OTP" });
    return;
  }

  await send_mail(
    `
      <p>Olá ${nome},</p>
      <p>Clique neste link para ativar sua conta:</p>
      <p><a href="${FRONTEND_URL}/conta/validar/${otp}">${FRONTEND_URL}/conta/validar/${otp}</a></p>
      <p>O link é válido por 5 minutos.</p>
      <p>Se não foi você, ignore.</p>
      <p>– Equipe FCTEPodcast</p>
    `,
    "Verificação de email",
    email
  );

  res.status(201).json({
    message: "Aluno criado com sucesso",
  });
};
