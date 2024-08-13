import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { viewReference } from '../../reduxtoolkit/authslice';
import { useDispatch, useSelector } from 'react-redux';
import { ChevronLeftIcon } from '@heroicons/react/24/outline';
import { TbArrowBigRightLineFilled } from 'react-icons/tb';

const MobileFullDescription = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { allTransactions } = useSelector(state => state.auth)
    const { id } = useParams()
    const [transaction, setTransaction] = useState({})
    const [isWithdrawal, setIsWithdrawal] = useState()
    const [transactionType, setTransactionType] = useState()

    useEffect(() => {
        const findTransaction = allTransactions.find((_) => _.groupDate).groupTransaction.find((_, index) => Number(id) === index)
        if (!findTransaction) return navigate('/accountstatement')
        setTransaction(findTransaction)
        setIsWithdrawal(findTransaction?.transaction_type === 'withdrawal')
        let transactionType = findTransaction?.transaction_type.toUpperCase().charAt(0) + findTransaction?.transaction_type.slice(1, findTransaction?.transaction_type.length)
        setTransactionType(transactionType)
    }, [id, allTransactions, navigate])


    useEffect(() => {

        const handleResize = () => {
            if (window.innerWidth > 768) {
                navigate('/accountstatement')
            }
        }

        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [navigate])


    return (
        <div className={`tracking-tight`}>
            <div className={`absolute w-full h-screen top-0 md:hidden px-5`}>
                <div className='flex justify-between bg-theme text-white py-8 px-5 -ml-5 -mr-5'>
                    <div>
                        <button onClick={() => { dispatch(viewReference(id)); navigate('/accountstatement') }}>
                            <ChevronLeftIcon className='size-6 font-bold' />
                        </button>
                    </div>
                    <div className='font-semibold text-lg'>Payee details</div>
                    <div></div>
                </div>
                <div className='w-2/12 -mt-7'>
                    <div className='rounded-full border border-gray-200 p-3 block w-fit bg-gray-100'>
                        <div className='w-fit relative flex items-center justify-center'>
                            <TbArrowBigRightLineFilled className={`w-7 h-7 text-theme cursor-pointer ${isWithdrawal ? 'rotate-180' : 'rotate-0'}`} />
                            <span className='absolute text-white text-xs font-medium'>£</span>
                        </div>
                    </div>
                </div>

                <div className='flex justify-between items-center py-2'>
                    <div className='flex flex-col'>
                        <span className='text-sm uppercase font-medium'>{transaction?.payment_detail}</span>
                        <span className='text-xs'>{transaction?.referenceDate} {transaction?.referenceTime}</span>
                    </div>
                    <div className='flex flex-col items-end'>
                        <span className='text-lg'>{`${isWithdrawal ? '-' : '+'} `}£{transaction?.amount?.toLocaleString()}</span>
                        <span className='text-xs'>{transactionType}</span>
                    </div>
                </div>
                <div className='bg-gray-200/90 px-5 -ml-5 -mr-5 pt-5 pb-10 flex flex-col justify-between h-[calc(100%-180px)]'>
                    <div>
                        <p className='text-sm mb-2'>Transaction details</p>
                        <div className='p-3 bg-white'>
                            <div className='py-3 border-b border-dotted border-b-black/60 flex justify-between text-sm font-thin'><p className='w-5/12'>Transaction cleared date</p><p className='w-7/12 text-base font-normal text-end'>{transaction?.referenceDate}</p></div>
                            <div className='py-3 border-b border-dotted border-b-black/60 flex justify-between text-sm font-thin'><p className='w-5/12'>Reference</p><p className='w-7/12 text-base font-normal text-end'>{transaction?.reference_Number}</p></div>
                            <div className='py-3 flex justify-between text-sm font-thin'><p className='w-5/12'>Balance after transaction</p><p className='w-7/12 text-base font-normal text-end'>£{transaction?.balance_after_transaction?.toLocaleString()}</p></div>
                        </div>
                    </div>
                    <div className='w-full'>
                        <button onClick={() => { dispatch(viewReference(id)); navigate('/makepayment') }}
                            className='bg-theme text-white py-3 px-5 w-full hover:underline hover:bg-[#004A36] ease-in-out transition-all duration-200'>
                            Payments & Transfers
                        </button>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default MobileFullDescription
