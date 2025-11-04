import React from 'react';
import { Download, Star } from 'lucide-react';

const AppCard = ({ app }) => {
    return (
        <div className="w-full bg-white rounded-xl overflow-hidden shadow-md p-4 flex flex-col h-full">

            {/* Top Image */}
            <div className="w-full aspect-square">
                <img
                    src={app.image}
                    alt={app.title}
                    className="w-full h-full object-cover rounded-lg"
                />
            </div>

            {/* Bottom Content */}
            <div className="flex flex-col justify-center items-center mt-3 md:items-start md:justify-between">
                {/* Title */}
                <h2 className="text-lg md:text-base font-bold text-gray-800 px-1 text-center md:text-left truncate">
                    {app.title}
                </h2>

                {/* Stats Section */}
                <div className="mt-2 flex flex-col sm:flex-row sm:justify-between items-center gap-2 md:flex-row md:justify-between md:items-center w-full px-1">
                    {/* Downloads */}
                    <div className="flex items-center space-x-1 bg-[#F1F5E8] text-[#00D390] px-2 py-1 rounded-lg">
                        <Download size={16} />
                        <span className="text-sm font-semibold">
                            {(app.downloads / 1000000)} M
                        </span>
                    </div>

                    {/* Rating */}
                    <div className="flex items-center space-x-1 bg-[#FFF0E1] text-[#FF8811] px-2 py-1 rounded-lg">
                        <Star size={16} />
                        <span className="text-sm font-semibold">{app.ratingAvg}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppCard;
