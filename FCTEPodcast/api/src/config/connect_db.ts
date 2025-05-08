import mongoose from "mongoose"
import { MONGO_URL } from "../utils/constants";

export const connect_db = async () => {
    try {
        await mongoose.connect(MONGO_URL);
        console.log('Conectado ao banco de dados');
    } catch (err) {
        console.error('Erro ao conectar ao banco de dados', err);
    }
}