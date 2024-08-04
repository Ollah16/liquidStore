import { ChevronRightIcon } from '@heroicons/react/24/outline'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAccountInformation } from '../../../reduxtoolkit/authslice'
import { getAccountInfo } from '../../../util/api'

const Accounts = ({ className }) => {

    const { currentClick } = useSelector(state => state.nav)
    const isVisible = /accounts/i.test(currentClick)
    const { balance, accountNumber, accountType, sortCode } = useSelector(state => state.auth)

    const dispatch = useDispatch()

    useEffect(() => {
        const getInfo = async () => {
            try {
                const accountInfo = await getAccountInfo()
                dispatch(getAccountInformation(accountInfo))
            } catch (err) {
                console.error(err)
            }
        }

        getInfo()
    }, [dispatch])


    return (
        <div className={`overflow-hidden ${className} bg-gray-200 ${isVisible ? 'max-h-[800px]' : 'max-h-0'} transition-all ease-in-out duration-300`}>

            <div className={`z-10 py-12 transition-top duration-300 ease-in-out w-full`}>
                <div className='md:w-10/12 w-full px-5 md:px-0 mx-auto'>
                    <div className={`bg-white before:content-[''] before:bg-theme before:inline-block before:w-full before:h-1 before:absolute before:top-0 py-5 w-full md:w-4/12 relative flex items-center`}>
                        <div className='p-3'>
                            <div className='mb-1 flex gap-x-2'>
                                <div className='mb-1 flex gap-x-2'>
                                    <span className='text-theme text-base tracking-tight'>{accountType.toUpperCase()}</span>
                                    <span className='text-base font-light text-black/80'>{sortCode}</span>
                                    <span className='text-base font-light text-black/80'>{accountNumber}</span>
                                </div>
                            </div>
                            <span className='text-3xl font-normal tracking-tight'>£ {balance.toLocaleString()}</span>
                        </div>
                        <ChevronRightIcon className={`size-10 absolute right-1 text-gray-500`} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Accounts
