import React, { useEffect, useState } from 'react'
import Layout from './Layout'
import PaymentMethod from '../../components/NewPayeeComponent/PaymentMethod'
import ChooseMethod from '../../components/NewPayeeComponent/ChooseMethod'
import RecipientDetails from '../../components/NewPayeeComponent/RecipientDetails'
import FraudProtection from '../../components/NewPayeeComponent/FraudProtection'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { ChevronDownIcon } from '@heroicons/react/24/outline'
import { clearCurrentInputs, handleMoreCurrency, setInformation } from '../../reduxtoolkit/paymentslice'
import toast from 'react-hot-toast'

const PayNewRecipient = () => {
    const { selectedCountry, isCurrencyClicked, recipientFullName, recipientActNumber, addressLineI, bankName, bankaddressLineI, bankSwift } = useSelector(state => state.pay)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [isBank, setIsbank] = useState(false)

    useEffect(() => {
        dispatch(setInformation(false))
    }, [dispatch])

    useEffect(() => {
        dispatch(clearCurrentInputs())
    }, [dispatch])

    //handle method of transfer
    const handleMethod = (value) => {
        setIsbank(value)
    }

    //handle routing after validating fields
    const handleRoute = () => {
        // Check if required bank details are filled
        const isBankDetailsFilled = Boolean(bankName && (bankaddressLineI || bankSwift));

        // Validate all required fields
        const isFormValid = Boolean(recipientFullName && recipientActNumber && addressLineI && isBankDetailsFilled);
        if (isFormValid) {
            // Navigate to the international payments page if the form is valid
            navigate('/internationalpayments');
        } else {
            // Show an error message if required fields are missing
            toast.error('Fields marked with * are required');
        }
    };

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
                                        <Link to={'/accounts'} className='py-2 px-5 w-full md:w-auto inline-block text-center border-theme border-2 hover:underline text-theme'>Back</Link>
                                    </div>
                                    <div className='flex flex-col md:flex-row gap-x-5 gap-y-4 w-full md:w-auto'>
                                        <Link to={'/internationalpayments'} className='py-2 px-5 w-full border-theme border-2 text-center hover:underline text-theme'>Cancel</Link>
                                        <button onClick={handleRoute} className='py-2 px-5 bg-theme text-white w-full hover:underline text-center hover:bg-[#004A36]'>Continue</button>
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
