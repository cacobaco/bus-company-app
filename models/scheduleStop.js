import mongoose, { Schema } from "mongoose";

const scheduleStopSchema = new Schema(
    {
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
