import { addToast, Spinner } from "@heroui/react";
import { createContext, useContext, useState } from "react";
import { UserType } from "../../utils/types/UserType";
import axiosInstance from "../../utils/axiosInstance/AxiosInstance";

interface AuthContextType {
  user: UserType | null;
  login: (email: string, senha: string) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<UserType | null>(null);
  const [loading] = useState<boolean>(false);

  console.log(user);

  const login = async (email: string, senha: string) => {
    await axiosInstance
      .post("/auth/login", { email, senha })
      .then((response) => {
        setUser(response.data.user);
        addToast({
          title: "Login realizado com sucesso",
          description: `Bem-vindo, ${response.data.user.nome}!`,
          color: "success",
        });
      })
      .catch((error) => {
        console.error("Login failed:", error);
        addToast({
          title: "Erro ao fazer login",
          description: error.response?.data.message || "Erro desconhecido",
          color: "warning",
        });
      });
  };

  return (
    <AuthContext.Provider value={{ user, login }}>
      {loading ? (
        <div className="h-screen flex items-center justify-center">
          <Spinner size="lg" />
        </div>
      ) : (
        children
      )}
    </AuthContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
