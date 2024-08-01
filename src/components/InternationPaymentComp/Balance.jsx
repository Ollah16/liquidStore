import React from 'react'
import { useSelector } from 'react-redux'

const Balance = () => {

    const { accountType, accountNumber, sortCode, balance } = useSelector(state => state.auth)

    return (
        <div>
            <div className='bg-gray-100 p-5 flex flex-col'>
                <div className='font-semibold text-semibold text-theme text-lg  mb-[1px]'>{accountType}</div>
                <div className='text-sm font-light text-black/80 mb-[1px]'><span>{sortCode}</span> <span>|</span> <span>{accountNumber}</span></div>
                <div className='font-semibold text-lg'>£{balance.toLocaleString()}</div>
            </div>
        </div>
    )
}

export default Balance
