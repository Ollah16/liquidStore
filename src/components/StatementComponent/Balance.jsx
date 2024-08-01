import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAccountInformation } from '../../reduxtoolkit/authslice'
import { getAccountInfo } from '../../util/api'

const Balance = () => {

    const { balance, sortCode, accountType, accountNumber } = useSelector(state => state.auth)
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
        <div className='bg-gray-100 p-5'>
            <p className='mb-3 flex gap-x-3 items-baseline leading-none'><span className='font-semibold text-lg tracking-tight inline-block lg:w-1/12'>{accountType}</span><span>{sortCode}</span> <span>{accountNumber}</span></p>
            <p className='flex items-baseline gap-x-3'><span className='font-semibold text-lg tracking-tight flex items-center'>£{balance.toLocaleString()}</span><span className='font-light text-sm pl-5'>Balance after pending</span> </p>
        </div>
    )
}

export default Balance
