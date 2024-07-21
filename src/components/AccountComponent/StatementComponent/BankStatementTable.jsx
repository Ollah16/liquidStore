import { PrinterIcon } from '@heroicons/react/24/outline';
import axios from 'axios';
import React, { useEffect } from 'react'
import { TbArrowBigRightLineFilled } from "react-icons/tb";
import { useDispatch, useSelector } from 'react-redux';
import { getTransactions } from '../../../reduxtoolkit/authslice';


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
                        <th className="py-3 text-left px-4 font-medium">DATE</th>
                        <th className="py-3 text-left px-4 font-medium">DESCRIPTION</th>
                        <th className="py-3 text-left px-4 font-medium">TYPE</th>
                        <th className="py-3 text-start px-4 font-medium">IN (£)</th>
                        <th className="py-3 text-right px-4 font-medium">OUT (£)</th>
                        <th className="py-3 text-right px-4 font-medium">BALANCE (£)</th>
                    </tr>
                </thead>
                <tbody>
                    {statement.map((state, index) => {
                        const isWithdrawal = state.transaction_type === 'withdrawal'

                        return (
                            <tr key={index} className="hover:bg-gray-50 border-b border-gray-200 tracking-tight">
                                <td className="py-3 flex justify-center w-12">
                                    <div className='w-fit relative flex items-center justify-center'>
                                        <TbArrowBigRightLineFilled className={`w-7 h-7 text-theme cursor-pointer ${isWithdrawal ? 'rotate-180' : 'rotate-0'}`} />
                                        <span className='absolute text-white text-xs font-medium'>£</span>
                                    </div>
                                </td>
                                <td className="py-3 px-4 text-start">{state.transaction_date}</td>
                                <td className="py-3 px-4 text-start">{state.transaction_description}</td>
                                <td className="py-3 px-4 text-start">{state.transaction_type}</td>
                                <td className="py-3 px-4 text-start text-green-500">{!isWithdrawal && state.amount.toLocaleString()}</td>
                                <td className="py-3 px-4 text-right text-red-500">{isWithdrawal && state.amount.toLocaleString()}</td>
                                <td className="py-3 px-4 text-right">{state.balance_after_transaction.toLocaleString()}</td>

                            </tr>)
                    })}
                </tbody>
            </table>
        </div >
    );
};

export default BankStatementTable;
