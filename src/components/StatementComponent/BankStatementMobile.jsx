import { ChevronRightIcon } from '@heroicons/react/24/outline'
import React from 'react'
import { TbArrowBigRightLineFilled } from 'react-icons/tb'
import { useDispatch, useSelector } from 'react-redux'
import { viewReference } from '../../reduxtoolkit/authslice'
import { useNavigate } from 'react-router-dom'

const BankStatementMobile = () => {

    const { statement } = useSelector(state => state.auth)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    return (
        <div className='block md:hidden'>
            <table className='w-full'>
                <tbody>
                    {statement?.map((state, index) => {

                        const isWithdrawal = state.transaction_type === 'withdrawal'
                        return (<React.Fragment key={index}>
                            <tr onClick={() => { dispatch(viewReference(index)); navigate(`/mobiledescription/${index}`) }} className='cursor-pointer'>
                                <td className={`w-1/12 py-1 px-2 relative overflow-hidden ${!isWithdrawal ? `before:content-[''] before:absolute before:left-0 before:bg-theme before:inline-block before:w-1 before:h-9 before:top-auto before:bottom-auto` : 'before:hidden'}`}>
                                    <div className={`w-full`}>
                                        <span className='rounded-full border border-gray-200 p-1 flex justify-center items-center w-full'>
                                            <TbArrowBigRightLineFilled className={`w-7 h-7 text-theme cursor-pointer ${isWithdrawal ? 'rotate-180' : 'rotate-0'}`} />
                                        </span>
                                    </div>
                                </td>
                                <td className='w-6/12 py-1 px-2'>
                                    <span className='text-sm sm:text-base'>{state.transaction_description}</span>
                                </td>
                                <td className='w-3/12 py-1 px-2'>
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
                </tbody>
            </table>
        </div >
    )
}

export default BankStatementMobile
