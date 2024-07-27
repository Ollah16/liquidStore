import React from 'react';

const FallbackPage = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-800">
            <div className="flex flex-col items-center justify-center space-y-6">
                <div className="relative">
                    <div className="w-24 h-24 border-4 border-dashed rounded-full animate-spin border-green-500"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 bg-green-500 rounded-full"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FallbackPage;
