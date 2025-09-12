import { Document, Model, Schema, Types, model, models } from "mongoose";
import bcrypt from "bcrypt";
import { UserI } from "@/types/user";

interface UserDocument extends UserI, Document<Types.ObjectId> {
    comparePassword: (requestedPassword: string) => Promise<boolean>;
}
const userSchema = new Schema<UserDocument>(
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
        age: {
            type: Number,
            min: 0,
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
userSchema.methods.comparePassword = async function (
    requestedPassword: string
) {
    console.log(requestedPassword, this.password);

    return bcrypt.compare(requestedPassword, this.password);
};
const userModel =
    (models.users as Model<UserDocument>) || model("users", userSchema);
export default userModel;
