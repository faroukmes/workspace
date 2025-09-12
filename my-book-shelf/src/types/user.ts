export interface CreateUserI {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}

export interface UserI {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    updatedAt: string;
    createdAt: string;
    role: "User" | "Admin";
    isEmailVerified: boolean;
    books: {
        borrowed: string[];
        favorite: string[];
        read: string[];
        listened: string[];
    };
}
export interface LoginUserI {
    email: string;
    password: string;
}
