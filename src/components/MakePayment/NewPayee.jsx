import { ChevronRightIcon, XMarkIcon } from '@heroicons/react/24/outline'
import React, { useEffect, useState } from 'react'
import { RiErrorWarningFill } from 'react-icons/ri'
import { useDispatch } from 'react-redux'
import { getAccountInformation, handle_Login_Signout } from '../../reduxtoolkit/authslice'
import { addBen, getAccountInfo } from '../../util/api'
import { useNavigate } from 'react-router-dom'

const NewPayee = React.memo(({ payNew, onClick }) => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [recipientFullName, setFullName] = useState('')
    const [recipientAccountNumber, setAccountNumber] = useState('')
    const [recipientSortCode, setSortCode] = useState('')

    useEffect(() => {
        //get account balance
        const getInfo = async () => {
            try {
                const accountInfo = await getAccountInfo()
                dispatch(getAccountInformation(accountInfo))
            } catch (err) {
                console.error(err)
                dispatch(handle_Login_Signout(false))
            }
        }

        getInfo()
    }, [dispatch])

    useEffect(() => {

        //handle overflow when adding payee
        const handleOverflow = () => {
            const getBody = document.querySelector('body')
            getBody.style.overflowY = payNew ? 'hidden' : 'auto'
        }

        handleOverflow()

        window.addEventListener('scroll', handleOverflow)
        return () => window.removeEventListener('scroll', handleOverflow)
    }, [payNew])

    //add new beneficiary
    const addNewBeneficiary = async () => {
        const body = { recipientFullName, recipientAccountNumber, recipientSortCode }
        const beneficiaryId = await addBen(body)
        setFullName('')
        setAccountNumber('')
        setSortCode('')
        onClick()
        navigate(`/makepayment_transfer/${beneficiaryId}`)
    }


    return (
        <div className={`tracking-light fixed h-full flex justify-center bg-[#004a36]/90 items-center z-50 left-0 top-0 w-full ${payNew ? 'block' : 'hidden'}`}>
            <div className='w-full md:w-6/12 min-h-screen md:min-h-[80%] flex flex-col gap-y-5 p-5 bg-white overflow-y-auto relative'>
                <button onClick={onClick}><XMarkIcon className='size-6 text-theme absolute right-3 top-3' /></button>
                <div className=''>
                    <p className='text-xl font-semibold pb-5 border-b border-b-gray-500/70'>New payee details</p>
                </div>
                <div>
                    <label className='block mb-2 text-lg font-semibold'>Payee name</label>
                    <input
                        value={recipientFullName}
                        onChange={(e) => setFullName(e.target.value)} className='py-2 block px-2 border border-black/70 w-full md:w-6/12' placeholder='e.g. Jane Smith or Acme Ltd' />
                </div>
                <div>
                    <label className='block mb-2 text-lg font-semibold'>Sort code</label>
                    <input
                        value={recipientSortCode}
                        onChange={(e) => setSortCode(e.target.value)} className='py-2 block px-2 border border-black/70 w-full md:w-6/12' placeholder='Enter sort code' />
                </div>
                <div>
                    <label className='block mb-2 text-lg font-semibold'>Account number</label>
                    <input
                        value={recipientAccountNumber}
                        onChange={(e) => setAccountNumber(e.target.value)} className='py-2 block px-2 border border-black/70 w-full md:w-6/12' placeholder='Account number' />
                </div>
                <div>
                    <div className='flex gap-x-1'>
                        <input type='checkbox' className='py-2 inline-block border-black/70 w-1/12' />
                        <p className='text-lg w-11/12'>Is this a business</p>
                    </div>
                </div>
                <div className='pb-5 border-b-gray-500/70 border-b'>
                    <div className='flex items-center gap-x-2'>
                        <RiErrorWarningFill className='text-[#0d5595] h-5 w-5' /><p>We'll check these details with the payee's bank.</p>
                    </div>
                </div>
                <div className='pb-5 flex flex-col-reverse gap-y-5 md:flex-row justify-end gap-x-5'>
                    <button onClick={onClick} className='underline text-theme text-center px-5'>Cancel</button>
                    <button onClick={() => addNewBeneficiary()} className='px-5 py-3 bg-theme text-white gap-x-3 flex justify-center'><span>Continue</span> <ChevronRightIcon className='size-6' /></button>
                </div>
            </div>
        </div >

    )
})

export default NewPayee
