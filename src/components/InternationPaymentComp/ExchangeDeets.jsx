import React from 'react'
import { useSelector } from 'react-redux'
import CurrencyAbbrevation from '../../constants/CurrencyAbbrevation'

const ExchangeDeets = () => {

    const { amount, rate, total, selectedCountry } = useSelector(state => state.pay)

    const currencyAbbr = CurrencyAbbrevation()
    const currency = currencyAbbr[selectedCountry.currency]

    return (
        <div className='w-full mb-4'>
            <div className='flex flex-col w-full bg-[#2178b0] p-5 text-white '>
                <div className='flex space-x-10'><span className='w-4/12'>Exchange rate</span><span>{amount ? `1GBP = ${rate} ${currency}` : '----'}</span></div>
                <div className='flex space-x-10'><span className='w-4/12'>Amount in GBP</span><span>{amount ? `${amount} GBP` : '----'}</span></div>
                <div className='flex space-x-10'><span className='w-4/12'>Our fee</span><span>{amount ? '9.50 GBP' : '----'}</span></div>
                <hr className='mb-3 mt-2'></hr>
                <div className='flex space-x-10'> <span className='w-4/12'>Total you pay</span><span>{amount ? `${total} GBP ` : '----'}</span></div>
            </div>
        </div>
    )
}

export default ExchangeDeets
