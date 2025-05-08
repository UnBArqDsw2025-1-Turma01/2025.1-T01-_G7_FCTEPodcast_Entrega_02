import { Request, Response } from "express";
import Aluno from "../../model/Aluno";
import Professor from "../../model/Professor";
import bcrypt from "bcryptjs";

export const login = async (req: Request, res: Response) => {
  const { email, senha } = req.body;
  if (!email || !senha) {
    res.status(400).json({ message: "Preencha todos os campos" });
    return;
  }

  // Verifica se o usuário existe
  const aluno = await Aluno.findOne({ email });
  const professor = await Professor.findOne({ email });
  if (!aluno && !professor) {
    res.status(401).json({ message: "Usuário não encontrado" });
    return;
  }
  // Verifica se a senha está correta
  if (aluno) {
    if (!aluno.ativo) {
      res
        .status(401)
        .json({ message: "Usuário não ativo, verifique seu email." });
      return;
    }

    if (!(await bcrypt.compare(senha, aluno.senha))) {
      res.status(401).json({ message: "Senha incorreta" });
      return;
    }
    res.status(200).json({
      message: "Login realizado com sucesso",
      user: {
        id: aluno.id,
        nome: aluno.nome,
        email: aluno.email,
        tipo: "aluno",
      },
    });
  }

  if (professor) {
    if (!professor.ativo) {
      res
        .status(401)
        .json({ message: "Usuário não ativo, verifique seu email." });
      return;
    }

    if (!(await bcrypt.compare(senha, professor.senha))) {
      res.status(401).json({ message: "Senha incorreta" });
      return;
    }
    res.status(200).json({
      message: "Login realizado com sucesso",
      user: {
        id: professor.id,
        nome: professor.nome,
        email: professor.email,
        tipo: "professor",
      },
    });
  }
};
