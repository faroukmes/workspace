import "dotenv/config";
import express from "express";

const app = express(); //create an express app

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT;
/* const user = {
    firstName: "farouk",
    lastName: "messaoudi",
}; */
const users = [];

app.post("/", function (req, res) {
    /* console.log(req.body); */
    if (req.body) {
        users.push(req.body);
        res.json({
            success: true,
            message: "you have added a new user",
        }); // we can replace send by json
    } else {
        throw new Error("the body doesn't have data");
    }
});

app.get("/", function (req, res) {
    res.json(users);
});

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
