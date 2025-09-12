import userModel from "../models/users.js";
import jwt from "jsonwebtoken";
import transporter from "../services/email.js";

export async function login(req, res) {
    try {
        const { email, password } = req.body;
        const user = await userModel.findOne({ email: email });
        if (!user) {
            throw new Error("Wrong email");
        }
        const isPasswordCorrect = await user.comparePassword(password);
        // comparing password
        if (!isPasswordCorrect) {
            throw new Error("Wrong password");
        }
        const userInfo = {
            _id: createdUser._id,
            createdAt: new Date(),
        };
        const token = jwt.sign(userInfo, process.env.AUTH_SECRET);
        res.json({
            success: true,
            message: "You have logged in",
            data: user,
            token,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: "Failed to login",
            error: error.message,
        });
    }
}

export async function register(req, res) {
    // process registration
    const user = req.body;
    try {
        const createdUser = await userModel.create(user);
        const userInfo = {
            _id: createdUser._id,
            createdAt: new Date(),
        };
        const token = jwt.sign(userInfo, process.env.AUTH_SECRET);
        transporter
            .sendMail({
                from: process.env.EMAIL_USERNAME,
                to: createdUser.email,
                subject: "New account at bookstore",
                //text:''
                html: `
			<h1>Welcome</h1>
			<p>Hello ${createdUser.firstName} ${createdUser.lastName} to our website</p>
			`,
            })
            .then((result) => {
                console.log(result);
            })
            .catch((error) => {
                console.log(error);
            });
        res.json({
            success: true,
            message: "You have registered",
            data: createdUser,
            token,
        });
    } catch (err) {
        if (err instanceof Error && "code" in err) {
            if (err.code === 11000) {
                res.status(400).json({
                    success: false,
                    message: "user already exist",
                });
            } else {
                res.status(400).json({
                    success: false,
                    message: "Invalid user validation",
                    error: err,
                });
            }
        } else {
            res.status(400).json({
                success: false,
                message: "Unknown error",
                error: err,
            });
        }
    }
}

export async function checkUser(req, res) {
    const user = req.user;
    if (!user) {
        throw new Error("User not found");
    }
    res.json({
        success: true,
        data: user,
    });
}
