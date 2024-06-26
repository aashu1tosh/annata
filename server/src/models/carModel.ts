import mongoose from "mongoose";
import { ICar } from "../interface/car.interface";

const imageSchema = new mongoose.Schema({
    data: Buffer,
    contentType: String
});

const carSchema = new mongoose.Schema<ICar>({
    dealerId: { type: mongoose.Schema.Types.ObjectId, ref: 'user', required: true },
    year: {type: Number, required: true},
    manufacturer: {type: String, required: true},
    model: {type: String, required: true},
    mileage: {type: Number, required: true},
    engine: {type: String, required: true},
    description: {type: String, required: true},
    image: imageSchema
},{
    timestamps: true,
})

const Car = mongoose.model<ICar>('car',carSchema)

module.exports = Car