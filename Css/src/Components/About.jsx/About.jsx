import React from 'react';

export default function About() {
    return (
        <div className="py-16 bg-gradient-to-r from-blue-50 to-blue-100">
            <div className="container mx-auto px-6 text-gray-700 md:px-12 xl:px-24">
                <div className="flex flex-col-reverse lg:flex-row items-center gap-12">
                    {/* Text Section */}
                    <div className="lg:w-6/12 text-center lg:text-left">
                        <h2 className="text-3xl font-bold text-gray-900 md:text-5xl leading-tight">
                            Empowering Developers with Modern React Solutions
                        </h2>
                        <p className="mt-6 text-lg text-gray-600">
                            Our team of expert developers is dedicated to creating intuitive and scalable
                            React applications, ensuring seamless user experiences and efficient performance.
                        </p>
                        <p className="mt-4 text-lg text-gray-600">
                            We blend creativity with technical expertise to build innovative solutions that
                            drive success and deliver exceptional value to businesses worldwide.
                        </p>
                        <button className="mt-6 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300">
                            Learn More
                        </button>
                    </div>
                    
                    {/* Image Section */}
                    <div className="lg:w-6/12 flex justify-center">
                        <img
                            src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png"
                            alt="React Development"
                            className="rounded-lg shadow-lg w-full lg:w-10/12"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
