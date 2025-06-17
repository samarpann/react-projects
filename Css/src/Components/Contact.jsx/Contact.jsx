import React from 'react';

export default function Contact() {
    return (
        <div className="relative flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-50 to-blue-100">
            <div className="max-w-6xl mx-auto sm:px-6 lg:px-8 py-12">
                <div className="overflow-hidden bg-white shadow-lg rounded-lg p-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="p-6 bg-gray-100 rounded-lg">
                            <h1 className="text-3xl sm:text-4xl text-gray-800 font-extrabold tracking-tight">
                                Get in Touch
                            </h1>
                            <p className="text-lg text-gray-600 mt-2">
                                Fill in the form to start a conversation with us.
                            </p>
                            <div className="mt-6 space-y-4">
                                <div className="flex items-center text-gray-600">
                                    <span className="w-8 h-8 text-gray-500">📍</span>
                                    <span className="ml-4 text-md font-semibold">Acme Inc, Street, State, Postal Code</span>
                                </div>
                                <div className="flex items-center text-gray-600">
                                    <span className="w-8 h-8 text-gray-500">📞</span>
                                    <span className="ml-4 text-md font-semibold">+44 1234567890</span>
                                </div>
                                <div className="flex items-center text-gray-600">
                                    <span className="w-8 h-8 text-gray-500">📧</span>
                                    <span className="ml-4 text-md font-semibold">info@acme.org</span>
                                </div>
                            </div>
                        </div>
                        <form className="p-6 flex flex-col bg-white rounded-lg shadow-md">
                            <input
                                type="text"
                                name="name"
                                placeholder="Full Name"
                                className="w-full mt-2 py-3 px-4 rounded-lg border border-gray-300 text-gray-800 focus:border-blue-500 focus:outline-none"
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                className="w-full mt-4 py-3 px-4 rounded-lg border border-gray-300 text-gray-800 focus:border-blue-500 focus:outline-none"
                            />
                            <input
                                type="tel"
                                name="tel"
                                placeholder="Telephone Number"
                                className="w-full mt-4 py-3 px-4 rounded-lg border border-gray-300 text-gray-800 focus:border-blue-500 focus:outline-none"
                            />
                            <button
                                type="submit"
                                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg mt-6 transition ease-in-out duration-300"
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
