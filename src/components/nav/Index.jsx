import React, { useEffect, useRef, useState } from 'react'
import NavSm from './NavSm'
import NavLg from './NavLg'
import { useDispatch, useSelector } from 'react-redux'
import { toggleLoginBox, toggleSearch } from '../../reduxtoolkit/navslice'

const NavIndex = () => {

    const navRef = useRef()
    const dispatch = useDispatch()
    const { isMenu, isSearch } = useSelector(state => state.nav)
    const [prevScroll, setPrevScroll] = useState(0)

    useEffect(() => {
        const handleNavEffect = () => {
            const currentScroll = window.pageYOffset;
            const isScrollingDown = prevScroll < currentScroll;
            const isScrollingUp = prevScroll > currentScroll;

            if (isMenu || isSearch) {
                dispatch(toggleLoginBox(false));
                dispatch(toggleSearch(false));
            }

            if (navRef.current) {
                if (currentScroll > 200 && isScrollingDown) {
                    navRef.current.style.top = '-300px';
                } else if (prevScroll > 200 && isScrollingUp) {
                    navRef.current.style.top = '0px';
                }
            }

            setPrevScroll(currentScroll);
        };

        const onScroll = () => {
            handleNavEffect();
        };

        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, [prevScroll, dispatch, isMenu, isSearch]);


    return (
        <nav ref={navRef} className='z-50 fixed w-full transition-top duration-1000 ease-in-out'>
            <div className='relative'>
                <NavLg />
                <NavSm />
            </div>
        </nav>

    )
}

export default NavIndex
