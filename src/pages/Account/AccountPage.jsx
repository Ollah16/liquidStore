import React, { useEffect } from 'react'
import AccountDesktop from '../../components/AccountComponent/Account/AccountDesktop'
import AccountMobile from '../../components/AccountComponent/Account/AccountMobile'
import Layout from './Layout';
import { getAccountInfo } from '../../util/api';
import { getAccountInformation, handle_Login_Signout } from '../../reduxtoolkit/authslice';
import { useDispatch } from 'react-redux';


const AccountPage = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        const getInfo = async () => {
            try {
                const accountInfo = await getAccountInfo()
                dispatch(getAccountInformation(accountInfo))
            } catch (err) {
                console.error(err)
                dispatch(handle_Login_Signout(false))
            }
        }

        getInfo()
    }, [dispatch])

    return (
        <Layout>
            <AccountDesktop />
            <AccountMobile />
        </Layout>
    )
}

export default AccountPage
