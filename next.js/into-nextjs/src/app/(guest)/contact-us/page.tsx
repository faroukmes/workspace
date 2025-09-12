import React from "react";
export default function page() {
    return (
        <div className="flex justify-center items-center min-h-[80vh]0 pt-10">
            <form className="flex flex-col items-center p-8 min-h-[60vh] bg-blue-500 rounded-2xl shadow-lg w-full max-w-md">
                <h1 className="text-3xl font-bold text-white mb-6">
                    Contact Us
                </h1>
                <div className="w-full mb-4">
                    <label htmlFor="name" className="block text-white mb-2">
                        Name:
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full p-2 rounded-md border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-300"
                    />
                </div>
                <div className="w-full mb-4">
                    <label htmlFor="email" className="block text-white mb-2">
                        Email:
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full p-2 rounded-md border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-300"
                    />
                </div>
                <div className="w-full mb-6">
                    <label htmlFor="message" className="block text-white mb-2">
                        Message:
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        rows={4}
                        required
                        className="w-full p-2 rounded-md border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-300"
                    ></textarea>
                </div>
                <button
                    type="submit"
                    className="bg-white text-blue-600 font-semibold px-6 py-2 rounded-md hover:bg-blue-100 transition"
                >
                    Submit
                </button>
            </form>
        </div>
    );
}
