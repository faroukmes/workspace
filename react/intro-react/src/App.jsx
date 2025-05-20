import React from "react";
import ProductCard from "./components/ProductCard";
import Navbar from "./components/Navbar";
import Apear from "./components/Apear";
import Exercice from "./components/exercice";
import ProgressBar from "./components/ProgressBar";

export default function App() {
    return (
        <>
            <header>
                <Navbar />
            </header>
            <main>
                {/* <ProductCard />
                <Apear />
                <Exercice /> */}
                <ProgressBar />
            </main>
            <footer></footer>
        </>
    );
}
