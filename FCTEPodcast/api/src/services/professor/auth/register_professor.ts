import { Request, Response } from "express";
import Professor from "../../../model/Professor";
import OTPProfessor from "../../../model/OTPProfessor";
import { send_mail } from "../../../utils/mail/send_mail";
import { FRONTEND_URL } from "../../../utils/constants";

export const register_professor = async (req: Request, res: Response) => {
  const { nome, email, senha } = req.body;
  if (!nome || !email || !senha) {
    res.status(400).json({ message: "Preencha todos os campos" });
    return;
  }

  // Verifica se o email já existe
  const professor = await Professor.findOne({
    email: email,
  });
  if (professor) {
    res.status(400).json({ message: "Email já cadastrado" });
    return;
  }

  // Verifica se o email é institucional
  const regex = /^[^@\s]+@(\.)?unb\.br$/;
  if (!regex.test(email)) {
    res
      .status(400)
      .json({ message: "Email inválido. O email deve ser institucional." });
    return;
  }

  // Cria o professor
  const new_professor = await Professor.create({
    nome,
    email,
    senha,
  });
  if (!new_professor) {
    res.status(500).json({ message: "Erro ao criar professor" });
    return;
  }

  const otp = Math.floor(100000 + Math.random() * 900000);
  const otp_professor = await OTPProfessor.create({
    email,
    otp,
    user_id: new_professor._id,
  });
  if (!otp_professor) {
    res.status(500).json({ message: "Erro ao criar OTP" });
    return;
  }

  // Envia o email
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

  res.status(200).json({
    message:
      "Professor criado com sucesso! Verifique seu email para ativar sua conta.",
  });
};
