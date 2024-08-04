import React, { useEffect } from 'react'
import AccountDesktop from '../../components/AccountComponent/Account/AccountDesktop'
import AccountMobile from '../../components/AccountComponent/Account/AccountMobile'
import Layout from './Layout';

const AccountPage = () => {

    return (
        <Layout>
            <AccountDesktop />
            <AccountMobile />
        </Layout>
    )
}

export default AccountPage
