import React, { useState } from 'react'
import Accounts from '../Account/Accounts'
import Profile from '../Profile'
import NavExpand from './SubNav'
import NavBrand from './NavBrand'

const NavBar = () => {
    const [currentClick, setCurrentClick] = useState()

    const handleCurrentClick = (value) => {
        const isExist = value === currentClick
        const newClick = isExist ? '' : value
        setCurrentClick(newClick)
    }

    return (
        <div>
            <NavBrand />
            <NavExpand currentClick={currentClick} handleCurrentClick={handleCurrentClick} />
            <Accounts currentClick={currentClick} />
            <Profile currentClick={currentClick} />
        </div >
    )
}

export default NavBar
