import Link from "next/link";
import React from "react";

export default function layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="w-full flex flex-col h-screen">
            <header className="w-full bg-blue-600 flex gap-4 justify-center ">
                <Link href="/home" className="text-white text-lg font-semibold">
                    Sonatrach
                </Link>
                <Link
                    href="/about-us"
                    className="text-white text-lg font-semibold"
                >
                    About Us
                </Link>
                <Link
                    href="/contact-us"
                    className="text-white text-lg font-semibold"
                >
                    Contact Us
                </Link>
            </header>
            <main className="w-full h-full overflow-auto bg-[#010830]">
                {children}
            </main>
            <footer className="w-full bg-blue-600">
                <p>&copy; 2023 Guest Area</p>
            </footer>
        </div>
    );
}
