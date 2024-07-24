import { XMarkIcon } from '@heroicons/react/24/outline'
import React, { useState } from 'react'
import { BiSolidDownArrow } from "react-icons/bi";
import { useDispatch, useSelector } from 'react-redux';
import { setInformation } from '../../reduxtoolkit/paymentslice';

const RecipientDetails = () => {
    const { informationType } = useSelector(state => state.pay)
    const dispatch = useDispatch()

    return (
        <div>
            <div className='my-5 w-full border-b-gray-500 border-b pb-7'>
                <div className='bg-[#eaeaea] p-5 w-full'>
                    <p className='text-xl font-normal mb-3'>What you will need</p>

                    <p className='text-base font-normal'>Recipient details</p>

                    <ul className='list-disc font-light text-sm px-5'>
                        <li className='px-1 py-1'>Full name</li>
                        <li className='px-1 py-1'>Address</li>
                    </ul>

                    <p className='text-base font-normal'>Recipient's account details</p>

                    <ul className='list-disc font-light text-sm px-5'>
                        <li className='px-1 py-1'>Account number</li>
                        <li className='px-1 py-1'>BIC/SWIFT or Bank name and address</li>
                    </ul>
                </div>
            </div>
            <div className='w-full relative overflow-hidden'>
                <p className='text-2xl font-normal mb-3'>Step 1 - Recipient details</p>
                <div className='mb-5'>
                    <label htmlFor='full name' className='block mb-3'>Recipient's full name*</label>
                    <input id='full name' className='border py-2 w-full inline-block border-gray-500/70' required />
                </div>
                <div>
                    <label htmlFor='address' className='block mb-1'>Recipient's address*</label>
                    <button
                        onClick={() => dispatch(setInformation('address'))}
                        className='text-theme underline text-sm mb-3'>Why do I need to provide an address?</button>
                    <div className='flex flex-col gap-y-3'>
                        <input id='address' className='border py-2 w-full inline-block border-gray-500/70' required />
                        <input id='address' className='border py-2 w-full inline-block border-gray-500/70' required />
                        <input id='address' className='border py-2 w-full inline-block border-gray-500/70' required />
                    </div>
                </div>
                <div className={`absolute bg-theme text-white font-normal top-[60px] ${informationType === 'address' ? 'block' : 'hidden'}`}>
                    <div className='p-5 relative'>
                        <div className='absolute right-2 top-2'>
                            <button onClick={() => dispatch(setInformation(false))}><XMarkIcon className='size-6 text-white' /></button>
                        </div>
                        <p className='text-lg font-medium'>Recipient's address</p>
                        <p className='text-sm'>To help combat fraud, banks require the recipient's full address in the address fields.</p>
                        <BiSolidDownArrow className='text-theme inline-block -bottom-3 absolute left-8' />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default RecipientDetails
