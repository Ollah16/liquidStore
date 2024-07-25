import { ChevronRightIcon, MagnifyingGlassIcon, XMarkIcon } from '@heroicons/react/24/outline'
import React, { useEffect, useState } from 'react'
import { deleteBeneficiary, getAllBen } from '../../util/api'
import { TiPlus } from 'react-icons/ti'
import { useNavigate } from 'react-router-dom'

const SelectPayee = React.memo(({ isSelected, onClick, newPay, clickRecipient }) => {

    const [allBeneficiaries, setBeneficiary] = useState([])
    const [isDeleteClicked, setIsDelete] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {

        //handle overflow when adding payee
        const handleOverflow = () => {
            const getBody = document.querySelector('body')
            getBody.style.overflowY = isSelected ? 'hidden' : 'auto'
        }

        handleOverflow()

        window.addEventListener('scroll', handleOverflow)
        return () => window.removeEventListener('scroll', handleOverflow)
    }, [isSelected])

    useEffect(() => {
        //get all beneficiaries
        getBeneficiaries()
    }, [])

    useEffect(() => {
        //return delete to default after closing component
        const handleClickedState = () => {
            setIsDelete(isSelected && false)
        }
        handleClickedState()

    }, [isSelected])

    //get all beneficiaries
    const getBeneficiaries = async () => {
        let beneficiaries = await getAllBen();
        beneficiaries = beneficiaries.sort((a, b) => a.recipientFullName.localeCompare(b.recipientFullName));
        setBeneficiary(beneficiaries);
    }

    //get value of the seached beneficairy
    const handleSearch = (value) => {
        console.log(value)
        // const search = allBeneficiaries.includes();

    }

    //delete  beneficiary
    const deleteRecipient = async (id) => {
        await deleteBeneficiary(id)
        getBeneficiaries()
    }



    return (
        <div className={`tracking-light fixed min-h-screen overflow-y-hidden md:overflow-y-auto flex justify-center bg-[#004a36]/90 items-center z-50 left-0 top-0 w-full ${isSelected ? 'block' : 'hidden'}`}>
            <div className='w-full md:w-6/12 h-screen md:h-[600px] flex flex-col gap-y-5 p-5 bg-white overflow-y-auto relative'>
                <button onClick={onClick}><XMarkIcon className='size-6 text-theme absolute right-3 top-3' /></button>
                <div className='flex justify-between items-center mt-5 mb-3'>
                    <p className='text-2xl font-semibold'>Your recipients</p>
                    <button onClick={() => setIsDelete(!isDeleteClicked)} aria-label='delete recipient' className={`px-5 py-3 ${isDeleteClicked ? 'hidden' : 'inline-block'} text-theme bg-gray-200/70 hover:underline hover:bg-gray-200/90 transition-colors duration-200 ease-in-out`}>Delete recipient</button>
                </div>
                <div className='relative flex items-center'>
                    <input
                        type='text'
                        onChange={(e) => handleSearch(e.target.value)}
                        className='w-full inline-block h-full border-black/70 border pl-10 py-3 placeholder:text-lg placeholder:font-light' placeholder='Search recipient' />
                    <MagnifyingGlassIcon className='size-6 text-theme absolute top-auto mx-2' />
                </div>
                <div className='h-auto'>
                    {allBeneficiaries?.length > 0 ?
                        <ul>
                            {allBeneficiaries.map((ben, index) => (
                                <li key={index}
                                    onClick={() => !isDeleteClicked ? clickRecipient(ben._id) : deleteRecipient(ben._id)}
                                    className='cursor-pointer border-b py-3 w-full border-b-gray-500 flex items-center justify-between gap-x-10' tabIndex='0'>
                                    <div className='w-5/12 text-theme font-medium text-lg'>{ben.recipientFullName}</div>
                                    <div className='flex gap-x-7 justify-between w-3/12 font-light text-sm'>
                                        <div>{ben.recipientSortCode}</div>
                                        <div>{ben.recipientAccountNumber}</div>
                                    </div>
                                    <div className='w-2/12'>{ben?.recipientRefernce}</div>
                                    <div className='w-2/12 flex justify-end'>
                                        <div className={`w-fit text-theme items-center flex justify-center}`}>
                                            {!isDeleteClicked ?
                                                <button className='inline-block'><ChevronRightIcon className='size-6' /></button>
                                                :
                                                <button

                                                    className={`text-theme size-6 block`}
                                                ><XMarkIcon className='size-6' />
                                                </button>}
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                        :
                        <div>
                            <button
                                onClick={newPay}
                                className='border hover:underline px-5 py-2 flex font-semibold text-theme border-theme w-full md:w-fit justify-center items-center gap-x-3'>
                                <span>Pay someone new</span> <TiPlus className='w-5 h-5' />
                            </button>
                        </div>
                    }
                </div >
            </div >
        </div >
    )
})

export default SelectPayee
