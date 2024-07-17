import React from 'react'
import HelpSupport from '../Help&Support'
import LoginForm from './LoginForm'
import FormFeatures from './FormFeatures'
import WelcomeComp from '../WelcomeComp'

const FormIndex = () => {

    return (<div className='w-full flex justify-center py-10 px-5 md:px-0'>
        <div className='w-full md:w-8/12 flex flex-col md:flex-row gap-x-5 gap-y-10'>
            <div className='w-full md:w-9/12'>
                <WelcomeComp />
                <LoginForm />
                <FormFeatures />
            </div>
            <div className='w-full md:w-3/12'>
                <HelpSupport />
            </div>
        </div >
    </div >
    )
}

export default FormIndex
