import "dotenv/config";
import express from "express";
import { connectDB } from "./services/db.js";
import authRouter from "./routers/auth.js";
import { CheckAuth, isAdmin } from "./middlewares/auth.js";
import usersRouter from "./routers/users.js";
import booksRouter from "./routers/books.js";

const app = express();
const PORT = process.env.PORT;

/* middlewares (helpers)  */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
/* Routes */
app.use("/auth", authRouter);
// a private route ( with authentication required)
app.use("/users", CheckAuth, isAdmin, usersRouter);
app.use("/books", booksRouter);

connectDB().then(() => {
    app.listen(PORT, function () {
        console.log(`The app is on http://localhost:${PORT}`);
    });
});
