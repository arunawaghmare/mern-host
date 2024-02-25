import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { dbConnection } from './database/dbConnection.js';
import {errorMiddleware} from './error/error.js';
import router from './routes/reservationRoute.js';
import path from "path";
import { fileURLToPath } from "url";
//
const __filename=fileURLToPath(import.meta.url)
const __dirname=path.dirname(__filename)
//
const app=express()


app.use
(cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["POST"],
    credentials: true,
})
);
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use('/api/v1/reservation',router);
//
app.use(express.static(path.join(__dirname,'./frontend/dist')))
app.get('*',(req,res)=>
    res.sendFile(path.join(__dirname,'./frontend/dist/index.html'))
);
//

dotenv.config({path: "./config/.env"});
dbConnection();
app.use(errorMiddleware);
export default app;
