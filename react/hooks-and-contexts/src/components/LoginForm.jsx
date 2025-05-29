import React, { useState } from "react";
import useUser from "../hooks/useUser";

export default function LoginForm() {
    const { login } = useUser();
    const [userForm, setUserForm] = useState({
        email: "",
        password: "",
    });
    return (
        <form
            className="acrd w-96 bg-base-200 shadow-sm mx-auto my-10 rounded-2xl"
            onSubmit={(e) => {
                e.preventDefault();
                login(userForm);
            }}
        >
            <div className="card-body gap-4">
                <h2 className="text-5xl font-bold text-center">Sign in</h2>
                <label className="input validator w-full">
                    <svg
                        className="h-[1em] opacity-50"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                    >
                        <g
                            strokeLinejoin="round"
                            strokeLinecap="round"
                            strokeWidth="2.5"
                            fill="none"
                            stroke="currentColor"
                        >
                            <rect
                                width="20"
                                height="16"
                                x="2"
                                y="4"
                                rx="2"
                            ></rect>
                            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                        </g>
                    </svg>
                    <input
                        type="email"
                        placeholder="mail@site.com"
                        required
                        value={userForm.email}
                        onChange={(e) => {
                            setUserForm({ ...userForm, email: e.target.value });
                        }}
                    />
                </label>
                <div className="validator-hint hidden">
                    Enter valid email address
                </div>
                <label className="input validator w-full">
                    <svg
                        className="h-[1em] opacity-50"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                    >
                        <g
                            strokeLinejoin="round"
                            strokeLinecap="round"
                            strokeWidth="2.5"
                            fill="none"
                            stroke="currentColor"
                        >
                            <path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"></path>
                            <circle
                                cx="16.5"
                                cy="7.5"
                                r=".5"
                                fill="currentColor"
                            ></circle>
                        </g>
                    </svg>
                    <input
                        type="password"
                        required
                        placeholder="Password"
                        minLength="8"
                        pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                        title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
                        value={userForm.password}
                        onChange={(e) => {
                            setUserForm({
                                ...userForm,
                                password: e.target.value,
                            });
                        }}
                    />
                </label>
                <p className="validator-hint hidden">
                    Must be more than 8 characters, including
                    <br />
                    At least one number <br />
                    At least one lowercase letter <br />
                    At least one uppercase letter
                </p>
                <button className="btn btn-primary" type="submit">
                    Login
                </button>
            </div>
        </form>
    );
}
