import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ExclamationCircleIcon } from '@heroicons/react/24/outline';

const SessionExpired = () => {
    const navigate = useNavigate();

    const handleLoginRedirect = () => {
        navigate('/login');
    };

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center p-5 md:p-0">
            <div className="bg-white p-10 rounded-xl shadow-xl max-w-md text-center">
                <div className="flex flex-col items-center">
                    <ExclamationCircleIcon className="h-20 md:h-24 w-20 md:w-24 text-red-600 mb-4 animate-pulse" />
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">Session Expired</h1>
                    <p className="text-gray-600 mb-6">
                        Your session has expired due to inactivity. Please log in again to continue.
                    </p>
                    <button
                        onClick={handleLoginRedirect}
                        className="bg-green-600 text-white py-2 px-6 rounded-full hover:bg-green-700 transition duration-200 shadow-lg"
                    >
                        Go to Login
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SessionExpired;
