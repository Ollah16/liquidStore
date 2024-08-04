import React from 'react'
import { handle_Login_Signout } from '../../../reduxtoolkit/authslice'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'

const LogOff = ({ className }) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleLogOff = () => {
        dispatch(handle_Login_Signout(false))
        navigate('/login')
    }

    return (
        <button
            onClick={() => handleLogOff()}
            className={`md:border-r ${className} border-r-0 px-2 py-3 border-gray-500/20 w-fit hover:bg-gray-100 hover:text-theme_light cursor-pointer transition-colors duration-200 ease-in-out`}>Log off</button>
    )
}

export default LogOff
