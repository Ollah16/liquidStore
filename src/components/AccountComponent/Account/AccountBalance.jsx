import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAccountInfo } from '../../../util/api'
import { getAccountInformation } from '../../../reduxtoolkit/authslice'

const AccountBalance = ({ path_Name }) => {

    const { balance, accountNumber, accountType, sortCode } = useSelector(state => state.auth)
    const dispatch = useDispatch()

    useEffect(() => {
        const getInfo = async () => {
            const accountInfo = await getAccountInfo()
            dispatch(getAccountInformation(accountInfo))
        }
        getInfo()

    }, [dispatch])

    return (
        <div className={`relative overflow-hidden before:content-[''] before:absolute before:left-0 before:right-0 before:bottom-0 before:bg-gray-500/30 before:w-full before:h-[.5px] ${path_Name ? "before:inline-block" : "before:hidden"} after:content-[''] after:bg-gray-500/30 h-[50%] after:md:inline-block after:hidden after:w-full after:h-[.5px] w-9/12 p-5`}>
            < div className='pb-3' >
                <div className='mb-1 flex gap-x-2'>
                    <span className='text-theme text-base tracking-tight'>{accountType.toUpperCase()}</span>
                    <span className='text-base font-light text-black/90'>{sortCode}</span>
                    <span className='text-base font-light text-black/90'>{accountNumber}</span>
                </div>
                <span className='text-3xl font-normal flex items-baseline leading-normal gap-x-2'>
                    <p>£ {balance.toLocaleString()}</p> {path_Name && <p className='font-light text-base'>Balance after pending</p>}
                </span>
            </div >
        </div >
    )
}

export default AccountBalance