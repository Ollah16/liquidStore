import { XMarkIcon } from '@heroicons/react/24/outline'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setInformation } from '../../reduxtoolkit/paymentslice'
import { BiSolidDownArrow } from 'react-icons/bi'

const PaymentMethod = ({ isBank }) => {
    const { informationType } = useSelector(state => state.pay)
    const dispatch = useDispatch()

    return (!isBank ?
        <div className='w-full relative'>
            <p className='text-base font-semibold text-black/80'>BIC/SWIFT*</p>
            <p className='text-base font-semibold text-black/80'>(e.g. LOYDGB2L or LOYDGB2L124)</p>
            <button onClick={() => dispatch(setInformation('swift'))} className='underline text-theme text-sm '>What is a BIC/SWIFT?</button>
            <div className='my-5'>
                <input id='address' className='border py-2 w-full px-1 inline-block border-gray-500/70' required />
            </div>
            <div className={`absolute bg-theme text-white font-normal bottom-[90px] ${informationType === 'swift' ? 'block' : 'hidden'}`}>
                <div className='p-5 relative'>
                    <div className='absolute right-2 top-2'>
                        <button onClick={() => dispatch(setInformation(false))}><XMarkIcon className='size-6 text-white' /></button>
                    </div>
                    <p className='text-lg font-medium'>BIC/SWIFT</p>
                    <p className='text-sm'>Bank Identification Codes (BIC), also referred to as SWIFT codes, are used to identify the bank name and branch of the recipient's account.</p>
                    <p className='text-sm'>This helps us and the receiving banks process your international payments quickly and efficiently.</p>
                    <p className='text-sm'>If you don't know the BIC/SWIFT, you can enter the Bank name and address.</p>
                    <BiSolidDownArrow className='text-theme inline-block -bottom-3 absolute left-8' />
                </div>
            </div>

        </div>
        :
        <div className='w-full relative'>
            <p className='text-base font-semibold text-black/80'>Bank name*</p>
            <button
                onClick={() => dispatch(setInformation('bankaddress'))}
                className='underline text-theme text-sm '>Why do I need to provide a bank name and address?</button>
            <div className='my-5'>
                <input id='address' className='border py-2 w-full inline-block px-1 border-gray-500/70' required />
            </div>
            <p className='text-base font-semibold mb-3 text-black/80'>Bank address*</p>
            <div className='mb-5 flex flex-col gap-y-3'>
                <input id='address' className='border py-2 w-full inline-block px-1 border-gray-500/70' required />
                <input id='address' className='border py-2 w-full inline-block px-1 border-gray-500/70' required />
                <input id='address' className='border py-2 w-full inline-block px-1 border-gray-500/70' required />
            </div>
            <div className={`absolute bg-theme text-white font-normal top-[-110px] ${informationType === 'bankaddress' ? 'block' : 'hidden'}`}>
                <div className='p-5 relative'>
                    <div className='absolute right-2 top-2'>
                        <button onClick={() => dispatch(setInformation(false))}><XMarkIcon className='size-6 text-white' /></button>
                    </div>
                    <p className='text-lg font-medium'>Bank name & address</p>
                    <p className='text-sm'>We use this information to route your payment to the correct bank and branch. Please enter the full bank name and address as supplied by your recipient.</p>
                    <BiSolidDownArrow className='text-theme inline-block -bottom-3 absolute left-8' />
                </div>
            </div>


        </div>
    )
}

export default PaymentMethod
