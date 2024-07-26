import { PencilIcon } from '@heroicons/react/24/outline'
import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const TransferDeets = () => {
    const { recipientFullName, recipientActNumber, addressLineI, addressLineII, addressLineIII, bankName, bankaddressLineI, bankaddressLineII, bankaddressLineIII } = useSelector(state => state.pay)
    const { accountType, sortCode, accountNumber } = useSelector(state => state.auth)

    return (
        <div className='bg-gray-100 p-5'>

            <div className='mb-5'>
                <div>
                    <p className='mb-1 text-lg font-normal'>From</p>
                </div>
                <div>
                    <p className='font-semibold text-lg'>{accountType}</p>
                    <p className='font-light text-base'>{sortCode} | {accountNumber}</p>
                </div>
            </div>

            <div className='mb-5'>
                <div>
                    <p className='mb-1 text-lg font-normal'>To</p>
                </div>
                <div>
                    <p className='font-semibold text-lg mb-1'>{recipientFullName}</p>
                    <p className='font-light text-base mb-1'>{addressLineI} </p>
                    {addressLineII && <p className='font-light text-base mb-1'>{addressLineII}</p>}
                    {addressLineIII && <p className='font-light text-base mb-1'>{addressLineIII}</p>}
                </div>
            </div>

            <div className='mb-5'>
                <div className='mb-5'>
                    <p className='font-light text-lg mb-1'>Account number</p>
                    <p className='font-semibold text-base mb-1'>{recipientActNumber} </p>
                </div>
                <div className='mb-3'>
                    <p className='font-light text-lg mb-1'>Bank address</p>
                    <p className='font-semibold text-base mb-1'>{bankName.toUpperCase()} </p>
                    <p className='font-light text-base mb-1'>{bankaddressLineI.toUpperCase()} </p>
                    <p className='font-light text-base mb-1'>{bankaddressLineII.toUpperCase()} </p>
                    <p className='font-light text-base mb-1'>{bankaddressLineIII.toUpperCase()} </p>
                </div>
            </div >

            <div className='flex justify-end'>
                <div className='space-y-1' >
                    <Link to={'/internationalpayments'} className='flex items-center text-theme text-sm underline gap-x-1'><PencilIcon className='size-4' /> <span>Edit payment</span></Link>
                    <Link to={'/paynew'} className='flex items-center text-theme text-sm underline gap-x-1'><PencilIcon className='size-4' /> <span>Edit recipient</span></Link>
                </div>
            </div>
        </div >
    )
}

export default TransferDeets
