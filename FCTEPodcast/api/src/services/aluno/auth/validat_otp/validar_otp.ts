import { Request, Response } from "express";
import OTPAluno from "../../../../model/OTP";
import Aluno from "../../../../model/Aluno";

export const validar_otp = async (req: Request, res: Response) => {
  const { otp } = req.params;

  const find_otp = await OTPAluno.findOne({
    otp: otp,
  });

  if (find_otp) {
    const aluno = await Aluno.findById(find_otp.user_id);
    if (!aluno) {
      res.status(400).json({ message: "Usuário não encontrado!" });
      return;
    }
    if (aluno.ativo) {
      res.status(400).json({ message: "Usuário já verificado!" });
      return;
    }
    aluno.ativo = true;
    await aluno.save();

    await OTPAluno.deleteOne({
      otp: otp,
    });
    res.status(200).json({ message: "Cadastro ativado com sucesso!" });
    return;
  }

  res.status(400).json({ message: "OTP inválido!" });
  return;
};
