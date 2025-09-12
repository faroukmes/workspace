import React from "react";

export default function HomePage() {
    return (
        <main className="flex flex-col items-center p-8  min-h-[80vh]">
            <img
                src="/sonatrach.svg"
                alt="Sonatrach Logo"
                className="w-32 mb-6"
            />
            <h1 className="text-4xl font-bold text-orange-600 mb-4">
                Welcome to Sonatrach
            </h1>
            <div className="flex  justify-center gap-12 items-center">
                <p className="max-w-xl text-center text-lg mb-8">
                    Sonatrach is Algeria's state-owned oil and gas company,
                    recognized as the largest in Africa. Founded in 1963,
                    Sonatrach is a global leader in energy, specializing in
                    exploration, production, pipeline transport, refining, and
                    marketing of hydrocarbons. The company is committed to
                    innovation, sustainability, and driving economic growth in
                    Algeria and beyond.
                </p>
                <section className="bg-neutral-700 rounded-xl shadow-md p-8 w-full max-w-xl">
                    <h2 className="text-2xl font-semibold text-orange-600 mb-4">
                        Key Information
                    </h2>
                    <ul className="list-none p-0 text-base">
                        <li className="mb-2">
                            <strong>Founded:</strong> 1963
                        </li>
                        <li className="mb-2">
                            <strong>Headquarters:</strong> Algiers, Algeria
                        </li>
                        <li className="mb-2">
                            <strong>Employees:</strong> 50,000+
                        </li>
                        <li className="mb-2">
                            <strong>Core Business:</strong> Oil & Gas
                            Exploration, Production, Refining, Marketing
                        </li>
                        <li>
                            <strong>Values:</strong> Innovation, Sustainability,
                            Excellence
                        </li>
                    </ul>
                </section>
            </div>
        </main>
    );
}
