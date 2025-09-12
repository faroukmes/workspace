import { getSession } from "@/auth.config";
import LogoutBtn from "@/components/logoutbtn";
import Link from "next/link";
import React from "react";

export default async function profile() {
    const session = await getSession();
    if (!session) {
        return <div>You are not logged in</div>;
    }
    return (
        <div>
            <h1 className="text-6xl">Account</h1>
            <h1 className="text-3xl">{session.user?.name}</h1>
            <h3 className="text-xl">{session.user?.email}</h3>
            <LogoutBtn />
            <Link href="/profile" className="btn btn-accent">
                Profile
            </Link>
        </div>
    );
}
