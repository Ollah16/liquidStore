import React from 'react'
import HelpSupport from '../Help&Support'
import LoginForm from './LoginForm'
import FormFeatures from './FormFeatures'
import WelcomeComp from '../WelcomeComp'

const FormIndex = () => {

    return (<div className='w-full flex justify-center py-10'>
        <div className='w-8/12 flex gap-x-5'>
            <div className='w-9/12'>
                <WelcomeComp />
                <LoginForm />
                <FormFeatures />
            </div>
            <div className='w-3/12'>
                <HelpSupport />
            </div>
        </div >
    </div >
    )
}

export default FormIndex
