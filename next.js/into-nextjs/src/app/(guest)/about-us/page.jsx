import React from "react";

export default function Page() {
    return (
        <main className="flex flex-col items-center p-8 min-h-[80vh]">
            <img
                src="/sonatrach.svg"
                alt="Sonatrach Logo"
                className="w-32 mb-6"
            />
            <h1 className="text-4xl font-bold text-orange-600 mb-4">
                About Sonatrach
            </h1>
            <p className="max-w-xl text-center text-lg mb-8">
                Sonatrach is Algeria's state-owned oil and gas company,
                recognized as the largest in Africa. Since its founding in 1963,
                Sonatrach has played a pivotal role in the development of
                Algeria's energy sector and economy. The company is a global
                leader in exploration, production, pipeline transport, refining,
                and marketing of hydrocarbons. Sonatrach is dedicated to
                innovation, sustainability, and excellence, driving progress and
                growth for Algeria and beyond.
            </p>
            <section className="bg-blue-600 rounded-xl shadow-md p-8 w-full max-w-xl">
                <h2 className="text-2xl font-semibold text-orange-600 mb-4">
                    Company Profile
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
                        <strong>Core Business:</strong> Oil & Gas Exploration,
                        Production, Refining, Marketing
                    </li>
                    <li>
                        <strong>Values:</strong> Innovation, Sustainability,
                        Excellence
                    </li>
                </ul>
            </section>
        </main>
    );
}
