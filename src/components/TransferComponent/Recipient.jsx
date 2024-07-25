import { PencilIcon } from '@heroicons/react/24/outline'
import React from 'react'

const Recipient = ({ recipient, onClick }) => {
    return (
        <div className='my-5'>
            <p className='mb-1 font-normal text-lg'>To</p>
            <div className='p-5 bg-gray-100 w-full flex justify-between'>
                <div className='flex gap-x-3 items-center'>
                    <span className='uppercase font-medium text-black/70'>{recipient.recipientFullName} </span>
                    <span className='font-light text-sm'>{recipient.recipientAccountNumber} </span>
                    <span className='font-light text-sm'>{recipient.recipientSortCode} </span>
                </div>
                <button
                    onClick={onClick}
                    className='text-theme flex items-center gap-x-1'>
                    <PencilIcon className='size-4' /> <span>Change this</span>
                </button>
            </div>
        </div>
    )
}

export default Recipient
