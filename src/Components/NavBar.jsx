import React, { useState } from 'react';
import logo from "../assets/logo.png";
import github from "../assets/github-icon.png";
import { NavLink } from 'react-router';

const NavBar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="w-full bg-white shadow-md">
            <div className="flex items-center justify-between px-6 py-4 md:px-10 relative">
                {/* Left Section */}
                <div className="flex items-center space-x-3 flex-shrink-0">
                    <img src={logo} alt="Logo" className="w-9 h-9" />
                    <h1 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
                        HERO.IO
                    </h1>
                </div>

                {/* Middle Section */}
                <ul className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 space-x-10 text-gray-700 font-medium">
                    <NavLink to={`/`} className="hover:text-[#632EE3] cursor-pointer transition">Home</NavLink>
                    <NavLink to={`/apps`} className="hover:text-[#632EE3] cursor-pointer transition">Apps</NavLink>
                    <li className="hover:text-[#632EE3] cursor-pointer transition">Installation</li>
                </ul>

                {/* Right Section */}
                <div className="hidden md:flex items-center">
                    <a
                        href="https://github.com/SamiunAuntor"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 px-4 py-2 rounded-lg text-white font-semibold bg-gradient-to-r from-[#632EE3] to-[#9F62F2] hover:opacity-90 transition"
                    >
                        <img src={github} alt="GitHub" className="w-5 h-5" />
                        <span>Contribute</span>
                    </a>
                </div>

                {/* Hamburger Button (Mobile) */}
                <button
                    className="md:hidden flex flex-col space-y-1.5 focus:outline-none"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    <span className="w-6 h-0.5 bg-gray-800"></span>
                    <span className="w-6 h-0.5 bg-gray-800"></span>
                    <span className="w-6 h-0.5 bg-gray-800"></span>
                </button>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="md:hidden flex flex-col items-center text-center space-y-4 px-6 pb-6 pt-2 text-gray-700 font-medium border-t border-gray-200 animate-fadeIn">
                    <li className="list-none hover:text-[#632EE3] cursor-pointer transition">Home</li>
                    <li className="list-none hover:text-[#632EE3] cursor-pointer transition">Apps</li>
                    <li className="list-none hover:text-[#632EE3] cursor-pointer transition">Installation</li>

                    <a
                        href="https://github.com/SamiunAuntor"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center space-x-2 px-4 py-2 rounded-lg text-white font-semibold bg-gradient-to-r from-[#632EE3] to-[#9F62F2] hover:opacity-90 transition"
                    >
                        <img src={github} alt="GitHub" className="w-5 h-5" />
                        <span>Contribute</span>
                    </a>
                </div>
            )}
        </nav>
    );
};

export default NavBar;
