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
        career: {
            type: Schema.Types.ObjectId,
            ref: "Career",
            required: true,
        },
        // implementar relação com paragens
    },
    { timestamps: true }
);

const Schedule = mongoose.model("Schedule", scheduleSchema);

export default Schedule;
