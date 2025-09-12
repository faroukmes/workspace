import { Schema, model } from "mongoose";

const userSchema = new Schema(
    {
        firstName: {
            type: String,
            required: true,
        },
        lastName: String,
        age: Number,
    },
    {
        timestamps: true,
    }
);

const userModel = model("users", userSchema);
export default userModel;
