import { model, Schema } from "mongoose";

let collection = 'sensors'

let schema = new Schema({
    name: {type:String, required: true},
    desc: {type:String, required: true},
    state: {type:Number, default: 0}
})

let Sensor = model(collection, schema)

export default Sensor