import {
  addToast,
  Button,
  Card,
  CardBody,
  CardHeader,
  Input,
  Link,
  Select,
  SelectItem,
} from "@heroui/react";
import logo from "../../assets/logo.png";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from "../../utils/constants";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [nome, setNome] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [senha, setSenha] = useState<string>("");
  const [confirmarSenha, setConfirmarSenha] = useState<string>("");
  const [tipoUsuario, setTipoUsuario] = useState<string>();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [errorEmail, setErrorEmail] = useState<boolean>(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (senha !== confirmarSenha) {
      setError(true);
      return;
    }

    setError(false);
  }, [senha, confirmarSenha]);

  useEffect(() => {
    const check_email_institucional = () => {
      if (email.trim() === "") {
        return true;
      }
      const regex = /^[^@\s]+@(aluno\.)?unb\.br$/;
      return regex.test(email);
    };

    if (check_email_institucional()) {
      setErrorEmail(false);
    } else {
      setErrorEmail(true);
    }
  }, [email]);

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);
    await axios
      .post(`${API_URL}/${tipoUsuario}/register`, {
        nome,
        email,
        senha,
      })
      .then((res) => {
        console.log(res);
        addToast({
          title: "Sucesso",
          description: res.data.message,
          color: "success",
        });
        setLoading(false);
        navigate("/login");
      })
      .catch((err) => {
        console.log(err);
        addToast({
          title: "Erro",
          description: err.response.data.message,
          color: "danger",
        });
        setLoading(false);
      });
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div>
        <img className="h-28" src={logo} />
      </div>

      <Card className="w-96 mt-4 p-2 ">
        <CardHeader className="flex flex-col items-center justify-center">
          <h1 className="font-bold text-2xl">Cadastro</h1>
        </CardHeader>

        <CardBody className="flex flex-col items-center justify-center gap-5">
          <form
            onSubmit={handleRegister}
            className="flex flex-col gap-10 w-[90%]"
          >
            <Select
              onChange={(e) => setTipoUsuario(e.target.value)}
              variant="underlined"
              label="Tipo de usuário"
            >
              <SelectItem key="aluno">Aluno</SelectItem>
              <SelectItem key="professor">Professor</SelectItem>
            </Select>

            <Input
              onChange={(e) => setNome(e.target.value)}
              variant="underlined"
              label="Nome"
              type="text"
            />
            <Input
              onChange={(e) => setEmail(e.target.value)}
              variant="underlined"
              label="Email Institucional"
              type="email"
              isInvalid={errorEmail}
              errorMessage="Email inválido"
            />
            <Input
              isInvalid={error}
              onChange={(e) => setSenha(e.target.value)}
              errorMessage="As senhas não coincidem"
              variant="underlined"
              label="Senha"
              type="password"
            />
            <Input
              errorMessage="As senhas não coincidem"
              onChange={(e) => setConfirmarSenha(e.target.value)}
              isInvalid={error}
              variant="underlined"
              label="Confirme sua senha"
              type="password"
            />

            <Button isLoading={loading} type="submit" color="primary">
              Cadastrar
            </Button>
          </form>

          <h2>Já tem conta?</h2>
          <Link href="/login">Faça login</Link>
        </CardBody>
      </Card>
    </div>
  );
};

export default Register;
