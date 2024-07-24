import React from 'react'
import HelpAndSupport from '../../components/InternationPaymentComp/HelpAndSupport'
import NavIndex from '../../components/LoginAuthComponents/nav/NavIndex'
import Footer from '../../components/InternationPaymentComp/Footer'
import SelectCountry from '../../components/InternationPaymentComp/SelectCountry'

const Layout = ({ children }) => {

    return (
        <div className='bg-gray-100 tracking-tight min-h-screen'>
            <NavIndex />
            <main className='md:w-10/12 lg:w-8/12 w-full mx-auto py-10 flex gap-x-5'>
                {children}
                <HelpAndSupport />
            </main>
            <SelectCountry />
            <Footer />
        </div>
    )
}

export default Layout
