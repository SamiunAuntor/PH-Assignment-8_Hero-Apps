import React, { useState, useEffect } from "react";
import downloadIcon from "../assets/icon-downloads.png";
import ratingIcon from "../assets/icon-ratings.png";
import reviewIcon from "../assets/icon-review.png";


const AppDetails = ({ app }) => {

    const {
        image,
        title,
        companyName,
        downloads,
        ratingAvg,
        reviews,
        size,
        description,
    } = app;

    const [installed, setInstalled] = useState(false);

    useEffect(() => {
        const installedApps = JSON.parse(localStorage.getItem("installedApps")) || [];
        if (installedApps.includes(title)) {
            setInstalled(true);
        }
    }, [title]);


    const handleInstall = () => {
        setInstalled(true);

        const installedApps = JSON.parse(localStorage.getItem("installedApps")) || [];
        if (!installedApps.includes(title)) {
            installedApps.push(title);
            localStorage.setItem("installedApps", JSON.stringify(installedApps));
        }
    };





    const formatCompact = (num) => {
        if (num >= 1000000000) return `${(num / 1000000000).toFixed(0)}B`;
        if (num >= 1000000) return `${(num / 1000000).toFixed(0)}M`;
        if (num >= 1000) return `${(num / 1000).toFixed(0)}K`;
        return `${num}`;
    };

    return (
        <div className="bg-[#f8f5f5] min-h-screen px-6 md:px-10 py-10">
            {/* Top Section */}
            <div className="w-full flex flex-col md:flex-row items-center md:items-stretch justify-start gap-8 mb-8">
                {/* App Icon */}
                <div className="flex-shrink-0 h-full w-full md:w-[280px] flex justify-center md:justify-start">
                    <img
                        src={image}
                        alt={`${title} Icon`}
                        className="h-full max-h-[260px] w-auto rounded-2xl object-contain md:object-fill"
                    />
                </div>

                {/* App Info */}
                <div className="flex flex-col justify-center text-center md:text-left space-y-3 w-full">
                    <h1 className="text-[20px] md:text-[30px] font-bold">{title}</h1>

                    <p className="text-[#627382] text-sm font-semibold">
                        Developed by{" "}
                        <span className="text-[#6b3ef2] font-semibold cursor-pointer hover:underline">
                            {companyName}
                        </span>
                    </p>

                    {/* Underline */}
                    <div className="h-[1px] bg-[#8c9ba8] w-full mt-1"></div>

                    {/* Stats Row */}
                    <div className="flex flex-wrap justify-center md:justify-start gap-12 mt-4 text-[#001931]">
                        {/* Downloads */}
                        <div className="flex flex-col items-center">
                            <img
                                src={downloadIcon}
                                alt="Downloads"
                                className="w-8 h-8 mb-1"
                            />
                            <span className="font-medium text-sm mb-1">Downloads</span>
                            <p className="text-[30px] font-bold text-black text-center">
                                {formatCompact(downloads)}
                            </p>
                        </div>

                        {/* Average Ratings */}
                        <div className="flex flex-col items-center">
                            <img
                                src={ratingIcon}
                                alt="Rating"
                                className="w-8 h-8 mb-1"
                            />
                            <span className="font-medium text-sm mb-1">Average Ratings</span>
                            <p className="text-[30px] font-bold text-black text-center">
                                {ratingAvg}
                            </p>
                        </div>

                        {/* Reviews */}
                        <div className="flex flex-col items-center">
                            <img
                                src={reviewIcon}
                                alt="Reviews"
                                className="w-8 h-8 mb-1"
                            />
                            <span className="font-medium text-sm mb-1">Total Reviews</span>
                            <p className="text-[30px] font-bold text-black text-center">
                                {formatCompact(reviews)}
                            </p>
                        </div>
                    </div>

                    {/* Install Button */}
                    <button
                        onClick={handleInstall}
                        disabled={installed}
                        className={`mt-6 w-fit mx-auto md:mx-0 ${installed ? "bg-gray-400 cursor-not-allowed" : "bg-[#00D390] hover:opacity-90"
                            } text-white font-semibold px-5 py-2 rounded-md shadow-sm transition`}
                    >
                        {installed ? "Installed" : `Install Now (${size} MB)`}
                    </button>

                </div>
            </div>

            {/* Underline */}
            <div className="h-[1px] bg-[#8c9ba8] w-full mt-1 mb-2"></div>

            {/* Ratings Section */}
            <div className="mx-auto mb-8">
                <h2 className="text-[18px] font-semibold text-[#001931] mb-4">
                    Ratings
                </h2>
                <p className="italic text-[#627382] py-6">it will be implemented later</p>
            </div>

            {/* Underline */}
            <div className="h-[1px] bg-[#8c9ba8] w-full mt-1 mb-2"></div>

            {/* Description Section */}
            <div className="mx-auto">
                <h2 className="text-[18px] font-semibold text-[#001931] mb-4">
                    Description
                </h2>
                <p className="text-[#627382] leading-7 text-justify whitespace-pre-line">
                    {description}
                </p>
            </div>
        </div>
    );
};

export default AppDetails;
