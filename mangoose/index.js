import express from "express";
import "dotenv/config";
import mongoose from "mongoose";
import userModel from "./models/users.js";
import { createUser, getUsers } from "./hundlers/users.js";
import userRouters from "./Router/users.js";
const PORT = process.env.PORT;

const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use("/user", userRouters);
mongoose
    .connect(process.env.MONGODB_URI, {
        dbName: process.env.MONGODB_DB_NAME,
        auth: {
            username: process.env.MONGODB_USERNAME,
            password: process.env.MONGODB_PASSWORD,
        },
    })
    .then(() => {
        console.log("Database is connected");
        app.listen(PORT, function () {
            console.log(`server is on : http://localhost:${PORT}`);
        });
    })
    .catch(() => {
        console.error("database failed to connect");
    });
