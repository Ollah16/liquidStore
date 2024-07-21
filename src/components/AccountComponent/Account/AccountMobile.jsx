import React from 'react'
import BalanceComp from './BalanceComp'

const AccountMobile = () => {
    return (
        <div className='md:hidden block space-y-5'>
            <div className='px-5'>
                <BalanceComp />
            </div>
        </div>
    )
}

export default AccountMobile
