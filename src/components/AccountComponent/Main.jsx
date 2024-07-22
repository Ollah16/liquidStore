import React from 'react'
import BalanceComp from './Account/BalanceComp'
import AccountProductServices from './Account/AccountProductServices'

const Main = () => {
    return (
        <main className='w-full relative z-30'>
            <div className='w-full px-5 lg:px-0 lg:w-10/12 mx-auto'>
                <div className='md:py-5 pb-5 flex flex-col-reverse md:flex-row justify-between gap-y-10 gap-x-10 mx-auto'>
                    <div className='w-3/12'>
                        <AccountProductServices />
                    </div>
                    <div className='w-9/12'>
                        <BalanceComp />
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Main
