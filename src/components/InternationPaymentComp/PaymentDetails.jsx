import React from 'react'
import { GB } from 'country-flag-icons/react/3x2'
import { ChevronDownIcon } from '@heroicons/react/24/outline'
import { useDispatch, useSelector } from 'react-redux'
import { handleMoreCurrency } from '../../reduxtoolkit/paymentslice'

const PaymentDetails = React.memo(() => {

    const { selectedCountry, isCurrencyClicked } = useSelector(state => state.pay)
    const dispatch = useDispatch()

    return (
        <React.Fragment>
            <div className='w-full mb-5'>
                <p className='text-xl  font-medium mb-1'>Amount (GBP)</p>
                <div className='flex items-stretch md:w-8/12 w-10/12 h-12'>
                    <input className='border py-2 w-10/12 inline-block border-gray-500/70' />
                    <span className='border border-l-0 py-2 px-2 border-gray-500/70 w-2/12 flex items-center justify-center'>
                        <GB title='Great Britain' className='w-10 h-10' />
                    </span>
                </div>
            </div>

            <div className='w-full mb-5'>
                <p className='text-xl  font-medium mb-1'>You're sending ({selectedCountry?.abbr})</p>
                <div className='flex items-stretch md:w-8/12 w-10/12 h-12'>
                    <input className='border py-2 w-10/12 inline-block border-gray-500/70' />
                    <div className='border border-l-0 py-2 px-2 border-gray-500/70 w-2/12'>
                        <button onClick={() => dispatch(handleMoreCurrency(!isCurrencyClicked))} className='flex gap-x-1 items-center'><img src={selectedCountry?.flag} className='w-10 h-8' /><ChevronDownIcon className='size-6' /></button>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
})

export default PaymentDetails
