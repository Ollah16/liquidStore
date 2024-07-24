import React, { useEffect, useState } from 'react'
import Layout from './Layout'
import PaymentMethod from '../../components/NewPayeeComponent/PaymentMethod'
import ChooseMethod from '../../components/NewPayeeComponent/ChooseMethod'
import RecipientDetails from '../../components/NewPayeeComponent/RecipientDetails'
import FraudProtection from '../../components/NewPayeeComponent/FraudProtection'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { ChevronDownIcon } from '@heroicons/react/24/outline'
import { handleMoreCurrency, setInformation } from '../../reduxtoolkit/paymentslice'

const PayNewRecipient = () => {
    const { selectedCountry, isCurrencyClicked } = useSelector(state => state.pay)
    const dispatch = useDispatch()

    const [isBank, setIsbank] = useState(false)

    useEffect(() => {
        dispatch(setInformation(false))
    }, [dispatch])

    const handleMethod = (value) => {
        setIsbank(value)
    }

    return (
        <Layout>
            <div className='md:w-8/12 w-full'>
                <div className='py-5 h-[70px]'>
                    <p className='text-3xl font-normal px-5 md:px-0'>Send money outside the UK</p>
                </div>
                <div className='w-full bg-white p-5 pb-10'>
                    <div>
                        <div>
                            <FraudProtection />
                            <div>
                                <p className='text-lg font-normal mb-1'>Country of recipient's bank</p>
                            </div>
                            <div className='w-full md:w-7/12'>
                                <button
                                    onClick={() => dispatch(handleMoreCurrency(!isCurrencyClicked))}
                                    className='w-full flex justify-between border py-2 px-5'><span>{selectedCountry.countryName?.toUpperCase()}</span> <ChevronDownIcon className='size-6' /></button>
                            </div>
                            <div className='border-b border-b-gray-500 mb-5'>
                                <div className='w-full md:w-7/12'>

                                    <RecipientDetails />

                                    <ChooseMethod
                                        onChange={() => handleMethod(!isBank)}
                                        isBank={isBank} />

                                    <PaymentMethod isBank={isBank} />

                                </div>
                            </div>

                            <div>
                                <div className='flex flex-col md:flex-row justify-between gap-y-5'>
                                    <div className='w-full'>
                                        <Link to={'/internationalpayments'} className='py-2 px-5 w-full md:w-auto inline-block text-center border-theme border-2 hover:underline text-theme'>Back</Link>
                                    </div>
                                    <div className='flex flex-col md:flex-row gap-x-5 gap-y-4 w-full md:w-auto'>
                                        <Link to={'/internationalpayments'} className='py-2 px-5 w-full border-theme border-2 text-center hover:underline text-theme'>Cancel</Link>
                                        <Link className='py-2 px-5 bg-theme text-white w-full hover:underline text-center hover:bg-[#004A36]'>Continue</Link>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </Layout >)
}

export default PayNewRecipient
