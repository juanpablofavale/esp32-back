import { model, Schema } from "mongoose";

let collection = 'sensors'

let schema = new Schema({
    name: {type:String, required: true},
    desc: {type:String, required: true},
    status: {type:Boolean, default: false}
})

let Sensor = model(collection, schema)

export default Sensor