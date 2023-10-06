//Router creado para agregar una propiedad
//a los elementos de la base de datos

import { Router } from "express";
import Sensor from "../models/Sensor.js";

const indexPut = Router()

indexPut.get('/', async (req, res, next)=>{
    const sen = await Sensor.find()
    sen.map(async s => {
        s.pin = +s.desc.substring(s.desc.length-3)
        const r = await Sensor.findByIdAndUpdate(s._id, s, {new:true})
        console.log(r)
        return r
    })
    res.json({response:sen})
})

export default indexPut