import { ChevronRightIcon } from '@heroicons/react/24/outline'
import React from 'react'
import { useSelector } from 'react-redux'

const Accounts = ({ currentClick }) => {

    const isVisible = /accounts/i.test(currentClick)
    const { balance, accountNumber, accountType, sortCode } = useSelector(state => state.auth)

    return (
        <div className='overflow-hidden bg-gray-200 '>
            <div className={`z-10 py-12 transition-top duration-300 ease-in-out w-full ${isVisible ? 'relative top-0' : 'absolute top-[-500px]'}`}>
                <div className='md:w-10/12 w-full px-5 md:px-0 mx-auto'>
                    <div className={`bg-white before:content-[''] before:bg-theme before:inline-block before:w-full before:h-1 before:absolute before:top-0 py-5 w-full md:w-3/12 relative flex items-center`}>
                        <div className='p-3'>
                            <div className='mb-1 flex gap-x-2'>
                                <div className='mb-1 flex gap-x-2'>
                                    <span className='text-theme text-base tracking-tight'>{accountType.toUpperCase()}</span>
                                    <span className='text-base font-light text-black/80'>{sortCode}</span>
                                    <span className='text-base font-light text-black/80'>{accountNumber}</span>
                                </div>
                            </div>
                            <span className='text-3xl font-normal tracking-tight'>£ {balance.toLocaleString()}</span>
                        </div>
                        <ChevronRightIcon className={`size-10 absolute right-1 text-gray-500`} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Accounts
