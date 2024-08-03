import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import AccountProductServices from './Account/AccountProductServices'
import ContactUs from '../StatementComponent/ContactUs'
import { ChevronDownIcon } from '@heroicons/react/24/outline'

const ExpandNav = () => {
    const { isExpanded } = useSelector(state => state.nav)

    useEffect(() => {
        const body = document.querySelector('body')
        body.style.overflowY = isExpanded ? 'hidden' : 'auto'
    }, [isExpanded])

    const productClass = `after:w-full after:h-[1px]`
    const contactClass = `justify-between items-center after:content-[''] after:bg-theme_light after:w-full after:h-[.5px] after:left-0 after:absolute after:bottom-0 relative`

    return (
        <nav className={`${isExpanded ? 'translate-x-0' : 'translate-x-full'} right-0 md:hidden w-full bg-theme top-[94px] min-h-screen z-50 h-full transition-all ease-in-out duration-300 fixed bottom-0 my-0`}>
            <div className={`before:h-[.5px] before:w-full before:absolute after:h-[150px] after:content-[''] after:block after:w-full after:relative before:top-0 before:bg-theme_light overflow-y-auto max-h-screen`}>
                <AccountProductServices productClass={productClass} />
                <ContactUs contactClass={contactClass} icon={ChevronDownIcon} />
            </div>
        </nav>
    )
}

export default ExpandNav
