import { XMarkIcon } from '@heroicons/react/24/outline'
import React from 'react'
import { BiSolidDownArrow } from 'react-icons/bi'
import { useDispatch, useSelector } from 'react-redux'
import { setInformation } from '../../reduxtoolkit/paymentslice'

const ChooseMethod = ({ onChange, isBank }) => {
    const { informationType } = useSelector(state => state.pay)
    const dispatch = useDispatch()
    return (
        <div className='my-5 border-b-gray-500 w-full relative overflow-visible'>
            <p className='text-2xl font-normal mb-3'> Step 2 - Recipient bank account details</p>
            <p className='text-base font-semibold text-black/80'>Account number / IBAN*</p>
            <button
                onClick={() => dispatch(setInformation('account'))}
                className='text-sm font-normal underline text-theme'>What is an account number?</button>
            <div className='my-5'>
                <input id='address' className='border py-2 px-1 w-full inline-block border-gray-500/70' required />
            </div>
            <div className='flex flex-col gap-y-3 px-5'>
                <div className='flex items-center gap-x-3'><input type='checkbox' checked={!isBank} name='bank' onChange={onChange} className='rounded-full inline-block h-5 w-5' /> <span>BIC/SWIFT code</span></div>
                <div className='flex items-center gap-x-3'><input type='checkbox' checked={isBank} name='bank' onChange={onChange} className='rounded-full inline-block h-5 w-5' /> <span>Bank name and address</span></div>
            </div>

            <div className={`absolute bg-theme text-white font-normal top-[-55px] ${informationType === 'account' ? 'block' : 'hidden'}`}>
                <div className='p-5 relative'>
                    <div className='absolute right-2 top-2'>
                        <button onClick={() => dispatch(setInformation(false))}><XMarkIcon className='size-6 text-white' /></button>
                    </div>
                    <p className='text-lg font-medium'>Account number</p>
                    <p className='text-sm'>This is the number that uniquely identifies an individual account of a specific financial institution.</p>
                    <p className='text-sm'>It must be accompanied by a BIC / SWIFT or Bank name and address.</p>
                    <BiSolidDownArrow className='text-theme inline-block -bottom-3 absolute left-8' />
                </div>
            </div>
        </div>
    )
}

export default ChooseMethod
