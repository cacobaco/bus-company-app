import mongoose, { Schema } from "mongoose";

const passSchema = new Schema(
    {
        code: {
            type: String,
            required: true,
            unique: true,
        },
        user: {
            type: Schema.Types.ObjectId,
            ref: "User",
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
