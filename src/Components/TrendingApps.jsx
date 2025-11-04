import React from "react";
import AppCard from "./AppCard";
import Loader from "./Loader/Loader";
import { useLoaderData } from "react-router";

const TrendingApps = () => {
    const apps = useLoaderData();

    if (!apps) return <Loader />;

    return (
        <section className="w-full bg-[#f8f5f5] py-12 flex justify-center">
            <div className="w-11/12">
                {/* Title */}
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center">
                    Trending Apps
                </h2>

                {/* Subtitle */}
                <p className="text-gray-500 text-center mt-2 mb-8 max-w-2xl mx-auto">
                    Explore All Trending Apps on the Market developed by us
                </p>

                {/* App Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {apps.map((app) => (
                        <div key={app.id} className="flex justify-center">
                            <AppCard app={app} />
                        </div>
                    ))}
                </div>

                {/* Bottom Button */}
                <div className="flex justify-center mt-10">
                    <button
                        className="px-6 py-3 text-white font-semibold rounded-lg 
                       bg-gradient-to-r from-[#632EE3] to-[#9F62F2] 
                       hover:opacity-90 transition-all duration-300 shadow-md"
                    >
                        Show All
                    </button>
                </div>
            </div>
        </section>
    );
};

export default TrendingApps;
