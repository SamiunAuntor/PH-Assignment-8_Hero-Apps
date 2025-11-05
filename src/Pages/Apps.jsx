import React, { useState } from 'react';
import AppCard from '../Components/AppCard';
import { useLoaderData } from 'react-router';
import { Search } from 'lucide-react';
import appNotFound from "../assets/App-Error.png";

const Apps = () => {
    const apps = useLoaderData();
    const [searchTerm, setSearchTerm] = useState('');

    // Filter apps based on search input
    const filteredApps = apps.filter(app =>
        app.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="px-10 py-10 bg-[#f8f5f5] min-h-screen">
            {/* Title + Subtitle */}
            <div className="text-center mb-10">
                <h1 className="text-3xl font-bold text-black">
                    Our All Applications
                </h1>
                <p className="text-[#627382] mt-2">
                    Explore All Apps on the Market developed by us. We code for Millions
                </p>
            </div>

            {/* Top Bar */}
            <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
                {/* App count */}
                <p className="text-[#627382] font-medium">
                    ({filteredApps.length}) apps found
                </p>

                {/* Search Bar */}
                <div className="relative w-full sm:w-80">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[#627382]" size={18} />
                    <input
                        type="text"
                        placeholder="Search apps"
                        className="w-full border border-[#627382] rounded-lg pl-10 pr-4 py-2 text-[#627382] placeholder-[#627382] bg-transparent focus:outline-none"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
            </div>

            {/* App Grid / Not Found Image */}
            {filteredApps.length > 0 ? (
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {filteredApps.map((app) => (
                        <div key={app.id} className="flex justify-center">
                            <AppCard app={app} />
                        </div>
                    ))}
                </div>
            ) : (
                <div className="flex flex-col justify-center items-center mt-16">
                    <img
                        src={appNotFound}
                        alt="No apps found"
                        className="w-64 sm:w-72 opacity-80"
                    />
                    <h2 className="text-[#627382] mt-4 font-medium text-xl">
                        No apps found with this name.
                    </h2>
                </div>
            )}
        </div>
    );
};

export default Apps;
