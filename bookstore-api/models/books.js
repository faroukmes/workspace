import { Schema, model } from "mongoose";

const bookSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
        },
        author: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
            required: true,
        },
        stock: {
            type: Number,
            default: true,
        },
        description: {
            type: String,
            default: "book",
        },
    },
    {
        timestamps: true,
    }
);

const bookModel = model("book", bookSchema);
export default bookModel;
