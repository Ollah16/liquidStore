import { CalendarIcon, ClockIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import React, { lazy, Suspense, useState } from 'react'
import { Link } from 'react-router-dom'
import { TiMinus, TiPlus } from "react-icons/ti";
import { useSelector } from 'react-redux';
const BankStatementTable = lazy(() => import('./BankStatementTable'))

const FullStatement = () => {

    const { balance } = useSelector(state => state.auth)
    const [isPendingClick, setClick] = useState(false)

    return (
        <div className='mt-5 w-full'>
            <div className='flex justify-between items-center'>
                <h3 className='text-3xl font-normal'>Statement</h3>
                <Link to={'/viewupcoming'} className='flex justify-between gap-x-1 leading-tight text-theme font-medium'><CalendarIcon className='size-5 text-theme_light' /><span>View upcoming payments</span></Link>
            </div>
            <div className='bg-white'>

                <div className=' text-sm font-semibold text-white'>
                    <div className='flex justify-end pt-5 mb-5'>
                        <div className='flex gap-x-3 w-fit px-5'>
                            <button className='py-3 px-5 bg-theme'>All transactions</button>
                            <button className='py-3 px-5 transition-colors ease-in-out duration-200 flex items-center gap-x-1 bg-theme_light hover:bg-theme_light/80'>
                                <span>Search</span>
                                <MagnifyingGlassIcon className='size-5' />
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <hr className='bg-gray-500'></hr>
                </div>
                <div>
                    <div className='p-5 flex justify-between'>
                        <h3 className='text-3xl font-normal'>All transactions</h3>
                        <select>
                            <option></option>
                        </select>
                    </div>
                </div>
                <div>
                    <hr className='bg-gray-500'></hr>
                </div>
                <div>
                    <div className='p-5 flex justify-between w-full group'>
                        <p onClick={() => setClick(!isPendingClick)} className='w-full text-sm flex gap-x-2 cursor-pointer group-hover:text-theme_light transition-colors ease-in-out duration-200 text-theme font-semibold'><ClockIcon className='size-5' /><span>View Pending Transactions</span></p>
                        <span>
                            {!isPendingClick ?
                                <TiPlus className='size-5 text-theme group-hover:text-theme_light transition-colors ease-in-out duration-200' /> :
                                <TiMinus className='size-5 text-theme group-hover:text-theme_light transition-colors ease-in-out duration-200' />}
                        </span>
                    </div>
                    <div className={`${isPendingClick ? 'max-h-[500px]' : 'max-h-0'} transition-all ease-in-out duration-300 overflow-hidden`}>
                        <div className='p-5 w-full'>
                            <div className='p-5 text-sm bg-gray-100'>
                                <div className='font-semibold text-xl relative after:content-[""] after:w-full after:inline-block after:h-[.5px] after:bg-gray-500'>Pending transactions</div>
                                <p className='text-center my-3'>You have no pending debit card transactions or cheques being processed.</p>
                                <p className='text-start font-semibold'>Most contactless payments take a few days to show on your statement. They won't show in your pending transactions.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <hr className='bg-gray-500'></hr>
                </div>
                <div>
                    <div className='p-5 flex justify-end'>
                        <p className='text-sm flex gap-x-2 text-black/80 font-semibold'>Account balance: £{balance.toLocaleString()}</p>
                    </div>
                </div>
                <div>
                    <hr className='bg-gray-500'></hr>
                </div>

                <Suspense fallback={<div>loading...</div>}>
                    <BankStatementTable />
                </Suspense>

            </div>

        </div>
    )
}

export default FullStatement
