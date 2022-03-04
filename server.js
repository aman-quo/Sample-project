import express  from "express";
import dbConfig from "./backend/config/database.config.js";
import {logger}  from "./backend/logger/logger.js";
import cors from "cors";
import dotenv from "dotenv"
dotenv.config({path:"./backend/.env"});

const app = express();
app.use(cors());
app.use(express.json());
dbConfig.connection();
app.get("/", (req, res) => {
    res.json({ message: "Welcome to Social-Directory application.", });
});
app.listen(process.env.PORT, () => {
    logger.info("Server start");
    logger.info("Server is listening");
});
export default app;