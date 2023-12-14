import mongoose, { Schema } from "mongoose";

const busStopSchema = new Schema(
    {
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
        location: {
            type: String,
            required: true,
        },
        scheduleStops: [
            {
                type: Schema.Types.ObjectId,
                ref: "ScheduleStop",
            },
        ],
    },
    { timestamps: true }
);

const BusStop = mongoose.model("BusStop", busStopSchema);

export default BusStop;
