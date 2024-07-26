import React from 'react'
import Layout from './Layout'
import { useSelector } from 'react-redux'
import ExchangeDeets from '../../components/InternationPaymentComp/ExchangeDeets'
import TransferDeets from '../../components/ConfrimIntPayment/TransferDeets'
import Notification from '../../components/ConfrimIntPayment/Notification'
import CurrencyAbbrevation from '../../constants/CurrencyAbbrevation'
import { ChevronRightIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'

const ConfirmIntPayment = () => {
    const { equivalent, selectedCountry } = useSelector(state => state.pay)
    const currencyAbbr = CurrencyAbbrevation()
    const currency = currencyAbbr[selectedCountry.currency]

    return (
        <Layout>
            <main className='md:w-10/12 lg:w-8/12 w-full mx-auto gap-x-5'>
                <div>
                    <div className='py-5 h-[70px]'>
                        <p className='text-3xl font-normal px-5 md:px-0'>Send money outside the UK</p>
                    </div>
                    <div className='p-5 bg-white mb-2'>
                        <div className='border-b-[.5px] border-b-gray-500 pb-5'>
                            <div>
                                <p className='text-lg'>You are making a payment of</p>
                            </div>
                            <div className='mb-3'>
                                <span className='text-2xl'>{equivalent} {currency}</span>
                            </div>
                            <ExchangeDeets />
                            <TransferDeets />
                        </div>
                        <Notification />
                        <div className='py-5 flex justify-end'>
                            <div className='flex gap-x-5 items-center'>
                                <Link to={'/account'} className='underline text-theme'>Cancel</Link>
                                <Link to={'/error'} className='hover:underline text-white bg-theme hover:bg-[#004A36] gap-x-1 flex py-3 px-5 items-center justify-center md:justify-normal font-semibold  transition-colors duration-200 ease-in-out'>
                                    <span>Make payment</span>
                                    <span><ChevronRightIcon className='size-5' /></span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </Layout>
    )
}

export default ConfirmIntPayment
