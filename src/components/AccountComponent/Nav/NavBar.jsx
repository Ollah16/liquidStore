import React, { useState } from 'react'
import Accounts from '../Account/Accounts'
import Profile from './Profile'
import NavExpand from './SubNav'
import NavBrand from './NavBrand'
import { useNavigate } from 'react-router-dom'

const NavBar = () => {
    const [currentClick, setCurrentClick] = useState()
    const navigate = useNavigate()

    const handleCurrentClick = (value) => {
        const isExist = value === currentClick
        const isSecurity = value.includes('Security')
        const newClick = isExist ? '' : value
        setCurrentClick(newClick)
        if (isSecurity) return navigate('/security')
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
