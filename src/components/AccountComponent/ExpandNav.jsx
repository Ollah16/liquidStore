import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import AccountProductServices from './Account/AccountProductServices'

const ExpandNav = () => {
    const { isExpanded } = useSelector(state => state.nav)

    useEffect(() => {
        const body = document.querySelector('body')
        body.style.overflowY = isExpanded ? 'hidden' : 'auto'
    }, [isExpanded])

    const productClass = `after:w-full after:h-[.5px]`

    return (
        <nav className={`${isExpanded ? 'right-0' : 'right-[-1000px]'} md:hidden w-full bg-theme top-[94px] z-50 h-full transition-all ease-in-out duration-300 absolute bottom-0 my-0`}>
            <div className={`before:h-[.5px] before:w-full before:absolute before:top-0 before:bg-theme_light`}>
                <AccountProductServices productClass={productClass} />
            </div>
        </nav>
    )
}

export default ExpandNav
