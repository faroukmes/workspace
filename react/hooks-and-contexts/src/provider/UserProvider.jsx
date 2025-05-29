import React, { useState } from "react";
import { UserContext } from "../contexts/user";

export default function UserProvider({ children }) {
    const [user, setUser] = useState({
        info: null,
        isLoggedIn: false,
    });
    function login(information) {
        if (information !== null) {
            setUser({
                info: information,
                IsLoggeddIn: true,
            });
        }
    }
    function logout() {
        setUser({
            ...user,
            //info:null
            isLoggedIn: false,
        });
    }
    return (
        <UserContext.Provider value={{ user, login, logout }}>
            {" "}
            {children}{" "}
        </UserContext.Provider>
    );
}
