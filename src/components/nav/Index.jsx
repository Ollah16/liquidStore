import React from 'react'
import NavSm from './NavSm'
import NavLg from './NavLg'
const NavIndex = () => {

    return (
        <nav className='z-50 fixed w-full'>
            <div className='relative'>
                <NavLg />
                <NavSm />
            </div>
        </nav>

    )
}

export default NavIndex
