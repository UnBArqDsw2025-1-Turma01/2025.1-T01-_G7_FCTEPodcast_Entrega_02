import express from "express";
import aluno_router from "./aluno/aluno_router";
import { login } from "../services/auth/login";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("API is running...");
});

router.use("/aluno", aluno_router);
router.post("/auth/login", login);

export default router;
