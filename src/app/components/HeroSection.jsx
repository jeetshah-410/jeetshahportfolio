"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from 'react-type-animation';

const HeroSection = () => {
    return (
        <section className="relative bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
            <div className="grid grid-cols-1 sm:grid-cols-12">
                {/* Left Section */}
                <div className="col-span-7 place-self-center text-center sm:text-left py-16 px-4 sm:px-8">
                    <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-teal-600 to-green-600">
                            Hello, I'm {""}
                        </span>
                        <br />
                        <TypeAnimation
                            sequence={[
                                "Jeet",
                                2500,
                                "Game Developer",
                                2000,
                                "Creative Designer",
                                2000,
                            ]}
                            wrapper="span"
                            speed={40}
                            repeat={Infinity}
                        />
                    </h1>
                    <p className="text-[#ADB7BE] text-lg mb-6">
                        I am a passionate and dedicated game developer with a knack for blending creativity and technical expertise to craft immersive gaming experiences. Proficient in Unreal Engine, Unity, C++, C#, and tools like Blender, my projects often bring ideas to life with cutting-edge technology and design principles.
                    </p>
                    <div>
                        <a
                            href="/JeetShah_Resume.pdf"
                            download="Jeet_CV.pdf"
                            className="inline-block px-0.5 py-0.5 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-600 via-teal-600 to-green-600 hover:from-green-600 hover:via-teal-600 hover:to-blue-600 hover:scale-105 transition-transform duration-300 ease-in-out mt-3"
                            aria-label="Download CV"
                        >
                            <span className="block bg-[#121212] rounded-full px-5 py-2 text-white font-semibold hover:bg-[#1c1c1c] transition-colors duration-300">
                                Download CV
                            </span>
                        </a>
                    </div>
                </div>

                {/* Right Section */}
                <div className="col-span-5 place-self-center mt-8 lg:mt-0">
                    <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative shadow-lg">
                        <Image
                            src="/images/portfolio.png"
                            alt="Hero Section Portrait"
                            className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                            width={250}
                            height={250}
                            priority
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
