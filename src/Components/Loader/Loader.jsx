import React from 'react';
import logo from "../../assets/logo.png";
import "./Loader.css"; 

const Loader = () => {
    return (
        <div className="flex items-center justify-center w-full h-screen bg-white">
            <img
                src={logo}
                alt="Loading..."
                className="w-20 h-20 animate-spin-slow"
            />
        </div>
    );
};

export default Loader;
