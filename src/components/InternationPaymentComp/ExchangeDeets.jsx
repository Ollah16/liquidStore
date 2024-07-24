import React from 'react'

const ExchangeDeets = () => {
    return (
        <div className='w-full mb-4'>
            <div className='flex flex-col w-10/12 md:w-8/12 bg-[#2178b0] p-5 text-white '>
                <div className='flex space-x-10'><span className='w-4/12'>Exchange rate</span><span>----</span></div>
                <div className='flex space-x-10'><span className='w-4/12'>Amount in GBP</span><span>----</span></div>
                <div className='flex space-x-10'><span className='w-4/12'>Our fee</span><span>----</span></div>
                <hr className='mb-3 mt-2'></hr>
                <div className='flex space-x-10'> <span className='w-4/12'>Total you pay</span><span>----</span></div>
            </div>
        </div>
    )
}

export default ExchangeDeets
