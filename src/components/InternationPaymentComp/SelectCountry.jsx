import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { changeCurrency, handleMoreCurrency } from '../../reduxtoolkit/paymentslice';

const SelectCountry = () => {

    const { isCurrencyClicked, countries } = useSelector(state => state.pay)
    const dispatch = useDispatch()

    useEffect(() => {
        const getBody = document.querySelector('body')

        const handleOverflow = () => {
            getBody.style.overflow = isCurrencyClicked ? 'hidden' : 'auto'
        }
        handleOverflow()

    }, [isCurrencyClicked])

    return (
        <div className={`fixed w-full top-0 h-full flex justify-center items-center tracking-tight z-30 left-0 right-0 bg-black/10 ${isCurrencyClicked ? 'block' : 'hidden'}`}>
            <div className='md:w-8/12 w-10/12 flex justify-center items-center mx-auto bg-white h-[90%] overflow-y-scroll'>
                <ul className='w-full p-5 h-full inline-block'>
                    <li><button onClick={() => dispatch(handleMoreCurrency(!isCurrencyClicked))} className='underline text-theme hover:no-underline py-2 flex items-center'><ChevronLeftIcon className='mr-2 size-5' /> <span>Back</span></button></li>
                    {countries.map((country, index) => (
                        <li key={index} onClick={() => dispatch(changeCurrency(country))} className={`flex justify-between cursor-pointer w-full items-center text-theme py-3 border-b border-b-gray-500/70 ${index === countries.length - 1 && 'border-b-0'}`}>
                            <div className='flex items-center gap-x-2'>
                                <div> <img src={country.flag} className='w-10 h-7' /></div>
                                <div>{country.label}</div>
                            </div>
                            <ChevronRightIcon className='h-5 w-5' />
                        </li>
                    ))}
                    <li className='py-2'></li>
                </ul>
            </div>
        </div>
    )
}

export default SelectCountry
