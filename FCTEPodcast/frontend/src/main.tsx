import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { HeroUIProvider, ToastProvider } from "@heroui/react";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/auth/AuthContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <HeroUIProvider>
        <main className="dark text-foreground bg-background h-screen">
          <ToastProvider placement="top-right" />
          <AuthProvider>
            <App />
          </AuthProvider>
        </main>
      </HeroUIProvider>
    </BrowserRouter>
  </StrictMode>
);
