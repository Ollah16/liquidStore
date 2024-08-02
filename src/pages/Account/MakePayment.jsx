import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { TiPlus } from 'react-icons/ti'
import Layout from './Layout'
import { ChevronRightIcon } from '@heroicons/react/24/outline'
import Balance from '../../components/StatementComponent/Balance'
import NewPayee from '../../components/MakePayment/NewPayee'
import SelectPayee from '../../components/MakePayment/SelectPayee'
import CompletePayment from '../../components/MakePayment/CompletePayment'

const MakePayment = () => {
    const [payNew, setPayNew] = useState(false)
    const [isSelected, selectRecipient] = useState(false)
    const navigate = useNavigate()

    //Open new payment
    const handlePayNew = (value) => {
        setPayNew(value)
        selectRecipient(false)
    }

    //choose beneficiary
    const handleBeneficiary = (value) => {
        selectRecipient(value)
        setPayNew(false)
    }

    //route to transfer
    const handleRoute = (id) => {
        navigate(`/makepayment_transfer/${id}`)
    }

    return (
        <Layout>
            <main className='w-full'>

                <div className='lg:w-10/12 px-5 lg:px-0 w-full mx-auto pb-10'>
                    <div className='lg:w-9/12 md:w-11/12 w-full'>
                        <div>
                            <div className='px-5 py-8'>
                                <p className='md:text-4xl text-2xl font-semibold tracking-tight'>Payments and transfers</p>
                            </div>

                            <div className='bg-white p-5'>
                                <p className='mb-2 font-semibold text-lg tracking-tight'>Send money from</p>
                                <Balance />

                                <div className='my-5'>
                                    <p className='mb-1 font-semibold text-lg tracking-tight'>To</p>
                                    <div className='md:flex-row flex gap-x-8 flex-col gap-y-5'>
                                        <button onClick={() => selectRecipient(!isSelected)} className='bg-theme px-5 py-2 text-white font-semibold text-lg inline-block w-full md:w-fit text-center hover:bg-[#004A36] transition-colors duration-200 ease-in-out'>Select account or recipient</button>
                                        <button
                                            onClick={() => setPayNew(!payNew)}
                                            className='border hover:underline px-5 py-2 flex font-semibold text-theme border-theme w-full md:w-fit justify-center items-center gap-x-3'><span>Pay someone new</span> <TiPlus className='w-5 h-5' /></button>
                                    </div>
                                </div>

                                <div className='mb-10'>
                                    <Link to={'/internationalpayments'} className='flex gap-x-2 items-center hover:underline font-semibold text-theme'><span>Send money outside the UK</span> <ChevronRightIcon className='size-5' /></Link>
                                </div>

                                <CompletePayment isDisabled={true} />
                            </div>
                        </div >
                    </div>
                </div>
            </main>
            <NewPayee
                payNew={payNew}
                onClick={() => handlePayNew(!payNew)} />

            <SelectPayee
                onClick={() => handleBeneficiary(!isSelected)}
                isSelected={isSelected} newPay={() => handlePayNew(!payNew)}
                clickRecipient={handleRoute} />
        </Layout>
    )
}

export default MakePayment
