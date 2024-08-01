import React, { useEffect } from 'react'
import Layout from './Layout'
import BalanceComp from '../../components/AccountComponent/Account/BalanceComp'
import { Link } from 'react-router-dom'
import { ChevronLeftIcon } from '@heroicons/react/24/outline'
import FullStatement from '../../components/StatementComponent/FullStatement'
import ContactUs from '../../components/StatementComponent/ContactUs'
import AccountProductServices from '../../components/AccountComponent/Account/AccountProductServices'
import { useDispatch } from 'react-redux'
import { getAccountInfo } from '../../util/api'
import { getAccountInformation } from '../../reduxtoolkit/authslice'

const StatementPage = () => {
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
        <Layout>
            <main className='w-full'>
                <div className='flex items-stretch relative z-30 w-10/12 mx-auto gap-x-5 py-5'>
                    <div className='w-9/12 py-10'>
                        <div className='w-full -my-3'>
                            <Link to={'/accounts'} className='flex w-fit justify-between hover:text-theme_light transition-colors ease-in-out duration-200 items-center text-sm leading-tight font-medium text-theme text-center'><ChevronLeftIcon className='size-5' /> <span>Your Accounts</span></Link>
                        </div>
                        <BalanceComp />
                        <FullStatement />
                    </div>
                    <div className='w-3/12 flex flex-col gap-y-5'>
                        <ContactUs />
                        <AccountProductServices />
                    </div>
                </div>
            </main>
        </Layout>
    )
}

export default StatementPage
