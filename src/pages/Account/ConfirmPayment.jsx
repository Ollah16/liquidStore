import React, { useEffect, useState } from 'react'
import Layout from './Layout'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'
import { Link, useParams } from 'react-router-dom'
import { getRecipient } from '../../util/api'
import { useSelector } from 'react-redux'

const ConfirmPayment = () => {
    const { accountNumber, accountType, sortCode } = useSelector(state => state.auth)
    const { id, amount, ref } = useParams()
    const [recipient, setRecipient] = useState({})

    useEffect(() => {

        //fetch beneficiary
        const getBeneficiary = async () => {
            const response = await getRecipient(id)
            setRecipient(response)
        }

        getBeneficiary()

    }, [])

    return (
        <Layout>
            <main className='w-full pt-5 pb-8 flex justify-start'>
                <div className='lg:w-10/12 w-full px-5 lg:px-0 mx-auto'>
                    <div className='lg:w-10/12 w-full'>
                        <div className='p-5'>
                            <h3 className='font-semibold text-3xl md:text-5xl'>Are these details correct?</h3>
                        </div>
                        <div className='md:w-10/12 w-full bg-white p-5'>

                            <div className='border-b border-b-gray-500 pb-8 mb-7'>
                                <p className='text-2xl mb-2'>You are making a <span className='font-semibold'>payment</span> of</p>
                                <h1 className='flex items-baseline mb-2'><span className='text-6xl font-semibold'>£{amount}.</span><sup className='text-4xl'>00</sup></h1>
                                <p className='text-lg font-light'>Reference: {ref}</p>
                            </div>
                            <div className='border-b border-b-gray-500 pb-5'>
                                <div className='my-3'>
                                    <p className='text-lg font-light'>From</p>
                                    <div className='flex items-baseline gap-x-3'>
                                        <span className='text-lg font-semibold'>{accountType}</span>
                                        <span className='text-sm font-light'>{sortCode}</span>
                                        <span className='text-sm font-light'>{accountNumber}</span>
                                    </div>
                                </div>
                                <div className='mb-3'>
                                    <p className='text-lg font-light'>To</p>
                                    <div className='flex items-baseline gap-x-3'>
                                        <span className='text-lg font-semibold'>{recipient.recipientFullName}</span>
                                        <span className='text-sm font-light'>{recipient.recipientSortCode}</span>
                                        <span className='text-sm font-light'>{recipient.recipientAccountNumber}</span>
                                    </div>
                                </div>
                                <div className='mb-3'>
                                    <p className='text-lg font-light'>When</p>
                                    <div className='flex items-baseline gap-x-3'>
                                        <span className='text-lg font-semibold'>Immediately - within 2 hours</span>
                                    </div>
                                </div>
                                <div className='mb-4'>
                                    <Link to={`/makepayment_transfer/${id}`} className='flex items-center gap-x-2 text-theme font-semibold text-lg'>
                                        <span><ChevronLeftIcon className='size-5' /></span>
                                        <span>Change payment details</span>
                                    </Link>
                                </div>

                            </div>
                            <div className='py-5 flex justify-end'>
                                <div className='flex gap-x-5 items-center'>
                                    <Link to={'/makepayment'} className='underline text-theme'>Cancel</Link>
                                    <Link className='hover:underline text-white bg-theme hover:bg-[#004A36] gap-x-1 flex py-3 px-5 items-center justify-center md:justify-normal font-semibold  transition-colors duration-200 ease-in-out'>
                                        <span>Make payment</span>
                                        <span><ChevronRightIcon className='size-5' /></span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </Layout >
    )
}

export default ConfirmPayment
