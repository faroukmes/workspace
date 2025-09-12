import type { BookI } from "../../types/books";
import type { RateI } from "../../types/rate";
import type { ResponseT } from "../../types/response";
import axiosConfig from "../axiosConfig";

export async function GetBooks() {
    const response = await axiosConfig.get<ResponseT<BookI[]>>("/books");
    return response.data;
}
export async function GetBookById(id: string) {
    const response = await axiosConfig.get<ResponseT<BookI>>(`/books/${id}`);
    return response.data;
}
export async function GetBookRating(bookId: string) {
    const response = await axiosConfig.get<ResponseT<RateI[]>>(
        `/books/${bookId}/rate`
    );
    return response.data;
}
export async function RateBook(
    bookId: string,
    rating: number
): Promise<ResponseT<RateI>> {
    const response = await axiosConfig.post<ResponseT<RateI>>(
        `/books/${bookId}/rate`,
        { rating }
    );
    return response.data;
}
