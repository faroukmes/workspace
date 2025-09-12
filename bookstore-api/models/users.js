import { Schema, model } from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new Schema(
    {
        Name: {
            type: String,
            required: true,
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
        enabled: {
            type: Boolean,
            default: true,
        },
        role: {
            type: String,
            enum: ["Admin", "User"],
            default: "User",
        },
    },
    {
        timestamps: true,
    }
);
// pre hooks (action = save) // this happens before saving in the database
userSchema.pre("save", async function () {
    if (this.isNew || this.isModified("password")) {
        this.password = await bcrypt.hash(this.password, 10);
    }
});
userSchema.methods.comparePassword = async function (requestedPassword) {
    return bcrypt.compare(requestedPassword, this.password);
};
const userModel = model("users", userSchema);
export default userModel; // db.users
