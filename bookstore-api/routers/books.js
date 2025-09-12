import { Router } from "express";
import {
    createBook,
    deleteBook,
    getBookById,
    getBooks,
    updateBook,
} from "../handlers/books.js";
import { CheckAuth, isAdmin } from "../middlewares/auth.js";

const booksRouter = Router();

booksRouter.route("/").get(getBooks).post(CheckAuth, isAdmin, createBook);

booksRouter
    .route("/:id")
    .get(getBookById)
    .put(CheckAuth, isAdmin, updateBook)
    .delete(CheckAuth, isAdmin, deleteBook);

export default booksRouter;
