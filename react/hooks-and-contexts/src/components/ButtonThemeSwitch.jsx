import React from "react";
import useTheme from "../hooks/useTheme";

export default function ButtonThemeSwitch() {
    const { toggleTheme } = useTheme();
    return (
        <button onClick={toggleTheme} className="btn btn-primary btn-ghost">
            Switch Theme
        </button>
    );
}
