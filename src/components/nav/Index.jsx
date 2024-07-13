import React, { useEffect, useRef, useState } from 'react'
import NavSm from './NavSm'
import NavLg from './NavLg'
import { useDispatch } from 'react-redux'
import { toggleLoginBox, toggleSearch } from '../../reduxtoolkit/navslice'

const NavIndex = () => {

    const navRef = useRef()
    const dispatch = useDispatch()
    const [prevScroll, setPrevScroll] = useState(window.pageYOffset)
    const [currentInnerWidth, setInnerWidth] = useState(0)

    useEffect(() => {
        const refNav = navRef.current
        const mdAbove = currentInnerWidth > 768
        const handleNavEffect = () => {
            let currentScroll = window.pageYOffset
            const isPrevLess = prevScroll < currentScroll
            dispatch(toggleLoginBox(false))
            dispatch(toggleSearch(false))
            refNav.style.top = isPrevLess ? mdAbove ? `-142px` : `-118px` : '0px'
            setPrevScroll(currentScroll)
        }

        window.addEventListener('scroll', handleNavEffect)
        return () => window.removeEventListener('scroll', handleNavEffect)

    }, [prevScroll])

    useEffect(() => {

        const handleInnerWidth = () => {
            setInnerWidth(window.innerWidth)
        }

        window.addEventListener('resize', handleInnerWidth)

        return () => window.removeEventListener('resize', handleInnerWidth)

    }, [])


    return (
        <nav ref={navRef} className='z-50 fixed w-full transition-top duration-300 ease-in-out'>
            <div className='relative'>
                <NavLg />
                <NavSm />
            </div>
        </nav>

    )
}

export default NavIndex
