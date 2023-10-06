import { Router } from "express";
import sensorRouter from "./sensorRouter.js";
import indexPut from "./indexPut.js";

const indexRouter = Router()

indexRouter.get('/', (req, res, next)=>{
    res.json({
        response:"Bienvenido a la API de ESP-32 desde /api",
        success: true,
        error: false
    })
})

indexRouter.use("/sensor", sensorRouter)

//Router creado para actualizar la base de datos
//En este caso agrego el pin del sensor
//indexRouter.use('/put', indexPut)

export default indexRouter