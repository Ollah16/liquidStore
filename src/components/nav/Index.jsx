import React, { useEffect, useRef, useState } from 'react'
import NavSm from './NavSm'
import NavLg from './NavLg'
import { useDispatch } from 'react-redux'
import { toggleLoginBox, toggleSearch } from '../../reduxtoolkit/navslice'

const NavIndex = () => {

    const navRef = useRef()
    const dispatch = useDispatch()
    const [prevScroll, setPrevScroll] = useState(window.pageYOffset)

    useEffect(() => {
        const handleNavEffect = () => {
            const currentScroll = window.pageYOffset;
            const isScrollingDown = prevScroll < currentScroll;

            dispatch(toggleLoginBox(false));
            dispatch(toggleSearch(false));

            if (navRef.current) {
                navRef.current.style.top = isScrollingDown ? '-500px' : '0px';
            }

            setPrevScroll(currentScroll);
        };

        window.addEventListener('scroll', handleNavEffect);
        return () => window.removeEventListener('scroll', handleNavEffect);
    }, [prevScroll, dispatch]);


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
