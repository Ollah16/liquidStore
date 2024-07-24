import { ChevronRightIcon, XMarkIcon } from '@heroicons/react/24/outline'
import React, { useEffect } from 'react'
import { RiErrorWarningFill } from 'react-icons/ri'
import { useDispatch } from 'react-redux'
import { getAccountInformation } from '../../reduxtoolkit/authslice'
import { getAccountInfo } from '../../util/api'

const NewPayee = React.memo(({ payNew, onClick }) => {

    const dispatch = useDispatch()

    useEffect(() => {
        const getInfo = async () => {
            const accountInfo = await getAccountInfo()
            dispatch(getAccountInformation(accountInfo))
        }

        getInfo()
    }, [dispatch])

    useEffect(() => {
        const handleOverflow = () => {
            const getBody = document.querySelector('body')
            getBody.style.overflowY = payNew ? 'hidden' : 'auto'
        }

        handleOverflow()
    }, [payNew])


    return (
        <div className={`tracking-light fixed min-h-screen flex justify-center bg-[#004a36]/90 items-center z-50 left-0 top-0 w-full ${payNew ? 'block' : 'hidden'}`}>
            <div className='w-full md:w-6/12 h-screen md:h-[80%] flex flex-col gap-y-5 p-5 bg-white overflow-y-auto relative'>
                <button onClick={onClick}><XMarkIcon className='size-6 text-theme absolute right-3 top-3' /></button>
                <div className=''>
                    <p className='text-xl font-semibold pb-5 border-b border-b-gray-500/70'>New payee details</p>
                </div>
                <div>
                    <label className='block mb-2 text-lg font-semibold'>Payee name</label>
                    <input className='py-2 block px-2 border border-black/70 w-full md:w-6/12' placeholder='e.g. Jane Smith or Acme Ltd' />
                </div>
                <div>
                    <label className='block mb-2 text-lg font-semibold'>Sort code</label>
                    <input className='py-2 block px-2 border border-black/70 w-full md:w-6/12' placeholder='Enter sort code' />
                </div>
                <div>
                    <label className='block mb-2 text-lg font-semibold'>Account number</label>
                    <input className='py-2 block px-2 border border-black/70 w-full md:w-6/12' placeholder='Enter sort code' />
                </div>
                <div>
                    <div className='flex gap-x-2'>
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
                    <button className='px-5 py-3 bg-theme text-white gap-x-3 flex justify-center'><span>Continue</span> <ChevronRightIcon className='size-6' /></button>
                </div>
            </div>
        </div >

    )
})

export default NewPayee
