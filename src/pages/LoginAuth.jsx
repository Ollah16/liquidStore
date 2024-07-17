import React from 'react'
import NavIndex from '../components/LoginAuthComponents/nav/NavIndex'
import FormIndex from '../components/LoginAuthComponents/form/FormIndex'
import FooterIndex from '../components/LoginAuthComponents/footer/FooterIndex'

const LoginAuth = () => {
    return (
        <div className='min-h-screen'>
            <NavIndex />
            <FormIndex />
            <FooterIndex />
        </div>
    )
}

export default LoginAuth
