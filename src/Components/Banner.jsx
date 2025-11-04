import React from "react";
import appStore from "../assets/app-store.png";
import googlePlay from "../assets/google-play.png";
import bannerImg from "../assets/hero.png";

const Banner = () => {
    return (
        <section className="w-full bg-[#f8f5f5] pb-10">
            {/* Main Banner Section */}
            <div className="max-w-7xl mx-auto px-6 md:px-16 py-12 flex flex-col items-center gap-8">

                {/* Text Content */}
                <div className="flex flex-col items-center text-center space-y-6">
                    {/* Title */}
                    <h1 className="text-4xl md:text-7xl font-bold leading-tight text-center">
                        <span className="block">We Build</span>
                        <span className="block">
                            <span className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
                                Productive
                            </span>{" "}
                            Apps
                        </span>
                    </h1>

                    {/* Subtitle */}
                    <p className="text-[#627382] text-base md:text-lg leading-relaxed text-center max-w-[850px] mx-auto">
                        At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. Our goal is to turn your ideas into digital experiences that truly make an impact.
                    </p>

                    {/* App Store Buttons */}
                    <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0 mt-4">
                        {/* Google Play */}
                        <a
                            href="https://play.google.com/store"
                            className="flex items-center justify-center space-x-3 px-7 py-3 border border-[#D2D2D2] rounded-lg bg-[#f8f5f5] hover:opacity-90 transition"
                        >
                            <img src={googlePlay} alt="Google Play" className="w-6 h-6" />
                            <span className="font-medium">Google Play</span>
                        </a>

                        {/* App Store */}
                        <a
                            href="https://www.apple.com/app-store/"
                            className="flex items-center justify-center space-x-3 px-7 py-3 border border-[#D2D2D2] rounded-lg bg-[#f8f5f5] hover:opacity-90 transition"
                        >
                            <img src={appStore} alt="App Store" className="w-6 h-6" />
                            <span className="font-medium">App Store</span>
                        </a>
                    </div>
                </div>

                {/* Banner Image */}
                <div className="w-full">
                    <img src={bannerImg} alt="Banner" className="w-[1000px] mx-auto mb-[-48px]" />
                </div>
            </div>

            {/* Data Section */}
            <div className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white">
                <div className="max-w-7xl mx-auto px-6 md:px-16 flex flex-col items-center space-y-8 py-12">
                    {/* Upper Heading */}
                    <h2 className="text-3xl md:text-4xl font-bold text-center">
                        Trusted by Millions, Built for You
                    </h2>

                    {/* Lower Three Columns */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full text-center">
                        {/* Column 1 */}
                        <div>
                            <p className="text-lg mt-1">Total Downloads</p>
                            <p className="text-4xl md:text-5xl font-bold">29.6M</p>
                            <p className="mt-1 text-sm opacity-80">21% more than last month</p>
                        </div>

                        {/* Column 2 */}
                        <div>
                            <p className="text-lg mt-1">Total Reviews</p>
                            <p className="text-4xl md:text-5xl font-bold">906K</p>
                            <p className="mt-1 text-sm opacity-80">46% more than last month</p>
                        </div>

                        {/* Column 3 */}
                        <div>
                            <p className="text-lg mt-1">Active Apps</p>
                            <p className="text-4xl md:text-5xl font-bold">132+</p>
                            <p className="mt-1 text-sm opacity-80">31 more will launch</p>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default Banner;
