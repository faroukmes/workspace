import { getServerSession, NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import userModel from "./models/user";
import dbConnect from "./lib/db";
export const authOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            credentials: {
                email: { label: "Email", type: "text" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {
                if (
                    !credentials ||
                    !credentials.email ||
                    !credentials.password
                ) {
                    throw new Error("Email and password are required");
                }
                const { email, password } = credentials;
                await dbConnect();
                return userModel.findOne({ email }).then(async (user) => {
                    if (user && (await user.comparePassword(password))) {
                        return {
                            id: user._id.toString(),
                            name: user.Name,
                            email: user.email,
                        };
                    }
                    throw new Error("Invalid email or password");
                });
            },
        }),
    ],
};
export const getSession = () => getServerSession(authOptions);
