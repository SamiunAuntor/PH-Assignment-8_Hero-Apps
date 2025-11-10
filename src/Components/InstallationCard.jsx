import React from 'react';
import star from "../assets/icon-ratings.png";
import download from "../assets/icon-downloads.png";

const InstallationCard = ({ app }) => {
    const { image, title, downloads, ratingAvg, size } = app;

    const handleUninstall = () => {
        const stored = JSON.parse(localStorage.getItem("installedApps")) || [];
        const updated = stored.filter(name => name !== title);
        localStorage.setItem("installedApps", JSON.stringify(updated));
        window.location.reload();
    };

    const formatCompact = (num) => {
        if (num >= 1000000000) return `${(num / 1000000000).toFixed(0)}B`;
        if (num >= 1000000) return `${(num / 1000000).toFixed(0)}M`;
        if (num >= 1000) return `${(num / 1000).toFixed(0)}K`;
        return `${num}`;
    };

    return (
        <div className="w-full flex flex-col sm:flex-row items-center justify-between p-4 bg-white rounded-xl shadow-sm gap-4">
            {/* Left Section */}
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
                {/* App Icon */}
                <img
                    src={image}
                    alt={`${title} Icon`}
                    className="w-16 h-16 md:w-20 md:h-20 rounded-2xl object-cover"
                />

                {/* App Info */}
                <div className="flex flex-col justify-center text-center sm:text-left">
                    {/* App Name */}
                    <h3 className="text-lg md:text-xl font-bold text-black">
                        {title}
                    </h3>

                    {/* Stats Row */}
                    <div className="flex flex-wrap justify-center sm:justify-start items-center gap-4 mt-1 text-sm text-gray-600 font-semibold">
                        {/* Downloads */}
                        <div className="flex items-center gap-1">
                            <img src={download} alt="Downloads" className="w-4 h-4" />
                            <span className="text-[#00D390]">{formatCompact(downloads)}</span>
                        </div>

                        {/* Rating */}
                        <div className="flex items-center gap-1">
                            <img src={star} alt="Rating" className="w-4 h-4" />
                            <span className="text-[#FF8811]">{ratingAvg}</span>
                        </div>

                        {/* App Size */}
                        <span>{size} MB</span>
                    </div>
                </div>
            </div>

            {/* Right Section - Uninstall Button */}
            <button
                onClick={handleUninstall}
                className="bg-white text-[#00D390] border border-[#00D390] px-4 py-2 rounded-md font-semibold hover:bg-[#00D390] hover:text-white transition w-full sm:w-auto"
            >
                Uninstall
            </button>
        </div>
    );
};

export default InstallationCard;
