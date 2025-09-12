import { Router } from "express";
import {
    createUser,
    deleteUser,
    getUserById,
    getUsers,
    updateUser,
} from "../handlers/users.js";

const usersRouter = Router();

usersRouter.route("/").get(getUsers).post(createUser);

usersRouter.route("/:id").get(getUserById).put(updateUser).delete(deleteUser);

export default usersRouter;
