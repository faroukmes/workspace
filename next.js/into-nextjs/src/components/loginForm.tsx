"use client";
import { Sign } from "crypto";
import { set } from "mongoose";
import { signIn, SignInResponse } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Router } from "next/router";
import React, { useEffect, useState } from "react";

export default function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isSigningIn, setIsSigningIn] = useState(false);
    const [data, setData] = useState<SignInResponse | null>(null);
    const router = useRouter();
    useEffect(() => {
        if (data) {
            if (data.ok) {
                setTimeout(() => {
                    setIsSigningIn(false);
                    router.push("/account");
                }, 1500);
            }
        }
    }, [data]);
    return (
        <form
            onSubmit={async (e) => {
                e.preventDefault();
                setIsSigningIn(true);
                const r = await signIn("credentials", {
                    email,
                    password,
                    redirect: false,
                });
                setData(r ?? null);
            }}
            className="card bg-base-200"
        >
            <div className="card-body">
                {data ? (
                    data.error ? (
                        <div className="alert alert-error">{data.error}</div>
                    ) : (
                        <div className="alert alert-success">
                            Login successful!
                        </div>
                    )
                ) : null}
                <div className="flex flex-col w-full ">
                    <label htmlFor="email">Email</label>
                    <input
                        className="w-full input"
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value);
                        }}
                    />
                </div>
                <div className="flex flex-col w-full ">
                    <label htmlFor="password">Password</label>
                    <input
                        className="w-full input "
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value);
                        }}
                    />
                </div>
                <button disabled={isSigningIn} className="btn btn-primary">
                    {isSigningIn ? "Signing in..." : "Login"}
                </button>
                <p>
                    if you don&apos;t have an account please{" "}
                    <Link href="/auth/registration" className="text-blue-500">
                        create an account
                    </Link>
                </p>
            </div>
        </form>
    );
}
