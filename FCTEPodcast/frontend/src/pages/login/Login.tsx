import { Button, Card, CardBody, CardHeader, Input, Link } from "@heroui/react";
import logo from "../../assets/logo.png";
import { useState } from "react";
import { useAuth } from "../../context/auth/AuthContext";

const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [senha, setSenha] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const { login } = useAuth();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    await login(email, senha);
    setLoading(false);
  };
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div>
        <img className="h-28" src={logo} />
      </div>
      <Card className="w-96 mt-4 p-2">
        <CardHeader className="flex items-center justify-center">
          <h1 className="font-bold text-2xl">Login</h1>
        </CardHeader>

        <CardBody className="flex flex-col items-center justify-center gap-5">
          <form onSubmit={handleLogin} className="flex flex-col gap-10 w-[90%]">
            <Input
              variant="underlined"
              label="Email"
              placeholder="example@email.com"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />

            <Input
              variant="underlined"
              label="Senha"
              type="password"
              placeholder="********"
              onChange={(e) => setSenha(e.target.value)}
              value={senha}
            />

            <Button isLoading={loading} type="submit" color="primary">
              Login
            </Button>
          </form>

          <h2>Ainda não tem conta?</h2>
          <Link href="/register">Cadastre-se</Link>
        </CardBody>
      </Card>
    </div>
  );
};

export default Login;
