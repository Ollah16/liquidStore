import React, { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import LoginAuth from '../pages/LoginAuth'
import { useDispatch, useSelector } from 'react-redux'
import { resetNav } from '../reduxtoolkit/navslice'

const AppRoutes = () => {

    const { pathname } = useLocation()
    const dispatch = useDispatch()
    const { isMenu, isLoginDropDown } = useSelector(state => state.nav)


    useEffect(() => {

        const monitorRoutes = () => {
            dispatch(resetNav())
        }

        monitorRoutes()

    }, [pathname, dispatch])

    useEffect(() => {
        const handleOverflow = () => {
            const getRef = document.querySelector('body')
            if (isMenu || (isLoginDropDown && window.innerWidth < 640)) {
                getRef.style.overflowY = 'hidden'
            } else {
                getRef.style.overflowY = 'auto'
            }
        }

        handleOverflow()

        window.addEventListener('scroll', handleOverflow)
        return () => window.removeEventListener('scroll', handleOverflow)

    }, [isMenu, isLoginDropDown])


    return (
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/login' element={<LoginAuth />} />
        </Routes>
    )
}

export default AppRoutes
