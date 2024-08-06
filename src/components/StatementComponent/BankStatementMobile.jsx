import { ChevronRightIcon } from '@heroicons/react/24/outline'
import React from 'react'
import { TbArrowBigRightLineFilled } from 'react-icons/tb'
import { useDispatch, useSelector } from 'react-redux'
import { viewReference } from '../../reduxtoolkit/authslice'
import { useNavigate } from 'react-router-dom'

const BankStatementMobile = () => {

    const { allTransactions } = useSelector(state => state.auth)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    return (
        <div className='block md:hidden'>
            <table className='w-full relative overflow-hidden'>
                <tbody>
                    {Array.from(allTransactions)?.map((g, index) => (
                        <React.Fragment key={index}>
                            <tr>
                                <td className='text-xs px-2 py-2' colSpan={3}>{g.groupDate}</td>
                            </tr>
                            {g.groupTransaction.map((state, inda) => {
                                const isWithdrawal = state.transaction_type === 'withdrawal'
                                return (
                                    <React.Fragment key={inda}>
                                        <tr onClick={() => {
                                            dispatch(viewReference({ index: inda, date: g.groupDate }));
                                            navigate(`/mobiledescription/${inda}`)
                                        }} className='cursor-pointer hover:bg-gray-100/50 transition-colors ease-in-out duration-300'>
                                            <td className={`w-1/12 my-1 px-2 relative overflow-hidden ${!isWithdrawal ? `before:content-[''] before:absolute before:left-0 before:bg-theme before:inline-block before:w-1 before:h-full before:top-0 before:bottom-0` : 'before:hidden'}`}>
                                                <div className={`w-full`}>
                                                    <span className='rounded-full border border-gray-200 p-1 flex justify-center items-center w-full'>
                                                        <TbArrowBigRightLineFilled className={`w-7 h-7 text-theme cursor-pointer ${isWithdrawal ? 'rotate-180' : 'rotate-0'}`} />
                                                    </span>
                                                </div>
                                            </td>
                                            <td className='max-w-[150px] px-2 overflow-hidden max-h-[46px]'>
                                                <h3 className='text-sm inline-block h-[46px] sm:text-base w-11/12 sm:w-full text-nowrap text-ellipsis overflow-hidden'>{state.transaction_description}</h3>
                                            </td>
                                            <td className='w-1/2 sm:w-2/12 px-2'>
                                                <div className='flex flex-col items-end w-full'>
                                                    <span className={`block w-max ${!isWithdrawal ? 'font-semibold text-theme text-base -ml-1' : 'font-normal text-sm'}`}>{`${isWithdrawal ? '-' : '+'}`}£{state.amount.toLocaleString()}</span>
                                                    <span className='text-sm block text-end font-thin'>£{state.balance_after_transaction.toLocaleString()}</span>
                                                </div>
                                            </td>
                                            <td className='w-1/12 py-1 px-2'>
                                                <div className='w-full flex justify-end'>
                                                    <ChevronRightIcon className='size-5 text-theme' />
                                                </div>
                                            </td>

                                        </tr>
                                    </React.Fragment >)
                            })}

                        </React.Fragment>))}
                </tbody>
            </table>
        </div >
    )
}

export default BankStatementMobile