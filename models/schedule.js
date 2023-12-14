import mongoose, { Schema } from "mongoose";

const scheduleSchema = new Schema(
    {
        id: {
            type: Number,
            required: true,
            unique: true,
            autoIncrement: true,
            primaryKey: true,
        },
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
