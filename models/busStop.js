import mongoose, { Schema } from "mongoose";

const busStopSchema = new Schema({
    id: {
        type: Number,
        required: true,
        unique: true,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: String,
        required: true,
        unique: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
    },
});

const BusStop = mongoose.model("BusStop", busStopSchema);

export default BusStop;
