import { CalendarIcon, PrinterIcon } from '@heroicons/react/24/outline';
import axios from 'axios';
import React, { useEffect } from 'react'
import { TbArrowBigRightLineFilled } from "react-icons/tb";
import { useDispatch, useSelector } from 'react-redux';
import { getTransactions, viewReference } from '../../../reduxtoolkit/authslice';
import { RxHamburgerMenu } from "react-icons/rx";
import { FaRegClock } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { IoCloseSharp } from "react-icons/io5";


const BankStatementTable = () => {

    const { statement } = useSelector(state => state.auth)

    const dispatch = useDispatch()

    useEffect(() => {
        const getStatement = async () => {
            try {
                const token = localStorage.getItem('token')
                const serverLink = 'http://localhost:8080/user/getstatement'
                const header = { headers: { 'Authorization': `Bearer ${token}` } }
                const response = await axios.get(serverLink, header)
                const { statement } = response.data
                dispatch(getTransactions(statement))

            } catch (error) {
                console.error(error.message)
            }
        }

        getStatement()
    }, [dispatch])


    return (
        <div className="my-10 shadow-lg bg-white">
            <table className="w-full border-collapse">
                <thead className="relative border-b-theme border-b">
                    <tr className='tracking-tight font-light text-black/80'>
                        <th className='w-12'></th>
                        <th className="py-3 text-left px-4 font-medium">DESCRIPTION</th>
                        <th className="py-3 text-left px-4 font-medium">TYPE</th>
                        <th className="py-3 text-start px-4 font-medium">IN (£)</th>
                        <th className="py-3 text-right px-4 font-medium">OUT (£)</th>
                        <th className="py-3 text-right px-4 font-medium">BALANCE (£)</th>
                    </tr>
                </thead>
                <tbody>
                    {statement && statement.map((state, index) => {
                        const isWithdrawal = state.transaction_type === 'withdrawal'
                        let transactionType = state.transaction_type.toUpperCase().charAt(0) + state.transaction_type.slice(1, state.transaction_type.length)

                        return (<React.Fragment key={index}>
                            <tr onClick={() => dispatch(viewReference(index))} className={`hover:bg-gray-50 border-b text-sm border-gray-200 tracking-tight cursor-pointer ${state.isViewed ? 'bg-gray-50' : 'bg-white'}`}>
                                <td className="py-3 flex justify-center w-12">
                                    <div className='w-fit relative flex items-center justify-center'>
                                        <TbArrowBigRightLineFilled className={`w-7 h-7 text-theme cursor-pointer ${isWithdrawal ? 'rotate-180' : 'rotate-0'}`} />
                                        <span className='absolute text-white text-xs font-medium'>£</span>
                                    </div>
                                </td>
                                <td className="py-3 px-4">
                                    <div className='flex flex-col'>
                                        <span className='font-medium'>{state.transaction_date}</span>
                                        <span>{state.transaction_description}</span>
                                    </div>
                                </td>
                                <td className="py-3 px-4 text-start">{state.transaction_type.toUpperCase()}</td>
                                <td className="py-3 px-4 text-start text-green-500">{!isWithdrawal && state.amount.toLocaleString()}</td>
                                <td className="py-3 px-4 text-right text-red-500">{isWithdrawal && state.amount.toLocaleString()}</td>
                                <td className="py-3 px-4 text-right">{state.balance_after_transaction.toLocaleString()}</td>

                            </tr>
                            <tr className='overflow-hidden'>
                                <td className={`transition-all overflow-hidden`} colSpan={6}>
                                    <div className={` ${state.isViewed ? 'max-h-[500px]' : 'max-h-0'} bg-gray-200/50 w-full pl-12 overflow-hidden transition-all duration-300 ease-in-out `}>
                                        <div className='flex justify-end text-theme h-fit pr-5 py-5'>
                                            <button onClick={() => dispatch(viewReference(index))}><IoCloseSharp className='w-7 h-7' /></button>
                                        </div>
                                        <div className='w-full grid grid-rows-2 grid-flow-col border-b-gray-500/40 gap-y-5 border-b tracking-tight leading-normal py-5 px-4'>
                                            <div className='flex items-center gap-2'>
                                                <div className='flex gap-x-5'>
                                                    <CalendarIcon className='w-7 h-7 text-theme' />
                                                    <div className='flex flex-col -mt-2'>
                                                        <span className='text-black/80'>Date of transaction:</span>
                                                        <span className='font-semibold'>{state.referenceDate}</span>
                                                    </div>
                                                </div>

                                            </div>
                                            <div className='flex items-center gap-2'>
                                                <div className='flex gap-x-5'>
                                                    <FaRegClock className='w-7 h-7 text-theme' />
                                                    <div className='flex flex-col'>
                                                        <span className='text-black/80'>Time of transaction:</span>
                                                        <span className='font-semibold'>{state.referenceTime}</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='flex items-center gap-2'>
                                                <div className='flex gap-x-5'>
                                                    <RxHamburgerMenu className='w-7 h-7 text-theme' />
                                                    <div className='flex flex-col'>
                                                        <span className='text-black/80'>Transaction type:</span>
                                                        <span className='font-semibold'>{transactionType}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='flex flex-col justify-between items-start gap-y-5 py-5 px-4'>
                                            <div className='flex flex-col'>
                                                <span className='font-normal text-black-500/70'>Reference: </span>
                                                <span className='font-semibold'>{state.reference}</span>
                                            </div>

                                            <Link className='bg-white py-3 px-5 font-medium hover:underline text-theme' to='/'>
                                                Make a payment or transfer
                                            </Link>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        </React.Fragment>
                        )
                    })}
                </tbody>
            </table>
        </div >
    );
};

export default BankStatementTable;
