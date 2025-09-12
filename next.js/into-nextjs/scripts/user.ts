import "dotenv/config";
import dbConnect from "@/lib/db";
import userModel from "@/models/user";
import { UserI } from "@/types/user";
import Prompt from "prompt-sync";
const prompt = Prompt();
async function createUser(user: UserI) {
    dbConnect();
    const createdUser = await userModel.create(user);
    console.log(createdUser);
    return createdUser;
}
createUser({
    Name: prompt("Enter your full name: "),
    email: prompt("Enter your email: "),
    password: prompt("Enter your password: "),
    age: parseInt(prompt("Enter your age: "), 10),
    enabled: true,
});
