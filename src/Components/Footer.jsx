import React from "react";
import logo from "../assets/logo.png";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-[#001931] text-white">
            {/* Upper Section */}
            <div className="flex flex-col md:flex-row items-center justify-between px-6 md:px-10 py-6">
                {/* Left: Logo + Title */}
                <div className="flex items-center space-x-3 mb-4 md:mb-0">
                    <img src={logo} alt="Logo" className="w-10 h-10" />
                    <h1 className="text-xl font-bold">HERO.IO</h1>
                </div>

                {/* Right: Social Links */}
                <div className="flex items-center space-x-4">
                    <span className="font-medium">Social Links:</span>
                    <div className="flex space-x-3">
                        <Facebook className="w-5 h-5 cursor-pointer hover:text-gray-300" />
                        <Twitter className="w-5 h-5 cursor-pointer hover:text-gray-300" />
                        <Instagram className="w-5 h-5 cursor-pointer hover:text-gray-300" />
                        <Linkedin className="w-5 h-5 cursor-pointer hover:text-gray-300" />
                    </div>
                </div>
            </div>

            {/* Divider */}
            <hr className="border-t border-white opacity-50 mx-6 md:mx-10" />

            {/* Lower Section */}
            <div className="text-center py-4 text-sm">
                © 2025 - All rights reserved
            </div>
        </footer>
    );
};

export default Footer;
