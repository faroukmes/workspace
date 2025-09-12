import { RegisterUser } from "./api/requests/auth";
import { GetBookById, GetBooks } from "./api/requests/books";
import type { CreateUserI } from "./types/user";

export default function App() {
    return (
        <main className="">
            <section className="flex flex-col items-center justify-center h-screen bg-base-200">
                <h1 className="text-4xl font-bold pb-1">
                    Welcome To My Book Shelf
                </h1>
                <button
                    type="button"
                    className="btn btn-primary"
                    onClick={async () => {
                        const mockUser: CreateUserI = {
                            firstName: "farouk",
                            lastName: "mess",
                            email: "test@example.com",
                            password: "Password123",
                        };
                        const response = await RegisterUser(mockUser);
                        if (response.success) {
                            console.log(
                                "User registered successfully",
                                response.data
                            );
                        } else {
                            console.error(
                                "User registration failed",
                                response.message
                            );
                        }
                    }}
                >
                    Register
                </button>
                <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={async () => {
                        const response = await GetBooks();
                        if (response.success) {
                            console.log(
                                "Books fetched successfully",
                                response.data
                            );
                        } else {
                            console.error(
                                "Failed to fetch books",
                                response.message
                            );
                        }
                    }}
                >
                    Get Books
                </button>
                <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={async () => {
                        const response = await GetBookById(
                            "68a5b00a73a7cf0a7cc08db3"
                        );
                        if (response.success) {
                            console.log(
                                "Book fetched successfully",
                                response.data
                            );
                        } else {
                            console.error(
                                "Failed to fetch book",
                                response.message
                            );
                        }
                    }}
                >
                    Get Book By ID
                </button>
            </section>
        </main>
    );
}
