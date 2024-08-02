import React, { Fragment } from 'react'
import { useDispatch } from 'react-redux'
import { getAmount, getPaymentref } from '../../reduxtoolkit/paymentslice'

const PaymentInfo = () => {
    const dispatch = useDispatch()

    return (
        <Fragment>
            <div className='mb-5 w-full'>
                <div className='w-full'>
                    <p className='mb-1 font-normal text-lg'>Amount</p>
                    <div className='md:w-5/12 w-10/12 flex items-center gap-x-0'>
                        <span className='w-3'>£</span>
                        <input
                            name='amount'
                            onChange={e => dispatch(getAmount(e.target.value))}
                            className='px-1 py-2 w-full border border-gray-500/70' required />
                    </div>
                </div>
            </div>
            <div className='mb-5 w-full'>
                <div className='w-full'>
                    <p className='mb-1 font-normal text-lg'>Reference</p>
                    <p className='font-light text-xs md:text-sm my-1'>The recipient will see this on their statement</p>
                    <div className='w-full'>
                        <input
                            name='ref'
                            onChange={e => dispatch(getPaymentref(e.target.value))}
                            className='px-1 py-2 md:w-5/12 w-10/12 border border-gray-500/70' required />
                    </div>
                </div>
            </div>
            <div className='mb-5 w-full'>
                <div className='w-full'>
                    <div className='my-4 gap-x-5 flex items-center'>
                        <input type='checkbox' className='w-5 h-5 border border-gray-500/70' />
                        <span>Repeat payment (make this a standing order)</span>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default PaymentInfo
