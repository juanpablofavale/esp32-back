import { Router } from "express";
import sensorRouter from "./sensorRouter.js";

const indexRouter = Router()

indexRouter.get('/', (req, res, next)=>{
    res.json({
        response:"Bienvenido a la API de ESP-32 desde /api",
        success: true,
        error: false
    })
})

indexRouter.use("/sensor", sensorRouter)

export default indexRouter