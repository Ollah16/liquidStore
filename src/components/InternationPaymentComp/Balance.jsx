import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAccountInformation, handle_Login_Signout } from '../../reduxtoolkit/authslice'
import { getAccountInfo } from '../../util/api'

const Balance = () => {

    const { accountType, accountNumber, sortCode, balance } = useSelector(state => state.auth)

    const dispatch = useDispatch()

    useEffect(() => {

        const getInfo = async () => {
            try {
                const accountInfo = await getAccountInfo()
                dispatch(getAccountInformation(accountInfo))
            }
            catch (err) {
                console.error(err)
                dispatch(handle_Login_Signout(false))
            }
        }

        getInfo()
    }, [dispatch])

    return (
        <div>
            <div className='bg-gray-100 p-5 flex flex-col'>
                <div className='font-semibold text-semibold text-theme text-lg  mb-[1px]'>{accountType}</div>
                <div className='text-sm font-light text-black/80 mb-[1px]'><span>{sortCode}</span> <span>|</span> <span>{accountNumber}</span></div>
                <div className='font-semibold text-lg'>£{balance.toLocaleString()}</div>
            </div>
        </div>
    )
}

export default Balance
