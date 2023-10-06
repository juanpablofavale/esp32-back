import { Router } from "express";
import sensorController from "../controller/sensorController.js";

const { getAll, getOne, postOne, putOne, deleteOne } = sensorController

const sensorRouter = Router()

sensorRouter.get('/', getAll)
sensorRouter.get('/:id', getOne)
sensorRouter.post('/', postOne)
sensorRouter.put('/:id', putOne)
sensorRouter.delete('/:id', deleteOne)

export default sensorRouter