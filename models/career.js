import mongoose, { Schema } from "mongoose";

const careerSchema = new Schema(
    {
        code: {
            type: String,
            required: true,
            unique: true,
        },
        weekdaySchedule: {
            type: Schema.Types.ObjectId,
            ref: "Schedule",
        },
        weekendSchedule: {
            type: Schema.Types.ObjectId,
            ref: "Schedule",
        },
        holidaySchedule: {
            type: Schema.Types.ObjectId,
            ref: "Schedule",
        },
    },
    { timestamps: true }
);

const Career = mongoose.model("Career", careerSchema);

export default Career;
