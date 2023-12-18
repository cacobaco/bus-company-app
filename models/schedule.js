import mongoose, { Schema } from "mongoose";

const scheduleSchema = new Schema(
    {
        type: {
            type: String,
            enum: ["weekday", "weekend", "holiday"],
            required: true,
            default: "weekday",
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

const Schedule = mongoose.model("Schedule", scheduleSchema);

export default Schedule;
