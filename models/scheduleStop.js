import mongoose, { Schema } from "mongoose";

const scheduleStopSchema = new Schema(
    {
        id: {
            type: Number,
            required: true,
            unique: true,
            autoIncrement: true,
            primaryKey: true,
        },
        schedule: {
            type: Schema.Types.ObjectId,
            ref: "Schedule",
        },
        busStop: {
            type: Schema.Types.ObjectId,
            ref: "BusStop",
        },
        hour: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
);

const ScheduleStop = mongoose.model("ScheduleStop", scheduleStopSchema);

export default ScheduleStop;
