import "dotenv/config";
import express from "express";
import {
    createUser,
    deleteUser,
    getUsers,
    updateUser,
} from "./handlers/users.js";

const app = express(); //create an express app

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT;
/* const user = {
    firstName: "farouk",
    lastName: "messaoudi",
}; */
const users = [];

app.get("/", getUsers);
app.post("/", createUser);
app.put("/", updateUser);
app.delete("/", deleteUser);

app.get("{*n}", function (req, res) {
    res.status(404).json({
        message: "this ot found",
        success: false,
    });
});
app.use(function (err, req, res, next) {
    res.status(500).json({
        message: err.message,
        success: false,
    });
});

app.listen(PORT, function () {
    console.log(`Server is on http://localhost:${PORT}`);
});
