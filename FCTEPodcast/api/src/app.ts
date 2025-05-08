import express from "express";
import cors from "cors";
import { configDotenv } from "dotenv";
import router from "./router/router";
import { RESEND_API_KEY } from "./utils/constants";
import { connect_db } from "./config/connect_db";
configDotenv();

const app = express();
const PORT = process.env.API_PORT || 3000;

const allowed_origins = process.env.CORS_ALLOWED_ORIGINS?.split(',');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
    origin: (origin, callback) => {
        if (!origin || allowed_origins?.includes(origin)) {
            callback(null, true); // Permite a origem
        } else {
            callback(new Error('CORS não permitido'), false); // Bloqueia a origem
        }
    },
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
}));
app.use('/', router);
connect_db();

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
    console.log(`Acesse a API em http://localhost:${PORT}`);
});