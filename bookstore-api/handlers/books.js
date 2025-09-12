import bookModel from "../models/books.js";

export async function getBooks(req, res) {
    try {
        const books = await bookModel.find();
        res.json({
            success: true,
            message: "Books fetched successfully",
            data: books,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to fetch books",
            error: error,
        });
    }
}
export async function createBook(req, res) {
    try {
        const book = await bookModel.create(req.body);
        res.json({
            success: true,
            message: "Book created successfully",
            data: book,
        });
    } catch (error) {
        if (error instanceof Error) {
            if (error.code === 1100) {
                res.status(403).json({
                    success: false,
                    message: "Book already exist",
                    error: error,
                });
            } else {
                res.status(400).json({
                    success: false,
                    message: "Failed to create book",
                    error: error,
                });
            }
        } else {
            res.status(500).json({
                success: false,
                message: "Failed to create book due to server error",
                error: error,
            });
        }
    }
}
export async function getBookById(req, res) {
    try {
        const book = await bookModel.findById(req.params.id);
        if (!book) {
            throw new Error("Book not found");
        }
        res.json({
            success: true,
            message: "Book fetched successfully",
            data: book,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: `Failed to fetch book ${req.params.id}`,
            error: error,
        });
    }
}
export async function updateBook(req, res) {
    try {
        const book = await bookModel.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body,
            },
            {
                new: true,
            }
        );
        if (!book) {
            throw new Error("Book not found");
        }
        res.json({
            success: true,
            message: "Book updated successfully",
            data: book,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: `Failed to update book ${req.params.id}`,
            error: error,
        });
    }
}
export async function deleteBook(req, res) {
    try {
        const book = await bookModel.findByIdAndDelete(req.params.id);
        if (!book) {
            throw new Error("Book not found");
        }
        res.json({
            success: true,
            message: "Book deleted successfully",
            data: book,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: `Failed to delete book ${req.params.id}`,
            error: error,
        });
    }
}
