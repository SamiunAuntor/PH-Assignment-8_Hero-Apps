import React from "react";
import error404 from "../assets/error-404.png";
import { useNavigate } from "react-router";

const ErrorPage = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen flex flex-col justify-center items-center bg-[#f8f5f5] text-center px-4">
            {/* 404 Image */}
            <img
                src={error404}
                alt="Page not found"
                className="w-64 sm:w-72 md:w-96 lg:w-[28rem] mb-6"
            />

            {/* Title */}
            <h1 className="text-2xl md:text-4xl font-bold text-black mb-4">
                Oops, page not found!
            </h1>

            {/* Subtitle */}
            <p className="text-[#627382] text-sm md:text-base mb-6 max-w-md">
                The page you are looking for is not available.
            </p>

            {/* Back Button */}
            <button
                onClick={() => navigate("/")}
                className="px-6 py-3 rounded-xl text-white font-semibold 
                   bg-gradient-to-r from-[#632EE3] to-[#9F62F2] 
                   shadow-md hover:opacity-90 transition"
            >
                Go Back
            </button>
        </div>
    );
};

export default ErrorPage;
