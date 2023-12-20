import mongoose, { Schema } from "mongoose";

const paymentSchema = new Schema(
    {
        user: {
            type: Schema.Types.ObjectId,
            ref: "User",
        },
        method: {
            type: String,
            enum: ["mbway", "card"],
            required: true,
        },
        price: {
            type: Number,
            required: true,
        },
    },
    { timestamps: true }
);

const Payment = mongoose.model("Payment", paymentSchema);

export default Payment;
