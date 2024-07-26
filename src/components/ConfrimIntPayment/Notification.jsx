import React, { Fragment } from 'react'
import { useSelector } from 'react-redux'

const Notification = () => {

    const { email } = useSelector(state => state.auth)

    return (
        <Fragment>
            <div className='py-5'>
                <div className='flex items-center gap-x-2'>
                    <input type='checkbox' className='w-5 h-5' />
                    <span className='text-lg font-light'>Email me a receipt of this payment request</span>
                </div>
            </div>
            <div className='pb-7 border-gray-500 border-b-[.5px]'>
                <div className='p-5 bg-gray-100'>
                    <p>
                        We'll send a receipt to the email address below. If your email address is incorrect you can update it via your profile and restart your payment request
                    </p>
                    <p className='font-bold'>{email}</p>
                </div>
            </div>
        </Fragment>
    )
}

export default Notification
