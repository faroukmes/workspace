import { Router } from "express";
import { createUser, getUsers } from "../hundlers/users.js";
const userRouters = Router();
userRouters.get("/", getUsers);
userRouters.post("/", createUser);
export default userRouters;
