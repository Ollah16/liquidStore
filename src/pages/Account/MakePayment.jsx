import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { TiPlus } from 'react-icons/ti'
import Layout from './Layout'
import { ChevronRightIcon } from '@heroicons/react/24/outline'
import Balance from '../../components/StatementComponent/Balance'
import NewPayee from '../../components/MakePayment/NewPayee'

const MakePayment = () => {
    const [payNew, setPayNew] = useState(false)

    const handlePayNew = (value) => {
        setPayNew()
    }

    return (
        <Layout>
            <main className='w-full'>

                <div className='lg:w-10/12 px-5 lg:px-0 w-full mx-auto pb-10'>
                    <div className='lg:w-9/12 md:w-11/12 w-full'>
                        <div>
                            <div className='px-5 py-8'>
                                <p className='text-4xl font-semibold tracking-tight'>Payments and transfers</p>
                            </div>

                            <div className='bg-white p-5'>
                                <p className='mb-2 font-semibold text-lg tracking-tight'>Send money from</p>
                                <Balance />

                                <div className='my-5'>
                                    <p className='mb-1 font-semibold text-lg tracking-tight'>To</p>
                                    <div className='md:flex-row flex gap-x-8 flex-col gap-y-5'>
                                        <Link to={'/'} className='bg-theme px-5 py-2 text-white font-semibold text-lg inline-block w-full md:w-fit text-center hover:bg-[#004A36] transition-colors duration-200 ease-in-out'>Select account or recipient</Link>
                                        <button
                                            onClick={() => setPayNew(!payNew)}
                                            className='border hover:underline px-5 py-2 flex font-semibold text-theme border-theme w-full md:w-fit justify-center items-center gap-x-3'><span>Pay someone new</span> <TiPlus className='w-5 h-5' /></button>
                                    </div>
                                </div>

                                <div className='mb-10'>
                                    <Link to={'/internationalpayments'} className='flex gap-x-2 items-center hover:underline font-semibold text-theme'><span>Send money outside the UK</span> <ChevronRightIcon className='size-5' /></Link>
                                </div>

                                <div>
                                    <div className='flex flex-col-reverse md:flex-row gap-y-5 justify-end gap-x-5 pt-5 border-t border-gray-500/30'>
                                        <Link to={'/accounts'} className='text-theme text-center text-base font-semibold px-5 py-3 bg-gray-100 hover:bg-gray-200 transition-colors duration-200 ease-in-out'>Cancel</Link>
                                        <button className='gap-x-3 flex py-3 px-5 items-center justify-center md:justify-normal font-semibold text-black/60 bg-gray-100 hover:bg-gray-200 transition-colors duration-200 ease-in-out'><span>Continue</span><ChevronRightIcon className='size-5' /></button>
                                    </div>
                                </div>
                            </div>
                        </div >
                    </div>
                </div>
            </main>
            <NewPayee payNew={payNew} onClick={() => handlePayNew(!payNew)} />

        </Layout>
    )
}

export default MakePayment
