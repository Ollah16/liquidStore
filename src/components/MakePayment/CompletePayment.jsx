import { ChevronRightIcon } from '@heroicons/react/24/outline'
import React from 'react'
import { Link } from 'react-router-dom'

const CompletePayment = React.memo(({ isDisabled, id, payment }) => {
    return (
        <div>
            <div className='flex flex-col-reverse md:flex-row gap-y-5 justify-end gap-x-5 pt-5 border-t border-gray-500/30'>
                <Link to={'/accounts'} className='text-theme text-center text-base font-semibold px-5 py-3 bg-gray-100 hover:bg-gray-200 transition-colors duration-200 ease-in-out'>Cancel</Link>
                <Link to={`/confirmpayment/${id}/${payment?.amount}/${payment?.ref}`} disabled={isDisabled} className={`${isDisabled || !payment.amount ? 'cursor-not-allowed text-black/60 bg-gray-100 hover:bg-gray-200' : 'cursor-pointer text-white bg-theme hover:bg-[#004A36]'} gap-x-1 flex py-3 px-5 items-center justify-center md:justify-normal font-semibold  transition-colors duration-200 ease-in-out`}><span>Continue</span><ChevronRightIcon className='size-5' /></Link>
            </div>
        </div>
    )
})

export default CompletePayment
