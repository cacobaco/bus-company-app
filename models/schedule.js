import mongoose, { Schema } from "mongoose";

const scheduleSchema = new Schema(
    {
        career: {
            type: String,
            required: true,
        },
        origin: {
            type: String,
            required: true,
        },
        destination: {
            type: String,
            required: true,
        },
        date: {
            type: Date,
            required: true,
        },
    },
    { timestamps: true }
);

const Schedule = mongoose.model("Schedule", scheduleSchema);

export default Schedule;
