import { Router } from "express";

const indexRouter = Router()

indexRouter.get('/', (req, res, next)=>{
    res.json({
        response:"Bienvenido a la API de ESP-32 desde /api",
        success: true,
        error: false
    })
})

export default indexRouter