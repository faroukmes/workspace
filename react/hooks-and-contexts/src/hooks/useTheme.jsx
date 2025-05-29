import React, { useContext } from "react";
import { ThemeContext } from "../contexts/theme";

export default function useTheme() {
    const context = useContext(ThemeContext);
    if (!context)
        throw new Error("theme provider is not accessible into the context");
    return context;
}
