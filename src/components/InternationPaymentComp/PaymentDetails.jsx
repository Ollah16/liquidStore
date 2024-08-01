import React, { useEffect } from 'react'
import { GB } from 'country-flag-icons/react/3x2'
import { ChevronDownIcon } from '@heroicons/react/24/outline'
import { useDispatch, useSelector } from 'react-redux'
import { clearCurrentInputs, getAmount, getRate, handleMoreCurrency } from '../../reduxtoolkit/paymentslice'
import { getExchangeRates } from '../../util/api'
import currencyAbbreviationMap from '../../constants/CurrencyAbbrevation'

const PaymentDetails = React.memo(() => {

    const { selectedCountry, isCurrencyClicked, amount, equivalent } = useSelector(state => state.pay)
    const dispatch = useDispatch()
    const currAbbreviates = currencyAbbreviationMap()

    useEffect(() => {

        if (!amount) return
        const timeOut = setTimeout(async () => {
            try {
                const currentRates = await getExchangeRates();

                if (currentRates && selectedCountry) {
                    // Get the currency abbreviation from the mapping
                    const currencyAbbr = currAbbreviates[selectedCountry.currency];
                    const matchedRate = currentRates[currencyAbbr];

                    if (matchedRate) {
                        dispatch(getRate(matchedRate));
                    } else {
                        console.log('No matching rate found for:', currencyAbbr);
                    }
                }
            } catch (error) {
                console.error('Error fetching exchange rates:', error);
            }
        }, 500);

        return () => clearTimeout(timeOut)

    }, [amount, selectedCountry, dispatch]);

    return (
        <React.Fragment>
            <div className='w-full mb-5'>
                <p className='text-xl  font-medium mb-1'>Amount (GBP)</p>
                <div className='flex items-stretch h-12'>
                    <input
                        value={amount}
                        name='amount'
                        onChange={(e) => dispatch(getAmount(e.target.value))}
                        className='border py-2 w-10/12 inline-block border-gray-500/70 px-1' />
                    <span className='border border-l-0 py-2 px-1 border-gray-500/70 w-2/12 flex items-center justify-center'>
                        <GB title='Great Britain' className='w-10 h-10' />
                    </span>
                </div>
            </div>

            <div className='w-full mb-5'>
                <p className='text-xl  font-medium mb-1'>You're sending ({selectedCountry?.abbr})</p>
                <div className='flex items-stretch h-12'>
                    <input
                        name='equivalent'
                        defaultValue={amount ? equivalent : ''}
                        className='border py-2 w-10/12 inline-block border-gray-500/70 px-1' />
                    <div className='border border-l-0 py-2 px-1 border-gray-500/70 w-2/12'>
                        <button
                            onClick={() => dispatch(handleMoreCurrency(!isCurrencyClicked))}
                            className='flex gap-x-1 items-center'>
                            <img
                                src={selectedCountry?.flag}
                                alt={selectedCountry?.flag}
                                className='w-10 h-8' />
                            <ChevronDownIcon className='size-6' />
                        </button>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
})

export default PaymentDetails
