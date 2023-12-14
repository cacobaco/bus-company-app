import mongoose, { Schema } from "mongoose";

const scheduleSchema = new Schema({
    id: {
        type: Number,
        required: true,
        unique: true,
        autoIncrement: true,
        primaryKey: true,
    },
    date: {
        type: Date,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
    },
});

const Schedule = mongoose.model("Schedule", scheduleSchema);

export default Schedule;
