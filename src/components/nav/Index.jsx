import React, { useEffect, useRef, useState } from 'react'
import NavSm from './NavSm'
import NavLg from './NavLg'
import { useDispatch, useSelector } from 'react-redux'
import { toggleLoginBox, toggleSearch } from '../../reduxtoolkit/navslice'

const NavIndex = () => {

    const navRef = useRef()
    const dispatch = useDispatch()
    const { isMenu, isSearch } = useSelector(state => state.nav)
    const [prevScroll, setPrevScroll] = useState(window.pageYOffset)

    useEffect(() => {
        const handleNavEffect = () => {
            const currentScroll = window.pageYOffset;
            const isScrollingDown = (prevScroll) < currentScroll;

            if (isMenu || isSearch) {
                dispatch(toggleLoginBox(false));
                dispatch(toggleSearch(false));
            }

            if (navRef.current) {
                navRef.current.style.top = isScrollingDown ? '-300px' : '0px';
            }

            setPrevScroll(currentScroll);
        };

        window.addEventListener('scroll', handleNavEffect);
        return () => window.removeEventListener('scroll', handleNavEffect);
    }, [prevScroll, dispatch, isMenu, isSearch]);


    return (
        <nav ref={navRef} className='z-50 fixed w-full transition-top duration-500 ease-in-out'>
            <div className='relative'>
                <NavLg />
                <NavSm />
            </div>
        </nav>

    )
}

export default NavIndex
