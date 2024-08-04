import React from 'react'
import Accounts from '../Account/Accounts'
import Profile from './Profile'
import NavExpand from './SubNav'
import NavBrand from './NavBrand'

const NavBar = () => {

    return (
        <div>
            <NavBrand />
            <NavExpand />
            <Accounts className={`hidden md:block`} />
            <Profile className={`hidden md:block`} />
        </div >
    )
}

export default NavBar
