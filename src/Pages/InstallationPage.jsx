import React, { useEffect, useState, useCallback } from 'react';
import InstallationCard from '../Components/InstallationCard';
import { useLoaderData } from 'react-router';

const InstallationPage = () => {
    const appsData = useLoaderData();
    const [installedApps, setInstalledApps] = useState([]);
    const [sortBy, setSortBy] = useState("default");

    const updateInstalledApps = useCallback(() => {
        const stored = JSON.parse(localStorage.getItem("installedApps")) || [];
        const filtered = appsData.filter(app => stored.includes(app.title));
        setInstalledApps(filtered);
    }, [appsData]);

    useEffect(() => {
        updateInstalledApps();

        const handleStorageChange = () => {
            updateInstalledApps();
        };

        window.addEventListener("storage", handleStorageChange);

        return () => {
            window.removeEventListener("storage", handleStorageChange);
        };
    }, [updateInstalledApps]);

    const sortedApps = [...installedApps].sort((a, b) => {
        if (sortBy === "size-asc") return a.size - b.size;
        if (sortBy === "size-desc") return b.size - a.size;
        return 0;
    });

    return (
        <div className="p-6 md:p-10 min-h-screen bg-[#f8f5f5]">
            {/* Header */}
            <div className="mb-8 flex flex-col items-center text-center">
                <h1 className="text-2xl md:text-3xl font-bold text-black">
                    Your Installed Apps
                </h1>
                <p className="text-[#627382] mt-2 text-sm md:text-base">
                    Explore All Trending Apps on the Market developed by us
                </p>
            </div>

            {/* Toolbar */}
            <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-between mb-6 gap-4 w-full">
                <p className="text-[#001931] font-semibold text-center sm:text-left">
                    {installedApps.length} apps found
                </p>

                <div className="flex items-center gap-2 justify-center">
                    <label className="text-[#627382] font-medium">Sort by :</label>
                    <select
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value)}
                        className="border border-gray-300 rounded-md px-2 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-[#00D390]"
                    >
                        <option value="default">Default</option>
                        <option value="size-asc">Size: Low to High</option>
                        <option value="size-desc">Size: High to Low</option>
                    </select>
                </div>
            </div>


            {/* Installed Apps List */}
            <div className="space-y-4">
                {sortedApps.length > 0 ? (
                    sortedApps.map((app) => (
                        <InstallationCard 
                            key={app.id} 
                            app={app} 
                            onUninstall={updateInstalledApps}
                        />
                    ))
                ) : (
                    <p className="text-center text-gray-500 py-20 text-lg">
                        No apps installed yet.
                    </p>
                )}
            </div>
        </div>
    );
};

export default InstallationPage;
