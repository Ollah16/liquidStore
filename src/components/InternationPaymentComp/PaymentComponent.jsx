import React, { useEffect, useState } from 'react'
import Balance from './Balance'
import PaymentDetails from './PaymentDetails'
import Reference from './Reference'
import CompletePayment from './CompletePayment'
import ExchangeDeets from './ExchangeDeets'
import Pay from './Pay'
import From from './From'
import { getCountries } from '../../util/api'
import { getAllCountry, getSelectedCountry } from '../../reduxtoolkit/paymentslice'
import { useDispatch } from 'react-redux'

const PaymentComponent = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        // Fetch country data from the REST Countries API
        const fetchCountry = async () => {
            const allCountries = await getCountries()
            dispatch(getAllCountry(allCountries))
            dispatch(getSelectedCountry(allCountries[0]))
        }
        fetchCountry()
    }, []);

    return (
        <div className='lg:w-8/12 md:w-10/12 w-full'>
            <div className='w-full bg-white p-5'>
                <From />
                <Balance />
                <Pay />
                <PaymentDetails />
                <ExchangeDeets />
                <Reference />
                <CompletePayment />

            </div>
        </div>
    )
}

export default PaymentComponent
