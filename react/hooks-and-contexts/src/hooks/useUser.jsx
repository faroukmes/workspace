import React, { useContext } from "react";
import { UserContext } from "../contexts/user";

export default function useUser() {
    const context = useContext(UserContext);
    if (!context)
        throw new Error("useUser can be be used only in User provider");
    return context;
}
