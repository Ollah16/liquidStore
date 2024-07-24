import React from 'react'
import { BiSolidDownArrow } from 'react-icons/bi'
import { setInformation } from '../../reduxtoolkit/paymentslice'
import { useDispatch, useSelector } from 'react-redux'
import { XMarkIcon } from '@heroicons/react/24/outline'

const Reference = () => {

    const dispatch = useDispatch()
    const { informationType } = useSelector(state => state.pay)

    return (
        <div className='relative md:w-8/12 w-10/12'>
            <div>
                <button onClick={() => dispatch(setInformation('ratefee'))} className='text-theme underline text-base mb-3'>More information about our Standard Exchange Rate and fee.</button>
                <p className='text-xl  font-medium mb-[1px]'>Reference (optional)</p>
                <p className='text-base  font-light text-black'>The recipient will see this on their statement</p>
            </div>
            <div className='w-full my-5'>
                <div className='w-full'>
                    <input className='py-2 w-full px-1 inline-block border-2 border-gray-500/70' />
                </div>
            </div>
            <div className={`absolute bg-theme text-white font-normal top-[-190px] ${informationType === 'ratefee' ? 'block' : 'hidden'}`}>
                <div className='p-5 relative'>
                    <div className='absolute right-2 top-2'>
                        <button onClick={() => dispatch(setInformation(false))}><XMarkIcon className='size-6 text-white' /></button>
                    </div>
                    <p className='text-lg font-medium'>Our Standard Exchange Rate</p>
                    <p className='text-sm'>Our standard exchange rate will include a margin which is the difference between our standard exchange rate and the rate at which we buy and sell currency in the foreign exchange markets (the wholesale rate).</p>
                    <p className='text-sm'>If you are sending pounds or a foreign currency other than euros (EUR), you will also pay our fee of £9.50</p>
                    <BiSolidDownArrow className='text-theme inline-block -bottom-3 absolute left-8' />
                </div>
            </div>
        </div>
    )
}

export default Reference
