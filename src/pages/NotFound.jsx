import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center tracking-tight">
            <div className="bg-white shadow-md rounded-lg p-8 max-w-md mx-auto">
                <h1 className="md:text-3xl text-2xl font-bold text-gray-800 mb-4">Feature Unavailable</h1>
                <p className="text-gray-600 mb-6">
                    We're sorry, but you cannot access this feature from your current location.
                </p>
                <Link to="/"
                    className="bg-theme hover:bg-[#004A36] text-white px-6 py-3 hover:underline shadow transition duration-200 ease-in-out">
                    Return to Home
                </Link>
            </div>
        </div>
    );
};

export default NotFoundPage;
