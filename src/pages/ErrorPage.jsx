import { ExclamationCircleIcon } from '@heroicons/react/24/outline';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { clearCurrentInputs } from '../reduxtoolkit/paymentslice';

const ErrorPage = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(clearCurrentInputs())
    }, [dispatch])

    return (
        <div className="py-20 flex items-center justify-center bg-gray-100 min-h-screen">
            <div className="bg-white shadow-md rounded-lg p-8 max-w-md text-center">
                <ExclamationCircleIcon className="mx-auto mb-4 md:h-20 md:w-20 h-16 w-16 text-red-500" />
                <h1 className="md:text-3xl text-2xl font-bold text-red-600 mb-4">Transaction Unavailable</h1>
                <p className="text-gray-700 text-sm md:text-lg mb-6">
                    We regret to inform you that you cannot initiate a transaction at this time.
                    For assistance, please contact Her Majesty's Revenue and Customs (HMRC) through your financial representative.
                </p>
                <Link
                    to={'/accounts'}
                    className="bg-theme hover:bg-[#004A36] text-white px-6 py-3 hover:underline shadow transition duration-200 ease-in-out"
                >
                    Try Again
                </Link>
            </div>
        </div>
    );
};

export default ErrorPage;
