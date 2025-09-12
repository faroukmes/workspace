import userModel from "../models/users.js";

export function getUsers(req, res) {
    userModel.find().then((users) => {
        res.json({
            message: "created user successfully",
            success: true,
            data: users,
        });
    });
}

export function createUser(req, res) {
    const user = req.body;
    console.log(user);
    userModel.find().then((data) => {
        console.log(data);
    });
    userModel
        .insertOne(user)
        .then((user) => {
            res.json({
                message: "created user successfully",
                success: true,
                data: user,
            });
        })
        .catch((error) => {
            res.json({
                success: false,
                message: "failed to create a user",
                error: error,
            });
        });
}
