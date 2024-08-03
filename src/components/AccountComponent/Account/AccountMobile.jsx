import React from 'react'
import BalanceComp from './BalanceComp'
import ExpandNav from '../ExpandNav'

const AccountMobile = () => {
    return (
        <div className='md:hidden block py-10'>
            <div className='px-5'>
                <BalanceComp />
            </div>
            <ExpandNav />
        </div>
    )
}

export default AccountMobile
