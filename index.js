import express from "express"
import cors from "cors"
import indexRouter from "./routers/indexRouter.js"
import notFoundHandler from "./middlewares/notFoundHandler.js"
import errorHandler from "./middlewares/errorHandler.js"
import 'dotenv/config.js'

const app = express()
const PORT = 3000

app.use(cors())

app.get("/", (req, res, next)=>{
    res.json({
        response: "Bienvenido a la API de ESP32 desde /",
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