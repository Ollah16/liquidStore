import { PencilIcon } from '@heroicons/react/24/outline'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { clearCurrentInputs } from '../../reduxtoolkit/paymentslice'

const RecipientDeet = () => {
    const dispatch = useDispatch()
    const { selectedCountry, accountNumber, bankName, fullName } = useSelector(state => state.pay)
    const isFilled = Boolean(selectedCountry && accountNumber && bankName && fullName)
    const navigate = useNavigate()


    //chnage current recipient
    const handleChangeRecipient = () => {
        //clear current filled inputs
        dispatch(clearCurrentInputs())
        navigate('/paynew')
    }

    return (isFilled && <div className={`p-5 bg-gray-100 ${isFilled ? 'block' : 'hidden'}`}>
        <div className='font-semibold text-lg'>{fullName}</div>
        <div className='font-light'>{accountNumber}</div>
        <div className='font-light'>{bankName}</div>
        <div className='font-semibold text-lg'>{selectedCountry.countryName.toUpperCase()}</div>
        <div className='flex justify-end'>
            <button onClick={handleChangeRecipient} className='underline text-theme text-sm flex items-center gap-x-1'>
                <PencilIcon className='size-5' />
                <span>Change recipient</span>
            </button>
        </div>
    </div>
    )
}

export default RecipientDeet
