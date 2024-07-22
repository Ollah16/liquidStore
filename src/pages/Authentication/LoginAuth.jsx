import React from 'react'
import FormIndex from '../../components/LoginAuthComponents/form/FormIndex'
import FooterIndex from '../../components/LoginAuthComponents/footer/FooterIndex'
import Layout from './Layout';

const LoginAuth = () => {

    return (
        <Layout>
            <FormIndex />
            <FooterIndex />
        </Layout>
    )
}

export default LoginAuth
