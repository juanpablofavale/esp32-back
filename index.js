import express from "express"
import "./config/database.js"
import cors from "cors"
import notFoundHandler from "./middlewares/notFoundHandler.js"
import errorHandler from "./middlewares/errorHandler.js"
import 'dotenv/config.js'
import indexRouter from "./Routers/IndexRouter.js"

const app = express()

app.use(cors())

app.get("/", (req, res, next)=>{
    res.json({
        response: "Bienvenido a la API de ESP-32 desde /",
        success: true,
        error: false
    })
})

app.use('/api', indexRouter)

app.use(notFoundHandler)
app.use(errorHandler)

app.listen(process.env.PORT, ()=>{
    console.log("Servidor Escuchando en el Puerto " + process.env.PORT)
})