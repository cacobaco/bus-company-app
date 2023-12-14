import mongoose, { Schema } from "mongoose";

const passSchema = new Schema(
    {
        id: {
            type: Number,
            required: true,
            unique: true,
            autoIncrement: true,
            primaryKey: true,
        },
        code: {
            type: String,
            required: true,
            unique: true,
        },
        user: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        price: {
            type: Number,
            required: true,
        },
        expiresAt: {
            type: Date,
            required: true,
        },
    },
    { timestamps: true }
);

const Pass = mongoose.model("Pass", passSchema);

export default Pass;
