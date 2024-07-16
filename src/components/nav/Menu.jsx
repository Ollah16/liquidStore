import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import MenuSubContent from './MenuSubContent'
import MenuContent from './MenuContent'

const Menu = () => {

    const { isMenu } = useSelector(state => state.nav)

    useEffect(() => {
        const handleOverflow = () => {
            const getRef = document.querySelector('body')
            if (isMenu) {
                getRef.style.overflowY = 'hidden'
            } else {
                getRef.style.overflowY = 'auto'
            }
        }

        handleOverflow()
    }, [isMenu])

    return (
        <div className={`overflow-x-hidden overflow-y-auto ${isMenu ? 'md:top-[142px] top-[118px]' : 'top-[-5000px]'} pl-5 transition-top ease-in-out duration-200 fixed left-0 w-full md:h-[calc(100vh-142px)] h-[calc(100vh-118px)] pt-5 bg-[#f1f1f1] flex z-30`}>
            <MenuContent />

            <MenuSubContent />
        </div >
    )
}

export default Menu
