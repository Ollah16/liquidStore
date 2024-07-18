import React, { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import LoginAuth from '../pages/LoginAuth'
import { useDispatch, useSelector } from 'react-redux'
import { resetNav } from '../reduxtoolkit/navslice'
import ProtectedRoutes from './ProtectedRoutes'
import { useAuthentication } from '../util/authentication'
import OneTimeP from '../pages/OTP'



const AppRoutes = () => {
    const isAuthenticated = useAuthentication()
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
            const repIsLogin = isLoginDropDown && window.innerWidth < 640
            if (isMenu || repIsLogin) {
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
            <Route element={<ProtectedRoutes isAuthenticated={isAuthenticated} />}>
                <Route path='/onetimepassword' element={<OneTimeP />} />
            </Route>
        </Routes >
    )
}

export default AppRoutes
