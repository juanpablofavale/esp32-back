import Sensor from "../models/Sensor.js";

const sensorController = {
    getAll: async (req, res, next) => {
        try {
            const response = await Sensor.find()
            res.json({response})
        } catch (er) {
            next(er)
        }
    },
    getOne: async (req, res, next)=>{
        try {
            const id = req.params.id
            const response = await Sensor.findById(id)
            console.log(response)
            res.json({response})
        } catch (er) {
            next(er)
        }
    },
    postOne: async (req, res, next)=>{
        try {
            const response = await Sensor.create(req.body)
            res.json({response})
        } catch (er) {
            next(er)
        }
    },
    putOne: async (req, res, next)=>{
        try {
            const id = req.params.id
            const response = await Sensor.findByIdAndUpdate(id, req.body, {new:true})
            res.json({response})
        } catch (er) {
            next(er)
        }
    },
    deleteOne: async (req, res, next)=>{
        try {
            const id = req.params.id
            const response = await Sensor.findByIdAndDelete(id)
            res.json({response})
        } catch (er) {
            next(er)
        }
    }
}

export default sensorController