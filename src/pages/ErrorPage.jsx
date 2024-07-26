import React from 'react'
import Layout from './Account/Layout'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
    return (
        <Layout>
            <div className="py-20 flex items-center justify-center bg-gray-100">
                <div className="bg-white shadow-md rounded-lg p-8 max-w-lg text-center">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/b/b7/Flag_of_Europe.svg"
                        alt="Error"
                        className="mx-auto mb-4 h-20 w-20"
                    />
                    <h1 className="text-3xl font-bold text-red-600 mb-4">Transaction Unavailable</h1>
                    <p className="text-gray-700 text-lg mb-6">
                        We regret to inform you that you cannot initiate a transaction at this time.
                        For assistance, please contact Her Majesty's Revenue and Customs (HMRC) through your financial representative.
                    </p>
                    <Link
                        to={'/accounts'}
                        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-200"
                    >
                        Try Again
                    </Link>
                </div>
            </div>
        </Layout>
    )
}

export default ErrorPage
