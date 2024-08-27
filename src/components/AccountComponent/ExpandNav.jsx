import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import AccountProductServices from './Account/AccountProductServices'
import ContactUs from '../StatementComponent/ContactUs'
import { ChevronDownIcon } from '@heroicons/react/24/outline'
import MobileSetting from './Nav/MobileSetting'
import { Link } from 'react-router-dom'

const ExpandNav = () => {
    const { isExpanded } = useSelector(state => state.nav)

    useEffect(() => {
        const body = document.querySelector('body')
        body.style.overflowY = isExpanded ? 'hidden' : 'auto'
    }, [isExpanded])

    const productClass = `after:w-full after:h-[.5px] hover:bg-white/5 transition-colors ease-in-out duration-200`
    const contactClass = `justify-between hover:bg-white/5 transition-colors ease-in-out duration-200 items-center after:content-[''] after:bg-theme_light after:w-full after:h-[.5px] after:left-0 after:absolute after:bottom-0 relative`

    return (
        <nav className={`${isExpanded ? 'translate-x-0' : 'translate-x-[100%]'} right-0 md:hidden w-full bg-theme top-[94px] min-h-screen z-50 h-full transition-all ease-in-out duration-300 fixed bottom-0 my-0`}>
            <div className={`before:h-[1px] before:w-full before:absolute after:h-[150px] after:content-[''] after:block after:w-full after:relative before:top-0 before:bg-theme_light overflow-y-auto max-h-screen`}>
                <MobileSetting />
                <AccountProductServices productClass={productClass} />
                <ContactUs contactClass={contactClass} icon={ChevronDownIcon} />

                <div className={`text-white font-semibold uppercase px-5 py-5 relative w-full hover:bg-white/5 transition-colors ease-in-out duration-200`}>
                    <Link className='w-full inline-block ' to={'/security'}>Security</Link>
                </div>
            </div>
        </nav >
    )
}

export default ExpandNav
