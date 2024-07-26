import React, { Fragment } from 'react'
import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'

const CompletePayment = () => {

    const navigate = useNavigate()
    const { selectedCountry, recipientActNumber, bankName, recipientFullName, amount } = useSelector(state => state.pay)
    const isFilled = Boolean(selectedCountry && recipientActNumber && bankName && recipientFullName)

    //middleware to check if recipient is chosen
    const handleRouting = () => {
        if (!isFilled) return toast.error('please add a recipient')
        if (!amount) return toast.error('please enter an amount')
        navigate('/confirmintpayment')
    }

    return (<Fragment>
        <hr className='text-black mb-5 block'></hr>
        <div className='my-5 flex justify-end w-full'>
            <div className='gap-x-5 h-fit w-full md:w-auto flex flex-col md:flex-row gap-y-5'>
                <Link to={'/accounts'} className='border-theme border text-center text-theme py-3 px-5 hover:underline inline-block w-full md:w-auto'>Cancel</Link>
                <button onClick={handleRouting} className='bg-theme text-white text-center py-3 px-5 hover:underline hover:bg-[#004A36] inline-block transition-colors duration-200 ease-in-out w-full md:w-auto'>Continue</button>
            </div>
        </div>
    </Fragment>)
}

export default CompletePayment
