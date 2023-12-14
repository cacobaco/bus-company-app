import mongoose, { Schema } from "mongoose";
import passportLocalMongoose from "passport-local-mongoose";

const userSchema = new Schema(
    {
        id: {
            type: Number,
            required: true,
            unique: true,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: String,
            required: true,
        },
        username: {
            type: String,
            required: true,
            unique: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },
        pass: {
            type: Schema.Types.ObjectId,
            ref: "Pass",
        },
        role: {
            type: String,
            enum: ["user", "manager", "admin"],
            required: true,
            default: "user",
        },
    },
    { timestamps: true }
);

userSchema.plugin(passportLocalMongoose);

const User = mongoose.model("User", userSchema);

export default User;
